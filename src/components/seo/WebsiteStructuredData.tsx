/**
 * Datos estructurados JSON-LD para WebSite
 * Habilita el search box en resultados de Google
 * Mejora la apariencia en SERPs (Search Engine Results Pages)
 */
export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.jciambato.org/#website",
    url: "https://www.jciambato.org",
    name: "JCI Ambato",
    alternateName: ["Camara Junior Internacional Ambato", "JCI Ambato"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
