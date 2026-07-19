"use server";

import "server-only";
import { z } from "zod";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { examAttempts, examAnswers } from "@/lib/db/schema";
import { getStudentSession } from "@/lib/auth/session";
import {
  getQuestionById,
  isAnswerCorrect,
  OFFICIAL_EXAM_PASSING_SCORE,
  type QuestionPlacement,
} from "@/lib/exam-questions.server";

const submitSchema = z.object({
  attemptId: z.string().uuid(),
  answers: z.array(z.number().int().min(0)),
});

export async function submitExamAttempt(
  attemptId: string,
  answers: number[]
): Promise<{ error: string } | void> {
  const session = await getStudentSession();
  if (!session.isLoggedIn || !session.studentId) {
    return { error: "Sesión expirada. Vuelve a iniciar sesión." };
  }

  const parsed = submitSchema.safeParse({ attemptId, answers });
  if (!parsed.success) {
    return { error: "Respuestas inválidas." };
  }

  const [attempt] = await db
    .select()
    .from(examAttempts)
    .where(eq(examAttempts.id, attemptId))
    .limit(1);

  if (!attempt || attempt.studentId !== session.studentId) {
    return { error: "Intento no encontrado." };
  }
  if (attempt.status === "completed") {
    redirect("/portal/resultado");
  }

  // Never trust the client's claimed order — regrade against what was
  // actually stored when the attempt started.
  const order = attempt.questionOrder as QuestionPlacement[];
  if (parsed.data.answers.length !== order.length) {
    return { error: "Número de respuestas inválido." };
  }

  let score = 0;
  const answerRows = order.map((placement, i) => {
    const item = getQuestionById(placement.questionId)!;
    const selectedDisplayIndex = parsed.data.answers[i];
    const correct = isAnswerCorrect(
      item,
      placement.optionOrder,
      selectedDisplayIndex
    );
    if (correct) score++;
    return {
      attemptId,
      questionId: placement.questionId,
      selectedIndex: selectedDisplayIndex,
      isCorrect: correct,
    };
  });

  await db.insert(examAnswers).values(answerRows);

  const passed = score >= OFFICIAL_EXAM_PASSING_SCORE;
  await db
    .update(examAttempts)
    .set({
      status: "completed",
      completedAt: new Date(),
      score,
      totalQuestions: order.length,
      passed,
    })
    .where(eq(examAttempts.id, attemptId));

  redirect("/portal/resultado");
}
