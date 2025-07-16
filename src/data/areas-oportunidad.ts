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
    subtitle: "Impulsa tu visión emprendedora",
    description:
      "Transformamos tus ideas en negocios exitosos con mentoría experta, herramientas prácticas y una sólida red de contactos.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
    background_image:
      "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento-back.webp",
    features: ["Creación de Empresas", "Desarrollo Empresarial", "Networking Global", "Innovación"],
    longDescription:
      "En JCI, creemos que el emprendimiento es clave para el progreso económico y social. Nuestra área de Negocios y Emprendimiento te ofrece un programa completo para potenciar tu visión innovadora. Recibirás mentoría especializada, accederás a herramientas y recursos prácticos, y te conectarás con una red global de emprendedores y profesionales. A través de talleres dinámicos, eventos de networking y proyectos colaborativos, te ayudamos a convertir tus ideas en empresas sostenibles que generen un impacto positivo en tu comunidad y a nivel global. ¡Prepárate para liderar el cambio!",
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
    document: "/documents/areas-oportunidad/negocios-emprendimiento.pdf",
  },
  {
    id: "2",
    slug: "cooperacion-internacional",
    title: "Cooperación Internacional",
    subtitle: "Conectando líderes sin fronteras",
    description:
      "Únete a una red global de jóvenes líderes, participa en intercambios culturales y genera impacto a escala mundial.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
    background_image:
      "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional-back.webp",
    features: [
      "Intercambio Cultural",
      "Redes Globales",
      "Diplomacia Juvenil",
      "Impacto Transfronterizo",
    ],
    longDescription:
      "La Cooperación Internacional en JCI te abre las puertas a un mundo de oportunidades. Como miembro, tendrás acceso a una red sin precedentes de jóvenes líderes de más de 100 países. A través de academias de liderazgo, programas de hermanamiento y eventos internacionales, podrás participar en intercambios culturales que ampliarán tu perspectiva, fomentarás la colaboración global y desarrollarás soluciones innovadoras para los desafíos más apremiantes del mundo. Fortalece tus habilidades diplomáticas y contribuye a un impacto sostenible más allá de nuestras fronteras.",
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
    subtitle: "Potencia tu liderazgo y crecimiento personal",
    description:
      "Desarrolla habilidades clave como oratoria, inteligencia emocional y liderazgo ético para transformar tu potencial.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
    background_image:
      "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual-back.webp",
    features: [
      "Liderazgo Transformacional",
      "Habilidades Blandas",
      "Oratoria",
      "Inteligencia Emocional",
      "Toma de Decisiones",
    ],
    longDescription:
      "En JCI, el Desarrollo Individual es el cimiento de cualquier líder que aspira a generar un impacto duradero. Nuestro programa está diseñado para potenciar tus habilidades blandas y duras, esenciales en el mundo actual. Recibirás capacitación en oratoria para comunicar tus ideas con claridad, fortalecerás tu inteligencia emocional para gestionar desafíos, y te formarás en liderazgo ético para tomar decisiones responsables. A través de experiencias prácticas y mentorías, te ayudamos a descubrir y maximizar tu potencial, preparándote para liderar con confianza y propósito en cualquier ámbito de tu vida.",
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
    subtitle: "Liderando el cambio social local",
    description:
      "Impulsamos proyectos sociales que mejoran la calidad de vida y generan un cambio positivo y sostenible en tu comunidad.",
    responsable: "Juan Pérez",
    responsable_image: "/images/miembros/miembro.png",
    correo: "juan.perez@jciambato.com",
    image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
    background_image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad-back.webp",
    features: [
      "Proyectos Sostenibles",
      "Soluciones Comunitarias",
      "Voluntariado",
      "Responsabilidad Social",
      "Objetivos de Desarrollo Sostenible (ODS)",
    ],
    longDescription:
      "En JCI, el Impacto en la Comunidad es el corazón de nuestra misión. Te invitamos a ser parte del cambio, diseñando e implementando proyectos sociales innovadores que abordan los desafíos más urgentes de tu entorno. Nos enfocamos en crear soluciones sostenibles que no solo resuelvan problemas inmediatos, sino que también generen un cambio positivo duradero y fortalezcan el tejido social. Aquí, tu ciudadanía activa se traduce en acciones concretas que mejoran la calidad de vida y construyen un futuro más prometedor para todos, alineados con los Objetivos de Desarrollo Sostenible de la ONU.",
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
