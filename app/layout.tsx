import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://www.yoteenseno.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "YO TE ENSEÑO – Escuela de Manejo en Monterrey",
    template: "%s | YO TE ENSEÑO – Escuela de Manejo",
  },
  description:
    "Aprende a manejar con confianza. Clases de manejo personalizadas para principiantes, mujeres y jóvenes en Monterrey y área metropolitana. Instructores certificados, autos con doble pedal y horarios flexibles.",
  keywords: [
    "escuela de manejo Monterrey",
    "clases de manejo",
    "aprender a manejar",
    "clases de manejo para mujeres",
    "autoescuela Monterrey",
    "instructor de manejo certificado",
    "YO TE ENSEÑO",
  ],
  authors: [{ name: "YO TE ENSEÑO – Escuela de Manejo" }],
  creator: "YO TE ENSEÑO – Escuela de Manejo",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "YO TE ENSEÑO – Escuela de Manejo",
    title: "YO TE ENSEÑO – Escuela de Manejo",
    description:
      "Clases de manejo personalizadas con instructores certificados. Perdemos el miedo, ganamos confianza al volante.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YO TE ENSEÑO – Escuela de Manejo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YO TE ENSEÑO – Escuela de Manejo",
    description:
      "Clases de manejo personalizadas con instructores certificados en Monterrey.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1830",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "YO TE ENSEÑO – Escuela de Manejo",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: "+528128621606",
  priceRange: "$$",
  areaServed: "Monterrey y área metropolitana",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Prolongación Ruiz Cortines 9010, Local 2",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    postalCode: "",
    addressCountry: "MX",
  },
  sameAs: ["https://www.instagram.com/yoteenseno_edm/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        {children}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
