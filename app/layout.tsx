import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FAQS } from "@/lib/faq-data";

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

const SITE_URL = "https://www.yoteenseno.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "YO TE ENSEÑO – Escuela de Manejo en Monterrey",
    template: "%s | YO TE ENSEÑO",
  },

  description:
    "Escuela de manejo en Monterrey. Clases de manejo personalizadas con instructores certificados, autos con doble pedal y horarios flexibles. Agenda tu clase por WhatsApp.",

  keywords: [
    "escuela de manejo",
    "escuela de manejo monterrey",
    "clases de manejo monterrey",
    "clases de manejo",
    "curso de manejo",
    "aprender a manejar",
    "autoescuela monterrey",
    "YO TE ENSEÑO",
  ],

  authors: [
    {
      name: "YO TE ENSEÑO",
    },
  ],

  creator: "YO TE ENSEÑO",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "YO TE ENSEÑO",
    title: "YO TE ENSEÑO – Escuela de Manejo en Monterrey",
    description:
      "Perdemos el miedo, ganamos confianza al volante. Clases de manejo personalizadas en Monterrey.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YO TE ENSEÑO – Escuela de Manejo en Monterrey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YO TE ENSEÑO – Escuela de Manejo en Monterrey",
    description:
      "Perdemos el miedo, ganamos confianza al volante. Clases de manejo personalizadas en Monterrey.",
    images: ["/og-image.jpg"],
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
  name: "YO TE ENSEÑO",

  image: `${SITE_URL}/og-image.jpg`,

  url: SITE_URL,

  telephone: "+528128621606",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Av. Prolongación Ruiz Cortines 9010 Local 2",

    addressLocality: "Monterrey",

    addressRegion: "Nuevo León",

    addressCountry: "MX",
  },

  areaServed: {
    "@type": "City",
    name: "Monterrey",
  },

  sameAs: [
    "https://www.instagram.com/yoteenseno_edm/",
    "https://www.tiktok.com/@yoteensenoedm",
    "https://www.facebook.com/profile.php?id=615877092155968",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paquetes de clases de manejo",
    itemListElement: [
      { name: "Express", price: "1999" },
      { name: "Básico", price: "3899" },
      { name: "Avanzado", price: "4699" },
      { name: "Élite", price: "5999" },
      { name: "Premium", price: "6999" },
    ].map((pkg) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `Paquete ${pkg.name} – clases de manejo`,
      },
      price: pkg.price,
      priceCurrency: "MXN",
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
              {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T8DG6CECRM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T8DG6CECRM');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xlgrdkvxsq");
          `}
        </Script>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>

      <body className="font-body">
        {children}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}