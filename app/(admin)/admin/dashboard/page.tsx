import { desc, eq } from "drizzle-orm";
import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { db } from "@/lib/db";
import { examAttempts, students } from "@/lib/db/schema";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

function formatDate(date: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminDashboardPage() {
  const rows = await db
    .select({
      attemptId: examAttempts.id,
      status: examAttempts.status,
      score: examAttempts.score,
      totalQuestions: examAttempts.totalQuestions,
      passed: examAttempts.passed,
      startedAt: examAttempts.startedAt,
      completedAt: examAttempts.completedAt,
      studentName: students.fullName,
      studentUsername: students.username,
    })
    .from(examAttempts)
    .innerJoin(students, eq(examAttempts.studentId, students.id))
    .orderBy(desc(examAttempts.startedAt));

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-900">
        Resultados de examen
      </h1>
      <p className="mt-1 text-sm text-ink-500">
        {rows.length} {rows.length === 1 ? "intento registrado" : "intentos registrados"}
      </p>

      <div className="surface-card mt-6 overflow-hidden rounded-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-100/60 text-xs font-semibold uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-5 py-3">Alumno</th>
              <th className="px-5 py-3">Usuario</th>
              <th className="px-5 py-3">Iniciado</th>
              <th className="px-5 py-3">Terminado</th>
              <th className="px-5 py-3">Resultado</th>
              <th className="px-5 py-3">Estatus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {rows.map((row) => (
              <tr key={row.attemptId}>
                <td className="px-5 py-3 font-medium text-navy-900">
                  {row.studentName}
                </td>
                <td className="px-5 py-3 text-ink-500">{row.studentUsername}</td>
                <td className="px-5 py-3 text-ink-500">
                  {formatDate(row.startedAt)}
                </td>
                <td className="px-5 py-3 text-ink-500">
                  {formatDate(row.completedAt)}
                </td>
                <td className="px-5 py-3 font-semibold text-navy-900">
                  {row.status === "completed"
                    ? `${row.score}/${row.totalQuestions}`
                    : "—"}
                </td>
                <td className="px-5 py-3">
                  {row.status !== "completed" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-500">
                      <Clock className="h-3.5 w-3.5" /> En curso
                    </span>
                  ) : row.passed ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/15 px-2.5 py-1 text-xs font-semibold text-navy-900">
                      <CheckCircle2 className="h-3.5 w-3.5 text-lime-600" /> Aprobado
                    </span>
                  ) : (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs font-semibold text-orange-600"
                      )}
                    >
                      <XCircle className="h-3.5 w-3.5" /> No aprobado
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-ink-300">
                  Todavía no hay intentos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
