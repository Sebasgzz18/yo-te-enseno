import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { CheckCircle2, XCircle } from "lucide-react";
import { db } from "@/lib/db";
import { examAttempts } from "@/lib/db/schema";
import { getStudentSession } from "@/lib/auth/session";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ResultadoPage() {
  const session = await getStudentSession();
  if (!session.isLoggedIn || !session.studentId) {
    redirect("/portal/login");
  }

  const [attempt] = await db
    .select()
    .from(examAttempts)
    .where(eq(examAttempts.studentId, session.studentId))
    .limit(1);

  if (!attempt || attempt.status !== "completed") {
    redirect("/portal/exam");
  }

  const passed = attempt.passed;

  return (
    <div className="surface-card w-full max-w-md rounded-3xl p-8 text-center">
      <span
        className={cn(
          "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-card",
          passed
            ? "bg-gradient-to-br from-lime-400 to-lime-600"
            : "bg-gradient-to-br from-orange-400 to-orange-600"
        )}
      >
        {passed ? (
          <CheckCircle2 className="h-8 w-8 text-navy-900" strokeWidth={1.8} />
        ) : (
          <XCircle className="h-8 w-8 text-white" strokeWidth={1.8} />
        )}
      </span>

      <p className="mt-6 font-display text-4xl font-bold text-navy-900">
        {attempt.score}/{attempt.totalQuestions}
      </p>
      <p className="mt-2 font-display text-xl font-semibold text-navy-900">
        {passed ? "¡Aprobaste tu examen!" : "No aprobaste esta vez"}
      </p>
      <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink-500">
        {passed
          ? "Felicidades. Tu instructor tiene el registro de este resultado."
          : "Platica con tu instructor sobre los siguientes pasos para volver a presentar."}
      </p>
    </div>
  );
}
