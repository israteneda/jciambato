import { Providers } from "./providers";
import "@/styles/globals.css";

import { NavbarComponent } from "@/components/NavbarComponent";
import { FooterComponent } from "@/components/FooterComponent";

export const metadata = {
  title: "JCI Ambato",
  description: "Página oficial del capítulo JCI Ambato",
  keywords:
    "JCI Ambato, liderazgo, voluntariado, jóvenes, comunidad, proyectos sociales",
  author: "JCI Ambato",
  image: "/jci.png",
  url: "",
  type: "website",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "",
    title: "JCI Ambato",
    description: "Página oficial del capítulo JCI Ambato",
    image: "/jci.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="light">
      <body>
        <Providers>
          <NavbarComponent />
          <main className="relative">{children}</main>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
