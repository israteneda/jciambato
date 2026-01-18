"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineCollection,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { getProyectosDestacados } from "@/data/proyectos/destacados/proyectos-destacados";
import { Proyecto } from "@/types/proyecto";

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, proyectos.length]);

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Carrusel de proyectos"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div className="relative h-[650px] w-full md:h-[760px]">
        <div className="">
          {proyectos.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              aria-hidden={index !== currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${proyectos.length}`}
            >
              {/* Imagen de fondo */}
              <img
                src={proyecto.imagen}
                alt={`Imagen de fondo para ${proyecto.titulo} ${proyecto.nombre}`}
                className="absolute inset-0 h-full w-full object-cover brightness-50"
              />

              {/* Contenido del Slide */}
              <div className="relative h-full w-full pb-[46px] pt-24">
                <div className="relative mx-8 h-full md:mx-20 md:max-w-7xl lg:mx-auto">
                  {/* Texto y botón */}
                  <header>
                    <div className="text-[13px] font-bold uppercase leading-[1.85] text-white">
                      {proyecto.premio || "Proyecto Destacado"}
                    </div>
                    <div className="mt-6 md:mt-8">
                      <h3 className="max-w-3xl text-left text-3xl font-light leading-[1.17] text-white md:text-4xl">
                        <span>
                          {proyecto.titulo} <br /> <strong>{proyecto.nombre}</strong>
                        </span>
                      </h3>
                    </div>
                    <div className="mt-10 md:mt-20">
                      <p className="max-w-[470px] text-left text-medium leading-[1.78] text-white md:text-[calc(15.6px+0.125vw)]">
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
                            href={proyecto.url}
                            className="group relative z-20 inline-block max-w-full cursor-pointer transition duration-[400ms]"
                            aria-label={`Leer más sobre ${proyecto.titulo} ${proyecto.nombre}`}
                          >
                            <div className="flex items-center py-4">
                              <span className="group-hover:text-jci-red text-xs font-medium not-italic leading-none tracking-normal text-jci-seafoam transition-colors duration-300">
                                Leer más
                              </span>
                              <div
                                className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              >
                                <HiOutlineArrowNarrowRight className="group-hover:text-jci-red h-6 w-6 text-jci-seafoam transition-colors duration-300" />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <nav className="flex gap-1 md:hidden" aria-label="Navegación del carrusel">
                        <Button
                          isIconOnly
                          variant="bordered"
                          radius="full"
                          className="h-[40px] w-[40px] border-[#989898] text-[#989898]"
                          onPress={prevSlide}
                          aria-label="Slide anterior"
                        >
                          <HiChevronLeft className="h-6 w-6 text-gray-50" />
                        </Button>
                        <div className="h-[12px]" />
                        <Button
                          isIconOnly
                          variant="bordered"
                          radius="full"
                          className="h-[40px] w-[40px] border-[#989898] text-[#989898]"
                          onPress={nextSlide}
                          aria-label="Slide siguiente"
                        >
                          <HiChevronRight className="h-6 w-6 text-gray-50" />
                        </Button>
                      </nav>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Indicadores numéricos */}
      <div
        className="absolute right-[54px] top-1/2 z-50 hidden w-[22px] -translate-y-1/2 transform flex-col items-center md:flex"
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
        className="absolute bottom-[112px] right-[45px] hidden flex-col md:flex"
        aria-label="Navegación del carrusel"
      >
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          onPress={prevSlide}
          aria-label="Slide anterior"
        >
          <HiChevronLeft className="h-6 w-6 text-gray-50" />
        </Button>
        <div className="h-[12px]" />
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          onPress={nextSlide}
          aria-label="Slide siguiente"
        >
          <HiChevronRight className="h-6 w-6 text-gray-50" />
        </Button>
      </nav>

      {/* Botón colección */}
      <div className="absolute bottom-[48px] right-[45px] hidden md:block">
        <Link href="/proyectos" aria-label="Ver todos los proyectos">
          <Button
            isIconOnly
            radius="full"
            className="bg-jci-teal transition-colors duration-300 hover:bg-[#003D62]"
            aria-label="Ver colección de proyectos"
          >
            <HiOutlineCollection className="h-6 w-6 text-gray-50" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
