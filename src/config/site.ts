export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JCI Ambato",
  description:
    "Página oficial de JCI Ambato, una organización de jóvenes líderes comprometidos con el desarrollo comunitario, liderazgo y voluntariado en Ambato, Ecuador.",
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
      url: "https://www.jciambato.com",
    },
  ],
  creator: "JCI Ambato",
  publisher: "JCI Ambato",
  metadataBase: new URL("https://www.jciambato.com"),
  alternates: {
    canonical: "https://www.jciambato.com",
    languages: {
      "es-EC": "https://www.jciambato.com/es",
      "en-US": "https://www.jciambato.com/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    alternateLocale: ["en_US"],
    url: "https://www.jciambato.com",
    siteName: "JCI Ambato",
    title: "JCI Ambato - Líderes Juveniles por un Futuro Mejor",
    description:
      "Únete a JCI Ambato para desarrollar habilidades de liderazgo, participar en proyectos sociales y generar un impacto positivo en la comunidad.",
    images: [
      {
        url: "/images/jci.png",
        width: 1200,
        height: 630,
        alt: "Logo oficial de JCI Ambato",
      },
      {
        url: "/images/jci-ambato-secondary.png",
        width: 800,
        height: 400,
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
    images: ["/images/jci-ambato-twitter.png"],
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
    icon: "/favicon.ico",
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
      label: "Áreas de Oportunidad",
      href: "/areas-oportunidad",
      description: "Descubre nuestras áreas de impacto comunitario.",
    },
    {
      label: "Actividades",
      href: "/actividades",
      description: "Explora nuestros eventos y proyectos.",
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
    whatsapp: "https://wa.me/+593999999999", // Replace with actual WhatsApp number
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "JCI Ambato",
    alternateName: "Cámara Junior Internacional Ambato",
    url: "https://www.jciambato.com",
    logo: "https://www.jciambato.com/images/jci.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+593-3-123-4567", // Replace with actual phone number
      contactType: "Información general",
      email: "info@jciambato.com",
      areaServed: "EC",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://www.facebook.com/jciambatoec",
      "https://www.instagram.com/jciambato",
      "https://www.linkedin.com/company/jci-ambato/",
      "https://twitter.com/jciambato",
      "https://www.youtube.com/channel/jciambato",
    ],
  },
};
