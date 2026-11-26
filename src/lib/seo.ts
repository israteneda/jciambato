/**
 * Utilidades de SEO no relacionadas con JSON-LD.
 * Los generadores JSON-LD viven en src/lib/json-ld.ts.
 */

import { NoticiaEvento } from "@/types/noticia";
import { convertToISODate } from "@/lib/json-ld";

/**
 * Genera metadatos Open Graph optimizados para Facebook y LinkedIn
 */
export function generateSocialMetadata(
  noticia: NoticiaEvento,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL!
) {
  const articleUrl = `${baseUrl}/noticias-eventos/${noticia.slug}`;
  const imageUrl = noticia.imagen.startsWith("http")
    ? noticia.imagen
    : `${baseUrl}${noticia.imagen}`;

  return {
    openGraph: {
      type: "article" as const,
      locale: "es_EC",
      url: articleUrl,
      siteName: "JCI Ambato",
      title: noticia.titulo,
      description: noticia.descripcion || noticia.subtitulo,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: noticia.titulo,
          type: "image/webp",
        },
      ],
      article: {
        publishedTime: convertToISODate(noticia.fecha),
        modifiedTime: convertToISODate(noticia.fecha),
        section: noticia.tipo === "noticia" ? "Noticias" : "Eventos",
        tag: ["JCI Ambato", "liderazgo juvenil", noticia.tipo],
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@jciambato",
      creator: "@jciambato",
      title: noticia.titulo,
      description: noticia.descripcion || noticia.subtitulo,
      images: [imageUrl],
    },
  };
}
