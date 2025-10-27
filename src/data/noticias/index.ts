import { NoticiaEvento } from "@/types/noticia";

// Importar todas las noticias y eventos individuales
import { sesionSolemne2025 } from "./sesion-solemne-2025";
import { convencionNacional2025 } from "./convencion-nacional-2025";
import { transmisionMando2025 } from "./transmision-mando-2025";
import { campeonMundialDebate2024 } from "./campeon-mundial-debate-2024";
import { workshopMesJuventud } from "./workshop-mes-juventud";
import { convencionNacionalJCIAmbato } from "./convencion-nacional-jci-ambato";
import { liderazgoAmbatenoJunta2026 } from "./liderazgo-ambateno-junta-2026";

// Array consolidado de todas las noticias y eventos
// Para agregar una nueva noticia/evento:
// 1. Crea un nuevo archivo .ts en esta carpeta
// 2. Importalo arriba
// 3. Agrégalo al array abajo
export const noticiasEventos: NoticiaEvento[] = [
  sesionSolemne2025,
  liderazgoAmbatenoJunta2026,
  convencionNacionalJCIAmbato,
  convencionNacional2025,
  workshopMesJuventud,
  transmisionMando2025,
  campeonMundialDebate2024,
];

// Funciones de utilidad para filtrar eventos y noticias
export function getNoticiasEventosPorTipo(tipoSlug: string): NoticiaEvento[] {
  return noticiasEventos.filter((noticia) => noticia.tipo === (tipoSlug as "evento" | "noticia"));
}

export function getAllNoticiasEventos(): NoticiaEvento[] {
  return noticiasEventos;
}

export function getNoticiaEventoById(id: string): NoticiaEvento | undefined {
  return noticiasEventos.find((noticia) => noticia.id === id);
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
