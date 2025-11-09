/**
 * Utilidad para compartir contenido en redes sociales
 * Soporta Facebook y LinkedIn con metadata optimizada
 */

interface ShareableContent {
  title: string;
  description?: string;
  url?: string;
}

/**
 * Comparte contenido en redes sociales
 * @param platform - Plataforma de red social (facebook | linkedin)
 * @param content - Contenido a compartir (título, descripción)
 * @returns void - Abre ventana de compartir
 */
export function shareOnSocialMedia(
  platform: "facebook" | "linkedin",
  content: ShareableContent
): void {
  // Obtener URL actual o usar la proporcionada
  const currentUrl = content.url || (typeof window !== "undefined" ? window.location.href : "");
  const { title, description = "" } = content;

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      // Facebook usa principalmente la URL, los metadatos OpenGraph se encargan del resto
      // El parámetro 'quote' es opcional y puede pre-llenar el comentario del usuario
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}${
        description ? `&quote=${encodeURIComponent(`${title} - ${description}`)}` : ""
      }`;
      break;

    case "linkedin":
      // LinkedIn acepta title, summary y url como parámetros
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      if (title) {
        shareUrl += `&title=${encodeURIComponent(title)}`;
      }
      if (description) {
        shareUrl += `&summary=${encodeURIComponent(description)}`;
      }
      break;

    default:
      console.warn(`Plataforma no soportada: ${platform}`);
      return;
  }

  // Abrir en nueva ventana con dimensiones apropiadas
  if (shareUrl) {
    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,scrollbars=yes,resizable=yes,noopener,noreferrer"
    );
  }
}

/**
 * Genera el contenido para compartir desde una noticia/evento
 */
export function getShareContentFromNoticia(noticia: {
  titulo: string;
  descripcion?: string;
  subtitulo?: string;
  url?: string;
}): ShareableContent {
  return {
    title: noticia.titulo,
    description: noticia.descripcion || noticia.subtitulo || "",
  };
}

/**
 * Genera el contenido para compartir desde un proyecto
 */
export function getShareContentFromProyecto(proyecto: {
  nombre: string;
  descripcion?: string;
  subtitulo?: string;
  slug?: string;
}): ShareableContent {
  return {
    title: proyecto.nombre || "",
    description: proyecto.descripcion || proyecto.subtitulo || "",
  };
}
