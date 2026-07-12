import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          950: "#050B16",
          900: "#0A1830",
          800: "#0E2040",
          700: "#12294D",
          600: "#1B3A66",
          500: "#28507F",
        },
        lime: {
          400: "#D6FF66",
          500: "#C6FA3C",
          600: "#A6D928",
        },
        orange: {
          400: "#FF9558",
          500: "#FF7A29",
          600: "#F0600C",
        },
        ink: {
          900: "#0B0F14",
          700: "#33404F",
          500: "#5C6B7A",
          300: "#A9B4BE",
          100: "#E7EBEF",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,24,48,0.04), 0 8px 24px rgba(10,24,48,0.06)",
        card: "0 2px 6px rgba(10,24,48,0.06), 0 20px 40px -16px rgba(10,24,48,0.18)",
        glow: "0 0 0 1px rgba(198,250,60,0.35), 0 8px 32px rgba(198,250,60,0.25)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "dash": {
          to: { strokeDashoffset: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        dash: "dash 2.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
