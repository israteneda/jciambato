import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  openGraph: siteConfig.openGraph,
  alternates: siteConfig.alternates,
  robots: {
    index: true,
    follow: true,
  },
  icons: siteConfig.icons,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Clases para el body con clsx
  const bodyClasses = clsx("font-sans leading-none", fontSans.variable);

  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={bodyClasses}>
        <Providers>
          <div className="flex flex-col">
            <Navbar />
            <main className="relative z-10 bg-gray-50">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
