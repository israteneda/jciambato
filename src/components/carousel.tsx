"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineCollection,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Proyecto } from "@/types/proyecto";
import { Button } from "./ui/button";
import { getProyectosDestacados } from "@/features/proyectos/data/destacados/proyectos-destacados";
import { Container } from "./layout/container";

interface CarouselProps {
  proyectos?: Proyecto[];
  autoPlayInterval?: number;
}

export const Carousel = ({
  proyectos = getProyectosDestacados(),
  autoPlayInterval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay proyectos, no renderizar nada
  if (!proyectos || proyectos.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, proyectos.length]);

  return (
    <div
      className="relative overflow-hidden"
      aria-label="Carrusel de proyectos"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div className="relative h-162 w-full md:h-190">
        <div className="">
          {proyectos.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
              aria-hidden={index !== currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${proyectos.length}`}
            >
              {/* Imagen de fondo */}
              <Image
                src={proyecto.imagen}
                alt={`Imagen de fondo para ${proyecto.titulo} ${proyecto.nombre}`}
                fill
                className="absolute inset-0 h-full w-full object-cover brightness-50"
                sizes="100vw"
                priority={index === 0}
              />

              {/* Contenido del Slide */}
              <div className="relative h-full w-full pt-24 pb-11">
                <Container className="h-full">
                  {/* Texto y botón */}
                  <header>
                    <div className="text-[13px] leading-[1.85] font-bold text-white uppercase">
                      {proyecto.premio || "Proyecto Destacado"}
                    </div>
                    <div className="mt-6 md:mt-8">
                      <h3 className="max-w-3xl text-left text-3xl leading-[1.17] font-light text-white md:text-4xl">
                        <span>
                          {proyecto.titulo} <br /> <strong>{proyecto.nombre}</strong>
                        </span>
                      </h3>
                    </div>
                    <div className="mt-10 md:mt-20">
                      <p className="text-medium max-w-117 text-left leading-[1.78] text-white md:text-[calc(15.6px+0.125vw)]">
                        {proyecto.descripcion}
                      </p>
                    </div>
                  </header>

                  {/* Botón "Ver Proyecto" */}
                  <footer className="absolute bottom-0 left-0 w-full">
                    <div className="flex items-center justify-between">
                      <div className="relative inline-block transition duration-400">
                        <div className="flex py-4">
                          <Link
                            href={`/proyectos/${proyecto.slug}`}
                            className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                            aria-label={`Leer más sobre ${proyecto.titulo} ${proyecto.nombre}`}
                          >
                            <div className="flex items-center py-4">
                              <span className="group-hover:text-jci-teal text-jci-teal text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                                Leer más
                              </span>
                              <div
                                className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              >
                                <HiOutlineArrowNarrowRight className="group-hover:text-jci-teal text-jci-teal h-6 w-6 transition-colors duration-300" />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <nav className="flex gap-1 md:hidden" aria-label="Navegación del carrusel">
                        <Button size="icon" onClick={prevSlide} aria-label="Slide anterior">
                          <HiChevronLeft className="h-6 w-6 text-gray-50" />
                        </Button>
                        <div className="h-3" />
                        <Button size="icon" onClick={nextSlide} aria-label="Slide siguiente">
                          <HiChevronRight className="h-6 w-6 text-gray-50" />
                        </Button>
                      </nav>
                    </div>
                  </footer>
                </Container>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Indicadores numéricos */}
      <div
        className="absolute top-1/2 right-13 hidden w-5 -translate-y-1/2 transform flex-col items-center md:flex"
        aria-label="Indicador de posición"
        aria-live="polite"
      >
        <div className="text-4xl font-normal text-white lg:text-5xl">
          {String(currentIndex + 1).padStart(2, "0")}
        </div>
        <div className="mt-2 border-t border-white pt-2 text-4xl text-white opacity-50 lg:text-5xl">
          {String(proyectos.length).padStart(2, "0")}
        </div>
      </div>

      {/* Botones de navegación pantallas grandes */}
      <nav
        className="absolute right-11 bottom-28 hidden flex-col md:flex"
        aria-label="Navegación del carrusel"
      >
        <Button size="icon-lg" onClick={prevSlide} aria-label="Slide anterior">
          <HiChevronLeft className="h-6 w-6 text-white" />
        </Button>
        <div className="h-3" />
        <Button size="icon-lg" onClick={nextSlide} aria-label="Slide siguiente">
          <HiChevronRight className="h-6 w-6 text-white" />
        </Button>
      </nav>

      {/* Botón colección */}
      <div className="absolute right-11 bottom-12 hidden md:block">
        <Link href="/proyectos" aria-label="Ver todos los proyectos">
          <Button
            size="icon-lg"
            className="bg-jci-blue hover:bg-jci-navy transition-colors duration-300"
            aria-label="Ver colección de proyectos"
          >
            <HiOutlineCollection className="h-6 w-6 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
