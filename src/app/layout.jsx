import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { NavbarComponent } from "@/components/NavbarComponent";
import { FooterComponent } from "@/components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JCI Ambato",
  description: "Página oficial del capítulo JCI Ambato",
  keywords:
    "JCI Ambato, liderazgo, voluntariado, jóvenes, comunidad, proyectos sociales",
  authors: [{ name: "JCI Ambato" }],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jciambato.com",
    title: "JCI Ambato",
    description: "Página oficial del capítulo JCI Ambato",
    images: [
      { url: "/jci.png", width: 1200, height: 630, alt: "JCI Ambato Logo" },
    ],
  },
  alternates: {
    canonical: "https://www.jciambato.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavbarComponent />
        <main className="flex-grow">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
