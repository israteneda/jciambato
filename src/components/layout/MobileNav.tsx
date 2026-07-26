"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import type { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/* -------------------------------------------------------------------------- */
/*  MobileNav                                                                 */
/* -------------------------------------------------------------------------- */

export function MobileNav({
  items,
  socialLinks,
  isScrolled,
  pathname,
}: {
  items: NavItem[];
  socialLinks: Record<string, string | undefined>;
  isScrolled: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "lg:hidden w-12 h-12 p-2 transition-colors duration-200 inline-flex items-center justify-center rounded-md",
          isScrolled ? "text-jci-black" : "text-white",
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
        className="w-full sm:w-80 p-0"
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
      >
        <div className="flex flex-col h-full">
          {/* Navegación */}
          <nav
            className="flex-1 overflow-y-auto px-6 pt-8"
            aria-label="Navegación móvil"
          >
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const active = isActive(item.href, pathname);

                return (
                  <li key={item.href}>
                    <SheetClose
                      render={
                        <Link
                          href={item.href}
                          className={cn(
                            "block transition-colors duration-200",
                            active
                              ? "text-jci-navy font-semibold"
                              : "text-jci-black hover:text-gray-600",
                          )}
                          aria-current={active ? "page" : undefined}
                        />
                      }
                    >
                      <span className="text-lg font-medium">
                        {item.label}
                      </span>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-0.5 leading-relaxed font-normal">
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
          <div className="px-6 pt-6 border-t border-gray-200 pb-8">
            <div className="flex gap-4">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 text-jci-black hover:text-jci-yellow transition-colors"
                  aria-label="Síguenos en Facebook"
                >
                  <FaFacebook className="w-full h-full" aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 text-jci-black hover:text-jci-yellow transition-colors"
                  aria-label="Síguenos en Instagram"
                >
                  <FaInstagram className="w-full h-full" aria-hidden="true" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 text-jci-black hover:text-jci-yellow transition-colors"
                  aria-label="Síguenos en LinkedIn"
                >
                  <FaLinkedin className="w-full h-full" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
