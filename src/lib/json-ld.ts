import { siteConfig } from "@/config/seo";
import { SITE_INFO } from "@/config/site";
import { NoticiaEvento } from "@/types/noticia";

// ──────────────────────────────────────────────
// Tipos
// ──────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

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

// ──────────────────────────────────────────────
// Sanitizer
// ──────────────────────────────────────────────

/**
 * Sanitiza JSON-LD para inyección segura con dangerouslySetInnerHTML.
 * Escapa </script> para prevenir XSS incluso con contenido propio.
 */
export function toJsonLd<T>(data: T): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ──────────────────────────────────────────────
// JSON-LD estático (basado en configuración del sitio)
// ──────────────────────────────────────────────

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_INFO.url}/#website`,
    url: SITE_INFO.url,
    name: SITE_INFO.name,
    alternateName: ["Cámara Junior Internacional Ambato", "JCI Ambato"],
  };
}

export function getOrganizationJsonLd() {
  return siteConfig.structuredData;
}

// ──────────────────────────────────────────────
// BreadcrumbList
// ──────────────────────────────────────────────

/**
 * Genera datos estructurados para Breadcrumbs (migas de pan)
 * Útil para mejorar la navegación en resultados de búsqueda
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL!,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// ──────────────────────────────────────────────
// NewsArticle / Event / FAQ — generados desde datos dinámicos
// ──────────────────────────────────────────────

/**
 * Genera JSON-LD para artículos de noticias
 */
export function generateNewsArticleSchema(
  noticia: NoticiaEvento,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL!,
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
        url: `${baseUrl}/images/marca/jci-ambato.webp`,
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
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL!,
): EventSchema {
  const imageUrl = evento.imagen.startsWith("http")
    ? evento.imagen
    : `${baseUrl}${evento.imagen}`;

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
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): FAQSchema {
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

// ──────────────────────────────────────────────
// Helpers internos
// ──────────────────────────────────────────────

/**
 * Convierte una fecha en formato texto a ISO 8601
 */
export function convertToISODate(fecha: string): string {
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
