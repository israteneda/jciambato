"use client";

import { useScroll } from "@/hooks";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import BorderFrame from "@/components/commons/border-frame";
import RotatedText from "@/components/commons/rotated-text";

export default function BienvenidaV1() {
  const isScrolled = useScroll();

  return (
    <section className="relative" aria-labelledby="bienvenida-heading">
      <header className="sr-only">
        <h1 id="bienvenida-heading">Bienvenido a JCI Ambato</h1>
      </header>

      <div className="flex w-full">
        <div className="h-screen flex px-[45px] lg:px-[180px] pb-[92px] items-center box-border">
          <BorderFrame isScrolled={isScrolled} />

          {/* Contenido principal */}
          <main className="relative z-20">
            <div className="flex flex-col items-start">
              <div className="text-xs lg:text-sm uppercase text-jci-gold font-bold tracking-normal">
                Impulsando el cambio
              </div>

              <div className="mt-6">
                <h2 className="bg-gradient-to-br from-jci-navy via-white to-jci-navy text-transparent bg-clip-text font-bold text-3xl lg:text-6xl max-w-xl">
                  Líderes que Impactan el Futuro
                </h2>
              </div>

              <div className="mt-10">
                <p className="text-white max-w-md text-sm lg:text-medium leading-relaxed">
                  Con cada proyecto, impulsamos el cambio a través de la innovación, transformando
                  ideas en soluciones que construyen comunidades más fuertes y mejoran vidas.
                </p>
              </div>

              <div className="mt-9">
                <Button
                  radius="none"
                  className="relative bg-jci-aqua text-white group overflow-hidden"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-[#003D62] transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Sobre Nosotros</span>
                  </Link>
                </Button>
              </div>
            </div>
          </main>

          {/* Video de fondo */}
          <figure className="absolute inset-0">
            <video
              autoPlay
              className="w-full h-full object-cover"
              /* src="/videos/rotary.mp4" */
              src="/videos/company-hero.mp4"
              loop
              preload="auto"
              muted
              playsInline
              aria-hidden="true"
            />

            {/* Fondo Oscuro */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
          </figure>
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        {/* Botón de scroll */}
        <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            aria-label="Desplazarse hacia abajo"
            onClick={() => {
              // Función para scroll suave hacia abajo
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={30}
              height={30}
              className="relative w-[30px] h-[30px] object-contain"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Logo Somos Liderazgo */}
        <div className="hidden md:block absolute bottom-[100px] right-[40px] md:bottom-[60px] md:right-[124px] z-20">
          <Image
            alt="Somos Liderazgo Logo"
            className="object-contain w-[150px] h-[70px]"
            src="/images/logos/somos-liderazgo.webp"
            width={150}
            height={70}
            priority
          />
        </div>

        {/* Enlace a JCI Ecuador */}
        <div className="hidden md:block absolute bottom-[100px] left-[40px] md:bottom-[80px] md:left-[180px] text-[10.5px] font-semibold uppercase z-20 text-jci-seafoam">
          <a
            href="https://jciecuador.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            aria-label="Visitar JCI Ecuador (se abre en nueva ventana)"
          >
            <span>JCI Ecuador</span>
            <MdOutlineArrowOutward className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Botón lateral de navegación */}
      <nav className="absolute left-1/2 z-20 bottom-0 transform -translate-x-1/2 rotate-90">
        <div className="hidden md:block">
          <Link
            href="/nosotros"
            className="flex items-center"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            <span className="text-jci-aqua text-[10.5px] font-semibold uppercase">
              Sobre Nosotros
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="w-[96px] h-[69px] -rotate-90 object-cover"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </section>
  );
}
