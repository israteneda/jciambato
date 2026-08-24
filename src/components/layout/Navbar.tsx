import Image from "next/image";
import Link from "next/link";

import { MAIN_NAV, SOCIAL_LINKS } from "@/config/site";
import { cn } from "@/utils/utils";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavbarWrapper } from "./navbar-wrapper";

export function Navbar() {
  return (
    <NavbarWrapper
      className={cn(
        "group fixed top-0 right-0 left-0 z-20 select-none",
        "transition-all duration-300",
        "data-[affix=true]:bg-white data-[affix=true]:shadow-md",
        "data-[affix=false]:bg-transparent"
      )}
      role="navigation"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="Ir a la página de inicio" className="relative block size-23">
          <Image
            src="/images/marca/jci-ambato-bw.webp"
            alt="JCI Ambato"
            fill
            priority
            draggable={false}
            className={cn(
              "object-contain",
              "transition-opacity duration-300",
              "opacity-0",
              "group-data-[affix=false]:group-data-[tone=light]:opacity-100"
            )}
            sizes="92px"
          />

          <Image
            src="/images/marca/jci-ambato.webp"
            alt="JCI Ambato"
            fill
            priority
            draggable={false}
            className={cn(
              "object-contain",
              "transition-opacity duration-300",
              "opacity-0",
              "group-data-[affix=false]:group-data-[tone=dark]:opacity-100",
              "group-data-[affix=true]:opacity-100"
            )}
            sizes="92px"
          />
        </Link>

        {/* Navegación desktop */}
        <DesktopNav items={MAIN_NAV} />

        {/* Navegación mobile */}
        <MobileNav items={MAIN_NAV} socialLinks={SOCIAL_LINKS} />
      </div>
    </NavbarWrapper>
  );
}
