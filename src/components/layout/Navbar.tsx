"use client";

import Image from "next/image";
import Link from "next/link";

import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import { useNav } from "@/components/nav/use-nav";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/* -------------------------------------------------------------------------- */
/*  Navbar                                                                    */
/* -------------------------------------------------------------------------- */

export function Navbar({
  items,
  socialLinks,
}: {
  items: NavItem[];
  socialLinks: Record<string, string | undefined>;
}) {
  const { pathname, isScrolled } = useNav();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
      role="banner"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="Ir a la página de inicio">
          <Image
            alt="JCI Ambato Logo"
            className="object-contain w-[90px] h-[90px]"
            src={
              isScrolled
                ? "/images/logos/jci-ambato.webp"
                : "/images/logos/jci-ambato-bw.webp"
            }
            width={90}
            height={90}
            priority
            draggable={false}
          />
        </Link>

        {/* Navegación desktop */}
        <DesktopNav items={items} isScrolled={isScrolled} pathname={pathname} />

        {/* Navegación mobile */}
        <MobileNav
          items={items}
          socialLinks={socialLinks}
          isScrolled={isScrolled}
          pathname={pathname}
        />
      </div>
    </header>
  );
}
