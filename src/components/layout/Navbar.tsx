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
      return "text-jci-gold font-semibold hover:text-yellow-400";
    }

    if (shouldUseDarkText) {
      return isActive ? "text-jci-gold" : "text-jci-black hover:text-jci-gold";
    } else {
      return isActive ? "text-jci-gold" : "text-white hover:text-jci-gold";
    }
  };

  const getMobileTextColor = (isActive: boolean, isLast: boolean) => {
    if (isLast) {
      return "text-jci-gold font-semibold hover:text-yellow-400 transition-colors duration-200";
    }

    return isActive
      ? "text-jci-navy font-semibold"
      : "text-jci-black hover:text-gray-600 transition-colors duration-200";
  };

  return (
    <HeroUINavbar
      className={clsx(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50 select-none",
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
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/" aria-label="Ir a la página de inicio">
            <Image
              alt="JCI Ambato Logo"
              className="object-contain w-[90px] h-[90px]"
              src="/images/logos/jci-ambato.webp"
              width={90}
              height={90}
              priority
              draggable="false"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección de navegación */}
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <nav className="hidden lg:block" aria-label="Navegación principal">
          <ul className="flex gap-8 justify-start ml-2" role="menubar">
            {siteConfig.navItems.map((item, index) => {
              const isLast = index === siteConfig.navItems.length - 1;
              const isActive = pathname === item.href;

              return (
                <NavbarItem key={item.href} role="none">
                  <NextLink
                    className={clsx(
                      "transition-colors duration-200",
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
            className={clsx("w-12 h-12 p-2", shouldUseDarkText ? "text-jci-black" : "text-white")}
            srOnlyText="Abrir menú de navegación"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          />
        </div>
      </NavbarContent>

      <NavbarMenu
        className={clsx("bg-white flex flex-col")}
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
      >
        <nav className="mx-4 mt-6 flex flex-col gap-6 flex-1" aria-label="Navegación móvil">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={`${item}-${index}`} className="flex flex-col items-start">
                <NextLink
                  className={clsx(
                    "transition-colors duration-200 text-lg font-medium",
                    getMobileTextColor(isActive, isLast)
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </NextLink>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                )}
              </NavbarMenuItem>
            );
          })}
        </nav>

        {/* Redes sociales - Pie del menú móvil */}
        <div className="mx-4 mt-auto pt-6 border-t border-gray-200 pb-6">
          <div className="flex gap-4 justify-start">
            {siteConfig.links.facebook && (
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9"
                aria-label="Síguenos en Facebook"
              >
                <FaFacebook className="w-full h-full" aria-hidden="true" />
              </a>
            )}
            {siteConfig.links.instagram && (
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9"
                aria-label="Síguenos en Instagram"
              >
                <FaInstagram className="w-full h-full" aria-hidden="true" />
              </a>
            )}
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9"
                aria-label="Síguenos en LinkedIn"
              >
                <FaLinkedin className="w-full h-full" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
