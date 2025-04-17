"use client";
import { useScroll } from "@/hooks";
import { InfoContainer } from "./info-container";
import { BackgroundVideo } from "./background-video";
import { BorderFrame } from "./border-frame";
import { Button } from "@heroui/button";
import { HiArrowNarrowDown } from "react-icons/hi";

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

        <span className="hidden lg:block absolute top-1/2 left-7 text-[11px] z-20 leading-relaxed tracking-[1px] text-gray-400 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] uppercase">
          BIENVENIDO A LA RED GLOBAL DE LÍDERES QUE TRANSFORMAN EL MUNDO
        </span>


        <div className="hidden md:block absolute z-20 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
          <Button
            radius="none"
            isIconOnly
            className="bg-transparent text-cyan-600">
            <HiArrowNarrowDown className="w-6 h-6 text-gray-50" />
          </Button>
        </div>

        <div className="absolute bottom-[100px] right-[40px] md:bottom-[60px] md:right-[124px] text-[10px] font-semibold uppercase z-20 text-yellow-400">
          <a href="https://jciecuador.com" target="_blank" rel="noopener noreferrer">
            JCI Ecuador
          </a>
        </div>
      </div>

      <div className="absolute left-1/2 z-20 bottom-0 transform -translate-x-1/2 rotate-90">
        <Button
          radius="none"
          className="bg-transparent text-cyan-600 text-xs font-semibold text-right uppercase">Sobre Nosotros</Button>
      </div>
    </section>
  );
}