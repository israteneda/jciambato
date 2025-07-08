export type Proyecto = {
  id: string;
  titulo: string;
  subtitulo: string;
  fecha_lugar: string;
  imagen: string;
  area_oportunidad: string; // Para filtrar por área de oportunidad
  url: string; // URL para navegación
  descripcion?: string;
  estado?: "activo" | "completado" | "planificado";
};

export const proyectos: Proyecto[] = [
  // Negocios y Emprendimiento
  {
    id: "1",
    titulo: "Dale Otro Chance",
    subtitulo: "Competencia de emprendimiento de 54 horas",
    fecha_lugar: "2024. Ambato, Ecuador",
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
    titulo: "Mentoría Empresarial JCI",
    subtitulo: "Programa de acompañamiento para startups",
    fecha_lugar: "2024. Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/mentoria-empresarial-jci",
    descripcion: "Conectamos emprendedores con mentores experimentados del sector empresarial",
    estado: "activo",
  },
  {
    id: "3",
    titulo: "Feria de Emprendimiento",
    subtitulo: "Exposición de proyectos innovadores",
    fecha_lugar: "2024. Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/negocios-emprendimiento/proyectos/negocios-emprendimiento-p1.webp",
    area_oportunidad: "negocios-emprendimiento",
    url: "/proyectos/feria-emprendimiento",
    descripcion: "Espacio para que jóvenes emprendedores presenten sus ideas a inversores",
    estado: "planificado",
  },
  {
    id: "4",
    titulo: "Workshop de Innovación",
    subtitulo: "Talleres de design thinking y metodologías ágiles",
    fecha_lugar: "2024. Ambato, Ecuador",
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
    titulo: "Academia de Liderazgo Global",
    subtitulo: "Intercambio cultural y desarrollo de habilidades internacionales",
    fecha_lugar: "2024. Quito, Ecuador",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/academia-liderazgo-global",
    descripcion: "Programa intensivo de liderazgo con participantes de diferentes países",
    estado: "completado",
  },
  {
    id: "6",
    titulo: "Hermanamiento con JCI Tokio",
    subtitulo: "Colaboración internacional con Japón",
    fecha_lugar: "2024. Tokio, Japón",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/hermanamiento-jci-tokio",
    descripcion: "Intercambio cultural y de proyectos con la organización JCI de Tokio",
    estado: "activo",
  },
  {
    id: "7",
    titulo: "Conferencia Mundial JCI",
    subtitulo: "Participación en el evento global de JCI",
    fecha_lugar: "2024. Seúl, Corea del Sur",
    imagen:
      "/images/areas_oportunidad/cooperacion-internacional/proyectos/cooperacion-internacional-p1.webp",
    area_oportunidad: "cooperacion-internacional",
    url: "/proyectos/conferencia-mundial-jci",
    descripcion: "Representación de JCI Ambato en la conferencia mundial anual",
    estado: "planificado",
  },
  {
    id: "8",
    titulo: "Proyecto Binacional Ecuador-Colombia",
    subtitulo: "Iniciativa de desarrollo fronterizo",
    fecha_lugar: "2024. Tulcán, Ecuador",
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
    titulo: "Programa de Oratoria y Debate (Conquistando Audiencias)",
    subtitulo: "Programa intensivo de comunicación efectiva",
    fecha_lugar: "2025. Ambato, Ecuador",
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
    titulo: "Líder a Líder",
    subtitulo: "Programa de capacitación para líderes",
    fecha_lugar: "2025. Ambato, Ecuador",
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
    titulo: "Programa de Liderazgo Ético",
    subtitulo: "Programa de capacitación para líderes",
    fecha_lugar: "2025. Ambato, Ecuador",
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
    titulo: "Programa de Liderazgo",
    subtitulo: "Programa de capacitación para líderes",
    fecha_lugar: "2025. Ambato, Ecuador",
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
    titulo: "Feria del Libro",
    subtitulo: "Feria de venta de libros",
    fecha_lugar: "2025. Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/feria-del-libro",
    descripcion:
      "Feria de venta de libros, con el objetivo de ayudar a la comunidad a tener libros de calidad a un precio accesible.",
    estado: "completado",
  },
  {
    id: "14",
    titulo: "Podcast 'A los Tiempos Pan de Pinllo'",
    subtitulo: "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato",
    fecha_lugar: "2025. Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/podcast-pan-de-pinllo",
    descripcion:
      "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato, con el objetivo de que la gente conozca a estos grandes lideres.",
    estado: "activo",
  },
  {
    id: "15",
    titulo: "Campaña de Donación de Sangre",
    subtitulo: "Jornadas de donación voluntaria de sangre",
    fecha_lugar: "2025. Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/campana-de-donacion-de-sangre",
    descripcion:
      "Organización de jornadas de donación voluntaria de sangre, con el objetivo de ayudar a la comunidad a tener sangre de calidad a un precio accesible.",
    estado: "activo",
  },
  {
    id: "16",
    titulo: "Proyecto de Reciclaje Comunitario",
    subtitulo: "Implementación de sistemas de reciclaje en barrios de la ciudad",
    fecha_lugar: "2025. Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/proyecto-de-reciclaje-comunitario",
    descripcion:
      "Implementación de sistemas de reciclaje en barrios de la ciudad, con el objetivo de ayudar a la comunidad a tener un mejor ambiente y a la vez ayudar a la comunidad a tener un mejor ambiente.",
    estado: "planificado",
  },
  {
    id: "17",
    titulo: "Apoyo a Comedores Comunitarios",
    subtitulo: "Iniciativa de seguridad alimentaria",
    fecha_lugar: "2024. Ambato, Ecuador",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/impacto-comunidad-p1.webp",
    area_oportunidad: "impacto-comunidad",
    url: "/proyectos/apoyo-a-comedores-comunitarios",
    descripcion: "Voluntariado y donaciones para comedores de personas en situación vulnerable",
    estado: "activo",
  },
  {
    id: "18",
    titulo: "Programa de Apoyo Escolar",
    subtitulo: "Tutorías para estudiantes de bajos recursos",
    fecha_lugar: "2024. Ambato, Ecuador",
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
