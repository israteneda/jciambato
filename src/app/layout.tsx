import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/shared/navbar";
import { FooterComponent } from "@/components/shared/footer";

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

  // Clases para el body con clsx
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
            <Navbar />
            <main className="container max-w-full bg-gray-50">
              {children}
            </main>
            <FooterComponent />
          </div>
        </Providers>
      </body>
    </html>
  );
}