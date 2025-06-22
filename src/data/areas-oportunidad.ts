export type AreaOportunidad = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  longDescription?: string;
};

export const areasOportunidad: AreaOportunidad[] = [
  {
    id: "1",
    slug: "negocios-emprendimiento",
    title: "Negocios y Emprendimiento",
    subtitle: "Impulsamos la cultura emprendedora",
    description:
      "Impulsamos la cultura emprendedora. Creamos espacios donde las ideas se convierten en negocios y los jóvenes acceden a herramientas reales, mentoría y redes estratégicas.",
    image: "/images/areas_oportunidad/area.webp",
    features: ["Emprendimiento", "Negocios", "Mentoría"],
    longDescription:
      "En JCI Ambato, creemos que el emprendimiento es la fuerza motriz del desarrollo económico y social. Nuestro programa de Negocios y Emprendimiento está diseñado para empoderar a jóvenes visionarios con las herramientas, conocimientos y conexiones necesarias para transformar sus ideas en empresas exitosas.",
  },
  {
    id: "2",
    slug: "cooperacion-internacional",
    title: "Cooperación Internacional",
    subtitle: "Participamos en academias",
    description:
      "Participamos en academias, hermanamientos y eventos globales para conectar a nuestros miembros con una red mundial de líderes comprometidos.",
    image: "/images/areas_oportunidad/area.webp",
    features: ["Academias", "Hermanamientos", "Eventos Globales"],
    longDescription:
      "La cooperación internacional es fundamental para el desarrollo de líderes globales. A través de nuestra red mundial de JCI, conectamos a nuestros miembros con oportunidades únicas de aprendizaje, intercambio cultural y colaboración internacional.",
  },
  {
    id: "3",
    slug: "desarrollo-individual",
    title: "Desarrollo Individual",
    subtitle: "Formamos líderes desde adentro",
    description:
      "Formamos líderes desde adentro: oratoria, inteligencia emocional, liderazgo ético y más. Nuestro objetivo es empoderar al ser para impactar mejor.",
    image: "/images/areas_oportunidad/area.webp",
    features: ["Oratoria", "Inteligencia Emocional", "Liderazgo Ético"],
    longDescription:
      "El desarrollo personal es la base del liderazgo efectivo. Nuestro programa de Desarrollo Individual se enfoca en fortalecer las habilidades blandas, la inteligencia emocional y las competencias de liderazgo que son esenciales para el éxito en cualquier ámbito.",
  },
  {
    id: "4",
    slug: "impacto-comunidad",
    title: "Impacto en la Comunidad",
    subtitle: "La acción social es nuestra bandera",
    description:
      "La acción social es nuestra bandera. Trabajamos en proyectos que mejoran vidas, fortalecen barrios y transforman realidades locales.",
    image: "/images/areas_oportunidad/area.webp",
    features: ["Acciones Sociales", "Proyectos de Impacto", "Colaboración Internacional"],
    longDescription:
      "Creemos en el poder transformador de la acción social. Nuestro programa de Impacto en la Comunidad se dedica a identificar y ejecutar proyectos que generen un cambio positivo y duradero en nuestra sociedad.",
  },
];

export function getAreaBySlug(slug: string): AreaOportunidad | undefined {
  return areasOportunidad.find((area) => area.slug === slug);
}

export function getAllAreas(): AreaOportunidad[] {
  return areasOportunidad;
}
