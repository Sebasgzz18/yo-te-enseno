"use server";

import "server-only";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { students } from "@/lib/db/schema";
import { generateRandomPassword, hashPassword } from "@/lib/auth/password";
import { getStaffSession } from "@/lib/auth/session";

const createSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido."),
  username: z
    .string()
    .min(3, "El usuario debe tener al menos 3 caracteres.")
    .regex(/^[a-zA-Z0-9._-]+$/, "Solo letras, números, puntos y guiones."),
  phone: z.string().optional(),
  customPassword: z.string().optional(),
});

export async function createStudent(
  formData: FormData
): Promise<{ error: string } | { success: true; username: string; password: string }> {
  const session = await getStaffSession();
  if (!session.isLoggedIn || !session.staffId) {
    return { error: "Sesión expirada." };
  }

  const parsed = createSchema.safeParse({
    fullName: formData.get("fullName"),
    username: formData.get("username"),
    phone: formData.get("phone") || undefined,
    customPassword: formData.get("customPassword") || undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Datos inválidos." };
  }
  const { fullName, username, phone, customPassword } = parsed.data;

  const [existing] = await db
    .select({ id: students.id })
    .from(students)
    .where(eq(students.username, username))
    .limit(1);
  if (existing) {
    return { error: "Ese usuario ya existe, elige otro." };
  }

  const password = customPassword || generateRandomPassword();
  const passwordHash = await hashPassword(password);

  await db.insert(students).values({
    fullName,
    username,
    phone,
    passwordHash,
    createdBy: session.staffId,
  });

  revalidatePath("/admin/estudiantes");
  return { success: true, username, password };
}

export async function resetStudentPassword(
  studentId: string
): Promise<{ error: string } | { success: true; password: string }> {
  const session = await getStaffSession();
  if (!session.isLoggedIn || !session.staffId) {
    return { error: "Sesión expirada." };
  }

  const password = generateRandomPassword();
  const passwordHash = await hashPassword(password);

  const result = await db
    .update(students)
    .set({ passwordHash, failedAttempts: 0, lockedUntil: null })
    .where(eq(students.id, studentId))
    .returning({ id: students.id });

  if (result.length === 0) {
    return { error: "Alumno no encontrado." };
  }

  revalidatePath("/admin/estudiantes");
  return { success: true, password };
}
