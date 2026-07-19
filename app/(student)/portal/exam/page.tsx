import { redirect } from "next/navigation";
import { getStudentSession } from "@/lib/auth/session";
import { getOrCreateAttempt } from "./exam-service";
import { ExamClient } from "./exam-client";

export const dynamic = "force-dynamic";

export default async function ExamPage() {
  const session = await getStudentSession();
  if (!session.isLoggedIn || !session.studentId) {
    redirect("/portal/login");
  }

  const attempt = await getOrCreateAttempt(session.studentId);
  if (attempt.status === "completed") {
    redirect("/portal/resultado");
  }

  return (
    <div className="w-full max-w-2xl">
      <ExamClient attemptId={attempt.attemptId} questions={attempt.questions} />
    </div>
  );
}
