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
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useScroll } from "@/hooks";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const isScrolled = useScroll();

  return (
    <HeroUINavbar
      maxWidth="xl"
      isBlurred={false}
      position="static"
      className={clsx(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50",
        isScrolled ? "bg-white shadow-md" : "bg-jci-navy",
        className
      )}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image
              src={isScrolled ? "/images/logo-jci.png" : "/images/logo-blanco-jci.png"}
              alt="JCI Ambato Logo"
              width={85}
              height={85}
              className="object-contain"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección de navegación */}
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <ul className="hidden md:flex gap-8 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "transition-colors duration-200 hover:text-jci-gold",
                    isLast
                      ? "text-jci-gold font-semibold" // "Involúcrate" siempre dorado
                      : isScrolled
                        ? "text-jci-black" // Cuando hay scroll, texto negro
                        : "text-white" // Antes del scroll, texto blanco
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>

        <div className="md:hidden">
          <NavbarMenuToggle />
        </div>

      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NextLink
                  className={clsx(
                    "transition-colors duration-200 hover:text-jci-gold text-lg",
                    isLast ? "text-jci-gold font-semibold" : "text-jci-black"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
