"use client";

import { getAllNoticiasEventos } from "@/data/noticias";
import { Button } from "@heroui/button";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
import Link from "next/link";

export default function NoticiasEventos() {
  const noticiasItems = getAllNoticiasEventos();

  return (
    <section className="relative" aria-labelledby="noticias-heading">
      <div className="py-10 md:py-28">
        {/* Título */}
        <header className="mx-8 max-w-6xl pb-28 md:mx-20 lg:mx-auto">
          <div className="relative">
            <div className="flex justify-between">
              <h2
                id="noticias-heading"
                className="text-jci-dark max-w-xs text-left text-3xl leading-[1.33] font-semibold tracking-normal normal-case md:max-w-[60%] lg:max-w-[75%] lg:text-5xl lg:leading-[1.33]"
              >
                Noticias y Eventos
              </h2>

              <div className="hidden md:block">
                <Button
                  radius="none"
                  variant="bordered"
                  className="group relative overflow-hidden border-jci-navy text-jci-navy"
                  aria-label="Ver todas las noticias y eventos"
                >
                  <Link href="/noticias-eventos">
                    <span className="absolute inset-0 -translate-x-full transform bg-jci-navy transition-transform duration-300 group-hover:translate-x-0" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Ver más
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENIDO SIN MÁRGENES */}
        <div className="w-full overflow-visible">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={{
              nextEl: ".noticias-next",
              prevEl: ".noticias-prev",
            }}
            grabCursor={true}
            className="relative z-10 block list-none p-0"
            aria-label="Carrusel de noticias y eventos"
          >
            <div className="relative z-10 flex h-full w-full">
              {noticiasItems.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "325px" }}
                  className={index === 0 ? "ml-8 md:ml-20 lg:md:ml-[13%]" : ""}
                >
                  <article>
                    {/* Comentado hasta desarrollar el blog, div en vez de link */}
                    <Link href={`/noticias-eventos/${item.url}`} className="group w-full">
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

                        <figure className="mt-[16px] h-[320px] w-full overflow-hidden bg-black">
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

        {/* PIE CON MÁRGENES */}
        <footer className="relative mx-8 hidden max-w-6xl bg-transparent md:mx-20 md:block lg:mx-auto">
          <div className="relative mt-16 flex justify-between">
            <div className="flex items-center">
              <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
                Arrastra para mover
              </div>
              <div className="relative ml-[32px] h-px w-[60px] overflow-hidden bg-jci-gray/30">
                <span
                  className="animate-loop bg-jci-teal absolute top-0 left-0 h-px w-[60px]"
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
                  className="relative w-[20px] rotate-90 object-cover"
                  aria-hidden="true"
                />
              </button>

              <button className="noticias-next" aria-label="Noticia siguiente">
                <Image
                  src="/icons/arrow-down.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="relative w-[20px] -rotate-90 object-cover"
                  aria-hidden="true"
                />
              </button>
            </nav>
          </div>
        </footer>

        <div className="mt-20 block md:hidden">
          <div className="flex items-center justify-center">
            <Button
              radius="none"
              variant="bordered"
              className="border-jci-navy text-jci-navy group relative overflow-hidden"
              aria-label="Ver todas las noticias y eventos"
            >
              <Link href="/noticias-eventos">
                <span className="absolute inset-0 -translate-x-full transform bg-jci-navy transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Ver más
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
