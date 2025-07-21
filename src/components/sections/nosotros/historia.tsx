"use client";

import BackgroundText from "@/components/commons/background-text";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { historiaItems } from "@/data/historia";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

export default function ActividadesAnuales() {
  return (
    <section className="relative z-10 md:my-32">
      <div className="mt-14 md:mt-28">
        <BackgroundText
          textoPrimario="Desarrollo"
          textoSecundario="Somos Ambato"
          numberLeft={0.08}
          numberRight={0.1}
          numberLeftMobile={0.05}
          numberRightMobile={0.03}
        />
      </div>

      <div className="relative z-10 max-w-5xl md:max-w-6xl mx-auto">
        <div className="mx-8 md:mx-28">
          <div className="flex">
            <div className="hidden md:block absolute top-[80px] left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
              <div
                className="relative text-[rgb(174,174,174)] leading-none text-[11px] font-medium not-italic tracking-[2px] whitespace-nowrap uppercase"
                aria-hidden="true"
              >
                Desde 1973
                <span className="absolute top-[6px] left-[-170px] w-[160px] h-[1px] bg-[rgb(174,174,174)] content-['']"></span>
              </div>
            </div>

            <div className="md:mr-48">
              <header>
                <div className="mt-20">
                  <h2 className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black md:max-w-[470px]">
                    Un legado que trasciende generaciones.
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-base font-normal not-italic leading-[1.78] tracking-normal text-[rgb(50,50,50)] text-left md:max-w-[470px]">
                    Por cinco décadas, JCI Ambato ha forjado un liderazgo transformador, impulsando la formación de ciudadanos activos y ejecutando proyectos de gran impacto. Su legado se construye con logros, retos superados y generaciones de jóvenes dedicadas a hacer de Ambato una ciudad más inclusiva, participativa y preparada para el futuro.
                  </p>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-72 my-32">
        <Swiper
          modules={[Navigation, Mousewheel, FreeMode]}
          spaceBetween={20}
          slidesPerView={"auto"}
          grabCursor={true}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumBounce: false,
          }}
          mousewheel={{
            enabled: true,
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          className="touch-pan-y mx-auto relative list-none z-10 block"
          aria-label="Carrusel de historia de JCI Ambato"
        >
          <div className="relative w-full h-full z-10 flex">
            {historiaItems.map((history) => (
              <SwiperSlide
                key={history.id}
                className="max-w-xs md:max-w-sm border-l border-[rgb(216,216,216)]"
              >
                <article className="h-full flex flex-col max-max-w-xs ml-8 md:ml-10">
                  <header>
                    <div className="mt-6">
                      <h3 className="text-3xl font-bold not-italic text-left leading-[1.25] tracking-normal text-black">
                        {history.year}
                      </h3>
                    </div>

                    <div className="mt-16">
                      <h4 className="text-lg font-bold not-italic text-left leading-normal tracking-normal text-black">
                        {history.title}
                      </h4>
                    </div>
                  </header>

                  {history.image && (
                    <div className="mt-6">
                      <figure className="relative w-full h-60 overflow-hidden">
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={history.image}
                            alt={`Imagen de ${history.title}`}
                            width={500}
                            height={500}
                            className="absolute w-full h-full inset-0 bg-transparent object-cover"
                          />
                        </div>
                      </figure>
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="text-medium not-italic text-left leading-normal tracking-normal space-y-9">
                      <p>{history.description.paragraph}</p>
                      <p>{history.description.paragraph2}</p>
                      <p>{history.description.paragraph3}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}
