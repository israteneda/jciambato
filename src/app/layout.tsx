import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

import { META_THEME_COLORS } from "@/config/site";
import { siteConfig } from "@/config/seo";
import { fontPlusJakarta, fontArvo } from "@/config/fonts";
import { JsonLd } from "@/components/seo";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/json-ld";
import { GoogleTagManager } from "@/components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jciambato.org"),
  title: {
    default: "JCI Ambato — Unidos Construyendo un Futuro de Liderazgo",
    template: "%s | JCI Ambato",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  openGraph: {
    ...siteConfig.openGraph,
    type: "website",
    locale: "es_EC",
    siteName: "JCI Ambato",
    images: [
      {
        url: "/images/marca/jci-ambato.webp",
        width: 1200,
        height: 630,
        alt: "JCI Ambato - Organización de Jóvenes Líderes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jciambato",
    creator: "@jciambato",
    title: "JCI Ambato — Unidos Construyendo un Futuro de Liderazgo",
    description: siteConfig.description,
    images: ["/images/marca/jci-ambato.webp"],
  },
  alternates: siteConfig.alternates,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  applicationName: "JCI Ambato",
  appleWebApp: {
    title: "JCI Ambato",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Script inline que se ejecuta antes del render para detección de plataforma
const platformScript = String.raw`
  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontPlusJakarta.variable} ${fontArvo.variable}`} suppressHydrationWarning>
      <head>
        {/* Script pre-render: detección de plataforma */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: platformScript }} />

        {/* Datos Estructurados para SEO */}
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />

        {/* Google Tag Manager */}
        <GoogleTagManager />
      </head>

      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
