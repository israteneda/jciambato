import { notFound } from "next/navigation";
import { getNoticiaEventoBySlug, getAllNoticiasEventos } from "@/data/noticias";
import { Detalles } from "@/app/noticias-eventos/components/slug";

interface NoticiasEventosPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const noticiasEventos = getAllNoticiasEventos();

  return noticiasEventos.map((noticia) => ({
    slug: noticia.url,
  }));
}

export async function generateMetadata({ params }: NoticiasEventosPageProps) {
  const { slug } = await params;
  const noticiaEvento = getNoticiaEventoBySlug(slug);

  if (!noticiaEvento) {
    return {
      title: "Noticia o evento no encontrado — Noticias y Eventos",
      description: "La página que buscas no existe.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jciambato.org";
  const noticiaEventoUrl = `${baseUrl}/noticias-eventos/${slug}`;
  const noticiaEventoImage = noticiaEvento.imagen
    ? `${baseUrl}${noticiaEvento.imagen}`
    : `${baseUrl}/images/logos/jci-ambato.webp`;

  return {
    title: `${noticiaEvento.titulo} — Noticias y Eventos`,
    description:
      noticiaEvento.descripcion ||
      noticiaEvento.subtitulo ||
      "Descubre esta noticia o evento de JCI Ambato",
    keywords: [
      "JCI Ambato",
      "noticias",
      "eventos",
      "liderazgo juvenil",
      "voluntariado",
      noticiaEvento.titulo,
      ...(noticiaEvento.tipo ? [noticiaEvento.tipo] : []),
    ],
    openGraph: {
      title: noticiaEvento.titulo,
      description:
        noticiaEvento.descripcion ||
        noticiaEvento.subtitulo ||
        "Descubre esta noticia o evento de JCI Ambato",
      url: noticiaEventoUrl,
      siteName: "JCI Ambato",
      images: [
        {
          url: noticiaEventoImage,
          width: 1200,
          height: 630,
          alt: `Imagen de la noticia o evento: ${noticiaEvento.titulo}`,
        },
      ],
      locale: "es_EC",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: noticiaEvento.titulo,
      description:
        noticiaEvento.descripcion ||
        noticiaEvento.subtitulo ||
        "Descubre esta noticia o evento de JCI Ambato",
      images: [noticiaEventoImage],
    },
    alternates: {
      canonical: noticiaEventoUrl,
    },
  };
}

export default async function NoticiasEventosPage({ params }: NoticiasEventosPageProps) {
  const { slug } = await params;
  const noticiaEvento = getNoticiaEventoBySlug(slug);

  if (!noticiaEvento) {
    notFound();
  }

  return (
    <main className="relative">
      <Detalles noticiaEvento={noticiaEvento} />
    </main>
  );
}
