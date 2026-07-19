import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getStaffSession } from "@/lib/auth/session";
import { logoutStaff } from "./login/actions";

export const metadata: Metadata = {
  title: "Panel de administración",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getStaffSession();

  return (
    <div className="min-h-screen bg-ink-100/40">
      {session.isLoggedIn && (
        <header className="border-b border-ink-100 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-[126px] items-center rounded-lg bg-white px-2 py-1 ring-1 ring-black/5">
                <Image
                  src="/brand/logo.png"
                  alt="Yo Te Enseño"
                  fill
                  sizes="130px"
                  className="object-contain p-1"
                />
              </span>
              <nav className="flex items-center gap-4 text-sm font-semibold text-ink-500">
                <Link href="/admin/dashboard" className="hover:text-navy-900">
                  Resultados
                </Link>
                <Link href="/admin/estudiantes" className="hover:text-navy-900">
                  Alumnos
                </Link>
              </nav>
            </div>
            <form action={logoutStaff}>
              <button
                type="submit"
                className="text-sm font-semibold text-ink-500 hover:text-navy-900"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </header>
      )}
      <main
        className={
          session.isLoggedIn
            ? "mx-auto max-w-5xl px-6 py-10"
            : "flex min-h-screen items-center justify-center px-4 py-12"
        }
      >
        {children}
      </main>
    </div>
  );
}
