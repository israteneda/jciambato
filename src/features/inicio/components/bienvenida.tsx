"use client";

import { useScroll } from "@/hooks";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import BorderFrame from "@/components/border-frame";
import RotatedText from "@/components/rotated-text";
import RowScroll from "@/components/row-scroll";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <Section className="py-0 md:py-0">
      <div className="flex w-full">
        <div className="box-border flex h-screen w-full items-center bg-[#003D62] px-8 pb-23 md:px-45">
          <BorderFrame isScrolled={isScrolled} />

          <div className="relative">
            <div className="flex">
              <div>
                <div className="mt-6">
                  <h1 className="from-jci-navy to-jci-navy max-w-137 bg-linear-to-br via-white bg-clip-text pb-3 text-left text-4xl leading-none font-bold tracking-[-0.5px] text-transparent md:max-w-5xl md:text-5xl lg:text-7xl">
                    Unidos Construyendo un <br />
                    <span className="text-inherit italic">Futuro</span> de Liderazgo
                  </h1>
                </div>

                <div className="mt-4 lg:mt-5">
                  <p className="max-w-130 text-left text-base text-[16px] leading-[1.78] font-normal tracking-normal text-white">
                    Fomentamos el cambio mediante la innovación, convirtiendo ideas en soluciones
                    que fortalecen comunidades y mejoran vidas.
                  </p>
                </div>

                <div className="mt-6 lg:mt-8">
                  <Button
                    size="lg"
                    className="bg-jci-blue hover:bg-jci-blue group relative overflow-hidden text-sm text-white"
                    aria-label="Más información sobre nosotros"
                  >
                    <Link href="/nosotros">
                      <span className="bg-jci-teal absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
                      <span className="relative">Sobre Nosotros</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          {/* <div className="absolute inset-0"></div> */}
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        <RowScroll />
      </div>

      {/* Logo Somos Liderazgo y Sentir Actuar Transformar */}
      <div className="absolute right-5 bottom-16 hidden sm:right-8 sm:bottom-20 md:right-32 md:bottom-16 lg:block">
        <div className="flex items-center gap-5">
          <div className="md:h-auto md:w-38">
            <Image
              alt="Liderazgo con Propósito Logo"
              className="h-full w-full object-contain"
              src="/images/marca/actuar-proposito.webp"
              width={150}
              height={70}
              priority
              draggable="false"
            />
          </div>

          <div className="md:h-auto md:w-30">
            <Image
              alt="Sentir Actuar Transformar Logo"
              className="h-full w-full object-contain"
              src="/images/marca/sentir-actuar-transformar.webp"
              width={150}
              height={70}
              priority
              draggable="false"
            />
          </div>
        </div>
      </div>
      {/* Enlace a JCI Ecuador */}
      <div className="text-jci-teal absolute bottom-16 left-5 hidden text-xs font-bold uppercase sm:bottom-20 sm:left-8 sm:text-xs md:bottom-20 md:text-xs lg:left-44 lg:block">
        <a
          href="https://jciecuador.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
          aria-label="Visitar JCI Ecuador (se abre en nueva ventana)"
        >
          <span>JCI Ecuador</span>
          <MdOutlineArrowOutward
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Botón lateral de navegación */}
      <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-90 transform">
        <div className="hidden md:block">
          <Link
            href="/nosotros"
            className="flex items-center"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            <span className="text-jci-teal text-[8px] font-semibold uppercase md:text-[10.5px]">
              Sobre Nosotros
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="h-10 w-14 -rotate-90 object-cover md:h-16 md:w-24"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </Section>
  );
}
