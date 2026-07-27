import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum } from "@/types/enums/area-oportunidad.enum";

export const conquistandoAudiencias: Proyecto = {
  id: "9",
  slug: "conquistando-audiencias",
  titulo: "Programa de Oratoria y Debate (Conquistando Audiencias)",
  nombre: "Programa de Oratoria y Debate (Conquistando Audiencias)",
  subtitulo: "Programa intensivo de comunicación efectiva",
  director: {
    id: "jenifer-castillo",
    nombre: "Jenifer",
    apellido: "Castillo",
    imagen: "",
  },
  subdirector: {
    id: "alexis-nunez",
    nombre: "Alexis",
    apellido: "Núñez",
    imagen: "",
  },
  fecha: "24 Junio, 2024",
  lugar: "Ambato, Ecuador",
  imagen: "/images/proyectos/desarrollo-individual/desarrollo-individual-p1.webp",
  logo: "",
  area_oportunidad: AreaOportunidadEnum.DESARROLLO_INDIVIDUAL,
  url: "/proyectos/conquistando-audiencias",
  descripcion:
    "'Conquistando Audiencias' es un programa intensivo enfocado en desarrollar habilidades de comunicación y oratoria en jóvenes. A través de talleres prácticos, ejercicios de debate y presentaciones simuladas, los participantes aprenden a estructurar discursos, manejar el lenguaje corporal, controlar el tono de voz y conectar emocionalmente con su audiencia. El programa está diseñado para empoderar a los jóvenes, ayudándolos a superar el miedo escénico y a expresarse con claridad y confianza en entornos académicos, profesionales y sociales. Además, se fomenta el pensamiento crítico a través de debates estructurados sobre temas de actualidad. El proyecto incluye sesiones de retroalimentación personalizada y la oportunidad de presentar un discurso final frente a un público real.",
  impacto:
    "Ha beneficiado a más de 80 jóvenes, mejorando su confianza y habilidades comunicativas para destacar en sus comunidades.",
  estado: "completado",
};
