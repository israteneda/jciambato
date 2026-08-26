"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import StaggeredMenu from "@/components/StaggeredMenu";
import { MAIN_NAV, SOCIAL_LINKS } from "@/config/site";
import { useNavbarToneOverride } from "@/contexts/navbar-tone-context";
import { getHeroTone } from "@/utils/nav";

const JCI_BLACK = "#130f2d";
const WHITE = "#ffffff";

/** Capas previas del panel lateral — colores de marca (teal → blue). */
const PANEL_COLORS = ["#57bcbc", "#0097d7"];

/** Color de acento para hover, numeración y redes — amarillo institucional. */
const ACCENT_COLOR = "#efc40f";

const MENU_ITEMS = MAIN_NAV.map((item) => ({
  label: item.label,
  ariaLabel: item.label,
  link: item.href,
}));

const SOCIAL_ITEMS = [
  { label: "Facebook", link: SOCIAL_LINKS.facebook },
  { label: "Instagram", link: SOCIAL_LINKS.instagram },
  { label: "LinkedIn", link: SOCIAL_LINKS.linkedin },
].filter((social) => Boolean(social.link));

/**
 * Navegación mobile/tablet basada en StaggeredMenu (React Bits).
 * Solo visible en md y sm (< 1024px); en lg+ se usa DesktopNav.
 * El botón replica el comportamiento de tono del navbar: blanco sobre
 * heroes oscuros sin afijar, oscuro en páginas claras o cuando está afijo.
 */
export function StaggeredNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [affix, setAffix] = useState(false);
  const { toneOverride } = useNavbarToneOverride();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setAffix(latestValue >= 50);
  });

  const tone = toneOverride ?? getHeroTone(pathname);
  const menuButtonColor = !affix && tone === "light" ? WHITE : JCI_BLACK;

  return (
    <div className="lg:hidden">
      <StaggeredMenu
        items={MENU_ITEMS}
        socialItems={SOCIAL_ITEMS}
        colors={PANEL_COLORS}
        accentColor={ACCENT_COLOR}
        menuButtonColor={menuButtonColor}
        openMenuButtonColor={JCI_BLACK}
        displaySocials
        displayItemNumbering
        isFixed
        closeOnClickAway
        tone={tone}
      />
    </div>
  );
}
