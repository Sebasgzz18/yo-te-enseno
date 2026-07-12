import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/528128621606";

export function whatsappUrlWithMessage(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
