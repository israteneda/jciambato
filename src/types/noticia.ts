export type NoticiaEvento = {
  id: string;
  tipo: "evento" | "noticia";
  titulo: string;
  subtitulo: string;
  fecha: string;
  lugar: string;
  imagen: string;
  url: string;
  descripcion?: string;
  contenido?: {
    introduccion?: string;
    parrafos?: string[];
    destacados?: string[];
    imagenes?: {
      url: string;
      alt: string;
      caption?: string;
    }[];
    citas?: {
      texto: string;
      autor: string;
      cargo?: string;
    }[];
    logros?: string[];
    impacto?: {
      titulo: string;
      descripcion: string;
    }[];
  };
};
