import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { examAttempts } from "@/lib/db/schema";
import {
  buildAttemptQuestionOrder,
  getQuestionById,
  toPublicQuestion,
  type PublicQuizItem,
  type QuestionPlacement,
} from "@/lib/exam-questions.server";

export interface AttemptForClient {
  attemptId: string;
  status: "in_progress" | "completed";
  questions: PublicQuizItem[];
}

/**
 * Returns the student's current attempt, creating one if none exists yet.
 * Reuses the SAME stored question/option order on refresh instead of
 * re-shuffling, so a page reload mid-exam doesn't change the questions.
 */
export async function getOrCreateAttempt(
  studentId: string
): Promise<AttemptForClient> {
  const [existing] = await db
    .select()
    .from(examAttempts)
    .where(eq(examAttempts.studentId, studentId))
    .limit(1);

  if (existing) {
    const order = existing.questionOrder as QuestionPlacement[];
    const questions = order
      .map((placement) => {
        const item = getQuestionById(placement.questionId);
        return item ? toPublicQuestion(item, placement.optionOrder) : null;
      })
      .filter((q): q is PublicQuizItem => q !== null);

    return {
      attemptId: existing.id,
      status: existing.status as "in_progress" | "completed",
      questions,
    };
  }

  const order = buildAttemptQuestionOrder();
  const [created] = await db
    .insert(examAttempts)
    .values({
      studentId,
      status: "in_progress",
      questionOrder: order,
      totalQuestions: order.length,
    })
    .returning();

  const questions = order.map((placement) => {
    const item = getQuestionById(placement.questionId)!;
    return toPublicQuestion(item, placement.optionOrder);
  });

  return { attemptId: created.id, status: "in_progress", questions };
}
