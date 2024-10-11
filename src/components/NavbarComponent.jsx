"use client";

import { useState } from "react";
import { useScroll } from "@/hooks";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();

  return (
    <Navbar
      maxWidth="lg"
      isBlurred={false}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/jci.png"
              alt="JCI Ambato Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Items */}
      <NavbarContent className="hidden lg:flex" justify="end">
        {siteConfig.navItems.map((item, index) => (
          <NavbarItem key={item.path}>
            <Link
              className={`transition-colors duration-200 ${
                isScrolled
                  ? index === siteConfig.navItems.length - 1
                    ? "text-yellow-600"
                    : "text-black"
                  : index === siteConfig.navItems.length - 1
                  ? "text-yellow-400"
                  : "text-white"
              } hover:text-yellow-400`}
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Toggle del menú para pantallas pequeñas */}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`transition-colors duration-200 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {/* Menú desplegable en acción del toggle */}
      <NavbarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.path}-${index}`}>
            <Link
              className="w-full text-center transition-colors duration-200 hover:text-yellow-400"
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
