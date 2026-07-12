# YO TE ENSEÑO – Escuela de Manejo

Landing page profesional construida con Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion, componentes estilo shadcn/ui y Lucide Icons.

## Requisitos

- Node.js 18.18 o superior
- npm, pnpm o yarn

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
app/
  layout.tsx        → Metadata SEO, fuentes, JSON-LD (schema.org DrivingSchool)
  page.tsx           → Composición de todas las secciones
  globals.css         → Estilos base y tokens de utilidad
  sitemap.ts / robots.ts → SEO técnico
components/
  navbar.tsx           → Barra de navegación fija con menú móvil
  hero.tsx             → Hero con CTA y ruta animada (elemento de marca)
  benefits.tsx         → Sección de beneficios
  why-us.tsx           → Sección "¿Por qué elegirnos?"
  packages.tsx         → Paquetes Básico / Completo / Express (sin precios)
  how-it-works.tsx     → Proceso en 4 pasos
  testimonials.tsx     → Testimonios de alumnos
  gallery.tsx          → Galería (placeholders listos para fotos reales)
  faq.tsx              → Preguntas frecuentes (accordion accesible)
  contact.tsx          → Formulario de contacto → envía a WhatsApp
  footer.tsx            → Pie de página
  whatsapp-button.tsx   → Botón flotante + botón en línea de WhatsApp
  ui/                    → Componentes base estilo shadcn/ui
lib/
  utils.ts              → Helper cn() y utilidades de WhatsApp
```

## Personalización rápida

1. **WhatsApp**: el número ya está configurado en `lib/utils.ts`
   (`https://wa.me/528128621606`).
2. **Logo y mascota**: ya integrados en `public/brand/logo.png` y
   `public/brand/mascot.png`, recortados desde tu material de marca.
   Si más adelante tienes los archivos originales en alta resolución
   o con fondo transparente nativo, reemplázalos ahí directamente.
3. **Precios y paquetes**: los 5 paquetes (Express, Básico, Avanzado,
   Élite, Premium) con sus precios reales ya están en
   `components/packages.tsx`. Actualízalos ahí si cambian.
4. **Dirección y redes**: la dirección real (Av. Prolongación Ruiz
   Cortines 9010, Local 2, Col. Puerta de Hierro) ya está en
   `components/contact.tsx`, `components/footer.tsx` y el JSON-LD de
   `app/layout.tsx`. El enlace de Instagram apunta a
   `@yoteenseno_edm`; verifica y ajusta el enlace de Facebook en
   `components/footer.tsx` (se dejó apuntando a facebook.com de forma
   genérica porque no se proporcionó la URL exacta de la página).
5. **Imágenes reales**: reemplaza los bloques de `components/gallery.tsx`
   por tus fotografías (usa `next/image` para optimización automática).
   Agrega también `/public/og-image.jpg` para las vistas previas en redes.
6. **Dominio**: actualiza `SITE_URL` en `app/layout.tsx`,
   `app/sitemap.ts` y `app/robots.ts` con tu dominio real.
7. **Colores de marca**: definidos en `tailwind.config.ts`
   (`navy`, `lime`, `orange`).

## Build de producción

```bash
npm run build
npm run start
```

Listo para desplegar en Vercel, Netlify o cualquier hosting compatible con
Next.js.
