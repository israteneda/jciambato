"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldUseDarkText, setShouldUseDarkText] = useState(false);

  // Cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Función para detectar si el navbar debe usar texto oscuro
  const detectTextColor = () => {
    // Páginas que siempre necesitan texto oscuro (fondo claro)
    const darkTextPages = [
      "/impacto",
      "/areas-oportunidad",
      "/politica-gestion",
      "/politica-privacidad",
    ];

    // Páginas que necesitan texto blanco por defecto pero pueden cambiar con scroll (fondo oscuro)
    const scrollDependentPages = [
      "/",
      "/nosotros",
      "/proyectos",
      "/miembros",
      "/involucrate",
      "/noticias-eventos",
    ];

    // Si estamos en una página que siempre necesita texto oscuro
    if (darkTextPages.includes(pathname)) {
      setShouldUseDarkText(true);
      return;
    }

    // Texto blanco por defecto, oscuro con scroll para páginas dinámicas (como /areas-oportunidad/slug)
    if (pathname.startsWith("/areas-oportunidad/")) {
      setShouldUseDarkText(isScrolled);
      return;
    }

    // Texto blanco (scroll dependiente)
    if (scrollDependentPages.includes(pathname)) {
      setShouldUseDarkText(isScrolled);
      return;
    }

    // Rutas desconocidas o error (texto oscuro por defecto)
    setShouldUseDarkText(true);
  };

  useEffect(() => {
    detectTextColor();
  }, [pathname, isScrolled]);

  const getTextColor = (isActive: boolean, isLast: boolean) => {
    if (isLast) {
      return "text-jci-yellow font-semibold hover:text-yellow-400";
    }

    if (shouldUseDarkText) {
      return isActive ? "text-jci-yellow" : "text-jci-black hover:text-jci-yellow";
    } else {
      return isActive ? "text-jci-yellow" : "text-white hover:text-jci-yellow";
    }
  };

  const getMobileTextColor = (isActive: boolean, isLast: boolean) => {
    if (isLast) {
      return "text-jci-yellow font-semibold hover:text-yellow-400 transition-colors duration-200";
    }

    return isActive
      ? "text-jci-navy font-semibold"
      : "text-jci-black hover:text-gray-600 transition-colors duration-200";
  };

  return (
    <HeroUINavbar
      className={clsx(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300 select-none",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
        className
      )}
      classNames={{
        toggleIcon: shouldUseDarkText ? "w-8 h-8 text-jci-black" : "w-8 h-8 text-white",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      height="5rem"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      role="banner"
      aria-label="Navegación principal"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink href="/" aria-label="Ir a la página de inicio">
            <Image
              alt="JCI Ambato Logo"
              className="h-28 w-28 object-contain"
              src={
                shouldUseDarkText
                  ? "/images/logos/jci-ambato.webp"
                  : "/images/logos/jci-ambato-bw.webp"
              }
              width={112}
              height={115}
              priority
              draggable="false"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección de navegación */}
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <nav className="hidden lg:block" aria-label="Navegación principal">
          <ul className="ml-2 flex justify-start gap-8" role="menubar">
            {siteConfig.navItems.map((item, index) => {
              const isLast = index === siteConfig.navItems.length - 1;
              const isActive = pathname === item.href;

              return (
                <NavbarItem key={item.href} role="none">
                  <NextLink
                    className={clsx(
                      "font-normal transition-colors duration-200",
                      getTextColor(isActive, isLast)
                    )}
                    href={item.href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              );
            })}
          </ul>
        </nav>

        <div className="lg:hidden">
          <NavbarMenuToggle
            className={clsx("h-12 w-12 p-2", shouldUseDarkText ? "text-jci-black" : "text-white")}
            srOnlyText="Abrir menú de navegación"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          />
        </div>
      </NavbarContent>

      <NavbarMenu
        className={clsx("flex flex-col bg-white")}
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
      >
        <nav className="mx-4 mt-6 flex flex-1 flex-col gap-6" aria-label="Navegación móvil">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={`${item}-${index}`} className="flex flex-col items-start">
                <NextLink
                  className={clsx(
                    "text-lg font-medium transition-colors duration-200",
                    getMobileTextColor(isActive, isLast)
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </NextLink>
                {item.description && (
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                )}
              </NavbarMenuItem>
            );
          })}
        </nav>

        {/* Redes sociales - Pie del menú móvil */}
        <div className="mx-4 mt-auto border-t border-gray-200 pt-6 pb-6">
          <div className="flex justify-start gap-4">
            {siteConfig.links.facebook && (
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9"
                aria-label="Síguenos en Facebook"
              >
                <FaFacebook className="h-full w-full" aria-hidden="true" />
              </a>
            )}
            {siteConfig.links.instagram && (
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9"
                aria-label="Síguenos en Instagram"
              >
                <FaInstagram className="h-full w-full" aria-hidden="true" />
              </a>
            )}
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9"
                aria-label="Síguenos en LinkedIn"
              >
                <FaLinkedin className="h-full w-full" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
