import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExamSimulator } from "@/components/exam-simulator";

export const metadata: Metadata = {
  title: "Simulacro de Examen Teórico de Manejo en Monterrey 2026",
  description:
    "Practica gratis con un simulacro del examen teórico de manejo basado en el material real de Yo Te Enseño, escuela de manejo en Monterrey. Preguntas de conocimientos generales y señales de tránsito, resultado al instante.",
  alternates: {
    canonical: "/simulacro-examen-manejo-monterrey",
  },
};

export default function SimulacroExamenPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="relative overflow-hidden bg-navy-900 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-noise opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Simulacro del examen teórico de manejo
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-[16px] leading-relaxed text-white/65">
              Ponte a prueba con preguntas del examen teórico que aplicamos en
              Yo Te Enseño, escuela de manejo en Monterrey: conocimientos
              generales y señales de tránsito. Es gratis.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-ink-100/40 py-14 md:py-20">
        <div className="container">
          <ExamSimulator />

          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-ink-100 bg-white/60 p-5 text-left">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
              strokeWidth={1.8}
            />
            <p className="text-xs leading-relaxed text-ink-500">
              Este simulacro es una herramienta de práctica de Yo Te Enseño
              basada en nuestro material didáctico y en el Reglamento de
              Tránsito. No es el examen oficial de Vialidad y Tránsito de
              Monterrey ni sustituye la preparación con un instructor
              certificado.
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-500">
            ¿Quieres prepararte a fondo, con práctica al volante incluida?{" "}
            <Link
              href="/#paquetes"
              className="font-semibold text-navy-900 underline underline-offset-2 hover:text-lime-600"
            >
              Conoce nuestros paquetes
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
