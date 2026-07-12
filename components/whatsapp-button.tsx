"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrlWithMessage } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  floating?: boolean;
  message?: string;
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  floating = false,
  message = "Hola, quiero información sobre las clases de manejo de YO TE ENSEÑO 🚗",
  className,
  label,
}: WhatsAppButtonProps) {
  const href = whatsappUrlWithMessage(message);

  if (floating) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] md:bottom-8 md:right-8",
          className
        )}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[#1FBE5A] active:scale-[0.98]",
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label ?? "Escríbenos por WhatsApp"}
    </a>
  );
}
