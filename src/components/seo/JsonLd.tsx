import { toJsonLd } from "@/config/structured-data";

/**
 * Componente genérico para inyectar cualquier schema JSON-LD.
 * Reemplaza a WebsiteStructuredData y OrganizationStructuredData
 * como wrapper único y reutilizable.
 *
 * @example
 * <JsonLd data={getWebsiteJsonLd()} />
 * <JsonLd data={getOrganizationJsonLd()} />
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(data) }}
    />
  );
}
