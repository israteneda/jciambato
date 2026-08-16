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

export function getHeroTone(pathname: string): "light" | "dark" {
  return DARK_HERO_TONE_PAGES.includes(pathname) ? "dark" : "light";
}
