import { siteConfig } from "@/config/seo";
import { SITE_INFO } from "@/config/site";

/**
 * Datos estructurados JSON-LD centralizados.
 * Funciones puras separadas de los componentes de presentación.
 */

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

/**
 * Sanitiza JSON-LD para inyección segura con dangerouslySetInnerHTML.
 * Escapa </script> para prevenir XSS incluso con contenido propio.
 */
export function toJsonLd<T>(data: T): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
