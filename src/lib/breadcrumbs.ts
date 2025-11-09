/**
 * Genera datos estructurados para Breadcrumbs (migas de pan)
 * Útil para mejorar la navegación en resultados de búsqueda
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = "https://jciambato.org"
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

/**
 * Ejemplo de uso en una página de noticia:
 *
 * const breadcrumbs = [
 *   { name: "Inicio", url: "/" },
 *   { name: "Noticias y Eventos", url: "/noticias-eventos" },
 *   { name: "Título de la Noticia", url: "/noticias-eventos/slug" },
 * ];
 *
 * const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
 */
