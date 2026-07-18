"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnimatedCounter } from "@/components/animated-counter";

const STATS = [
  { value: 1200, suffix: "+", label: "alumnos titulados" },
  { value: 4.9, suffix: "/5", label: "calificación promedio", decimals: 1 },
  { value: 100, suffix: "%", label: "autos con doble pedal" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 pb-28 pt-40 md:pb-40 md:pt-48"
    >
      {/* Fondo: mesh gradient + grano + grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-noise opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute -top-40 right-[-8%] h-[560px] w-[560px] animate-blob rounded-full bg-lime-500/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-14%] left-[-10%] h-[460px] w-[460px] animate-blob-slow rounded-full bg-orange-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-[320px] w-[320px] animate-blob-delay rounded-full bg-navy-500/30 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-900 to-transparent" />

      {/* Ruta de aprendizaje — elemento de firma */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-full w-full opacity-80 lg:block"
        viewBox="0 0 1280 700"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M -40 120 C 220 60, 340 260, 620 200 S 980 40, 1320 140"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          className="route-path"
          initial={{ strokeDashoffset: 1400 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
        <motion.circle
          cx="1320"
          cy="140"
          r="5"
          fill="#C6FA3C"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.6, 1] }}
          transition={{ delay: 2.4, duration: 0.6 }}
        />
        <defs>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1280" y2="0">
            <stop offset="0%" stopColor="#C6FA3C" stopOpacity="0" />
            <stop offset="15%" stopColor="#C6FA3C" />
            <stop offset="55%" stopColor="#FF7A29" />
            <stop offset="100%" stopColor="#C6FA3C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mascota — flota a la derecha en pantallas grandes */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-0 right-[2%] hidden w-[240px] animate-float xl:block 2xl:right-[6%] 2xl:w-[280px]"
      >
        <Image
          src="/brand/mascot.webp"
          alt="Mascota de Yo Te Enseño, escuela de manejo"
          width={1021}
          height={1501}
          className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
          priority
        />
      </motion.div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-lime-400"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Instructores certificados en Monterrey
            <ShieldCheck className="h-3.5 w-3.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-[4.4rem]"
          >
            Perdemos el miedo,
            <br />
            <span className="relative inline-block text-gradient-lime">
              ganamos confianza
              <svg
                className="absolute -bottom-2 left-0 w-full opacity-90"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 9 C 80 2, 220 2, 298 9"
                  stroke="#FF7A29"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            al volante.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-white/65 md:text-lg"
          >
            Clases de manejo personalizadas en Monterrey, a tu ritmo, con
            instructores pacientes y autos equipados con doble pedal. Tú
            eliges el horario, nosotros nos encargamos del resto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <WhatsAppButton
              label="Agenda tu primera clase"
              message="Hola, quiero agendar mi primera clase de manejo 🚗"
              className="btn-shine h-14 px-8 text-[15px] shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)]"
            />
            <Button
              asChild
              size="lg"
              variant="outlineLight"
              className="btn-shine"
            >
              <a href="#paquetes" className="group">
                Ver paquetes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-10 w-[150px] animate-float xl:hidden"
          >
            <Image
              src="/brand/mascot.webp"
              alt="Mascota de Yo Te Enseño, escuela de manejo"
              width={1021}
              height={1501}
              className="h-auto w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-16 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-white/10 pt-10"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
            <div className="flex items-center gap-1 text-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 300 }}
                >
                  <Star className="h-4 w-4 fill-lime-500 text-lime-500" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
