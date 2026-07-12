import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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

const SITE_URL = "https://yoteenseno.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "YO TE ENSEÑO – Escuela de Manejo",
    template: "%s | YO TE ENSEÑO",
  },

  description:
    "Aprende a manejar con confianza. Clases de manejo personalizadas con instructores certificados, autos con doble pedal y horarios flexibles.",

  keywords: [
    "escuela de manejo",
    "escuela de manejo monterrey",
    "clases de manejo",
    "curso de manejo",
    "aprender a manejar",
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
    title: "YO TE ENSEÑO – Escuela de Manejo",
    description:
      "Perdemos el miedo, ganamos confianza al volante.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YO TE ENSEÑO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YO TE ENSEÑO",
    description:
      "Perdemos el miedo, ganamos confianza al volante.",
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

  sameAs: [
    "https://www.instagram.com/yoteenseno_edm/",
    "https://www.tiktok.com/@yoteensenoedm",
    "https://www.facebook.com/profile.php?id=615877092155968",
  ],
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
      </head>

      <body className="font-body">
        {children}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}