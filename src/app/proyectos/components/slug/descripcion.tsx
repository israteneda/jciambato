"use client";
import { Proyecto } from "@/types/proyecto";
import { shareOnSocialMedia, getShareContentFromProyecto } from "@/lib/share";
import Image from "next/image";

export default function Descripcion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section className="relative bg-transparent z-10">
      <div className="pb-28">
        <section className="relative overflow-hidden">
          <div className="relative w-full h-[550px] md:h-[860px]">
            <div className="relative w-full h-full overflow-hidden bg-white">
              <Image
                src={proyecto.imagen}
                alt={proyecto.nombre + " imagen de proyecto"}
                fill
                className="absolute h-full w-full inset-0 object-cover"
              />
            </div>
          </div>
          <div className="relative top-[-140px] mb-[-140px] z-20">
            <div className="relative bg-white mx-auto max-w-7xl">
              <div className="p-8 md:pt-20 md:p-20 w-full box-border">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-black tracking-[1px]">
                      {proyecto.area_oportunidad}
                    </div>
                    <div className="max-w-3xl mt-8">
                      <h2 className="text-3xl md:text-5xl font-bold leading-[1.33] text-jci-off-black text-left  sm:text-[calc(28.8px+1vw)]">
                        {proyecto.nombre}
                      </h2>
                    </div>
                  </div>

                  {proyecto.logo && (
                    <div className="mt-10 self-center">
                      <Image
                        src={proyecto.logo}
                        alt={proyecto.nombre + " logo"}
                        width={500}
                        height={300}
                        className="h-auto w-52 md:w-64 lg:w-72 object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-10 md:mt-20">
                  <div className="border-t border-t-gray-200">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Estado
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.estado}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200 w-full">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200 w-full">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Área de Oportunidad
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.area_oportunidad}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Director/a
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.director?.nombre} {proyecto.director?.apellido}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Subdirector/a
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.subdirector?.nombre} {proyecto.subdirector?.apellido}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Fecha
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.fecha}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="flex flex-col md:flex-row py-[23px] border-a border-a-gray-200">
                      <div className="leading-[1.33] text-[18px] text-jci-black md:w-[30%]">
                        Lugar
                      </div>
                      <div className="leading-[1.33] text-medium md:text-[18px] text-jci-off-black md:w-[70%] md:pl-[20px]">
                        {proyecto.lugar}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <div className="text-xl mb-5 font-bold leading-[1.33] text-jci-off-black">
                    Intervención
                  </div>
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="pr-0 md:pr-24 w-full">
                      <div className="pb-20">
                        <div className="flex flex-col gap-5 text-medium leading-[1.71] text-jci-off-black">
                          <p>{proyecto.descripcion}</p>

                          <p>
                            <strong>Impacto: </strong> {proyecto.impacto}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-[20%]">
                      <div className="flex flex-col items-start gap-2">
                        <div className="text-xs font-semibold tracking-[1px] text-jci-black uppercase">
                          Compartir en
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <button
                            className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                            onClick={() =>
                              shareOnSocialMedia("facebook", getShareContentFromProyecto(proyecto))
                            }
                            aria-label="Compartir en Facebook"
                          >
                            Facebook
                          </button>
                          <button
                            className="text-sm font-semibold text-gray-400 hover:text-jci-seafoam transition-colors duration-300 cursor-pointer"
                            onClick={() =>
                              shareOnSocialMedia("linkedin", getShareContentFromProyecto(proyecto))
                            }
                            aria-label="Compartir en LinkedIn"
                          >
                            LinkedIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
