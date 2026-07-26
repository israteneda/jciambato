import { Bienvenida, NoticiasEventos } from "./components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias y Eventos — JCI Ambato",
  description:
    "Explora nuestras noticias y eventos que generan impacto positivo en la comunidad de Ambato. Descubre las últimas actividades, proyectos y logros de JCI Ecuador.",
  keywords: [
    "JCI Ambato",
    "noticias JCI",
    "eventos JCI",
    "actividades juveniles",
    "liderazgo Ambato",
    "eventos Ecuador",
    "voluntariado",
    "impacto comunitario",
  ],
  openGraph: {
    title: "Noticias y Eventos — JCI Ambato",
    description:
      "Explora nuestras noticias y eventos que generan impacto positivo en la comunidad de Ambato.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/noticias-eventos`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/noticias_eventos/noticias-eventos-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Noticias y Eventos JCI Ambato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias y Eventos — JCI Ambato",
    description:
      "Explora nuestras noticias y eventos que generan impacto positivo en la comunidad de Ambato.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/images/noticias_eventos/noticias-eventos-og.jpg`,
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/noticias-eventos`,
  },
};

export default function NoticiasEventosPage() {
  return (
    <main>
      <Bienvenida />
      <div className="h-[640px]" aria-hidden="true"></div>
      <NoticiasEventos />
    </main>
  );
}
