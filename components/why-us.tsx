"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const REASONS = [
  {
    title: "Enfoque humano, no de fábrica",
    description:
      "No somos una escuela masiva. Cada alumno recibe atención personalizada según su nivel de confianza.",
  },
  {
    title: "Especialistas en principiantes nerviosos",
    description:
      "Si nunca has tocado un volante o le tienes miedo a manejar, este es exactamente el lugar para ti.",
  },
  {
    title: "Transparencia total",
    description:
      "Sin letras chiquitas ni cobros sorpresa. Sabes desde el inicio qué incluye tu paquete.",
  },
  {
    title: "Seguimiento hasta tu meta",
    description:
      "Te acompañamos desde la primera clase hasta que te sientas lista o listo para manejar sola/o.",
  },
];

export function WhyUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="relative overflow-hidden bg-navy-900 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-noise opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 animate-blob-slow rounded-full bg-lime-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] animate-blob rounded-full bg-orange-500/10 blur-[130px]" />

      {/* Forma abstracta decorativa */}
      <svg
        className="pointer-events-none absolute -left-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.07] lg:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          fill="#C6FA3C"
          d="M45.3,-58.3C58.4,-49.4,68.4,-34.6,71.8,-18.4C75.2,-2.2,72,15.4,63.6,29.8C55.1,44.2,41.4,55.4,25.9,62.1C10.3,68.8,-7.1,71,-23.6,66.7C-40.2,62.4,-55.9,51.6,-64.8,36.6C-73.7,21.6,-75.7,2.4,-71.5,-14.8C-67.3,-32,-56.9,-47.2,-43.1,-56.2C-29.2,-65.2,-14.6,-68,1.6,-70.1C17.8,-72.2,32.2,-67.2,45.3,-58.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-lime-500"
          >
            ¿Por qué elegirnos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-white md:text-[2.75rem]"
          >
            La escuela de manejo pensada para quienes empiezan desde cero
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/60"
          >
            Sabemos que aprender a manejar puede dar nervios. Por eso nuestro
            método está construido alrededor de una sola idea: que te sientas
            en control, siempre.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard
                dark
                className="glass-panel flex gap-4 rounded-2xl p-6 transition-all duration-500 hover:border-lime-500/30 hover:bg-white/[0.06]"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-lime-600 shadow-[0_4px_14px_rgba(198,250,60,0.4)]">
                  <Check className="h-4 w-4 text-navy-900" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {reason.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
