export type NoticiaEvento = {
  id: number;
  tipo: "evento" | "noticia";
  titulo: string;
  subtitulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  url: string;
  descripcion?: string;
};

export const noticiasEventos: NoticiaEvento[] = [
  {
    id: 1,
    tipo: "evento",
    titulo: "LXIX Convención Nacional, Crucita 2025",
    subtitulo: "Convención Nacional de la JCI en Crucita",
    fecha: "Octubre, 17, 18 y 19 de 2025",
    lugar: "Crucita, Manabí",
    imagen: "/images/noticias_eventos/eventos/convencion-nacional-crucita-2025.png",
    url: "lxix-convencion-nacional-crucita-2025",
    descripcion:
      "La LIXI Convención Nacional se llevará a cabo en Crucita, Manabí, en octubre de 2025. Este evento reunirá a líderes y miembros de la JCI de todo el país para compartir experiencias, aprender y colaborar en proyectos que impulsen el desarrollo de la juventud ecuatoriana. La convención incluirá talleres, conferencias y actividades de networking, fortaleciendo así la red de jóvenes líderes en Ecuador.",
  },
  {
    id: 2,
    tipo: "evento",
    titulo: "Transmisión de Mando Local: JCI Ambato inicia una nueva etapa",
    subtitulo: "JCI Ambato inicia una nueva etapa",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "transmision-mando-local-jci-ambato-inicia-nueva-etapa",
    descripcion:
      "La Cámara Junior Internacional Capítulo Ambato celebró la ceremonia de transmisión de mando en el auditorio de la Universidad Indoamérica el 16 de marzo. El evento marcó el inicio del nuevo año de liderazgo con la presencia de autoridades, senadores e invitados especiales. Israel Teneda asumió la presidencia local, mientras que el presidente nacional Andrés Ramírez tomó el juramento a la nueva membresía. La ceremonia también conmemoró el 50° aniversario de JCI en Ambato y anunció proyectos como 'De líder a líder' y 'Feria del libro', reafirmando el compromiso de la organización con el desarrollo de líderes jóvenes y el servicio comunitario.",
  },
  {
    id: 3,
    tipo: "noticia",
    titulo: "Ecuador Campeón Mundial de Debate JCI 2024",
    subtitulo: "Primera vez que Ecuador gana el concurso mundial de debate",
    fecha: "Noviembre, 2024",
    lugar: "Taoyuan, Taiwán",
    imagen: "/images/noticias_eventos/concurso.webp",
    url: "ecuador-campeon-internacional-de-oratoria-y-debate",
    descripcion:
      "¡Histórico logro para Ecuador! El equipo nacional se coronó Campeón Mundial de Debate en español de la JCI (Junior Chamber International) durante el Congreso Mundial JCI 2024 celebrado en Taoyuan, Taiwán. Es la primera vez que JCI Ecuador gana este concurso a nivel mundial. El equipo estuvo conformado por Alex Barreno (capitán) de JCI Ambato y Anthony Cabrera (orador 2), quienes además llegaron a las semifinales de debate en inglés, demostrando su versatilidad lingüística y excelencia en oratoria. Este triunfo histórico posiciona a Ecuador como una potencia emergente en el debate internacional y marca un hito en la representación del país en competencias mundiales de oratoria y liderazgo juvenil.",
  },
];

// Funciones de utilidad para filtrar eventos y noticias
export function getNoticiasEventosPorTipo(tipoSlug: string): NoticiaEvento[] {
  return noticiasEventos.filter((noticia) => noticia.tipo === (tipoSlug as "evento" | "noticia"));
}

export function getAllNoticiasEventos(): NoticiaEvento[] {
  return noticiasEventos;
}

export function getNoticiaEventoById(id: string): NoticiaEvento | undefined {
  return noticiasEventos.find((noticia) => noticia.id === parseInt(id, 10));
}

export function getNoticiaEventoBySlug(slug: string): NoticiaEvento | undefined {
  return noticiasEventos.find((noticia) => noticia.url === slug);
}

// Función para obtener el conteo de noticias y eventos
export function getConteoNoticiasEventos(): { [key: string]: number } {
  const conteo: { [key: string]: number } = {};

  noticiasEventos.forEach((noticia) => {
    if (conteo[noticia.tipo]) {
      conteo[noticia.tipo]++;
    } else {
      conteo[noticia.tipo] = 1;
    }
  });

  return conteo;
}
