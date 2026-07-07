import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontArvo, fontPlusJakarta } from "@/config/fonts";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import ChatbotWrapper from "@/components/ui/ChatbotWrapper";
import Clarity from "@/components/ui/Clarity";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/seo";
import { GoogleTagManager } from "@/components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://jciambato.org"),
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
        url: "/images/logos/jci-ambato.webp",
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
    images: ["/images/logos/jci-ambato.webp"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bodyClasses = clsx(
    "min-h-screen bg-background font-sans antialiased",
    fontPlusJakarta.variable,
    fontArvo.variable
  );

  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <meta name="application-name" content="JCI Ambato" />
        <meta name="apple-mobile-web-app-title" content="JCI Ambato" />

        {/* Open Graph adicional para Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JCI Ambato" />

        {/* Datos Estructurados para SEO */}
        <OrganizationStructuredData />
        <WebsiteStructuredData />

        {/* Google Tag Manager para Analytics */}
        <GoogleTagManager />
      </head>

      <body className={bodyClasses}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="grow bg-gray-50">{children}</main>
            <Footer />
            <ChatbotWrapper />
            <Clarity />
          </div>
        </Providers>
      </body>
    </html>
  );
}
