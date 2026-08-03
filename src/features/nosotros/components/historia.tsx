"use client";

import BackgroundText from "@/components/background-text";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { historiaItems } from "@/features/inicio/data/historia";
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-8 md:mx-28">
          <div className="flex">
            <div className="absolute top-[80px] left-0 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform md:block">
              <div
                className="text-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase not-italic"
                aria-hidden="true"
              >
                Desde 1973
                <span className="bg-jci-gray absolute top-1.5 left-[-170px] h-px w-40 content-['']"></span>
              </div>
            </div>

            <div className="md:mr-48">
              <header>
                <div className="mt-20">
                  <h2 className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:max-w-[470px] md:text-5xl">
                    Un legado que trasciende generaciones.
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-jci-black text-left text-base leading-[1.78] font-normal tracking-normal not-italic md:max-w-[470px]">
                    Por cinco décadas, JCI Ambato ha forjado un liderazgo transformador, impulsando
                    la formación de ciudadanos activos y ejecutando proyectos de gran impacto. Su
                    legado se construye con logros, retos superados y generaciones de jóvenes
                    dedicadas a hacer de Ambato una ciudad más inclusiva, participativa y preparada
                    para el futuro.
                  </p>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="my-24 sm:ml-20 md:my-32 lg:ml-56">
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
          className="relative z-10 mx-auto block touch-pan-y list-none"
          aria-label="Carrusel de historia de JCI Ambato"
        >
          <div className="relative z-10 flex h-full w-full">
            {historiaItems.map((history) => (
              <SwiperSlide
                key={history.id}
                className="max-w-xs border-l border-[rgb(216,216,216)] md:max-w-sm"
              >
                <article className="max-max-w-xs ml-8 flex h-full flex-col md:ml-10">
                  <header>
                    <div className="mt-6">
                      <h3 className="text-jci-black text-left text-3xl leading-tight font-bold tracking-normal not-italic">
                        {history.year}
                      </h3>
                    </div>

                    <div className="mt-16">
                      <h4 className="text-jci-black text-left text-lg leading-normal font-bold tracking-normal not-italic">
                        {history.title}
                      </h4>
                    </div>
                  </header>

                  {history.image && (
                    <div className="mt-6">
                      <figure className="relative h-60 w-full overflow-hidden">
                        <div className="relative h-full w-full overflow-hidden">
                          <Image
                            src={history.image}
                            alt={`Imagen de ${history.title}`}
                            width={500}
                            height={500}
                            className="absolute inset-0 h-full w-full bg-transparent object-cover"
                          />
                        </div>
                      </figure>
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="text-medium space-y-9 text-left leading-normal tracking-normal not-italic">
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
