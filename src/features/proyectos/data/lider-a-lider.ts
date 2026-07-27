import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";
import { getMiembroById } from "@/features/miembros/data/miembros";

export const liderALider: Proyecto = {
  id: "10",
  slug: "lider-a-lider",
  nombre: "Líder a Líder",
  subtitulo: "Programa de capacitación para líderes",
  titulo: "Programa de Liderazgo Transformacional",
  director: getMiembroById("augusta-gordillo")!,
  subdirector: {
    id: "alexis-nunez",
    nombre: "Alexis",
    apellido: "Núñez",
    imagen: "",
  },
  fecha: "Actualmente en la 4ta Edición",
  lugar: "Ambato, Ecuador",
  imagen:
    "/images/proyectos/desarrollo-individual/lider-a-lider/lider-a-lider.jpg",
  logo: "/images/proyectos/desarrollo-individual/lider-a-lider/lal.png",
  area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
  url: "/proyectos/lider-a-lider",
  descripcion:
    "'Líder a Líder' es un programa de formación intensiva dirigido a líderes emergentes que buscan fortalecer sus habilidades de liderazgo en contextos comunitarios, educativos o empresariales. A través de módulos teóricos y prácticos, los participantes exploran temas como inteligencia emocional, gestión de equipos, toma de decisiones y resolución de conflictos. El programa utiliza metodologías interactivas, como estudios de caso, dinámicas grupales y mentorías personalizadas, para preparar a los líderes para enfrentar desafíos reales. Además, fomenta la creación de redes de apoyo entre los participantes, promoviendo la colaboración y el intercambio de experiencias. Actualmente, el programa sigue activo, con planes de expansión para incluir más líderes de diferentes regiones de Ecuador.",
  impacto:
    "Ha capacitado a más de 60 líderes, quienes han implementado proyectos de impacto en sus comunidades.",
  estado: "activo",
};
