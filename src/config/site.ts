export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JCI Ambato",
  descripcion: "Página oficial JCI Ambato",
  keywords: "JCI Ambato, liderazgo, voluntariado, jóvenes, comunidad, proyectos sociales",
  authors: [{ name: "JCI Ambato" }],
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://www.jciambato.com",
    title: "JCI Ambato",
    description: "Página Oficial de JCI Ambato",
    images: [
      {
        url: "/images/jci.png",
        width: 1200,
        height: 630,
        alt: "JCI Ambato Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jciambato.com",
  },
  metadataBase: new URL("https://www.jciambato.com"),
  navItems: [
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Áreas de Oportunidad",
      href: "/areas-oportunidad",
    },
    {
      label: "Actividades",
      href: "/actividades",
    },
    {
      label: "Miembros",
      href: "/miembros",
    },
    {
      label: "Involúcrate",
      href: "/involucrate",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/jciambatoec",
    instagram: "https://www.instagram.com/jciambato",
    linkedin: "https://www.linkedin.com/company/jci-ambato/",
  },
};
