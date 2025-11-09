export type SiteConfig = typeof siteConfig;

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  alternates: {
    canonical: "https://www.jciambato.org",
    /* languages: {
      "es-EC": "https://www.jciambato.org/es",
    }, */
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
        url: "https://www.jciambato.org/images/jci-ambato.ico",
        width: 100,
        height: 100,
        alt: "Logo oficial de JCI Ambato",
      },
      {
        url: "https://www.jciambato.org/images/grupo/sesion-solemne-50-aniversario.webp",
        width: 100,
        height: 100,
        alt: "JCI Ambato en acción",
      },
    ].map((img) => ({
      ...img,
      url: new URL(img.url, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString(),
    })),
  },
  twitter: {
    card: "summary_large_image",
    site: "@jciambato",
    creator: "@jciambato",
    title: "JCI Ambato - Líderes Juveniles",
    description:
      "Organización de jóvenes líderes en Ambato, Ecuador, dedicada al voluntariado y desarrollo comunitario.",
    images: ["/images/jci-ambato-twitter.png"].map((img) =>
      new URL(img, process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString()
    ),
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
    icon: "/images/jci-ambato.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  navItems: [
    {
      label: "Nosotros",
      href: "/nosotros",
      description: "Conoce nuestra misión, visión y valores.",
    },
    {
      label: "Impacto",
      href: "/impacto",
      description: "Conoce que es lo que hacemos.",
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
  ],
  links: {
    facebook: "https://www.facebook.com/jciambatoec",
    instagram: "https://www.instagram.com/jciambato",
    linkedin: "https://www.linkedin.com/company/jci-ambato/",
    twitter: "https://twitter.com/jciambato",
    youtube: "https://www.youtube.com/channel/jciambato",
    /* whatsapp: "https://wa.me/+593999999999", // Replace with actual WhatsApp number */
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
      appId: "", // Agregar si tienen Facebook App ID
      pages: ["https://www.facebook.com/jciambatoec"],
    },
    linkedin: {
      company: "jci-ambato",
    },
  },
};
