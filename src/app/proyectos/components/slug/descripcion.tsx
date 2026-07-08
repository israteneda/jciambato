"use client";
import { Proyecto } from "@/types/proyecto";
import { shareOnSocialMedia, getShareContentFromProyecto } from "@/lib/share";
import Image from "next/image";

export default function Descripcion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section className="relative z-10 bg-transparent">
      <div className="pb-28">
        <section className="relative overflow-hidden">
          <div className="relative h-[550px] w-full md:h-[860px]">
            <div className="relative h-full w-full overflow-hidden bg-white">
              <Image
                src={proyecto.imagen}
                alt={proyecto.nombre + " imagen de proyecto"}
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative top-[-140px] z-20 mb-[-140px]">
            <div className="relative mx-auto max-w-7xl bg-white">
              <div className="box-border w-full p-8 md:p-20 md:pt-20">
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <div>
                    <div className="text-jci-black text-[13px] leading-[1.85] tracking-[1px] uppercase not-italic">
                      {proyecto.area_oportunidad}
                    </div>
                    <div className="mt-8 max-w-3xl">
                      <h2 className="text-jci-black text-left text-3xl leading-[1.33] font-bold sm:text-[calc(28.8px+1vw)] md:text-5xl">
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
                        className="h-auto w-52 object-cover md:w-64 lg:w-72"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-10 md:mt-20">
                  <div className="border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Estado
                      </div>
                      <div className="text-jci-off-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.estado}
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex w-full flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Área de Oportunidad
                      </div>
                      <div className="text-jci-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.area_oportunidad}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Director/a
                      </div>
                      <div className="text-jci-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.director?.nombre} {proyecto.director?.apellido}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Subdirector/a
                      </div>
                      <div className="text-jci-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.subdirector?.nombre} {proyecto.subdirector?.apellido}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Fecha
                      </div>
                      <div className="text-jci-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.fecha}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-t-gray-200">
                    <div className="border-a border-a-gray-200 flex flex-col py-[23px] md:flex-row">
                      <div className="text-jci-black text-[18px] leading-[1.33] md:w-[30%]">
                        Lugar
                      </div>
                      <div className="text-jci-black text-medium leading-[1.33] md:w-[70%] md:pl-[20px] md:text-[18px]">
                        {proyecto.lugar}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <div className="text-jci-black mb-5 text-xl leading-[1.33] font-bold">
                    Intervención
                  </div>
                  <div className="flex w-full flex-col md:flex-row">
                    <div className="w-full pr-0 md:pr-24">
                      <div className="pb-20">
                        <div className="text-medium text-jci-black flex flex-col gap-5 leading-[1.71]">
                          <p>{proyecto.descripcion}</p>

                          <p>
                            <strong>Impacto: </strong> {proyecto.impacto}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-[20%]">
                      <div className="flex flex-col items-start gap-2">
                        <div className="text-jci-black text-xs font-semibold tracking-[1px] uppercase">
                          Compartir en
                        </div>

                        <div className="flex flex-col items-start gap-1">
                          <button
                            className="hover:text-jci-teal cursor-pointer text-sm font-semibold text-gray-400 transition-colors duration-300"
                            onClick={() =>
                              shareOnSocialMedia("facebook", getShareContentFromProyecto(proyecto))
                            }
                            aria-label="Compartir en Facebook"
                          >
                            Facebook
                          </button>
                          <button
                            className="hover:text-jci-teal cursor-pointer text-sm font-semibold text-gray-400 transition-colors duration-300"
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
