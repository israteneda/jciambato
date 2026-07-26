"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import type { NavItem } from "@/types/nav";
import { isActive } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

import { NavItem as NavLink } from "./NavItem";

export function MobileNav({
  items,
  socialLinks,
}: {
  items: NavItem[];
  socialLinks: Record<string, string | undefined>;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-md p-2 transition-colors duration-200 lg:hidden",
          "group-data-[affix=true]:text-jci-black group-data-[affix=false]:text-white"
        )}
        aria-label="Abrir menú de navegación"
        aria-controls="mobile-menu"
      >
        {/* Hamburger icon — tres líneas SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
        <span className="sr-only">Abrir menú de navegación</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full p-0 sm:w-80"
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
      >
        <div className="flex h-full flex-col">
          {/* Navegación */}
          <nav className="flex-1 overflow-y-auto px-6 pt-8" aria-label="Navegación móvil">
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const active = isActive(item.href, pathname);

                return (
                  <li key={item.href}>
                    <SheetClose
                      render={
                        <NavLink
                          href={item.href}
                          active={active}
                          className={cn(
                            "block transition-colors duration-200",
                            active
                              ? "text-jci-yellow font-semibold"
                              : "text-jci-black hover:text-gray-600"
                          )}
                        />
                      }
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      {item.description && (
                        <p className="mt-0.5 text-sm leading-relaxed font-normal text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Redes sociales — pie del menú móvil */}
          <div className="border-t border-gray-200 px-6 pt-6 pb-8">
            <div className="flex gap-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jci-black hover:text-jci-yellow h-9 w-9 transition-colors"
                  aria-label="Síguenos en Facebook"
                >
                  <FaFacebook className="h-full w-full" aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jci-black hover:text-jci-yellow h-9 w-9 transition-colors"
                  aria-label="Síguenos en Instagram"
                >
                  <FaInstagram className="h-full w-full" aria-hidden="true" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jci-black hover:text-jci-yellow h-9 w-9 transition-colors"
                  aria-label="Síguenos en LinkedIn"
                >
                  <FaLinkedin className="h-full w-full" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
