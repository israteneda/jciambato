"use client";

import { Button } from "@heroui/button";
import Image from "next/image";


export default function Grupo() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div>
        <div className="z-10 flex relative justify-end h-52 md:h-[calc(20px+34.375vw)] mb-10"> {/* 215px */}
          <Image
            src="/images/grupo/sesion-solemne-50-aniversario.webp"
            alt="Grupo JCI Ambato - Sesión Solemne 50 Aniversario"
            width={500}
            height={500}
            className="absolute top-0 right-0 w-[85vw] md:w-[55vw] h-full object-cover"
          />
        </div>

        <div className="-mt-¨[336px] lg:-mt-52">
          {/* Titulo Principal */}
          <div className="relative z-10 bg-transparent w-[1156px] px-[30px] md:mx-auto">

            <div className="text-[13px] leading-[1.85] uppercase text-jci-gold font-bold tracking-normal">
              Grupo JCI
            </div>
            <div className="mt-1 md:mt-6">
              <h3 className="text-3xl md:text-[48px] font-bold normal-case text-jci-aqua leading-[1.33] tracking-normal max-w-xs md:max-w-[calc(75%)] text-left sm:text-[calc(28.8px+1vw)]">
                Somos la organización de liderazgo mas importante del centro del país.
              </h3>
            </div>
          </div>

          <div className="relative z-10 bg-transparent md:w-[1156px] mx-auto">

            <div className="relative md:flex">
              {/* Descripción */}
              <div className="flex-1 grow shrink basis-0 mx-[30px] md:ml-16">
                <div className="mt-8">
                  <div className="text-[18px] font-normal normal-case leading-[1.78] tracking-normal text-jci-gray text-left max-w-[333px] lg:text-[calc(15.6px+0.125vw)]">
                    <p>
                      <strong>Somos líderes y emprendedores.</strong>
                      Conformamos un equipo comprometido con la construcción de un legado transformador que impulse el desarrollo de nuestras comunidades.
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <Button
                    radius="none"
                    variant="bordered"
                    className="relative overflow-hidden border-jci-black text-jci-black group"
                    aria-label="Conoce nuestra misión y visión"
                  >
                    <span className="absolute inset-0 transform -translate-x-full bg-jci-black transition-transform duration-300 group-hover:translate-x-0" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Nuestra misión y visión
                    </span>
                  </Button>
                </div>
              </div>

              {/* Información de la fotografía, visible en pantallas grandes */}
              <div className="hidden md:block flex-1 grow shrink basis-0">
                <div className="absolute top-0 right-[20px] origin-left transform translate-x-[100%] translate-y-[50%] rotate-90">
                  <div className="relative text-[11px] font-medium leading-none tracking-[2px] text-[rgb(174,174,174)] uppercase pl-[170px]">
                    <div className="absolute left-0 top-[5px] w-[160px] h-[1px] bg-[rgb(174,174,174)]"></div>
                    Sesión Solemne por los 50 años de JCI Ambato, 2025
                  </div>
                </div>
              </div>

              {/* Estadisticas */}
              <div className="flex-1 grow shrink basis-0 md:mt-[120px]">
                <div className="flex flex-wrap mr-28 mt-8">

                  <div className="flex-none w-full md:w-[50%] mt-6 md:mt-[48px] ml-[25px] box-border">
                    <div className="text-jci-navy text-[calc(44px+3.125vw)] leading-[1] tracking-[-5px] font-light">
                      <span>+200</span>
                    </div>
                    <div className="text-[calc(13.6px+0.125vw)] text-left mt-1 max-w-[180px] uppercase leading-[1.5] tracking-normal">
                      <p><strong>Proyectos</strong> ejecutados</p>
                    </div>
                  </div>

                  <div className="flex-1 grow shrink basis-0 w-[50%] mt-6 md:mt-[48px] ml-[25px] box-border">
                    <div className="text-jci-navy text-[calc(44px+3.125vw)] leading-[1] font-light tracking-[-5px] ">
                      <span>+50</span>
                    </div>
                    <div className="text-[calc(13.6px+0.125vw)] text-left mt-1 max-w-[180px] uppercase leading-[1.5] tracking-normal">
                      <p><strong>Años</strong> en Ambato</p>
                    </div>
                  </div>

                  <div className="flex-1 grow shrink basis-0 w-[50%] mt-6 md:mt-[48px] ml-[25px] box-border">
                    <div className="text-jci-navy text-[calc(44px+3.125vw)] leading-[1] font-light tracking-[-5px] ">
                      <span>+30</span>
                    </div>
                    <div className="text-[calc(13.6px+0.125vw)] text-left mt-1 max-w-[180px] uppercase leading-[1.5] tracking-normal">
                      <p><strong>Miembros</strong> activos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}