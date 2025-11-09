import { AreaOportunidad } from "@/types/area-oportunidad";
import { getMiembroById } from "./miembros/miembros";

export const areasOportunidad: AreaOportunidad[] = [
  {
    id: "1",
    slug: "negocios-emprendimiento",
    title: "Negocios y Emprendimiento",
    subtitle: "Impulsa tu espíritu emprendedor con visión global.",
    description:
      "Fomentamos la creación y crecimiento de ideas innovadoras a través de mentoría, formación empresarial y una red global de contactos que impulsa el emprendimiento con propósito.",
    responsable: getMiembroById("erick-calvache")!,
    image: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.jpg",
    background_image:
      "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento-back.webp",
    features: ["Creación de Empresas", "Desarrollo Empresarial", "Networking Global", "Innovación"],
    longDescription:
      "En JCI Ambato, creemos que el emprendimiento es una herramienta poderosa para transformar realidades. Nuestra área de Negocios y Emprendimiento brinda a los jóvenes líderes el espacio y los recursos para convertir sus ideas en empresas sostenibles y con impacto social. A través de mentorías especializadas, talleres prácticos, competencias de emprendimiento y eventos de networking, potenciamos habilidades empresariales, creatividad e innovación. Formamos emprendedores con visión global, capaces de liderar en un entorno cambiante y generar valor en sus comunidades y más allá.",
    brochure: "/pdf/brochure-negocios-emprendimiento.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/negocios-emprendimiento/negocios-emprendimiento.webp",
        alt: "Negocios y Emprendimiento - Imagen 5",
      },
    ],
    logo: "/images/areas_oportunidad/negocios-emprendimiento/entrepreneur.png",
    document: "/documents/areas-oportunidad/negocios-emprendimiento.pdf",
  },
  {
    id: "2",
    slug: "cooperacion-internacional",
    title: "Cooperación Internacional",
    subtitle: "Conectamos líderes para generar impacto más allá de las fronteras.",
    description:
      "Forma parte de una red global de jóvenes comprometidos con el cambio. Vive experiencias internacionales, intercambios culturales y liderazgo en escenarios globales.",
    responsable: getMiembroById("nicolas-carrion")!,
    image: "/images/areas_oportunidad/cooperacion-internacional/internacionalizacion.webp",
    background_image:
      "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional-back.webp",
    features: [
      "Intercambio Cultural",
      "Redes Globales",
      "Diplomacia Juvenil",
      "Impacto Transfronterizo",
    ],
    longDescription:
      "La Cooperación Internacional en JCI Ambato te conecta con una comunidad mundial de jóvenes líderes. Como parte de una red presente en más de 100 países, tendrás acceso a oportunidades únicas como congresos internacionales, academias de liderazgo, hermanamientos, programas de intercambio y participación en foros multilaterales. Estas experiencias fortalecen tus habilidades diplomáticas, fomentan el entendimiento intercultural y te permiten colaborar en soluciones a desafíos globales. Desde Ambato hacia el mundo, puedes construir conexiones que trascienden fronteras y generan un impacto real.",
    brochure: "/pdf/brochure-cooperacion-internacional.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/cooperacion-internacional/cooperacion-internacional.webp",
        alt: "Cooperación Internacional - Imagen 5",
      },
    ],
    logo: "/images/areas_oportunidad/cooperacion-internacional/networker.png",
    document: "/documents/areas-oportunidad/cooperacion-internacional.pdf",
  },
  {
    id: "3",
    slug: "desarrollo-individual",
    title: "Desarrollo Individual",
    subtitle: "Descubre tu potencial y fortalece tu liderazgo personal.",
    description:
      "Ofrecemos espacios de formación, mentoría y experiencias transformadoras que te preparan para liderar con propósito, comunicar con impacto y crecer con confianza.",
    responsable: getMiembroById("gustavo-solis")!,
    image: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.jpeg",
    background_image:
      "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual-back.webp",
    features: [
      "Liderazgo Transformacional",
      "Habilidades Blandas",
      "Oratoria",
      "Inteligencia Emocional",
      "Toma de Decisiones",
    ],
    longDescription:
      "El Desarrollo Individual es la base sobre la cual se construye el liderazgo en JCI Ambato. Diseñamos experiencias formativas que te retan a conocerte, superarte y liderar con autenticidad. Desde talleres de oratoria, inteligencia emocional y liderazgo ético, hasta mentorías y entrenamientos en habilidades blandas, esta área impulsa tu crecimiento personal y profesional. Aquí aprendes no solo a pensar estratégicamente, sino también a inspirar a otros, tomar decisiones con integridad y convertir tu visión en acción.",
    brochure: "/pdf/brochure-desarrollo-individual.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/desarrollo-individual/desarrollo-individual.webp",
        alt: "Desarrollo Individual - Imagen 5",
      },
    ],
    logo: "/images/areas_oportunidad/desarrollo-individual/communicator.png",
    document: "/documents/areas-oportunidad/desarrollo-individual.pdf",
  },
  {
    id: "4",
    slug: "impacto-comunidad",
    title: "Impacto en la Comunidad",
    subtitle: "Lideramos proyectos con propósito que transforman vidas.",
    description:
      "Diseñamos e implementamos iniciativas sociales que mejoran la calidad de vida, promueven la participación ciudadana y generan soluciones sostenibles a desafíos locales.",
    responsable: getMiembroById("sayri-pamballo")!,
    image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.jpg",
    background_image: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad-back.webp",
    features: [
      "Proyectos Sostenibles",
      "Soluciones Comunitarias",
      "Voluntariado",
      "Responsabilidad Social",
      "Objetivos de Desarrollo Sostenible (ODS)",
    ],
    longDescription:
      "En JCI Ambato, el impacto comienza en nuestra comunidad. Esta área te invita a involucrarte directamente en la creación de proyectos sociales que respondan a necesidades reales, con enfoque en sostenibilidad, innovación y participación ciudadana. Formamos líderes conscientes, capaces de identificar problemas locales y liderar soluciones que generen un cambio medible y duradero. Ya sea en educación, salud, medio ambiente o inclusión, cada acción suma a un futuro más justo. Todos nuestros proyectos se alinean con los Objetivos de Desarrollo Sostenible de la ONU.",
    brochure: "/pdf/brochure-impacto-comunidad.pdf",
    images: [
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 1",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 2",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 3",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 4",
      },
      {
        src: "/images/areas_oportunidad/impacto-comunidad/impacto-comunidad.webp",
        alt: "Impacto en la Comunidad - Imagen 5",
      },
    ],
    logo: "/images/areas_oportunidad/impacto-comunidad/changemarker.png",
    document: "/documents/areas-oportunidad/impacto-comunidad.pdf",
  },
];

export function getAreaBySlug(slug: string): AreaOportunidad | undefined {
  return areasOportunidad.find((area) => area.slug === slug);
}

export function getAllAreas(): AreaOportunidad[] {
  return areasOportunidad;
}
