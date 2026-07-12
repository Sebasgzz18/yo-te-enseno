"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/whatsapp-button";

const FAQS = [
  {
    question: "¿Necesito saber algo de manejo antes de empezar?",
    answer:
      "No. La mayoría de nuestros alumnos empieza desde cero. Adaptamos cada clase a tu nivel, sin importar si nunca has tocado un volante.",
  },
  {
    question: "¿En qué zonas dan clases?",
    answer:
      "Damos servicio en Monterrey y su área metropolitana. Pasamos por ti en el punto que nos indiques al agendar.",
  },
  {
    question: "¿Los autos son automáticos o de velocidades?",
    answer:
      "Contamos con opciones automáticas y estándar, según tu preferencia y el paquete que elijas. Coméntalo al momento de agendar.",
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer:
      "La duración se ajusta según el paquete y tu ritmo de aprendizaje. Te damos todos los detalles al cotizar por WhatsApp.",
  },
  {
    question: "¿Me ayudan también con el trámite de mi licencia?",
    answer:
      "Sí, en el paquete Completo incluimos preparación teórica y acompañamiento para tu examen y trámite de licencia.",
  },
  {
    question: "¿Puedo regalar clases de manejo a alguien más?",
    answer:
      "Claro que sí. Escríbenos por WhatsApp y armamos un paquete especial como regalo para esa persona.",
  },
];

export function FAQ() {
  return (
    <section id="preguntas-frecuentes" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-lime-500/[0.06] blur-[120px]" />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr,1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow text-orange-600">
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 md:text-[2.75rem]">
              Resolvemos tus dudas antes de empezar
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-500">
              ¿No encuentras lo que buscas? Escríbenos directamente y con
              gusto te ayudamos.
            </p>
            <WhatsAppButton
              label="Preguntar por WhatsApp"
              message="Hola, tengo una pregunta sobre las clases de manejo 🚗"
              className="btn-shine mt-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="surface-card rounded-2xl px-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
