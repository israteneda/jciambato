import { Proyecto } from "@/types/proyecto";
import { AreaOportunidadEnum, getAreaSlug } from "@/types/enums/area-oportunidad.enum";

// Importar todos los proyectos individuales
import { podcastPanDePinllo } from "./podcast-pan-de-pinllo";
import { construyendoCulturaJuntos } from "./construyendo-cultura-juntos";
import { conquistandoAudiencias } from "./conquistando-audiencias";
import { liderALider } from "./lider-a-lider";
import { daleOtroChance } from "./dale-otro-chance";
import { feriaDelLibro } from "./feria-del-libro";

// Array consolidado de todos los proyectos
// Para agregar un nuevo proyecto:
// 1. Crea un nuevo archivo .ts en esta carpeta
// 2. Importalo arriba
// 3. Agrégalo al array abajo
export const proyectos: Proyecto[] = [
  podcastPanDePinllo,
  construyendoCulturaJuntos,
  conquistandoAudiencias,
  liderALider,
  daleOtroChance,
  feriaDelLibro,
];

// Funciones de utilidad para filtrar proyectos
export function getProyectosPorArea(area: AreaOportunidadEnum): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.area_oportunidad === area);
}

export function getAllProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectoById(id: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.id === id);
}

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((proyecto) => proyecto.slug === slug);
}

export function getProyectosPorEstado(estado: "activo" | "completado" | "planificado"): Proyecto[] {
  return proyectos.filter((proyecto) => proyecto.estado === estado);
}

// Función para obtener el conteo de proyectos por área (devuelve por slug)
export function getConteoProyectosPorArea(): { [key: string]: number } {
  const conteo: { [key: string]: number } = {};

  proyectos.forEach((proyecto) => {
    if (proyecto.area_oportunidad) {
      const slug = getAreaSlug(proyecto.area_oportunidad);
      if (conteo[slug]) {
        conteo[slug]++;
      } else {
        conteo[slug] = 1;
      }
    }
  });

  return conteo;
}
