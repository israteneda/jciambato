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

export const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <HeroUINavbar
      maxWidth="xl"
      isBlurred={false}
      position="sticky"
      className={clsx(
        "fixed transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image
              src="/images/jci.png"
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
                    "transition-colors duration-200 hover:text-yellow-400",
                    isLast
                      ? "text-yellow-400 font-semibold" // "Involúcrate" siempre amarillo
                      : isScrolled
                        ? "text-black" // Cuando hay scroll, texto negro
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
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
