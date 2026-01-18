"use client";

/* import { useScroll } from "@/hooks"; */
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";
/* import BorderFrame from "@/components/commons/border-frame"; */
import RotatedText from "@/components/commons/rotated-text";

export default function BienvenidaV2() {
  /* const isScrolled = useScroll(); */

  return (
    <section className="relative" aria-labelledby="bienvenida-heading">
      <header className="sr-only">
        <h1 id="bienvenida-heading">Bienvenido a JCI Ambato</h1>
      </header>

      <div className="flex w-full">
        <div className="box-border flex h-screen items-center px-[45px] pb-[92px] lg:px-[180px]">
          {/* <BorderFrame isScrolled={isScrolled} /> */}

          {/* Contenido principal */}
          <main className="relative z-20">
            <div className="flex flex-col items-start">
              <div className="text-xs font-bold uppercase tracking-normal text-jci-yellow lg:text-sm">
                Impulsando el cambio
              </div>

              <div className="mt-6">
                <h2 className="max-w-xl bg-gradient-to-br from-jci-navy via-jci-seafoam to-jci-navy bg-clip-text text-3xl font-bold text-transparent lg:text-6xl">
                  Líderes que Impactan el Futuro
                </h2>
              </div>

              <div className="mt-10">
                <p className="text-jci-off-black max-w-md text-sm leading-relaxed lg:text-medium">
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

          {/* Fondo degradado creativo */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Gradiente base mejorado */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-gray-50"></div>

            {/* Formas geométricas abstractas principales */}
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-gradient-to-br from-jci-navy/20 to-transparent blur-3xl"></div>

            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-gradient-to-tr from-jci-seafoam/30 to-transparent blur-3xl"></div>

            <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-jci-teal/25 to-jci-yellow/20 blur-2xl"></div>

            {/* Nuevas formas adicionales */}
            <div className="absolute right-1/3 top-1/4 h-48 w-48 -translate-y-1/4 translate-x-1/4 transform rounded-full bg-gradient-to-bl from-jci-navy/15 to-jci-seafoam/10 blur-2xl"></div>

            <div className="absolute bottom-1/4 left-1/3 h-56 w-56 -translate-x-1/3 translate-y-1/3 transform rounded-full bg-gradient-to-tr from-jci-yellow/20 to-jci-teal/15 blur-2xl"></div>

            {/* Formas angulares para contraste */}
            <div className="absolute right-20 top-20 h-32 w-32 rotate-45 transform bg-gradient-to-br from-jci-navy/15 to-jci-seafoam/10 blur-xl"></div>

            <div className="absolute bottom-32 right-1/3 h-24 w-24 -rotate-12 transform bg-gradient-to-tl from-jci-yellow/20 to-jci-teal/15 blur-lg"></div>

            {/* Nuevas formas angulares */}
            <div className="rotate-30 absolute left-10 top-40 h-20 w-20 transform bg-gradient-to-br from-jci-seafoam/25 to-jci-navy/10 blur-lg"></div>

            <div className="absolute bottom-20 left-1/4 h-16 w-16 -rotate-45 transform bg-gradient-to-tl from-jci-teal/20 to-jci-yellow/15 blur-md"></div>

            <div className="rotate-60 absolute right-10 top-1/3 h-28 w-28 transform bg-gradient-to-r from-jci-navy/20 to-jci-seafoam/15 blur-xl"></div>

            {/* Líneas sutiles mejoradas */}
            <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-jci-navy/10 to-transparent"></div>

            <div className="absolute bottom-1/3 right-0 h-px w-full bg-gradient-to-l from-transparent via-jci-seafoam/10 to-transparent"></div>

            {/* Nuevas líneas diagonales */}
            <div className="via-jci-teal/8 absolute left-0 top-1/4 h-px w-full rotate-12 transform bg-gradient-to-r from-transparent to-transparent"></div>

            <div className="via-jci-yellow/8 absolute bottom-1/4 right-0 h-px w-full -rotate-12 transform bg-gradient-to-l from-transparent to-transparent"></div>

            {/* Patrones de puntos sutiles */}
            <div className="top-1/6 left-1/6 absolute h-2 w-2 rounded-full bg-jci-navy/20 blur-sm"></div>
            <div className="top-1/6 absolute left-2/3 h-1.5 w-1.5 rounded-full bg-jci-seafoam/25 blur-sm"></div>
            <div className="absolute left-1/4 top-2/3 h-1 w-1 rounded-full bg-jci-teal/30 blur-sm"></div>
            <div className="absolute right-1/4 top-3/4 h-1.5 w-1.5 rounded-full bg-jci-yellow/20 blur-sm"></div>
            <div className="bottom-1/6 right-1/6 absolute h-2 w-2 rounded-full bg-jci-navy/15 blur-sm"></div>

            {/* Formas de ondas sutiles */}
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-jci-seafoam/10 to-transparent blur-2xl"></div>
            <div className="from-jci-teal/12 absolute bottom-0 right-1/2 h-40 w-40 translate-x-1/2 translate-y-1/2 transform rounded-full bg-gradient-to-tl to-transparent blur-3xl"></div>

            {/* Overlay sutil para mejorar legibilidad */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Gradiente adicional para transición suave a gray-50 */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50/80 to-transparent"></div>
          </div>
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        {/* Botón de scroll */}
        <div className="absolute right-2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
          <button
            aria-label="Desplazarse hacia abajo"
            onClick={() => {
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
