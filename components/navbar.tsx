"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#galeria", label: "Galería" },
  { href: "#preguntas-frecuentes", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-navy-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(5,11,22,0.3)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-lime-500/40 after:to-transparent"
          : "bg-transparent"
      )}
    >
      <nav className="container relative flex h-[72px] items-center justify-between">
        <Link href="#inicio" className="group flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-11 w-[150px] items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)] ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-[168px]">
            <Image
              src="/brand/logo.png"
              alt="Yo Te Enseño – Escuela de Manejo"
              fill
              priority
              sizes="170px"
              className="object-contain p-1"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3.5 py-2 text-[13.5px] font-medium text-white/75 transition-colors hover:text-white"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-white/[0.06] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="primary" className="btn-shine">
            <a href="#paquetes">Ver paquetes</a>
          </Button>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-navy-900/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 pb-6 pt-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/85 hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button asChild size="default" variant="primary" className="mt-2">
                <a href="#paquetes" onClick={() => setOpen(false)}>
                  Ver paquetes
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
