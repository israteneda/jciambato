import { Miembro } from "./miembro";
import { AreaOportunidadEnum } from "./enums/area-oportunidad.enum";

export type Proyecto = {
  id: string;
  slug?: string; // Para rutas dinámicas
  titulo: string;
  subtitulo: string;
  nombre: string;
  edicion?: string;
  fecha?: string;
  lugar?: string;
  imagen: string;
  logo?: string;
  descripcion?: string;
  impacto?: string; // considerar eliminar

  director?: Miembro;
  subdirector?: Miembro;
  area_oportunidad?: AreaOportunidadEnum; // Ahora usa el enum
  estado?: "activo" | "completado" | "planificado";
  url: string; // URL para navegación

  premio?: string;
  categoria?: string;
  año?: string;

  // Campos específicos para proyectos complejos
  /* tipo_proyecto?: "especial" | "normal";
  componentes_especificos?: string[]; // Lista de componentes específicos a renderizar
  galeria?: string[]; // URLs de imágenes adicionales
  documentos?: Array<{
    nombre: string;
    url: string;
    tipo: "pdf" | "doc" | "link";
  }>;
  equipo?: Array<{
    nombre: string;
    rol: string;
    imagen?: string;
  }>;
  metricas?: Array<{
    titulo: string;
    valor: string;
    descripcion?: string;
  }>;
  cronograma?: {
    eventos: Array<{
      fecha: string;
      titulo: string;
      descripcion: string;
      lugar?: string;
      capacitador: {
        nombre?: string;
        origen?: string;
        imagen?: string | null;
      };
    }>;
    eventos2: Array<{
      fecha: string;
      titulo: string;
      descripcion: string;
      lugar?: string;
      capacitador: {
        nombre?: string;
        origen?: string;
        imagen?: string | null;
      };
    }>;
  }; */
};
