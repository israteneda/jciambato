'use client';

import { Button } from "@heroui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiOutlineCollection, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { getProyectosDestacados, type ProyectoDestacado } from "@/data/proyectos-destacados";

interface CarouselProps {
  items?: ProyectoDestacado[];
  autoPlayInterval?: number;
}

export const Carousel = ({ items = getProyectosDestacados(), autoPlayInterval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay items, no renderizar nada
  if (!items || items.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, items.length]);

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Carrusel de proyectos"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div className="relative h-[650px] md:h-[760px] w-full">
        <div className="">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              aria-hidden={index !== currentIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${items.length}`}
            >
              {/* Imagen de fondo */}
              <img
                src={item.image}
                alt={`Imagen de fondo para ${item.title} ${item.projectName}`}
                className="w-full h-full object-cover absolute inset-0"
              />

              {/* Capa oscura */}
              <div className="absolute inset-0 bg-black bg-opacity-60" />

              {/* Contenido del Slide */}
              <div className="relative w-full h-full pt-24 pb-[46px]">
                <div className="relative h-full md:w-[1156px] mx-[30px] md:mx-auto">
                  {/* Texto y botón */}
                  <header>
                    <div className="text-[13px] leading-[1.85] uppercase text-white font-bold">
                      {item.premio || "Proyecto Destacado"}
                    </div>
                    <div className="mt-2 md:mt-8">
                      <h3 className="text-3xl md:text-4xl font-light text-left leading-[1.17] text-white max-w-[666px] ">
                        <span>{item.title} <br /> <strong>{item.projectName}</strong></span>
                      </h3>
                    </div>
                    <div className="mt-10 md:mt-20">
                      <p className="text-medium leading-[1.78] text-white text-left max-w-[470px] md:text-[calc(15.6px+0.125vw)]">
                        {item.description}
                      </p>
                    </div>
                  </header>

                  {/* Botón "Ver Proyecto" */}
                  <footer className="absolute left-0 bottom-0 w-full">
                    <div className="flex items-center justify-between">
                      <div className="relative inline-block transition duration-400">
                        <div className="flex py-4">
                          <Link
                            href={item.url}
                            className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                            aria-label={`Leer más sobre ${item.title} ${item.projectName}`}
                          >
                            <div className="flex items-center py-4">
                              <span className="text-xs text-jci-seafoam leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                Leer más
                              </span>
                              <div
                                className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              >
                                <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-seafoam group-hover:text-jci-red transition-colors duration-300" />
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
                          className="w-[40px] h-[40px] text-[#989898] border-[#989898]"
                          onPress={prevSlide}
                          aria-label="Slide anterior"
                        >
                          <HiChevronLeft className="w-6 h-6 text-gray-50" />
                        </Button>
                        <div className="h-[12px]" />
                        <Button
                          isIconOnly
                          variant="bordered"
                          radius="full"
                          className="w-[40px] h-[40px] text-[#989898] border-[#989898]"
                          onPress={nextSlide}
                          aria-label="Slide siguiente"
                        >
                          <HiChevronRight className="w-6 h-6 text-gray-50" />
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
        className="hidden absolute top-1/2 right-[54px] w-[22px] md:flex items-center flex-col transform -translate-y-1/2 z-50"
        aria-label="Indicador de posición"
        aria-live="polite"
      >
        <div className="text-white text-[48px] font-normal">
          {String(currentIndex + 1).padStart(2, "0")}
        </div>
        <div className="opacity-50 text-white text-[48px] mt-2 pt-2 border-t border-white">
          {String(items.length).padStart(2, "0")}
        </div>
      </div>

      {/* Botones de navegación pantallas grandes */}
      <nav
        className="hidden absolute right-[45px] bottom-[112px] md:flex flex-col"
        aria-label="Navegación del carrusel"
      >
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          onPress={prevSlide}
          aria-label="Slide anterior"
        >
          <HiChevronLeft className="w-6 h-6 text-gray-50" />
        </Button>
        <div className="h-[12px]" />
        <Button
          isIconOnly
          variant="bordered"
          radius="full"
          onPress={nextSlide}
          aria-label="Slide siguiente"
        >
          <HiChevronRight className="w-6 h-6 text-gray-50" />
        </Button>
      </nav>

      {/* Botón colección */}
      <div className="hidden md:block absolute right-[45px] bottom-[48px]">
        <Link href="/proyectos" aria-label="Ver todos los proyectos">
          <Button
            isIconOnly
            radius="full"
            className="bg-jci-aqua hover:bg-[#003D62] transition-colors duration-300"
            aria-label="Ver colección de proyectos"
          >
            <HiOutlineCollection className="w-6 h-6 text-gray-50" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
