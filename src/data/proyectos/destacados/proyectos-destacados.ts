import { AreaOportunidadEnum } from "@/types/enums";
import { Proyecto } from "@/types/proyecto";

export const proyectosDestacados: Proyecto[] = [
  {
    id: "oratoria-debate-2024",
    titulo: "Iniciativa de Desarrollo de Habilidades Comunicativas",
    subtitulo: "Desarrollo de Habilidades de Comunicación Efectiva",
    nombre: "Programa de Oratoria y Debate",
    edicion: "1ª Edición",
    fecha: "2024-05-15",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    url: "/proyectos/conquistando-audiencias",
    descripcion:
      "Programa intensivo de desarrollo de habilidades de comunicación efectiva que empodera a jóvenes líderes para expresarse con confianza y elocuencia en cualquier escenario público.",
    premio: "Mejor Proyecto de Desarrollo Individual",
    area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    año: "2024",
  },
  {
    id: "feria-del-libro-2024",
    titulo: "Iniciativa de Impacto Comunitario",
    subtitulo: "Feria del Libro y Economía Circular",
    nombre: "Feria del Libro",
    edicion: "1ª Edición",
    fecha: "2024-06-20",
    lugar: "Ambato, Ecuador",
    url: "/proyectos/feria-del-libro",
    descripcion:
      "Proyecto innovador de economía circular que promueve la sostenibilidad ambiental y el emprendimiento social, conectando donantes con personas que necesitan ropa de calidad a precios accesibles.",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/feria-libro.webp",
    premio: "Proyecto Más Innovador del Año",
    area_oportunidad: AreaOportunidadEnum.IMPACTO_COMUNITARIO,
    año: "2024",
  },
  {
    id: "lider-a-lider-2024",
    titulo: "Programa de Liderazgo Transformacional",
    subtitulo: "Desarrollo de Líderes con Propósito",
    nombre: "Líder a Líder",
    edicion: "2ª Edición",
    fecha: "2024-07-10",
    lugar: "Ambato, Ecuador",
    url: "/proyectos/lider-a-lider",
    descripcion:
      "Iniciativa de capacitación y mentoría que desarrolla el potencial de liderazgo en jóvenes profesionales, creando una red de líderes comprometidos con el desarrollo sostenible de la comunidad.",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/lider-a-lider/lider-a-lider.jpg",
    premio: "Excelencia en Liderazgo Joven",
    area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    año: "2024",
  },
  {
    id: "mejor-presidencia-local-2025",
    titulo: "Mejor Presidencia Local 2025",
    subtitulo: "Reconocimiento Nacional a la Excelencia en Liderazgo",
    nombre: "JCI Ambato",
    url: "/proyectos/mejor-presidencia-local-2025",
    descripcion:
      "JCI Ambato fue reconocida como la Mejor Presidencia Local de JCI Ecuador por su destacada gestión 2025, liderada por Gabriela González.",
    imagen: "/images/premios/convencion-nacional-premios.jpg",
    premio: "Excelencia en Liderazgo Joven",
    area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    año: "2024",
  },
];

// Funciones de utilidad
export function getProyectosDestacados(): Proyecto[] {
  return proyectosDestacados;
}

export function getProyectoDestacadoById(id: string): Proyecto | undefined {
  return proyectosDestacados.find((proyecto) => proyecto.id === id);
}

export function getProyectosDestacadosPorCategoria(categoria: string): Proyecto[] {
  return proyectosDestacados.filter((proyecto) => proyecto.categoria === categoria);
}

export function getProyectosDestacadosPorAño(año: string): Proyecto[] {
  return proyectosDestacados.filter((proyecto) => proyecto.año === año);
}
