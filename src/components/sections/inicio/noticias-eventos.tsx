'use client';

import { noticiasItems } from "@/data/noticias";
import { Button } from "@heroui/button";
import Image from "next/image";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

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
                <Button>
                  <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
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
                <SwiperSlide key={item.id} style={{ width: "300px" }} className="">
                  <div className="w-full">
                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-normal tracking-normal">
                      <span>{item.type}</span>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-[22px] font-bold not-italic text-left leading-[1.45] tracking-normal text-jci-off-black md:text-[calc(17.2px+0.25vw)]">
                        {item.title}
                      </h5>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-transparent cursor-pointer opacity-100 text-[rgb(102,102,102)]">
                        <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                        Leer Más
                      </Button>
                    </div>

                    <div className="w-full h-[247px] mt-[16px] overflow-hidden bg-black">
                      <div className="relative bg-white w-full h-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="absolute w-full h-full inset-0 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* PIE CON MÁRGENES */}
        <div className="hidden md:block relative bg-transparent w-[1156px] mx-auto md:w-[calc(100%-180px)] md:mx-[90px]">
          <div className="flex mt-16 relative justify-between">
            <div className="flex items-center">
              <div className="text-[13px] leading-[1.85] not-italic uppercase text-[rgb(152,152,152)] font-bold tracking-normal">
                Arrastrar para mover
              </div>
              <div className="w-[60px] h-px overflow-hidden ml-[32px] relative bg-[rgb(204,204,204)]">
                <span className="absolute top-0 left-0 w-[60px] h-px bg-jci-aqua animate-loop" />
              </div>
            </div>

            <div className="flex gap-5">
              <Button isIconOnly className="noticias-prev ...">
                <HiOutlineArrowNarrowLeft className="h-12 w-12" />
              </Button>
              <Button isIconOnly className="noticias-next ...">
                <HiOutlineArrowNarrowRight className="h-12 w-12" />
              </Button>
            </div>
          </div>
        </div>

        <div className="block md:hidden mt-20">
          <div className="flex justify-center items-center">

            <Button>
              <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
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
