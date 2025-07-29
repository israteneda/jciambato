import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontHelveticaNeue, fontRockwell } from "@/config/fonts";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import ChatbotWrapper from "@/components/ui/ChatbotWrapper";
import Clarity from "@/components/ui/Clarity";

export const metadata: Metadata = {
  metadataBase: new URL("https://jciambato.org"),
  title: {
    default: "JCI Ambato — Unidos Construyendo un Futuro de Liderazgo",
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
  // Clases para el body con clsx
  const bodyClasses = clsx(
    "min-h-screen bg-background font-sans antialiased",
    fontSans.variable,
    fontHelveticaNeue.variable,
    fontRockwell.variable
  );

  return (
    <html suppressHydrationWarning lang="es">
      <head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TK3VTGZ5');`}
        </script>
        {/* End Google Tag Manager */}
      </head>
      <body className={bodyClasses}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TK3VTGZ5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container max-w-full bg-gray-50">{children}</main>
            <Footer />
            <ChatbotWrapper />
            <Clarity />
          </div>
        </Providers>
      </body>
    </html>
  );
}
