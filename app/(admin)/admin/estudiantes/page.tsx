import { desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { students } from "@/lib/db/schema";
import { CreateStudentForm } from "./create-student-form";
import { ResetPasswordButton } from "./student-row";

export const dynamic = "force-dynamic";

function formatDate(date: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("es-MX", { dateStyle: "medium" }).format(date);
}

export default async function AdminStudentsPage() {
  const rows = await db
    .select()
    .from(students)
    .orderBy(desc(students.createdAt));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">
          Alumnos
        </h1>
        <p className="mt-1 text-sm text-ink-500">
          {rows.length} {rows.length === 1 ? "alumno registrado" : "alumnos registrados"}
        </p>
      </div>

      <CreateStudentForm />

      <div className="surface-card overflow-hidden rounded-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-100/60 text-xs font-semibold uppercase tracking-wide text-ink-500">
            <tr>
              <th className="px-5 py-3">Nombre</th>
              <th className="px-5 py-3">Usuario</th>
              <th className="px-5 py-3">Teléfono</th>
              <th className="px-5 py-3">Creado</th>
              <th className="px-5 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {rows.map((student) => (
              <tr key={student.id}>
                <td className="px-5 py-3 font-medium text-navy-900">
                  {student.fullName}
                </td>
                <td className="px-5 py-3 text-ink-500">{student.username}</td>
                <td className="px-5 py-3 text-ink-500">{student.phone || "—"}</td>
                <td className="px-5 py-3 text-ink-500">
                  {formatDate(student.createdAt)}
                </td>
                <td className="px-5 py-3">
                  <ResetPasswordButton studentId={student.id} />
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-ink-300">
                  Todavía no hay alumnos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
