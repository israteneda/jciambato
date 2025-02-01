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
} from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const NavbarLink = ({ href, children, isScrolled, isLast }) => (
  <Link
    className={`transition-colors duration-200 ${
      isScrolled
        ? isLast
          ? "text-yellow-600"
          : "text-black"
        : isLast
        ? "text-yellow-500"
        : "text-white"
    } hover:text-yellow-400`}
    href={href}
  >
    {children}
  </Link>
);

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();

  return (
    <Navbar
      maxWidth="xl"
      isBlurred={false}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo */}
      <NavbarContent justify="start" className="">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/jci.png"
              alt="JCI Ambato Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Items */}
      <NavbarContent className="hidden lg:flex" justify="end">
        {siteConfig.navItems.map((item, index) => (
          <NavbarItem key={item.path}>
            <NavbarLink
              href={item.path}
              isScrolled={isScrolled}
              isLast={index === siteConfig.navItems.length - 1}
            >
              {item.name}
            </NavbarLink>
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
              className="w-full text-center transition-colors duration-200 hover:text-yellow-500"
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