import type { SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { whatsappUrlWithMessage } from "@/lib/utils";

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.14-1.62 4.3 4.3 0 0 1-.83-2.4H9.4v14.11a2.59 2.59 0 1 1-1.83-2.48V10.1a5.9 5.9 0 1 0 5.14 5.85V9.15a7.6 7.6 0 0 0 4.24 1.29V7.15c-.12 0-.23 0-.35 0Z" />
    </svg>
  );
}

const LINKS = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "/#paquetes", label: "Paquetes" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/simulacro-examen-manejo-monterrey", label: "Simulacro de examen" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#preguntas-frecuentes", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-500/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-lime-500/[0.06] blur-[140px]" />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr,1fr,1fr]">
          <div>
            <Link href="/#inicio" className="group inline-flex items-center">
              <span className="relative flex h-12 w-[168px] items-center rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/brand/logo.png"
                  alt="Yo Te Enseño – Escuela de Manejo"
                  fill
                  sizes="170px"
                  className="object-contain p-1"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Clases de manejo personalizadas en Monterrey. Perdemos el miedo,
              ganamos confianza al volante, juntos.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrlWithMessage("Hola, quiero información sobre las clases de manejo 🚗")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-500 hover:text-navy-900"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com/yoteenseno_edm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-500 hover:text-navy-900"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=615877092155968"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook: Yo te enseño EDM"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-500 hover:text-navy-900"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.tiktok.com/@yoteensenoedm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-500 hover:text-navy-900"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Navegación
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-lime-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Contacto
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <li>81 2862 1606</li>
              <li>Av. Prolongación Ruiz Cortines 9010, Local 2</li>
              <li>Col. Puerta de Hierro, Monterrey</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/35 md:flex-row">
          <p>
            © {new Date().getFullYear()} YO TE ENSEÑO – Escuela de Manejo.
            Todos los derechos reservados.
          </p>
          <p>Hecho con cuidado para nuevos conductores en Monterrey.</p>
        </div>
      </div>
    </footer>
  );
}
