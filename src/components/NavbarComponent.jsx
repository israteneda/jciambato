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
import { Link } from "@nextui-org/link";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();

  const menuItems = [
    "Nosotros",
    "Áreas de Oportunidad",
    "Proyectos",
    "Programas",
    "Miembros",
    "Involúcrate",
  ];

  return (
    <Navbar
      isBlurred={false}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Contenido del logo para pantallas pequeñas y grandes */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" title="JCI Ambato - Página Principal">
            <Image
              src="/jci.png"
              alt="JCI Ambato Logo"
              width={80}
              height={80}
              priority={true}
              loading="eager"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Botón para el menú móvil */}
      <NavbarContent className="hidden lg:flex gap-6" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/nosotros"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-400`}
          >
            Nosotros
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/areas_oportunidad"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-400`}
          >
            Áreas de Oportunidad
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/#"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-400`}
          >
            Proyectos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/#"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-400`}
          >
            Programas
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/#"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-400`}
          >
            Miembros
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/#"
            className={`transition-colors duration-200 ${
              isScrolled ? "text-yellow-600" : "text-yellow-400"
            }  hover:text-yellow-400`}
          >
            Involúcrate
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`transition-colors duration-200 ${
          isScrolled ? "text-black" : "text-white"
        }`}
      />

      {/* Menú desplegable para pantallas pequeñas */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}