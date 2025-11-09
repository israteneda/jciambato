import { AreaOportunidadEnum } from "@/types/enums";
import { Proyecto } from "@/types/proyecto";

export const proyectosDestacados: Proyecto[] = [
  {
    id: "oratoria-debate-2024",
    titulo: "Desarrollo de Habilidades Comunicativas",
    subtitulo: "Fortaleciendo la Comunicación Efectiva",
    nombre: "Programa de Oratoria y Debate",
    edicion: "1ª Edición",
    fecha: "2024-05-15",
    lugar: "Ambato, Ecuador",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/desarrollo-individual-p1.webp",
    url: "/proyectos/conquistando-audiencias",
    descripcion:
      "Un programa intensivo diseñado para potenciar las habilidades comunicativas de los jóvenes, brindándoles las herramientas necesarias para hablar con confianza y elocuencia en cualquier escenario.",
    premio: "Mejor Proyecto de Desarrollo Individual",
    area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    año: "2024",
  },
  {
    id: "feria-del-libro-2024",
    titulo: "Cultura como Motor de Impacto Ciudadano",
    subtitulo: "Feria del Libro",
    nombre: "Feria del Libro",
    edicion: "1ª Edición",
    fecha: "2024-06-20",
    lugar: "Ambato, Ecuador",
    url: "/proyectos/feria-del-libro",
    descripcion:
      "Un evento cultural que fomenta la lectura y el acceso a libros, promoviendo el intercambio de conocimientos y el desarrollo intelectual dentro de la comunidad.",
    imagen: "/images/areas_oportunidad/impacto-comunidad/proyectos/feria-libro.webp",
    premio: "Proyecto Más Innovador del Año",
    area_oportunidad: AreaOportunidadEnum.IMPACTO_COMUNITARIO,
    año: "2024",
  },
  {
    id: "lider-a-lider-2024",
    titulo: "Liderazgo Transformacional",
    subtitulo: "Desarrollo de Líderes con Propósito",
    nombre: "Líder a Líder",
    edicion: "2ª Edición",
    fecha: "2024-07-10",
    lugar: "Ambato, Ecuador",
    url: "/proyectos/lider-a-lider",
    descripcion:
      "Un programa de capacitación y mentoría que impulsa el liderazgo en jóvenes profesionales, fomentando una red de líderes comprometidos con el desarrollo sostenible de la comunidad.",
    imagen:
      "/images/areas_oportunidad/desarrollo-individual/proyectos/lider-a-lider/lider-a-lider.jpg",
    premio: "Excelencia en Liderazgo Joven",
    area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
    año: "2024",
  },
  {
    id: "mejor-presidencia-local-2025",
    titulo: "Mejor Presidencia Local 2025",
    subtitulo: "Reconocimiento Nacional a la Excelencia Organizacional",
    nombre: "JCI Ambato",
    url: "/proyectos/mejor-presidencia-local-2025",
    descripcion:
      "JCI Ambato fue reconocida como la Mejor Presidencia Local de JCI Ecuador, destacando por su excepcional gestión durante el 2025, bajo el liderazgo de Gabriela González.",
    imagen: "/images/premios/convencion-nacional-premios.jpg",
    premio: "Mejor Presidencia Local 2025 de JCI Ecuador",
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
