import Image from "next/image";
import { StaffLoginForm } from "./login-form";

export default function StaffLoginPage() {
  return (
    <div className="surface-card w-full max-w-md rounded-3xl p-8">
      <div className="mx-auto mb-6 flex justify-center">
        <span className="relative flex h-12 w-[168px] items-center rounded-xl bg-white px-2.5 py-1.5 shadow-soft ring-1 ring-black/5">
          <Image
            src="/brand/logo.png"
            alt="Yo Te Enseño – Escuela de Manejo"
            fill
            sizes="170px"
            className="object-contain p-1"
          />
        </span>
      </div>
      <h1 className="text-center font-display text-xl font-bold text-navy-900">
        Panel de administración
      </h1>
      <p className="mt-2 text-center text-sm text-ink-500">
        Acceso exclusivo para el staff de la escuela.
      </p>
      <div className="mt-6">
        <StaffLoginForm />
      </div>
    </div>
  );
}
