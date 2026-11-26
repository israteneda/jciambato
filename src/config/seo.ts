import { MAIN_NAV, SITE_INFO, SOCIAL_LINKS } from "./site";

/**
 * Configuración completa de SEO, metadatos y datos estructurados.
 *
 * Separado de site.ts para mantener la configuración de navegación limpia (SITE_INFO + MAIN_NAV como constantes independientes).
 */
export const siteConfig = {
  name: SITE_INFO.name,
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: SITE_INFO.name,
      url: SITE_INFO.url,
    },
  ],
  creator: "JCI Ambato",
  publisher: "JCI Ambato",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jciambato.org"),
  alternates: {
    canonical: SITE_INFO.url,
  },
  openGraph: {
    type: "website" as const,
    locale: "es_EC",
    alternateLocale: ["en_US"],
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: "JCI Ambato - Líderes Juveniles por un Futuro Mejor",
    description:
      "Únete a JCI Ambato para desarrollar habilidades de liderazgo, participar en proyectos sociales y generar un impacto positivo en la comunidad.",
    images: [
      {
        url: new URL(
          SITE_INFO.ogImage,
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        ).toString(),
        width: 1200,
        height: 630,
        alt: "Logo oficial de JCI Ambato",
      },
      {
        url: new URL(
          "/images/nosotros/sesion-solemne-50-aniversario.webp",
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        ).toString(),
        width: 1200,
        height: 630,
        alt: "JCI Ambato en acción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    site: "@jciambato",
    creator: "@jciambato",
    title: "JCI Ambato - Líderes Juveniles",
    description:
      "Organización de jóvenes líderes en Ambato, Ecuador, dedicada al voluntariado y desarrollo comunitario.",
    images: [
      new URL(
        "/images/nosotros/sesion-solemne-50-aniversario.webp",
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      ).toString(),
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  navItems: MAIN_NAV,
  links: SOCIAL_LINKS,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization" as const,
    "@id": "https://www.jciambato.org/#organization",
    name: "JCI Ambato",
    legalName: "Cámara Junior Internacional Ambato",
    alternateName: ["Cámara Junior Internacional Ambato", "JCI Ambato Ecuador"],
    url: "https://www.jciambato.org",
    logo: {
      "@type": "ImageObject" as const,
      url: "https://www.jciambato.org/images/marca/jci-ambato.webp",
      width: 500,
      height: 500,
    },
    image: "https://www.jciambato.org/images/marca/jci-ambato.webp",
    description:
      "JCI Ambato es una organización de jóvenes líderes dedicada al desarrollo personal, proyectos de impacto social y crecimiento comunitario en Ambato, Ecuador.",
    foundingDate: "1986",
    slogan: "Unidos Construyendo un Futuro de Liderazgo",
    memberOf: {
      "@type": "Organization" as const,
      name: "JCI (Junior Chamber International)",
      url: "https://www.jci.cc",
    },
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Ambato",
      addressRegion: "Tungurahua",
      addressCountry: "EC",
      postalCode: "180101",
    },
    areaServed: {
      "@type": "Place" as const,
      name: "Ambato, Tungurahua, Ecuador",
    },
    contactPoint: [
      {
        "@type": "ContactPoint" as const,
        telephone: "+593-3-123-4567",
        contactType: "Información general",
        email: "ambato@jciecuador.com",
        areaServed: "EC",
        availableLanguage: ["Spanish", "es"],
      },
      {
        "@type": "ContactPoint" as const,
        contactType: "Membresía",
        email: "ambato@jciecuador.com",
        areaServed: "EC",
        availableLanguage: ["Spanish", "es"],
      },
    ],
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.youtube,
    ],
    keywords: [
      "liderazgo juvenil",
      "voluntariado",
      "impacto social",
      "desarrollo comunitario",
      "emprendimiento",
      "Ambato",
      "Ecuador",
    ],
  },
  socialProfiles: {
    facebook: {
      pages: [SOCIAL_LINKS.facebook],
    },
    linkedin: {
      company: "jci-ambato",
    },
  },
};

export type SiteConfig = typeof siteConfig;
