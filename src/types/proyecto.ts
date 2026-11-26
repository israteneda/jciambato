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

  premio?: string;
  categoria?: string;
  año?: string;
};
