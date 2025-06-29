export type AreaOportunidad = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  responsable: string;
  responsable_image: string;
  correo: string;
  image: string;
  background_image: string;
  features: string[];
  longDescription?: string;
  brochure?: string;
  images?: Image[];
  document?: string;
};

interface Image {
  src: string;
  alt: string;
}

export const areasOportunidad: AreaOportunidad[] = [
  {
    id: "1",
    slug: "negocios-emprendimiento",
    title: "Negocios y Emprendimiento",
    subtitle: "Fomentando el espíritu emprendedor",
    description:
      "Fomentamos el emprendimiento, transformando ideas en negocios con mentoría, herramientas y redes estratégicas.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
    background_image:
      "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento-back.webp",
    features: ["Emprendimiento", "Innovación Empresarial", "Redes de Negocios"],
    longDescription:
      "En JCI, impulsamos el emprendimiento como motor de desarrollo económico y social. Nuestro programa de Negocios y Emprendimiento empodera a jóvenes visionarios, proporcionándoles herramientas prácticas, mentorías especializadas y acceso a una red global de contactos. A través de talleres, eventos y proyectos, transformamos ideas innovadoras en empresas sostenibles que generan impacto positivo en las comunidades locales y globales.",
    brochure: "/pdf/brochure-negocios-emprendimiento.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 5",
      },
    ],
    document: "/documents/negocios-emprendimiento.pdf",
  },
  {
    id: "2",
    slug: "cooperacion-internacional",
    title: "Cooperación Internacional",
    subtitle: "Conectando líderes globales",
    description:
      "Conectamos líderes a través de academias, hermanamientos y eventos globales para un impacto mundial.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
    background_image:
      "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional-back.webp",
    features: ["Intercambio Cultural", "Redes Globales", "Liderazgo Internacional"],
    longDescription:
      "La Cooperación Internacional de JCI fomenta el liderazgo global mediante conexiones significativas. A través de academias, hermanamientos y eventos internacionales, nuestros miembros acceden a una red mundial de jóvenes líderes. Estas experiencias promueven el intercambio cultural, la colaboración y el desarrollo de soluciones innovadoras para desafíos globales, fortaleciendo la comprensión mutua y el impacto sostenible en comunidades de todo el mundo.",
    brochure: "/pdf/brochure-cooperacion-internacional.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 5",
      },
    ],
    document: "/documents/areas-oportunidad/cooperacion-internacional.pdf",
  },
  {
    id: "3",
    slug: "desarrollo-individual",
    title: "Desarrollo Individual",
    subtitle: "Forjando líderes integrales",
    description:
      "Forjamos líderes con oratoria, inteligencia emocional y liderazgo ético para un impacto transformador.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
    background_image:
      "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual-back.webp",
    features: ["Liderazgo Ético", "Oratoria", "Inteligencia Emocional"],
    longDescription:
      "El Desarrollo Individual es el pilar del liderazgo transformador en JCI. Nuestro programa fortalece habilidades esenciales como la oratoria, la inteligencia emocional y el liderazgo ético. A través de capacitaciones dinámicas y experiencias prácticas, empoderamos a los jóvenes para que descubran su potencial, tomen decisiones informadas y lideren con impacto en sus comunidades y más allá.",
    brochure: "/pdf/brochure-desarrollo-individual.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 5",
      },
    ],
    document: "/documents/areas-oportunidad/desarrollo-individual.pdf",
  },
  {
    id: "4",
    slug: "impacto-comunidad",
    title: "Impacto en la Comunidad",
    subtitle: "Transformando vidas localmente",
    description:
      "Transformamos comunidades con proyectos sociales que mejoran vidas y generan cambios sostenibles.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
    background_image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad-back.webp",
    features: ["Impacto Social", "Proyectos Sostenibles", "Ciudadanía Activa"],
    longDescription:
      "En JCI, el Impacto en la Comunidad es nuestra misión principal. Diseñamos y ejecutamos proyectos sociales que abordan desafíos locales, desde mejorar la calidad de vida hasta fortalecer el tejido social. Con un enfoque en sostenibilidad y ciudadanía activa, trabajamos junto a las comunidades para crear soluciones innovadoras que generan cambios positivos y duraderos.",
    brochure: "/pdf/brochure-impacto-comunidad.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 5",
      },
    ],
    document: "/documents/areas-oportunidad/impacto-comunidad.pdf",
  },
];

export function getAreaBySlug(slug: string): AreaOportunidad | undefined {
  return areasOportunidad.find((area) => area.slug === slug);
}

export function getAllAreas(): AreaOportunidad[] {
  return areasOportunidad;
}
