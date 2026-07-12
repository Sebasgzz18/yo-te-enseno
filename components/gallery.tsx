"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Route, Smile, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    label: "Nuestra flotilla",
    tone: "navy",
    tall: true,
    image: "/brand/fleet-car.jpg",
  },
  { icon: GraduationCap, label: "Primera clase", tone: "lime" },
  { icon: Smile, label: "Alumnos felices", tone: "orange" },
  { icon: MapPin, label: "Prácticas en avenida", tone: "navy" },
  { icon: Route, label: "Rutas de examen", tone: "lime", tall: true },
  { icon: Trophy, label: "Licencia en mano", tone: "orange" },
];

const TONE_STYLES: Record<string, string> = {
  navy: "bg-gradient-to-br from-navy-800 to-navy-950 text-lime-500",
  lime: "bg-gradient-to-br from-lime-400 to-lime-600 text-navy-900",
  orange: "bg-gradient-to-br from-orange-400 to-orange-600 text-white",
};

export function Gallery() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-ink-100/40 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-navy-900/[0.04] blur-[130px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-orange-600"
          >
            Galería
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]"
          >
            Momentos al volante
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[17px] leading-relaxed text-ink-500"
          >
            Así viven nuestros alumnos el proceso de aprender a manejar.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card",
                !item.image && "p-6",
                !item.image && TONE_STYLES[item.tone],
                item.tall ? "row-span-2 min-h-[280px]" : "min-h-[130px]"
              )}
            >
              {item.image ? (
                <>
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <p className="relative p-5 font-display text-sm font-semibold text-white">
                    {item.label}
                  </p>
                </>
              ) : (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
                  {item.icon && (
                    <item.icon
                      className="absolute -right-4 -top-4 h-28 w-28 opacity-15 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-12"
                      strokeWidth={1.2}
                    />
                  )}
                  {item.icon && (
                    <item.icon
                      className="relative h-7 w-7 transition-transform duration-500 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  )}
                  <p className="relative mt-3 font-display text-sm font-semibold">
                    {item.label}
                  </p>
                </>
              )}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-white/25" />
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-300">
          Más fotografías de nuestros alumnos e instalaciones, próximamente.
        </p>
      </div>
    </section>
  );
}
