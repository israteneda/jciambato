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
    titulo: "Transmisión de Mando Local: JCI Ambato inicia una nueva etapa",
    subtitulo: "JCI Ambato inicia una nueva etapa",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "transmision-mando-local-jci-ambato-inicia-nueva-etapa",
    descripcion: "JCI Ambato inicia una nueva etapa",
  },
  {
    id: 2,
    tipo: "noticia",
    titulo: "JCI Ambato participa en alianza para el desarrollo con Indoamérica",
    subtitulo: "JCI Ambato participa en alianza para el desarrollo con Indoamérica",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "jci-ambato-participa-en-alianza-para-el-desarrollo-con-indoamerica",
    descripcion: "JCI Ambato participa en alianza para el desarrollo con Indoamérica",
  },
  {
    id: 3,
    tipo: "noticia",
    titulo: "Capacitación en obligaciones laborales para miembros de JCI Ambato",
    subtitulo: "Capacitación en obligaciones laborales para miembros de JCI Ambato",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "capacitacion-en-obligaciones-laborales-para-miembros-de-jci-ambato",
    descripcion: "Capacitación en obligaciones laborales para miembros de JCI Ambato",
  },
  {
    id: 4,
    tipo: "noticia",
    titulo:
      "Ecuador Campeón Internacional de Oratoria y Debate",
    subtitulo:
      "Ecuador Campeón Internacional de Oratoria y Debate",
    fecha: "24 Julio, 2024",
    lugar: "Taiwan, China",
    imagen: "/images/noticias_eventos/concurso.webp",
    url: "ecuador-campeon-internacional-de-oratoria-y-debate",
    descripcion:
      "Ecuador Campeón Internacional de Oratoria y Debate",
  },
  {
    id: 5,
    tipo: "evento",
    titulo:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
    subtitulo:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "ocean-winds-and-martifer-announce-partnership-for-portuguese-floating-offshore-wind-tender-2",
    descripcion:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
  },
  {
    id: 6,
    tipo: "evento",
    titulo:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
    subtitulo:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
    fecha: "24 Junio, 2024",
    lugar: "Ambato, Ecuador",
    imagen: "/images/noticias_eventos/noticiaEvento.webp",
    url: "ocean-winds-and-martifer-announce-partnership-for-portuguese-floating-offshore-wind-tender-3",
    descripcion:
      "Ocean Winds and Martifer announce partnership for Portuguese floating offshore wind tender",
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
