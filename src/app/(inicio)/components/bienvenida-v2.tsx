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
        <div className="h-screen flex px-[45px] lg:px-[180px] pb-[92px] items-center box-border">
          {/* <BorderFrame isScrolled={isScrolled} /> */}

          {/* Contenido principal */}
          <main className="relative z-20">
            <div className="flex flex-col items-start">
              <div className="text-xs lg:text-sm uppercase text-jci-gold font-bold tracking-normal">
                Impulsando el cambio
              </div>

              <div className="mt-6">
                <h2 className="bg-gradient-to-br from-jci-navy via-jci-seafoam to-jci-navy text-transparent bg-clip-text font-bold text-3xl lg:text-6xl max-w-xl">
                  Líderes que Impactan el Futuro
                </h2>
              </div>

              <div className="mt-10">
                <p className="text-jci-off-black max-w-md text-sm lg:text-medium leading-relaxed">
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

          {/* Fondo degradado creativo */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Gradiente base mejorado */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-gray-50"></div>

            {/* Formas geométricas abstractas principales */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-jci-navy/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-jci-seafoam/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-jci-aqua/25 to-jci-gold/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Nuevas formas adicionales */}
            <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-bl from-jci-navy/15 to-jci-seafoam/10 rounded-full blur-2xl transform translate-x-1/4 -translate-y-1/4"></div>

            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-tr from-jci-gold/20 to-jci-aqua/15 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

            {/* Formas angulares para contraste */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-jci-navy/15 to-jci-seafoam/10 transform rotate-45 blur-xl"></div>

            <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-tl from-jci-gold/20 to-jci-aqua/15 transform -rotate-12 blur-lg"></div>

            {/* Nuevas formas angulares */}
            <div className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-br from-jci-seafoam/25 to-jci-navy/10 transform rotate-30 blur-lg"></div>

            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-tl from-jci-aqua/20 to-jci-gold/15 transform -rotate-45 blur-md"></div>

            <div className="absolute top-1/3 right-10 w-28 h-28 bg-gradient-to-r from-jci-navy/20 to-jci-seafoam/15 transform rotate-60 blur-xl"></div>

            {/* Líneas sutiles mejoradas */}
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-jci-navy/10 to-transparent"></div>

            <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-jci-seafoam/10 to-transparent"></div>

            {/* Nuevas líneas diagonales */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-jci-aqua/8 to-transparent transform rotate-12"></div>

            <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-jci-gold/8 to-transparent transform -rotate-12"></div>

            {/* Patrones de puntos sutiles */}
            <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-jci-navy/20 rounded-full blur-sm"></div>
            <div className="absolute top-1/6 left-2/3 w-1.5 h-1.5 bg-jci-seafoam/25 rounded-full blur-sm"></div>
            <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-jci-aqua/30 rounded-full blur-sm"></div>
            <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-jci-gold/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-jci-navy/15 rounded-full blur-sm"></div>

            {/* Formas de ondas sutiles */}
            <div className="absolute top-0 left-1/2 w-32 h-32 bg-gradient-to-br from-jci-seafoam/10 to-transparent rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/2 w-40 h-40 bg-gradient-to-tl from-jci-aqua/12 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

            {/* Overlay sutil para mejorar legibilidad */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Gradiente adicional para transición suave a gray-50 */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50/80 to-transparent"></div>
          </div>
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        {/* Botón de scroll */}
        <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
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
