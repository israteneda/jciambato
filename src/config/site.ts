import type { NavItem } from "@/types/nav";

/**
 * Información básica del sitio — estilo My-Portfolio (SITE_INFO + MAIN_NAV).
 * El SEO pesado vive en src/config/seo.ts.
 */
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
 * Meta theme colors para theme-color dinámico.
 * Se usa en layout.tsx para el script inline y el viewport.
 */
export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/jciambatoec",
  instagram: "https://www.instagram.com/jciambato",
  linkedin: "https://www.linkedin.com/company/jci-ambato/",
  twitter: "https://twitter.com/jciambato",
  youtube: "https://www.youtube.com/channel/jciambato",
};

/**
 * MAIN_NAV — fuente única de verdad para las rutas de navegación principal.
 * - `description` se usa en el MobileNav para dar contexto.
 * - `children` está disponible para futuros dropdowns.
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
