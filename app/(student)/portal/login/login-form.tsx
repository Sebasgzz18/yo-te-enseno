"use client";

import * as React from "react";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginStudent } from "./actions";

export function StudentLoginForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [pending, setPending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await loginStudent(formData);
    if (result?.error) {
      setError(result.error);
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">Usuario</Label>
        <Input id="username" name="username" placeholder="Tu usuario" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" name="password" type="password" required />
      </div>

      {error && (
        <p className="rounded-lg bg-orange-500/10 px-3 py-2 text-sm text-orange-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="btn-shine mt-2 w-full"
        disabled={pending}
      >
        {pending ? "Entrando..." : "Entrar"}
        <LogIn className="h-4 w-4" />
      </Button>
    </form>
  );
}
