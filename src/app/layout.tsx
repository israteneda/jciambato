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
  description: siteConfig.descripcion,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  openGraph: siteConfig.openGraph,
  alternates: siteConfig.alternates,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = clsx(
    "min-h-screen bg-background font-sans antialiased",
    fontSans.variable
  );

  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={bodyClasses}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar className="relative z-50" />
            <main className="flex-grow w-full pt-16">
              <div className="mx-auto w-full">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}