'use client';

import { noticiasItems } from "@/data/noticias";
import { Button } from "@heroui/button";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";

export default function NoticiasEventos() {
  return (
    <section className="relative">
      <div className="pt-[calc(62.4px+3vw)] pb-[calc(62.4px+3vw)]">

        {/* Título */}
        <div className="pb-[calc(62.4px+3vw)]">
          <div className="relative  md:w-[calc(100%-180px)] mx-[30px] md:mx-[90px]">
            <div className="flex justify-between">
              <h4 className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]">
                Noticias y Eventos
              </h4>
              <div className="hidden md:block">
                <Button
                  radius="none"
                  variant="bordered"
                  className="relative overflow-hidden border-jci-gray text-jci-gray group"
                  aria-label="Conoce nuestra misión y visión"
                >
                  <span className="absolute inset-0 transform -translate-x-full bg-jci-black transition-transform duration-300 group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Ver más
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENIDO SIN MÁRGENES */}
        <div className="w-full overflow-visible pl-[30px] md:pl-[90px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={{
              nextEl: ".noticias-next",
              prevEl: ".noticias-prev",
            }}
            grabCursor={true}
            className="mx-0 relative list-none p-0 z-10 block"
          >
            <div className="relative w-full h-full z-10 flex">
              {noticiasItems.map((item) => (
                <SwiperSlide key={item.id} style={{ width: "320px" }}>
                  <Link href={item.url} className="w-full group">
                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-normal tracking-normal">
                      <span>{item.type}</span>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-[22px] font-bold not-italic text-left leading-[1.45] tracking-normal text-jci-off-black md:text-[calc(17.2px+0.25vw)]">
                        {item.title}
                      </h5>
                    </div>

                    <div className="mt-6">
                      <button className="group max-w-full relative inline-block transition duration-[400ms] cursor-pointer">
                        <div className="flex items-center py-4">
                          <span className="text-xs text-jci-gray leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                            Leer más
                          </span>
                          <div className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1">
                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-gray group-hover:text-jci-red transition-colors duration-300" />
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="w-full h-[247px] mt-[16px] overflow-hidden bg-black">
                      <div className="relative w-full h-full overflow-hidden group-hover:opacity-80 group-hover:scale-105 transition-all duration-300 ease-in-out">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="absolute w-full h-full inset-0 object-cover transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </Link>

                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* PIE CON MÁRGENES */}
        <div className="hidden md:block relative bg-transparent w-[1156px] mx-auto md:w-[calc(100%-180px)] md:mx-[90px]">
          <div className="flex mt-16 relative justify-between">
            <div className="flex items-center">
              <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-bold tracking-normal">
                Arrastra para mover
              </div>
              <div className="w-[60px] h-px overflow-hidden ml-[32px] relative bg-[rgb(204,204,204)]">
                <span className="absolute top-0 left-0 w-[60px] h-px bg-jci-aqua animate-loop" />
              </div>
            </div>

            <div className="flex space-x-14">
              <button className="noticias-prev ...">
                <Image
                  src="/images/icon-seta-down-big.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="relative w-[25px] rotate-90 object-cover"
                />
              </button>

              <button className="noticias-next ...">
                <Image
                  src="/images/icon-seta-down-big.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="relative w-[25px] -rotate-90 object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-20">
          <div className="flex justify-center items-center">
            <Button
              radius="none"
              variant="bordered"
              className="relative overflow-hidden border-jci-gray text-jci-gray group"
              aria-label="Conoce nuestra misión y visión"
            >
              <span className="absolute inset-0 transform -translate-x-full bg-jci-black transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Ver más
              </span>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
