import type { NavItem } from "@/types/nav";

export type SiteConfig = typeof siteConfig;

export const SITE_INFO = {
  name: "JCI Ambato",
  url: "https://www.jciambato.org",
  ogImage: "/images/logos/jci-ambato.webp",
  description:
    "Únete a JCI Ambato, la red de jóvenes líderes que impulsa proyectos de impacto social, liderazgo y crecimiento personal en Ambato. ¡Sé parte del cambio!",
  keywords: [
    "JCI Ambato",
    "Cámara Junior Internacional",
    "liderazgo juvenil",
    "voluntariado Ecuador",
    "proyectos sociales Ambato",
    "comunidad",
    "jóvenes emprendedores",
    "desarrollo sostenible",
  ],
};

/**
 * MAIN_NAV — fuente única de verdad para las rutas de navegación principal.
 *
 * - Los items con `children` renderizarán dropdowns en DesktopNav
 *   y submenús expandibles en MobileNav.
 * - `description` se usa en el MobileNav para dar contexto.
 */
export const MAIN_NAV: NavItem[] = [
  {
    label: "Nosotros",
    href: "/nosotros",
    description: "Conoce nuestra misión, visión y valores.",
  },
  {
    label: "Impacto",
    href: "/impacto",
    description: "Conoce qué es lo que hacemos.",
  },
  {
    label: "Áreas de Oportunidad",
    href: "/areas-oportunidad",
    description: "Descubre nuestras áreas de impacto comunitario.",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
    description: "Explora nuestros proyectos.",
  },
  {
    label: "Media",
    href: "/noticias-eventos",
    description: "Explora nuestras noticias y eventos.",
  },
  {
    label: "Miembros",
    href: "/miembros",
    description: "Conoce a nuestro equipo de líderes juveniles.",
  },
  {
    label: "Involúcrate",
    href: "/involucrate",
    description: "Únete y forma parte del cambio.",
  },
];

/**
 * Footer links — rutas secundarias que aparecen en el footer.
 */
export const FOOTER_LINKS: NavItem[] = [
  {
    label: "Política de Gestión",
    href: "/politica-gestion",
  },
  {
    label: "Política de Privacidad",
    href: "/politica-privacidad",
  },
];

export const siteConfig = {
  name: "JCI Ambato",
  description:
    "Únete a JCI Ambato, la red de jóvenes líderes que impulsa proyectos de impacto social, liderazgo y crecimiento personal en Ambato. ¡Sé parte del cambio!",
  keywords: [
    "JCI Ambato",
    "Cámara Junior Internacional",
    "liderazgo juvenil",
    "voluntariado Ecuador",
    "proyectos sociales Ambato",
    "comunidad",
    "jóvenes emprendedores",
    "desarrollo sostenible",
  ],
  authors: [
    {
      name: "JCI Ambato",
      url: "https://www.jciambato.org",
    },
  ],
  creator: "JCI Ambato",
  publisher: "JCI Ambato",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jciambato.org"),
  alternates: {
    canonical: "https://www.jciambato.org",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    alternateLocale: ["en_US"],
    url: "https://www.jciambato.org",
    siteName: "JCI Ambato",
    title: "JCI Ambato - Líderes Juveniles por un Futuro Mejor",
    description:
      "Únete a JCI Ambato para desarrollar habilidades de liderazgo, participar en proyectos sociales y generar un impacto positivo en la comunidad.",
    images: [
      {
        url: new URL("/images/logos/jci-ambato.webp", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString(),
        width: 1200,
        height: 630,
        alt: "Logo oficial de JCI Ambato",
      },
      {
        url: new URL("/images/grupo/sesion-solemne-50-aniversario.webp", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString(),
        width: 1200,
        height: 630,
        alt: "JCI Ambato en acción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jciambato",
    creator: "@jciambato",
    title: "JCI Ambato - Líderes Juveniles",
    description:
      "Organización de jóvenes líderes en Ambato, Ecuador, dedicada al voluntariado y desarrollo comunitario.",
    images: [new URL("/images/grupo/sesion-solemne-50-aniversario.webp", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString()],
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
  navItems: MAIN_NAV satisfies NavItem[],
  links: {
    facebook: "https://www.facebook.com/jciambatoec",
    instagram: "https://www.instagram.com/jciambato",
    linkedin: "https://www.linkedin.com/company/jci-ambato/",
    twitter: "https://twitter.com/jciambato",
    youtube: "https://www.youtube.com/channel/jciambato",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.jciambato.org/#organization",
    name: "JCI Ambato",
    legalName: "Cámara Junior Internacional Ambato",
    alternateName: ["Cámara Junior Internacional Ambato", "JCI Ambato Ecuador"],
    url: "https://www.jciambato.org",
    logo: {
      "@type": "ImageObject",
      url: "https://www.jciambato.org/images/logos/jci-ambato.webp",
      width: 500,
      height: 500,
    },
    image: "https://www.jciambato.org/images/logos/jci-ambato.webp",
    description:
      "JCI Ambato es una organización de jóvenes líderes dedicada al desarrollo personal, proyectos de impacto social y crecimiento comunitario en Ambato, Ecuador.",
    foundingDate: "1986",
    slogan: "Unidos Construyendo un Futuro de Liderazgo",
    memberOf: {
      "@type": "Organization",
      name: "JCI (Junior Chamber International)",
      url: "https://www.jci.cc",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ambato",
      addressRegion: "Tungurahua",
      addressCountry: "EC",
      postalCode: "180101",
    },
    areaServed: {
      "@type": "Place",
      name: "Ambato, Tungurahua, Ecuador",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+593-3-123-4567",
        contactType: "Información general",
        email: "ambato@jciecuador.com",
        areaServed: "EC",
        availableLanguage: ["Spanish", "es"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Membresía",
        email: "ambato@jciecuador.com",
        areaServed: "EC",
        availableLanguage: ["Spanish", "es"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/jciambatoec",
      "https://www.instagram.com/jciambato",
      "https://www.linkedin.com/company/jci-ambato/",
      "https://twitter.com/jciambato",
      "https://www.youtube.com/channel/jciambato",
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
  // Datos adicionales para redes sociales
  socialProfiles: {
    facebook: {
      pages: ["https://www.facebook.com/jciambatoec"],
    },
    linkedin: {
      company: "jci-ambato",
    },
  },
};
