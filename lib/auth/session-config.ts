import type { SessionOptions } from "iron-session";

export interface StudentSessionData {
  studentId?: string;
  isLoggedIn: boolean;
}

export interface StaffSessionData {
  staffId?: string;
  isLoggedIn: boolean;
}

function requireSecret(name: string): string {
  const value = process.env[name];
  if (!value || value.length < 32) {
    throw new Error(
      `${name} must be set to a random string of at least 32 characters.`
    );
  }
  return value;
}

export const studentSessionOptions: SessionOptions = {
  cookieName: "student_session",
  password: requireSecret("STUDENT_SESSION_SECRET"),
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/portal",
    maxAge: 60 * 60 * 6, // 6 hours: enough to finish one exam session
  },
};

export const staffSessionOptions: SessionOptions = {
  cookieName: "admin_session",
  password: requireSecret("ADMIN_SESSION_SECRET"),
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 12, // 12 hours
  },
};
