"use client";

import * as React from "react";
import { KeyRound } from "lucide-react";
import { resetStudentPassword } from "./actions";

export function ResetPasswordButton({ studentId }: { studentId: string }) {
  const [pending, setPending] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState<string | null>(null);

  async function handleReset() {
    if (
      !confirm(
        "¿Resetear la contraseña de este alumno? La contraseña actual dejará de funcionar."
      )
    ) {
      return;
    }
    setPending(true);
    const result = await resetStudentPassword(studentId);
    setPending(false);
    if ("success" in result) {
      setNewPassword(result.password);
    }
  }

  if (newPassword) {
    return (
      <span className="font-mono text-xs font-semibold text-lime-700">
        Nueva: {newPassword}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      disabled={pending}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-500 hover:text-navy-900"
    >
      <KeyRound className="h-3.5 w-3.5" />
      {pending ? "..." : "Resetear contraseña"}
    </button>
  );
}
