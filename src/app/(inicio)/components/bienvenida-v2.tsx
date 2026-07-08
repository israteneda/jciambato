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
              <div className="text-jci-yellow text-xs font-bold tracking-normal uppercase lg:text-sm">
                Impulsando el cambio
              </div>

              <div className="mt-6">
                <h2 className="from-jci-navy via-jci-teal to-jci-navy max-w-xl bg-linear-to-br bg-clip-text text-3xl font-bold text-transparent lg:text-6xl">
                  Líderes que Impactan el Futuro
                </h2>
              </div>

              <div className="mt-10">
                <p className="text-jci-black lg:text-medium max-w-md text-sm leading-relaxed">
                  Con cada proyecto, impulsamos el cambio a través de la innovación, transformando
                  ideas en soluciones que construyen comunidades más fuertes y mejoran vidas.
                </p>
              </div>

              <div className="mt-9">
                <Button
                  radius="none"
                  className="group bg-jci-teal relative overflow-hidden text-white"
                  aria-label="Más información sobre nosotros"
                >
                  <Link href="/nosotros">
                    <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-jci-black transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10">Sobre Nosotros</span>
                  </Link>
                </Button>
              </div>
            </div>
          </main>

          {/* Fondo degradado creativo */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Gradiente base mejorado */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-cyan-50 to-gray-50"></div>

            {/* Formas geométricas abstractas principales */}
            <div className="from-jci-navy/20 absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-linear-to-br to-transparent blur-3xl"></div>

            <div className="from-jci-teal/30 absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-linear-to-tr to-transparent blur-3xl"></div>

            <div className="from-jci-teal/25 to-jci-yellow/20 absolute top-1/2 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-linear-to-r blur-2xl"></div>

            {/* Nuevas formas adicionales */}
            <div className="from-jci-navy/15 to-jci-teal/10 absolute top-1/4 right-1/3 h-48 w-48 translate-x-1/4 -translate-y-1/4 transform rounded-full bg-linear-to-bl blur-2xl"></div>

            <div className="from-jci-yellow/20 to-jci-teal/15 absolute bottom-1/4 left-1/3 h-56 w-56 -translate-x-1/3 translate-y-1/3 transform rounded-full bg-linear-to-tr blur-2xl"></div>

            {/* Formas angulares para contraste */}
            <div className="from-jci-navy/15 to-jci-teal/10 absolute top-20 right-20 h-32 w-32 rotate-45 transform bg-linear-to-br blur-xl"></div>

            <div className="from-jci-yellow/20 to-jci-teal/15 absolute right-1/3 bottom-32 h-24 w-24 -rotate-12 transform bg-linear-to-tl blur-lg"></div>

            {/* Nuevas formas angulares */}
            <div className="from-jci-teal/25 to-jci-navy/10 absolute top-40 left-10 h-20 w-20 rotate-30 transform bg-linear-to-br blur-lg"></div>

            <div className="from-jci-teal/20 to-jci-yellow/15 absolute bottom-20 left-1/4 h-16 w-16 -rotate-45 transform bg-linear-to-tl blur-md"></div>

            <div className="from-jci-navy/20 to-jci-teal/15 absolute top-1/3 right-10 h-28 w-28 rotate-60 transform bg-linear-to-r blur-xl"></div>

            {/* Líneas sutiles mejoradas */}
            <div className="via-jci-navy/10 absolute top-1/3 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent"></div>

            <div className="via-jci-teal/10 absolute right-0 bottom-1/3 h-px w-full bg-linear-to-l from-transparent to-transparent"></div>

            {/* Nuevas líneas diagonales */}
            <div className="via-jci-teal/8 absolute top-1/4 left-0 h-px w-full rotate-12 transform bg-linear-to-r from-transparent to-transparent"></div>

            <div className="via-jci-yellow/8 absolute right-0 bottom-1/4 h-px w-full -rotate-12 transform bg-linear-to-l from-transparent to-transparent"></div>

            {/* Patrones de puntos sutiles */}
            <div className="bg-jci-navy/20 absolute top-1/6 left-1/6 h-2 w-2 rounded-full blur-sm"></div>
            <div className="bg-jci-teal/25 absolute top-1/6 left-2/3 h-1.5 w-1.5 rounded-full blur-sm"></div>
            <div className="bg-jci-teal/30 absolute top-2/3 left-1/4 h-1 w-1 rounded-full blur-sm"></div>
            <div className="bg-jci-yellow/20 absolute top-3/4 right-1/4 h-1.5 w-1.5 rounded-full blur-sm"></div>
            <div className="bg-jci-navy/15 absolute right-1/6 bottom-1/6 h-2 w-2 rounded-full blur-sm"></div>

            {/* Formas de ondas sutiles */}
            <div className="from-jci-teal/10 absolute top-0 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-linear-to-br to-transparent blur-2xl"></div>
            <div className="from-jci-teal/12 absolute right-1/2 bottom-0 h-40 w-40 translate-x-1/2 translate-y-1/2 transform rounded-full bg-linear-to-tl to-transparent blur-3xl"></div>

            {/* Overlay sutil para mejorar legibilidad */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Gradiente adicional para transición suave a gray-50 */}
            <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-linear-to-t from-gray-50/80 to-transparent"></div>
          </div>
        </div>

        <RotatedText text="BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO" />

        {/* Botón de scroll */}
        <div className="absolute top-1/2 right-2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
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
        <div className="absolute right-[40px] bottom-[100px] z-20 hidden md:right-[124px] md:bottom-[60px] md:block">
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
        <div className="text-jci-teal absolute bottom-[100px] left-[40px] z-20 hidden text-[10.5px] font-semibold uppercase md:bottom-[80px] md:left-[180px] md:block">
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
            <span className="text-jci-teal text-[10.5px] font-semibold uppercase">
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
