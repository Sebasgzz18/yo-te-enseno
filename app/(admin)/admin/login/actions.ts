"use server";

import "server-only";
import { z } from "zod";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { staff } from "@/lib/db/schema";
import { verifyPassword } from "@/lib/auth/password";
import { getStaffSession } from "@/lib/auth/session";

const schema = z.object({
  username: z.string().min(1, "El usuario es requerido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

const MAX_ATTEMPTS = 5;
const LOCK_MINUTES = 15;

export async function loginStaff(
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

  const [account] = await db
    .select()
    .from(staff)
    .where(eq(staff.username, username))
    .limit(1);

  if (!account || !account.isActive) {
    return { error: "Usuario o contraseña incorrectos." };
  }

  if (account.lockedUntil && account.lockedUntil.getTime() > Date.now()) {
    return {
      error:
        "Cuenta bloqueada temporalmente por demasiados intentos fallidos. Intenta más tarde.",
    };
  }

  const valid = await verifyPassword(password, account.passwordHash);
  if (!valid) {
    const failedAttempts = account.failedAttempts + 1;
    const lockedUntil =
      failedAttempts >= MAX_ATTEMPTS
        ? new Date(Date.now() + LOCK_MINUTES * 60 * 1000)
        : null;
    await db
      .update(staff)
      .set({ failedAttempts, lockedUntil })
      .where(eq(staff.id, account.id));
    return { error: "Usuario o contraseña incorrectos." };
  }

  await db
    .update(staff)
    .set({ failedAttempts: 0, lockedUntil: null, lastLoginAt: new Date() })
    .where(eq(staff.id, account.id));

  const session = await getStaffSession();
  session.staffId = account.id;
  session.isLoggedIn = true;
  await session.save();

  redirect("/admin/dashboard");
}

export async function logoutStaff() {
  const session = await getStaffSession();
  session.destroy();
  redirect("/admin/login");
}
