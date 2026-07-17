"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, CarFront, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description:
      "Escríbenos por WhatsApp y cuéntanos tu nivel de experiencia y tu horario ideal.",
  },
  {
    icon: ClipboardList,
    title: "Elige tu paquete",
    description:
      "Te recomendamos el paquete Express, Básico, Avanzado, Élite o Premium según tu meta.",
  },
  {
    icon: CarFront,
    title: "Empieza a practicar",
    description:
      "Pasamos por ti y comienzas tus clases en un auto con doble pedal, sin presión.",
  },
  {
    icon: BadgeCheck,
    title: "Gana tu confianza",
    description:
      "Avanzas a tu ritmo hasta sentirte lista o listo para manejar por tu cuenta.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-gradient-to-b from-ink-100/50 to-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-lime-500/[0.06] blur-[110px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-orange-600"
          >
            Cómo funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]"
          >
            Tu ruta de aprendizaje en 4 pasos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[17px] leading-relaxed text-ink-500"
          >
            Un proceso simple, claro y sin vueltas: de tu primer mensaje a tu
            primera vuelta sola.
          </motion.p>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* línea conectora tipo ruta, se dibuja al hacer scroll */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] md:block">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="#0A1830"
                strokeOpacity="0.08"
                strokeWidth="2"
              />
              <motion.line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="url(#stepGradient)"
                strokeWidth="2.5"
                strokeDasharray="9 9"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="stepGradient" x1="0" y1="0" x2="1000" y2="0">
                  <stop offset="0%" stopColor="#C6FA3C" />
                  <stop offset="50%" stopColor="#FF7A29" />
                  <stop offset="100%" stopColor="#C6FA3C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-card transition-transform duration-500 group-hover:-translate-y-1">
                <span className="absolute inset-0 rounded-2xl bg-lime-500/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                <step.icon className="relative h-7 w-7 text-lime-500" strokeWidth={1.8} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-[11px] font-bold text-white shadow-[0_4px_10px_rgba(255,122,41,0.5)]">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
