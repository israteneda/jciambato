"use client";

import { getAllNoticiasEventos } from "@/data/noticias";
import { Button } from "@heroui/button";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function NoticiasEventos() {
  const noticiasItems = getAllNoticiasEventos();

  return (
    <section className="relative" aria-labelledby="noticias-heading">
      <div className="py-10 md:py-28">
        {/* Título */}
        <header className="max-w-6xl mx-8 md:mx-20 lg:mx-auto pb-28">
          <div className="relative">
            <div className="flex justify-between">
              <h2
                id="noticias-heading"
                className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-3xl"
              >
                Noticias y Eventos
              </h2>

              <div className="hidden md:block">
                <Button
                  radius="none"
                  variant="bordered"
                  className="relative overflow-hidden border-gray-400 text-gray-400 group"
                  aria-label="Ver todas las noticias y eventos"
                >
                  <Link href="/noticias-eventos">
                    <span className="absolute inset-0 transform -translate-x-full bg-gray-400 transition-transform duration-300 group-hover:translate-x-0" />
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
            className="relative list-none p-0 z-10 block"
            aria-label="Carrusel de noticias y eventos"
          >
            <div className="relative w-full h-full z-10 flex">
              {noticiasItems.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "325px" }}
                  className={index === 0 ? "ml-8 md:ml-20 lg:md:ml-[13%]" : ""}
                >
                  <article>
                    {/* Comentado hasta desarrollar el blog, div en vez de link */}
                    <Link href={`/noticias-eventos/${item.url}`} className="w-full group">
                      <div className="w-full group">
                        <header>
                          <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-normal tracking-normal">
                            <span>{item.tipo}</span>
                          </div>

                          <div className="mt-4">
                            <h3 className="text-[22px] font-bold not-italic text-left leading-[1.45] tracking-normal text-jci-off-black md:text-[calc(17.2px+0.25vw)]">
                              {item.titulo}
                            </h3>
                          </div>
                        </header>

                        <div className="mt-6">
                          <div className="group max-w-full relative inline-block transition duration-[400ms] cursor-pointer">
                            <div className="flex items-center py-4">
                              <span className="text-xs text-jci-gray leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                Leer más
                              </span>
                              <div
                                className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                              >
                                <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-gray group-hover:text-jci-red transition-colors duration-300" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <figure className="w-full h-[320px] mt-[16px] overflow-hidden bg-black">
                          <div className="relative w-full h-full overflow-hidden group-hover:opacity-80 group-hover:scale-105 transition-all duration-300 ease-in-out">
                            <Image
                              src={item.imagen}
                              alt={`Imagen de ${item.titulo}`}
                              width={500}
                              height={500}
                              className="absolute w-full h-full inset-0 object-cover transition-opacity duration-300 group-hover:opacity-100"
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
        <footer className="hidden md:block relative bg-transparent max-w-6xl mx-8 md:mx-20 lg:mx-auto">
          <div className="flex mt-16 relative justify-between">
            <div className="flex items-center">
              <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-bold tracking-normal">
                Arrastra para mover
              </div>
              <div className="w-[60px] h-px overflow-hidden ml-[32px] relative bg-[rgb(204,204,204)]">
                <span
                  className="absolute top-0 left-0 w-[60px] h-px bg-jci-aqua animate-loop"
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

        <div className="block md:hidden mt-20">
          <div className="flex justify-center items-center">
            <Button
              radius="none"
              variant="bordered"
              className="relative overflow-hidden border-jci-gray text-jci-gray group"
              aria-label="Ver todas las noticias y eventos"
            >
              <Link href="/noticias-eventos">
                <span className="absolute inset-0 transform -translate-x-full bg-gray-400 transition-transform duration-300 group-hover:translate-x-0" />
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
