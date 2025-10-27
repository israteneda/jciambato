/**
 * Utilidades para generar datos estructurados JSON-LD para SEO
 */

import { NoticiaEvento } from "@/types/noticia";

interface ArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": string;
    name: string;
    url?: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  keywords?: string[];
  articleSection?: string;
  inLanguage?: string;
}

interface EventSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image: string[];
  startDate: string;
  endDate?: string;
  location: {
    "@type": string;
    name: string;
    address?: {
      "@type": string;
      addressLocality: string;
      addressRegion?: string;
      addressCountry: string;
    };
  };
  organizer: {
    "@type": string;
    name: string;
    url: string;
  };
  eventStatus?: string;
  eventAttendanceMode?: string;
  offers?: {
    "@type": string;
    price: string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
}

interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

/**
 * Genera JSON-LD para artículos de noticias
 */
export function generateNewsArticleSchema(
  noticia: NoticiaEvento,
  baseUrl: string = "https://jciambato.org"
): ArticleSchema {
  const articleUrl = `${baseUrl}/noticias-eventos/${noticia.url}`;
  const imageUrl = noticia.imagen.startsWith("http")
    ? noticia.imagen
    : `${baseUrl}${noticia.imagen}`;

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: noticia.titulo,
    description: noticia.descripcion || noticia.subtitulo,
    image: [imageUrl],
    datePublished: convertToISODate(noticia.fecha),
    dateModified: convertToISODate(noticia.fecha),
    author: {
      "@type": "Organization",
      name: "JCI Ambato",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "JCI Ambato",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logos/jci-ambato.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: [
      "JCI Ambato",
      "liderazgo juvenil",
      noticia.titulo,
      noticia.tipo === "noticia" ? "noticia" : "evento",
    ],
    articleSection: "Noticias y Eventos",
    inLanguage: "es-EC",
  };
}

/**
 * Genera JSON-LD para eventos
 */
export function generateEventSchema(
  evento: NoticiaEvento,
  baseUrl: string = "https://jciambato.org"
): EventSchema {
  const imageUrl = evento.imagen.startsWith("http") ? evento.imagen : `${baseUrl}${evento.imagen}`;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: evento.titulo,
    description: evento.descripcion || evento.subtitulo,
    image: [imageUrl],
    startDate: convertToISODate(evento.fecha),
    location: {
      "@type": "Place",
      name: evento.lugar || "Ambato, Ecuador",
      address: {
        "@type": "PostalAddress",
        addressLocality: evento.lugar || "Ambato",
        addressRegion: "Tungurahua",
        addressCountry: "EC",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "JCI Ambato",
      url: baseUrl,
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/noticias-eventos/${evento.url}`,
    },
  };
}

/**
 * Genera JSON-LD para FAQ
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Convierte una fecha en formato texto a ISO 8601
 */
function convertToISODate(fecha: string): string {
  // Intenta parsear diferentes formatos de fecha
  const meses: { [key: string]: string } = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  };

  // Patrón: "Noviembre, 2024" o "11 de Noviembre, 2024"
  const regex = /(\d{1,2}\s+de\s+)?(\w+),?\s+(\d{4})/i;
  const match = fecha.match(regex);

  if (match) {
    const dia = match[1] ? match[1].replace(/\D/g, "") : "01";
    const mes = meses[match[2].toLowerCase()] || "01";
    const año = match[3];

    return `${año}-${mes}-${dia.padStart(2, "0")}`;
  }

  // Si no coincide con el patrón, devuelve fecha actual
  return new Date().toISOString().split("T")[0];
}

/**
 * Genera metadatos Open Graph optimizados para Facebook y LinkedIn
 */
export function generateSocialMetadata(
  noticia: NoticiaEvento,
  baseUrl: string = "https://jciambato.org"
) {
  const articleUrl = `${baseUrl}/noticias-eventos/${noticia.url}`;
  const imageUrl = noticia.imagen.startsWith("http")
    ? noticia.imagen
    : `${baseUrl}${noticia.imagen}`;

  return {
    openGraph: {
      type: noticia.tipo === "evento" ? "article" : "article",
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
