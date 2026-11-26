import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";
import { getMiembroById } from "@/features/miembros/data/miembros";

export const podcastPanDePinllo: Proyecto = {
  id: "14",
  slug: "podcast-pan-de-pinllo",
  nombre: "Podcast 'A los Tiempos Pan de Pinllo'",
  subtitulo: "Podcast sobre experiencia de grandes lideres en la ciudad de Ambato",
  titulo: "Vivencias de Liderazgo en Ambato",
  director: getMiembroById("israel-teneda")!,
  subdirector: getMiembroById("ricardo-santamaria")!,
  fecha: "24 Junio, 2024",
  lugar: "Ambato, Ecuador",
  imagen: "/images/proyectos/impacto-comunidad/podcast.png",
  logo: "/images/proyectos/impacto-comunidad/alpp.png",
  area_oportunidad: AreaOportunidadEnum.IMPACTO_COMUNITARIO,
  descripcion:
    "Este podcast, titulado 'A los Tiempos Pan de Pinllo', es una plataforma que destaca las historias y experiencias de líderes destacados de Ambato, Ecuador. A través de entrevistas en profundidad, el programa explora los desafíos, logros y lecciones de vida de figuras influyentes en áreas como el emprendimiento, la educación, la cultura y el activismo comunitario. Cada episodio busca inspirar a la audiencia, especialmente a los jóvenes, a perseguir sus metas y contribuir al desarrollo de su comunidad. El podcast es producido por un equipo de jóvenes comunicadores y se distribuye en plataformas digitales, con planes de expandir su alcance a otras ciudades de Ecuador.",
  impacto:
    "Ha alcanzado a miles de oyentes, inspirando a la comunidad a conocer y aprender de sus líderes locales.",
  estado: "activo",
};
