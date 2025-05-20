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
import { useState } from "react";
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

  return (
    <HeroUINavbar
      className={clsx(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50",
        isScrolled ? "bg-white shadow-md" : "bg-jci-navy",
        className
      )}
      classNames={{
        toggleIcon: "w-8 h-8",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image
              alt="JCI Ambato Logo"
              className="object-contain"
              height={85}
              src={isScrolled ? "/images/logo-jci.png" : "/images/logo-blanco-jci.png"}
              width={85}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Sección de navegación */}
      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <ul className="hidden md:flex gap-8 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "transition-colors duration-200",
                    isLast
                      ? "text-jci-gold font-semibold hover:text-yellow-400" // Enhanced "Involúcrate" styling
                      : "hover:text-jci-gold",
                    isScrolled
                      ? isActive
                        ? "text-jci-navy font-semibold" // Active item when scrolled
                        : "text-jci-black" // Regular item when scrolled
                      : isActive
                        ? "text-jci-gold font-semibold" // Active item before scroll
                        : "text-white" // Regular item before scroll
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
          <NavbarMenuToggle className="w-12 h-12 p-2 text-white" srOnlyText="Toggle navigation menu" />
        </div>
      </NavbarContent>

      <NavbarMenu className={clsx("bg-white")}>
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {siteConfig.navItems.map((item, index) => {
            const isLast = index === siteConfig.navItems.length - 1;
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={`${item}-${index}`} className="flex justify-start">
                <NextLink
                  className={clsx(
                    "transition-colors duration-200 text-lg",
                    isLast
                      ? "text-jci-gold font-semibold px-4 py-2 rounded-full border-2 border-jci-gold hover:bg-jci-gold hover:text-white w-fit" // Added w-fit
                      : "hover:text-jci-gold",
                    isActive
                      ? "text-jci-navy font-semibold" // Active item
                      : "text-jci-black" // Regular item
                  )}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
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
