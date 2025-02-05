export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JCI Ambato",
  descripcion: "Página oficial del capítulo JCI Ambato",
  keywords:
    "JCI Ambato, liderazgo, voluntariado, jóvenes, comunidad, proyectos sociales",

  authors: [{ name: "JCI Ambato" }],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jciambato.com",
    title: "JCI Ambato",
    description: "Página oficial del capítulo JCI Ambato",
    images: [
      { url: "/jci.png", width: 1200, height: 630, alt: "JCI Ambato Logo" },
    ],
  },
  alternates: {
    canonical: "https://www.jciambato.com",
  },

  navItems: [
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Áreas de Oportunidad",
      href: "/areas_oportunidad",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
    {
      label: "Involúcrate",
      href: "/involucrate",
    },
  ],

  navMenuItems: [
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Áreas de Oportunidad",
      href: "/areas_oportunidad",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
    {
      label: "Involúcrate",
      href: "/involucrate",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/jciambato",
    instagram: "https://www.instagram.com/jciambato",
    linkedin: "https://www.linkedin.com/company/jciambato",
  },
};
