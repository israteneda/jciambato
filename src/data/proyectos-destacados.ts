export type ProyectoDestacado = {
  id: number;
  title: string;
  projectName: string;
  edition: string;
  url: string;
  description: string;
  image: string;
  premio?: string;
  categoria?: string;
  año?: string;
};

export const proyectosDestacados: ProyectoDestacado[] = [
  {
    id: 1,
    title: "Programa de Oratoria y Debate",
    projectName: "Conquistando Audiencias",
    edition: "2024",
    url: "/proyectos/conquistando-audiencias",
    description:
      "Programa intensivo de desarrollo de habilidades de comunicación efectiva que empodera a jóvenes líderes para expresarse con confianza y elocuencia en cualquier escenario público.",
    image:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    premio: "Mejor Proyecto de Desarrollo Individual",
    categoria: "Desarrollo Individual",
    año: "2024",
  },
  {
    id: 2,
    title: "Iniciativa de Impacto Comunitario",
    projectName: "Feria del Libro",
    edition: "2024",
    url: "/proyectos/feria-del-libro",
    description:
      "Proyecto innovador de economía circular que promueve la sostenibilidad ambiental y el emprendimiento social, conectando donantes con personas que necesitan ropa de calidad a precios accesibles.",
    image:
      "/images/areas_oportunidad/impacto-comunidad/proyectos/feria-libro.webp",
    premio: "Proyecto Más Innovador del Año",
    categoria: "Negocios y Emprendimiento",
    año: "2024",
  },
  {
    id: 3,
    title: "Programa de Liderazgo Transformacional",
    projectName: "Líder a Líder",
    edition: "2024",
    url: "/proyectos/lider-a-lider",
    description:
      "Iniciativa de capacitación y mentoría que desarrolla el potencial de liderazgo en jóvenes profesionales, creando una red de líderes comprometidos con el desarrollo sostenible de la comunidad.",
    image: "/images/areas_oportunidad/desarrollo-individual/proyectos/lider-a-lider/lider-a-lider.jpg",
    premio: "Excelencia en Liderazgo Joven",
    categoria: "Desarrollo Individual",
    año: "2024",
  },
];

// Funciones de utilidad
export function getProyectosDestacados(): ProyectoDestacado[] {
  return proyectosDestacados;
}

export function getProyectoDestacadoById(id: number): ProyectoDestacado | undefined {
  return proyectosDestacados.find((proyecto) => proyecto.id === id);
}

export function getProyectosDestacadosPorCategoria(categoria: string): ProyectoDestacado[] {
  return proyectosDestacados.filter((proyecto) => proyecto.categoria === categoria);
}

export function getProyectosDestacadosPorAño(año: string): ProyectoDestacado[] {
  return proyectosDestacados.filter((proyecto) => proyecto.año === año);
}
