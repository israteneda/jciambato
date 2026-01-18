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
        <div className="box-border flex h-screen items-center px-[45px] pb-[92px] lg:px-[180px]">
          <BorderFrame isScrolled={isScrolled} />

          {/* Contenido principal */}
          <main className="relative z-20">
            <div className="flex flex-col items-start">
              <div className="text-xs font-bold uppercase tracking-normal text-jci-yellow lg:text-sm">
                Impulsando el cambio
              </div>

              <div className="mt-6">
                <h2 className="max-w-xl bg-gradient-to-br from-jci-navy via-white to-jci-navy bg-clip-text text-3xl font-bold text-transparent lg:text-6xl">
                  Líderes que Impactan el Futuro
                </h2>
              </div>

              <div className="mt-10">
                <p className="max-w-md text-sm leading-relaxed text-white lg:text-medium">
                  Con cada proyecto, impulsamos el cambio a través de la innovación, transformando
                  ideas en soluciones que construyen comunidades más fuertes y mejoran vidas.
                </p>
              </div>

              <div className="mt-9">
                <Button
                  radius="none"
                  className="group relative overflow-hidden bg-jci-teal text-white"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-[#003D62] transition-transform duration-300 group-hover:translate-x-0"></span>
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
              className="h-full w-full object-cover"
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
        <div className="absolute right-2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
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
              className="relative h-[30px] w-[30px] object-contain"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Logo Somos Liderazgo */}
        <div className="absolute bottom-[100px] right-[40px] z-20 hidden md:bottom-[60px] md:right-[124px] md:block">
          <Image
            alt="Somos Liderazgo Logo"
            className="h-[70px] w-[150px] object-contain"
            src="/images/logos/somos-liderazgo.webp"
            width={150}
            height={70}
            priority
          />
        </div>

        {/* Enlace a JCI Ecuador */}
        <div className="absolute bottom-[100px] left-[40px] z-20 hidden text-[10.5px] font-semibold uppercase text-jci-seafoam md:bottom-[80px] md:left-[180px] md:block">
          <a
            href="https://jciecuador.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            aria-label="Visitar JCI Ecuador (se abre en nueva ventana)"
          >
            <span>JCI Ecuador</span>
            <MdOutlineArrowOutward className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Botón lateral de navegación */}
      <nav className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rotate-90 transform">
        <div className="hidden md:block">
          <Link
            href="/nosotros"
            className="flex items-center"
            aria-label="Ir a la sección Sobre Nosotros"
          >
            <span className="text-[10.5px] font-semibold uppercase text-jci-teal">
              Sobre Nosotros
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="h-[69px] w-[96px] -rotate-90 object-cover"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </section>
  );
}
