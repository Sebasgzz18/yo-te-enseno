"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const TESTIMONIALS = [
  {
    name: "Daniela R.",
    role: "Alumna, paquete Avanzado",
    quote:
      "Le tenía pánico al volante y mi instructor tuvo muchísima paciencia conmigo. Hoy manejo sola todos los días.",
  },
  {
    name: "Andrés M.",
    role: "Alumno, paquete Express",
    quote:
      "Ya sabía manejar pero necesitaba perder el miedo a las avenidas grandes. En pocas clases sentí un cambio enorme.",
  },
  {
    name: "Karla V.",
    role: "Alumna, paquete Básico",
    quote:
      "Me encantó que pasaran por mí y que las clases fueran a mi ritmo, sin prisas ni comparaciones con nadie más.",
  },
  {
    name: "Jorge L.",
    role: "Alumno, paquete Premium",
    quote:
      "El acompañamiento hasta el examen fue clave. Aprobé a la primera gracias a la preparación teórica y práctica.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 top-32 h-[380px] w-[380px] rounded-full bg-orange-500/[0.06] blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-orange-600"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]"
          >
            Historias reales de quienes ya perdieron el miedo
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="surface-card group relative h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <Quote
                  className="h-8 w-8 text-lime-500/60 transition-colors duration-500 group-hover:text-lime-500"
                  strokeWidth={1.6}
                />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15.5px] leading-relaxed text-ink-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 font-display text-sm font-semibold text-lime-500 ring-2 ring-lime-500/20">
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
