"use client";

import * as React from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createStudent } from "./actions";

export function CreateStudentForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [created, setCreated] = React.useState<{
    username: string;
    password: string;
  } | null>(null);
  const [pending, setPending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setCreated(null);
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await createStudent(formData);
    setPending(false);
    if ("error" in result) {
      setError(result.error);
      return;
    }
    setCreated({ username: result.username, password: result.password });
    formRef.current?.reset();
  }

  return (
    <div className="surface-card rounded-2xl p-6">
      <h2 className="font-display text-base font-semibold text-navy-900">
        Registrar nuevo alumno
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullName">Nombre completo</Label>
            <Input id="fullName" name="fullName" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" name="username" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Teléfono (opcional)</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="customPassword">
              Contraseña personalizada (opcional)
            </Label>
            <Input id="customPassword" name="customPassword" placeholder="Se genera una si la dejas vacía" />
          </div>
        </div>

        {error && (
          <p className="rounded-lg bg-orange-500/10 px-3 py-2 text-sm text-orange-600">
            {error}
          </p>
        )}

        {created && (
          <div className="rounded-lg bg-lime-500/10 px-4 py-3 text-sm text-navy-900">
            <p className="font-semibold">Alumno creado. Dale estos datos:</p>
            <p className="mt-1">
              Usuario: <span className="font-mono font-semibold">{created.username}</span>
            </p>
            <p>
              Contraseña: <span className="font-mono font-semibold">{created.password}</span>
            </p>
            <p className="mt-1 text-xs text-ink-500">
              Esta contraseña no se vuelve a mostrar — anótala ahora.
            </p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          className="btn-shine w-fit"
          disabled={pending}
        >
          {pending ? "Creando..." : "Crear alumno"}
          <UserPlus className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
