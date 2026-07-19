"use server";

import "server-only";
import { z } from "zod";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { students } from "@/lib/db/schema";
import { verifyPassword } from "@/lib/auth/password";
import { getStudentSession } from "@/lib/auth/session";

const schema = z.object({
  username: z.string().min(1, "El usuario es requerido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

const MAX_ATTEMPTS = 5;
const LOCK_MINUTES = 15;

export async function loginStudent(
  formData: FormData
): Promise<{ error: string } | void> {
  const parsed = schema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: "Usuario y contraseña son requeridos." };
  }
  const { username, password } = parsed.data;

  const [student] = await db
    .select()
    .from(students)
    .where(eq(students.username, username))
    .limit(1);

  if (!student || !student.isActive) {
    return { error: "Usuario o contraseña incorrectos." };
  }

  if (student.lockedUntil && student.lockedUntil.getTime() > Date.now()) {
    return {
      error:
        "Cuenta bloqueada temporalmente por demasiados intentos fallidos. Intenta más tarde.",
    };
  }

  const valid = await verifyPassword(password, student.passwordHash);
  if (!valid) {
    const failedAttempts = student.failedAttempts + 1;
    const lockedUntil =
      failedAttempts >= MAX_ATTEMPTS
        ? new Date(Date.now() + LOCK_MINUTES * 60 * 1000)
        : null;
    await db
      .update(students)
      .set({ failedAttempts, lockedUntil })
      .where(eq(students.id, student.id));
    return { error: "Usuario o contraseña incorrectos." };
  }

  await db
    .update(students)
    .set({ failedAttempts: 0, lockedUntil: null, lastLoginAt: new Date() })
    .where(eq(students.id, student.id));

  const session = await getStudentSession();
  session.studentId = student.id;
  session.isLoggedIn = true;
  await session.save();

  redirect("/portal/exam");
}
