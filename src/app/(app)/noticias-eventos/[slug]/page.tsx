import { notFound } from "next/navigation";
import { getNoticiaEventoBySlug, getAllNoticiasEventos } from "@/features/noticias-eventos/data";
import { Detalles } from "@/features/noticias-eventos/components/slug";
import {
  generateNewsArticleSchema,
  generateEventSchema,
  generateBreadcrumbSchema,
} from "@/lib/json-ld";
import { generateSocialMetadata } from "@/lib/seo";

interface NoticiasEventosPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const noticiasEventos = getAllNoticiasEventos();

  return noticiasEventos.map((noticia) => ({
    slug: noticia.slug,
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const noticiaEventoUrl = `${baseUrl}/noticias-eventos/${slug}`;

  // Generar metadatos sociales optimizados
  const socialMetadata = generateSocialMetadata(noticiaEvento, baseUrl);

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
    ...socialMetadata,
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const breadcrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Noticias y Eventos", url: "/noticias-eventos" },
    { name: noticiaEvento.titulo, url: `/noticias-eventos/${slug}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs, baseUrl);

  // Generar datos estructurados según el tipo
  const structuredData =
    noticiaEvento.tipo === "evento"
      ? generateEventSchema(noticiaEvento, baseUrl)
      : generateNewsArticleSchema(noticiaEvento, baseUrl);

  return (
    <>
      {/* JSON-LD para Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* JSON-LD para Noticia/Evento */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Detalles noticiaEvento={noticiaEvento} />
    </>
  );
}
