import { siteConfig } from "@/config/site";

/**
 * Datos estructurados JSON-LD para Organización
 * Ayuda a Google a entender información sobre JCI Ambato como organización
 * Mejora SEO y puede aparecer en Knowledge Graph de Google
 */
export function OrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteConfig.structuredData),
      }}
    />
  );
}
