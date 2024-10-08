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
  author: "JCI Ambato",
  image: "/jci.png",
  url: "https://www.jciambato.com",
  type: "website",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jciambato.com",
    title: "JCI Ambato",
    description: "Página oficial del capítulo JCI Ambato",
    image: "/jci.png",
  },
  canonical: "https://www.jciambato.com",
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} light`}>
        <NavbarComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
