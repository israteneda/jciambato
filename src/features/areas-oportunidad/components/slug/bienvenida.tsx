"use client";
import { useScroll } from "@/hooks";
import Image from "next/image";
import BorderFrame from "@/components/commons/border-frame";
import InfoContainer from "@/components/commons/info-container";
import BackgroundImage from "@/components/commons/background-image";
import { AreaOportunidad } from "@/types/area-oportunidad";

export default function Bienvenida({ area }: { area: AreaOportunidad }) {
  const isScrolled = useScroll();

  return (
    <section className="relative">
      <div className="flex w-full">
        <div className="box-border flex h-screen items-center pb-[92px] lg:px-[180px]">
          <BorderFrame isScrolled={isScrolled} />

          <InfoContainer
            subtitle={area.subtitle}
            title={area.title}
            description={area.description}
          />

          <BackgroundImage image={area.background_image} alt={`Imagen de fondo de ${area.title}`} />
        </div>

        <div className="absolute top-1/2 right-2 z-20 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
          <button
            aria-label="Desplazarse hacia abajo"
            onClick={() => {
              // Función para scroll suave hacia abajo
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={30}
              height={30}
              className="relative h-[30px] w-[30px] object-contain"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <nav className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rotate-90 transform">
        <div className="">
          <button
            className="flex items-center"
            aria-label="Descubrir más contenido"
            onClick={() => {
              // Función para scroll suave hacia abajo
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="text-jci-teal text-end text-[10.5px] font-semibold uppercase">
              Descubre <br /> más
            </span>
            <Image
              src="/icons/arrow-down.svg"
              alt=""
              width={500}
              height={500}
              className="h-[69px] w-[96px] -rotate-90 object-cover"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </section>
  );
}
