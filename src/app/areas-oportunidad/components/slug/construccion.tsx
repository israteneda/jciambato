"use client";

import { AreaOportunidad } from "@/types/area-oportunidad";
import { FaFilePdf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function Construccion({ area }: { area: AreaOportunidad }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = area.images?.length || 0;
  const swiperRef = useRef<{ swiper: SwiperType }>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative z-1 overflow-hidden">
      <div>
        {/*Caja Roja del Brochure*/}
        <div className="relative z-20">
          <div className="relative z-10 m-8 max-w-6xl md:mx-20 lg:mx-auto">
            <div className="bg-jci-navy z-30 box-border flex p-4 md:max-w-[65%] md:translate-y-1/2 md:p-10 lg:max-w-[50%]">
              <div className="w-full">
                <div className="flex flex-wrap gap-x-2 text-xs font-bold text-white md:text-sm">
                  <span>Brochure</span>
                  <span>14.02.2025</span>
                </div>

                <div className="mt-2">
                  <h3 className="text-xl leading-tight font-bold text-white md:text-3xl">
                    {area.title}
                  </h3>
                </div>

                <div className="mt-4">
                  <a
                    href={area.document}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:underline md:text-sm"
                  >
                    Descargar PDF
                    <span className="opacity-75">3.9 MB</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center pl-16">
                <a
                  href={area.document}
                  target="_blank"
                  className="cursor-pointer text-4xl text-white opacity-80 transition-opacity duration-200 hover:opacity-100"
                  aria-label="Descargar PDF del brochure"
                >
                  <FaFilePdf />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor del Swiper*/}
        <section className="relative z-10 bg-transparent">
          {/* Swiper con imágenes */}
          <div>
            <div className="cursor-none">
              <div className="relative z-10 mx-auto max-w-4xl bg-transparent px-0 md:px-0">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={"auto"}
                  grabCursor={true}
                  className="overflow-visible!"
                  onSlideChange={handleSlideChange}
                >
                  {area.images
                    ?.filter((item) => item.src) // Filtrar solo imágenes con src definido
                    .map((item, index) => (
                      <SwiperSlide key={`${item.src}-${index}`}>
                        <div className="group w-full">
                          <div className="h-96 w-full overflow-hidden bg-gray-200 md:h-[650px]">
                            <div className="relative h-full w-full overflow-hidden">
                              <Image
                                src={item.src!}
                                alt={item.alt || "Imagen del área"}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="relative z-10 mx-8 max-w-3xl bg-transparent px-4 md:mx-20 md:px-0 lg:mx-auto">
            <div className="mt-2 flex items-center justify-between">
              {/* Contador */}
              <div className="pointer-events-none inline-flex -rotate-90 flex-col">
                <div className="border-jci-black text-jci-black inline-block border-b py-1 text-2xl md:py-2 md:text-4xl">
                  {currentSlide.toString().padStart(2, "0")}
                </div>

                <div className="text-jci-black inline-block py-1 text-2xl md:py-2 md:text-4xl">
                  {totalSlides.toString().padStart(2, "0")}
                </div>
              </div>

              {/* Navegación */}
              <nav
                className="flex items-center space-x-4 md:space-x-8"
                aria-label="Navegación del carrusel"
              >
                <button
                  type="button"
                  onClick={handlePrevClick}
                  className="p-1 md:p-2"
                  aria-label="Imagen anterior"
                >
                  <Image
                    src="/icons/arrow-down.svg"
                    alt=""
                    width={500}
                    height={500}
                    className="relative w-[16px] rotate-90 object-cover transition-transform duration-300 hover:scale-110 md:w-[24px]"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={handleNextClick}
                  className="p-1 md:p-2"
                  aria-label="Imagen siguiente"
                >
                  <Image
                    src="/icons/arrow-down.svg"
                    alt=""
                    width={500}
                    height={500}
                    className="relative w-[16px] -rotate-90 object-cover transition-transform duration-300 hover:scale-110 md:w-[24px]"
                    aria-hidden="true"
                  />
                </button>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
