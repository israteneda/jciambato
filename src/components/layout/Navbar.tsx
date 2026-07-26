import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { MAIN_NAV, SOCIAL_LINKS } from "@/config/site";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./DesktopNav";
import { NavbarWrapper } from "./NavbarWrapper";

const MobileNav = dynamic(() => import("./MobileNav").then((mod) => mod.MobileNav));

export function Navbar() {
  return (
    <NavbarWrapper
      className={cn(
        "group fixed top-0 right-0 left-0 z-50 select-none",
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
            src="/images/logos/jci-ambato-bw.webp"
            alt="JCI Ambato"
            width={90}
            height={90}
            priority
            draggable={false}
            className={cn(
              "absolute inset-0 size-full object-contain",
              "transition-opacity duration-300",
              "group-data-[affix=false]:opacity-100",
              "group-data-[affix=true]:opacity-0"
            )}
          />

          <Image
            src="/images/logos/jci-ambato.webp"
            alt="JCI Ambato"
            width={90}
            height={90}
            priority
            draggable={false}
            className={cn(
              "absolute inset-0 size-full object-contain",
              "transition-opacity duration-300",
              "group-data-[affix=false]:opacity-0",
              "group-data-[affix=true]:opacity-100"
            )}
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
