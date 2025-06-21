"use client";
import { useScroll } from "@/hooks";
import { InfoContainer } from "./info-container";
import { BackgroundVideo } from "./background-video";
import { BorderFrame } from "./border-frame";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";


export default function Bienvenida() {
  const isScrolled = useScroll();

  return (
    <section className="relative">
      <div className="flex w-full">
        <div className="h-screen flex px-[45px] lg:px-[180px] pb-[92px] items-center box-border">
          <BorderFrame isScrolled={isScrolled} />
          <InfoContainer />
          <BackgroundVideo />
        </div>

        <div className="hidden md:block absolute top-1/2 left-[30px] text-[10.5px] font-semibold z-20 text-gray-400 leading-[60px] tracking-[1.5px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO
        </div>

        <div className="hidden md:block absolute z-20 top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2">
          <button>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="relative w-[20px] object-cover"
            />
          </button>
        </div>

        <div className="hidden md:block absolute bottom-[100px] right-[40px] md:bottom-[60px] md:right-[124px] text-[10.5px] font-semibold uppercase z-20 text-jci-seafoam">
          <a href="https://jciecuador.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <span>
              JCI Ecuador
            </span>
            <MdOutlineArrowOutward className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute left-1/2 z-20 bottom-0 transform -translate-x-1/2 rotate-90">
        <div className="hidden md:block">
          <button className="flex items-center">
            <span className="text-jci-aqua text-[10.5px] font-semibold uppercase">Sobre Nosotros</span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="w-[96px] h-[69px] -rotate-90 object-cover"
            />
          </button>
        </div>
      </div>
    </section>
  );
}