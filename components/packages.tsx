"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { cn, whatsappUrlWithMessage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PACKAGES = [
  {
    name: "Express",
    tagline: "Un repaso rápido y directo al punto",
    price: "1,999",
    features: [
      "3 días de clases",
      "3 horas de práctica",
      "1 hora de simulador",
      "Examen teórico",
    ],
    highlighted: false,
  },
  {
    name: "Básico",
    tagline: "Para dar tus primeros pasos al volante",
    price: "3,899",
    features: [
      "5 días de clases",
      "7 horas de práctica",
      "1 hora de simulador",
      "Examen teórico",
    ],
    highlighted: false,
  },
  {
    name: "Avanzado",
    tagline: "Nuestro programa más pedido, de cero a examen",
    price: "4,699",
    features: [
      "6 días de clases",
      "9 horas de práctica",
      "1 hora de simulador",
      "Examen teórico",
    ],
    highlighted: true,
  },
  {
    name: "Élite",
    tagline: "Más práctica para manejar con total soltura",
    price: "5,999",
    features: [
      "8 días de clases",
      "13 horas de práctica",
      "1 hora de simulador",
      "Examen teórico",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    tagline: "La experiencia completa, sin ninguna prisa",
    price: "6,999",
    features: [
      "10 días de clases",
      "17 horas de práctica",
      "1 hora de simulador",
      "Examen teórico",
    ],
    highlighted: false,
  },
];

export function Packages() {
  return (
    <section id="paquetes" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-navy-900/[0.03] blur-[120px]" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow text-orange-600"
          >
            Paquetes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]"
          >
            Un paquete para cada nivel de experiencia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[17px] leading-relaxed text-ink-500"
          >
            Todos nuestros paquetes incluyen simulador y examen teórico.
            Precios en pesos mexicanos.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:items-center">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(pkg.highlighted && "gradient-border-rotate p-[1.5px] xl:-translate-y-3")}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500",
                  pkg.highlighted
                    ? "bg-navy-900 text-white shadow-[0_30px_70px_-20px_rgba(10,24,48,0.55)]"
                    : "surface-card hover:-translate-y-1.5 hover:shadow-card"
                )}
              >
                {pkg.highlighted && (
                  <>
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-grid-faint opacity-30" />
                    <Badge
                      variant="lime"
                      className="absolute -top-3.5 left-7 z-10 flex items-center gap-1 bg-lime-500 text-navy-900 shadow-[0_6px_18px_rgba(198,250,60,0.4)] ring-0"
                    >
                      <Zap className="h-3 w-3" /> Recomendado
                    </Badge>
                  </>
                )}

                <h3
                  className={cn(
                    "relative font-display text-xl font-bold",
                    pkg.highlighted ? "text-white" : "text-navy-900"
                  )}
                >
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "relative mt-2 min-h-[40px] text-sm leading-relaxed",
                    pkg.highlighted ? "text-white/60" : "text-ink-500"
                  )}
                >
                  {pkg.tagline}
                </p>

                <div className="relative mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-display text-3xl font-bold",
                      pkg.highlighted ? "text-lime-400" : "text-navy-900"
                    )}
                  >
                    ${pkg.price}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      pkg.highlighted ? "text-white/50" : "text-ink-300"
                    )}
                  >
                    MXN
                  </span>
                </div>

                <ul className="relative mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          pkg.highlighted ? "text-lime-500" : "text-orange-500"
                        )}
                        strokeWidth={2.5}
                      />
                      <span
                        className={pkg.highlighted ? "text-white/80" : "text-ink-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="btn-shine relative mt-7 w-full"
                >
                  <a
                    href={whatsappUrlWithMessage(
                      `Hola, quiero información del paquete ${pkg.name} ($${pkg.price} MXN) 🚗`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegir {pkg.name}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-300">
          Precios sujetos a cambio sin previo aviso. Consulta promociones
          vigentes por WhatsApp.
        </p>
      </div>
    </section>
  );
}
