import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";
import { getMiembroById } from "@/features/miembros/data/miembros";

export const daleOtroChance: Proyecto = {
  id: "1",
  slug: "dale-otro-chance",
  nombre: "Dale Otro Chance",
  subtitulo: "Competencia de emprendimiento de 54 horas",
  titulo: "Dale Otro Chance",
  fecha: "24 Junio, 2024",
  lugar: "Ambato, Ecuador",
  director: getMiembroById("erick-calvache")!,
  subdirector: getMiembroById("sebastian-palate")!,
  imagen: "/images/proyectos/negocios-emprendimiento/dale-otro-chance.webp",
  logo: "",
  area_oportunidad: AreaOportunidadEnum.NEGOCIOS_EMPRENDIMIENTO,
  url: "/proyectos/dale-otro-chance",
  descripcion:
    "'Dale Otro Chance' es una iniciativa innovadora que combina el espíritu emprendedor con la sostenibilidad. Este evento reúne a jóvenes emprendedores de Ambato y alrededores para promover la economía circular a través de la venta de ropa de segunda mano. Los participantes trabajan en equipos para diseñar estrategias de negocio, desde la selección de prendas hasta la creación de planes de marketing y ventas. El objetivo principal es fomentar el emprendimiento juvenil, generar ingresos adicionales para los participantes y ofrecer a la comunidad acceso a ropa de calidad a precios asequibles. Además, el proyecto promueve la conciencia ambiental al incentivar la reutilización de prendas, reduciendo el desperdicio textil. Durante el evento, se realizan talleres de capacitación en habilidades empresariales, mentorías con expertos y una competencia final donde los equipos presentan sus resultados ante un jurado.",
  impacto:
    "Más de 100 jóvenes han participado, generando ingresos para ellos y sus comunidades, además de promover la sostenibilidad, la conciencia ambiental y el emprendimiento juvenil.",
  estado: "completado",
};
