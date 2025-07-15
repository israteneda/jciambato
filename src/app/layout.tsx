import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import Chatbot from "@/components/ui/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://jciambato.org"),
  title: {
    default: "JCI Ambato — Formación de Líderes Juveniles con Impacto Social",
    template: "%s | JCI Ambato",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  openGraph: {
    ...siteConfig.openGraph,
    type: "website",
    locale: "es_EC",
    siteName: "JCI Ambato",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCI Ambato — Formación de Líderes Juveniles con Impacto Social",
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
  // Clases para el body con clsx
  const bodyClasses = clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable);

  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={bodyClasses}>
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container max-w-full bg-gray-50">{children}</main>
            <Footer />
            <Chatbot />
          </div>
        </Providers>
      </body>
    </html>
  );
}
