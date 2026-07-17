"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappUrlWithMessage } from "@/lib/utils";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    value: "81 2862 1606",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Av. Prolongación Ruiz Cortines 9010, Local 2, Col. Puerta de Hierro",
  },
  {
    icon: Clock,
    title: "Horario de atención",
    value: "Lunes a sábado, horarios flexibles",
  },
  {
    icon: Mail,
    title: "Síguenos",
    value: "Facebook e Instagram: Yo te enseño EDM",
  },
];

export function Contact() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${name || "—"}.
Teléfono de contacto: ${phone || "—"}
Paquete de interés: ${interest || "—"}
Mensaje: ${message || "Quiero más información sobre las clases de manejo"}`;
    window.open(whatsappUrlWithMessage(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-noise opacity-40" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[440px] w-[440px] animate-blob rounded-full bg-orange-500/15 blur-[150px]" />
      <div className="pointer-events-none absolute -top-20 left-0 h-[320px] w-[320px] animate-blob-slow rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="container relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr,1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow text-lime-500">Contacto</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-white md:text-[2.75rem]">
            Da el primer paso hoy mismo
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/60">
            Completa el formulario o escríbenos directo por WhatsApp. Te
            respondemos el mismo día.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACT_INFO.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-5 transition-colors duration-500 hover:border-lime-500/25"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-lime-400 to-lime-600">
                  <info.icon className="h-4.5 w-4.5 text-navy-900" strokeWidth={2} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/40">
                  {info.title}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] md:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="¿Cómo te llamas?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="81 0000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <Label htmlFor="interest">Paquete de interés</Label>
            <Input
              id="interest"
              placeholder="Express, Básico, Avanzado, Élite o Premium"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Cuéntanos tu horario ideal y tu nivel de experiencia"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            variant="primary"
            className="btn-shine mt-7 w-full shadow-[0_10px_30px_-8px_rgba(198,250,60,0.55)]"
          >
            Enviar por WhatsApp
            <Send className="h-4 w-4" />
          </Button>

          <p className="mt-4 text-center text-xs text-ink-300">
            Al enviar, abriremos WhatsApp con tu información lista para enviar.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
