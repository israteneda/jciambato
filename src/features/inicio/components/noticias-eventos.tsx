"use client";

import { getAllNoticiasEventos } from "@/features/noticias-eventos/data";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export default function NoticiasEventos() {
  const noticiasItems = getAllNoticiasEventos();

  return (
    <Section className="py-0 md:py-0">
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="mt-6">
              <h3 className="text-jci-black text-left text-3xl leading-[1.33] font-bold tracking-normal normal-case not-italic md:text-5xl">
                Noticias y Eventos
              </h3>
            </div>

            <div className="hidden md:block">
              <Button
                size="lg"
                className="group border-jci-gray text-jci-gray relative overflow-hidden bg-transparent hover:bg-transparent"
                aria-label="Ver todas las noticias y eventos"
              >
                <Link href="/noticias-eventos">
                  <span className="bg-jci-navy absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
                  <span className="relative transition-colors duration-300 group-hover:text-white">
                    Ver más
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Contenido sin márgenes */}
      <div className="w-full overflow-visible pt-20">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".noticias-next",
            prevEl: ".noticias-prev",
          }}
          grabCursor={true}
          className="relative block list-none p-0"
          aria-label="Carrusel de noticias y eventos"
        >
          <div className="relative flex h-full w-full">
            {noticiasItems.map((item, index) => (
              <SwiperSlide
                key={item.id}
                style={{ width: "325px" }}
                className={index === 0 ? "ml-8 md:ml-20 lg:md:ml-[13%]" : ""}
              >
                <article>
                  <Link href={`/noticias-eventos/${item.slug}`} className="group w-full">
                    <div className="group w-full">
                      <header>
                        <div className="text-jci-navy text-[13px] leading-[1.85] font-normal tracking-normal uppercase not-italic">
                          <span>{item.tipo}</span>
                        </div>

                        <div className="mt-4">
                          <h3 className="text-jci-black text-left text-[22px] leading-[1.45] font-bold tracking-normal not-italic md:text-[calc(17.2px+0.25vw)]">
                            {item.titulo}
                          </h3>
                        </div>
                      </header>

                      <div className="mt-6">
                        <div className="group relative inline-block max-w-full cursor-pointer transition duration-400">
                          <div className="flex items-center py-4">
                            <span className="text-jci-navy group-hover:text-jci-yellow text-xs leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                              Leer más
                            </span>
                            <div
                              className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden="true"
                            >
                              <HiOutlineArrowNarrowRight className="text-jci-navy group-hover:text-jci-yellow h-6 w-6 transition-colors duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <figure className="mt-4 h-80 w-full overflow-hidden bg-black">
                        <div className="relative h-full w-full overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80">
                          <Image
                            src={item.imagen}
                            alt={`Imagen de ${item.titulo}`}
                            width={500}
                            height={500}
                            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100"
                          />
                        </div>
                      </figure>
                    </div>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* Pie con márgenes */}
      <Container className="hidden md:block">
        <div className="relative mt-16 flex justify-between">
          <div className="flex items-center">
            <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
              Arrastra para mover
            </div>
            <div className="bg-jci-gray/30 relative ml-8 h-px w-15 overflow-hidden">
              <span
                className="animate-loop bg-jci-teal absolute top-0 left-0 h-px w-15"
                aria-hidden="true"
              />
            </div>
          </div>

          <nav className="flex space-x-14" aria-label="Navegación del carrusel">
            <button className="noticias-prev" aria-label="Noticia anterior">
              <Image
                src="/icons/arrow-down.svg"
                alt=""
                width={500}
                height={500}
                className="relative w-5 rotate-90 object-cover"
                aria-hidden="true"
              />
            </button>

            <button className="noticias-next" aria-label="Noticia siguiente">
              <Image
                src="/icons/arrow-down.svg"
                alt=""
                width={500}
                height={500}
                className="relative w-5 -rotate-90 object-cover"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </Container>

      <div className="mt-20 block md:hidden">
        <div className="flex items-center justify-center">
          <Button
            className="border-jci-gray text-jci-gray group relative overflow-hidden bg-transparent hover:bg-transparent"
            aria-label="Ver todas las noticias y eventos"
          >
            <Link href="/noticias-eventos">
              <span className="bg-jci-navy absolute inset-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative transition-colors duration-300 group-hover:text-white">
                Ver más
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
