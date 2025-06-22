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

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const isScrolled = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldUseDarkText, setShouldUseDarkText] = useState(false);

  // Función para detectar si el navbar debe usar texto oscuro
  const detectTextColor = () => {
    // Páginas que siempre necesitan texto oscuro (fondo claro)
    const darkTextPages = ['/areas-oportunidad', '/involucrate'];

    // Páginas que necesitan texto blanco por defecto pero pueden cambiar con scroll (fondo oscuro)
    const scrollDependentPages = ['/', '/nosotros', '/actividades', '/miembros'];

    // Si estamos en una página que siempre necesita texto oscuro
    if (darkTextPages.includes(pathname)) {
      setShouldUseDarkText(true);
      return;
    }

    // Texto blanco por defecto, oscuro con scroll para páginas dinámicas (como /areas-oportunidad/slug)
    if (pathname.startsWith('/areas-oportunidad/')) {
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
      return isActive
        ? "text-jci-gold"
        : "text-jci-black hover:text-jci-gold";
    } else {
      return isActive
        ? "text-jci-gold"
        : "text-white hover:text-jci-gold";
    }
  };

  const getMobileTextColor = (isActive: boolean, isLast: boolean) => {
    if (isLast) {
      return "text-jci-gold font-semibold hover:bg-jci-gold hover:text-white w-fit";
    }

    return isActive
      ? "text-jci-navy font-semibold"
      : "text-jci-black";
  };

  return (
    <HeroUINavbar
      className={clsx(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
        className
      )}
      classNames={{
        toggleIcon: shouldUseDarkText ? "w-8 h-8 text-jci-black" : "w-8 h-8 text-white",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
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
              className="object-contain w-[85px] h-[85px]"
              src="/images/logos/jci-ambato.webp"
              width={85}
              height={85}
              priority
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección de navegación */}
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <nav className="hidden md:block" aria-label="Navegación principal">
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

        <div className="md:hidden">
          <NavbarMenuToggle
            className={clsx(
              "w-12 h-12 p-2",
              shouldUseDarkText ? "text-jci-black" : "text-white"
            )}
            srOnlyText="Abrir menú de navegación"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          />
        </div>
      </NavbarContent>

      <NavbarMenu
        className={clsx("bg-white")}
        id="mobile-menu"
        aria-label="Menú de navegación móvil"
      >
        <nav className="mx-4 mt-6 flex flex-col gap-4" aria-label="Navegación móvil">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={`${item}-${index}`} className="flex justify-start">
                <NextLink
                  className={clsx(
                    "transition-colors duration-200 text-lg",
                    getMobileTextColor(isActive, isLast)
                  )}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            );
          })}
        </nav>
      </NavbarMenu>
    </HeroUINavbar >
  );
};
