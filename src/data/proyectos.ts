export type Proyecto = {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  director: string; // Nombre del director del proyecto
  area_oportunidad: string; // Para filtrar por área de oportunidad
  url: string; // URL para navegación
  descripcion?: string;
  estado?: "activo" | "completado" | "planificado";
};

export const proyectos: Proyecto[] = [
  // Negocios y Emprendimiento
  {
    id: "1",
    slug: "dale-otro-chance",
    titulo: "Dale Otro Chance",
    subtitulo: "Competencia de emprendimiento de 54 horas",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    director: "Juan Pablo Pérez",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/dale-otro-chance",
    descripcion:
      "Evento de venta de ropa de segunda mano, con el objetivo de ayudar a los jóvenes a tener un ingreso extra y a la vez ayudar a la comunidad a tener ropa de calidad a un precio accesible.",
    estado: "completado",
  },
  {
    id: "2",
    slug: "mentoria-empresarial-jci",
    titulo: "Mentoría Empresarial JCI",
    subtitulo: "Programa de acompañamiento para startups",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/mentoria-empresarial-jci",
    descripcion: "Conectamos emprendedores con mentores experimentados del sector empresarial",
    estado: "activo",
  },
  {
    id: "3",
    slug: "feria-emprendimiento",
    titulo: "Feria de Emprendimiento",
    subtitulo: "Exposición de proyectos innovadores",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/feria-emprendimiento",
    descripcion: "Espacio para que jóvenes emprendedores presenten sus ideas a inversores",
    estado: "planificado",
  },
  {
    id: "4",
    slug: "workshop-innovacion",
    titulo: "Workshop de Innovación",
    subtitulo: "Talleres de design thinking y metodologías ágiles",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/workshop-innovacion",
    descripcion: "Capacitación en herramientas modernas de innovación empresarial",
    estado: "activo",
  },

  // Cooperación Internacional
  {
    id: "5",
    slug: "academia-liderazgo-global",
    titulo: "Academia de Liderazgo Global",
    subtitulo: "Intercambio cultural y desarrollo de habilidades internacionales",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Quito, Ecuador",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/academia-liderazgo-global",
    descripcion: "Programa intensivo de liderazgo con participantes de diferentes países",
    estado: "completado",
  },
  {
    id: "6",
    slug: "hermanamiento-jci-tokio",
    titulo: "Hermanamiento con JCI Tokio",
    subtitulo: "Colaboración internacional con Japón",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Tokio, Japón",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/hermanamiento-jci-tokio",
    descripcion: "Intercambio cultural y de proyectos con la organización JCI de Tokio",
    estado: "activo",
  },
  {
    id: "7",
    slug: "conferencia-mundial-jci",
    titulo: "Conferencia Mundial JCI",
    subtitulo: "Participación en el evento global de JCI",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Seúl, Corea del Sur",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/conferencia-mundial-jci",
    descripcion: "Representación de JCI Ambato en la conferencia mundial anual",
    estado: "planificado",
  },
  {
    id: "8",
    slug: "proyecto-binacional-ecuador-colombia",
    titulo: "Proyecto Binacional Ecuador-Colombia",
    subtitulo: "Iniciativa de desarrollo fronterizo",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Tulcán, Ecuador",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/proyecto-binacional-ecuador-colombia",
    descripcion: "Colaboración con JCI Colombia para proyectos de desarrollo regional",
    estado: "activo",
  },

  // Desarrollo Individual
  {
    id: "9",
    slug: "conquistando-audiencias",
    titulo: "Programa de Oratoria y Debate (Conquistando Audiencias)",
    subtitulo: "Programa intensivo de comunicación efectiva",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/conquistando-audiencias",
    descripcion:
      "Desarrollo de habilidades de comunicación y presentación en público, con el objetivo de que los jóvenes se sientan más confiados y puedan expresarse mejor en público.",
    estado: "completado",
  },
  {
    id: "10",
    slug: "lider-a-lider",
    titulo: "Líder a Líder",
    subtitulo: "Programa de capacitación para líderes",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/lider-a-lider",
    descripcion:
      "Programa de capacitación para líderes, con el objetivo de que los líderes se sientan más confiados y puedan liderar mejor.",
    estado: "activo",
  },
  {
    id: "11",
    slug: "programa-liderazgo-etico",
    titulo: "Programa de Liderazgo Ético",
    subtitulo: "Programa de capacitación para líderes",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/programa-liderazgo-etico",
    descripcion:
      "Programa de capacitación para líderes, con el objetivo de que los líderes se sientan más confiados y puedan liderar mejor.",
    estado: "activo",
  },
  {
    id: "12",
    slug: "programa-liderazgo",
    titulo: "Programa de Liderazgo",
    subtitulo: "Programa de capacitación para líderes",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    area_oportunidad: "desarrollo-individual",
    url: "/proyectos/programa-liderazgo",
    descripcion:
      "Programa de capacitación para líderes, con el objetivo de que los líderes se sientan más confiados y puedan liderar mejor.",
    estado: "planificado",
  },

  // Impacto en la Comunidad
  {
    id: "13",
    slug: "feria-del-libro",
    titulo: "Feria del Libro",
    subtitulo: "Feria de venta de libros",
    director: "Juan Pablo Pérez",
      fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/feria-del-libro",
    descripcion:
      "Feria de venta de libros, con el objetivo de ayudar a la comunidad a tener libros de calidad a un precio accesible.",
    estado: "completado",
  },
  {
    id: "14",
    slug: "podcast-pan-de-pinllo",
    titulo: "Podcast 'A los Tiempos Pan de Pinllo'",
    subtitulo: "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/podcast-pan-de-pinllo",
    descripcion:
      "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato, con el objetivo de que la gente conozca a estos grandes lideres.",
    estado: "activo",
  },
  {
    id: "15",
    slug: "campana-de-donacion-de-sangre",
    titulo: "Campaña de Donación de Sangre",
    subtitulo: "Jornadas de donación voluntaria de sangre",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/campana-de-donacion-de-sangre",
    descripcion:
      "Organización de jornadas de donación voluntaria de sangre, con el objetivo de ayudar a la comunidad a tener sangre de calidad a un precio accesible.",
    estado: "activo",
  },
  {
    id: "16",
    slug: "proyecto-de-reciclaje-comunitario",
    titulo: "Proyecto de Reciclaje Comunitario",
    subtitulo: "Implementación de sistemas de reciclaje en barrios de la ciudad",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/proyecto-de-reciclaje-comunitario",
    descripcion:
      "Implementación de sistemas de reciclaje en barrios de la ciudad, con el objetivo de ayudar a la comunidad a tener un mejor ambiente y a la vez ayudar a la comunidad a tener un mejor ambiente.",
    estado: "planificado",
  },
  {
    id: "17",
    slug: "apoyo-a-comedores-comunitarios",
    titulo: "Apoyo a Comedores Comunitarios",
    subtitulo: "Iniciativa de seguridad alimentaria",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/apoyo-a-comedores-comunitarios",
    descripcion: "Voluntariado y donaciones para comedores de personas en situación vulnerable",
    estado: "activo",
  },
  {
    id: "18",
    slug: "programa-de-apoyo-escolar",
    titulo: "Programa de Apoyo Escolar",
    subtitulo: "Tutorías para estudiantes de bajos recursos",
    director: "Juan Pablo Pérez",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/programa-de-apoyo-escolar",
    descripcion: "Acompañamiento académico y emocional a estudiantes vulnerables",
    estado: "activo",
  },
];

// Funciones de utilidad para filtrar proyectos
export function getProyectosPorArea(areaSlug: string): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.area_oportunidad === areaSlug);
}

export function getAllProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectoById(id: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.id === id);
}

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.slug === slug);
}

export function getProyectosPorEstado(estado: "activo" | "completado" | "planificado"): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.estado === estado);
}

// Función para obtener el conteo de proyectos por área
export function getConteoProyectosPorArea(): { [key: string]: number } {
  const conteo: { [key: string]: number } = {};

  proyectos.forEach((proyecto) => {
    if (conteo[proyecto.area_oportunidad]) {
      conteo[proyecto.area_oportunidad]++;
    } else {
      conteo[proyecto.area_oportunidad] = 1;
    }
  });

  return conteo;
}
