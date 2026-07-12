"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  CarFront,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const BENEFITS = [
  {
    icon: UserRoundCheck,
    title: "Instructores certificados",
    description:
      "Profesionales pacientes, capacitados para enseñar desde cero sin presión ni prisas.",
  },
  {
    icon: CarFront,
    title: "Autos con doble pedal",
    description:
      "Practica con total seguridad: nuestros vehículos cuentan con pedal de freno auxiliar.",
  },
  {
    icon: CalendarClock,
    title: "Horarios flexibles",
    description:
      "Tú decides cuándo. Clases entre semana, fines de semana o en horario nocturno.",
  },
  {
    icon: MapPinned,
    title: "Te recogemos donde estés",
    description:
      "Pasamos por ti en tu casa, oficina o escuela dentro del área metropolitana.",
  },
  {
    icon: HeartHandshake,
    title: "A tu propio ritmo",
    description:
      "Sin comparaciones ni juicios. Cada alumno avanza según su confianza y necesidad.",
  },
  {
    icon: ShieldCheck,
    title: "Preparación para tu examen",
    description:
      "Te preparamos también en teoría y trámite para que obtengas tu licencia sin contratiempos.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-24 h-[380px] w-[380px] rounded-full bg-lime-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-orange-500/[0.06] blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-orange-600"
          >
            Beneficios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]"
          >
            Todo lo que necesitas para aprender a manejar bien
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[17px] leading-relaxed text-ink-500"
          >
            Diseñamos cada clase pensando en tu comodidad, tu seguridad y tu
            confianza al volante.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="surface-card group h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 group-hover:from-lime-400 group-hover:to-lime-600 group-hover:shadow-[0_8px_20px_-4px_rgba(198,250,60,0.5)]">
                  <benefit.icon
                    className="h-6 w-6 text-lime-500 transition-colors duration-500 group-hover:text-navy-900"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                  {benefit.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
