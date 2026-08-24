export function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/**
 * Páginas cuyo hero no usa imagen de fondo (tone="dark" en PageHero): el fondo
 * heredado del body es claro, así que el navbar transparente necesita texto oscuro.
 */
const DARK_HERO_TONE_PAGES = [
  "/impacto",
  "/areas-oportunidad",
  "/politica-gestion",
  "/politica-privacidad",
];

/**
 * Rutas cuyas páginas internas (slugs) tienen fondo claro, pero el index
 * tiene imagen de fondo (oscuro). El navbar necesita texto oscuro solo en slugs.
 */
const DARK_HERO_TONE_SLUG_ROUTES = ["/noticias-eventos", "/proyectos"];

export function getHeroTone(pathname: string): "light" | "dark" {
  if (DARK_HERO_TONE_PAGES.includes(pathname)) return "dark";
  if (DARK_HERO_TONE_SLUG_ROUTES.some((r) => pathname.startsWith(r + "/"))) return "dark";
  return "light";
}
