"use client";
import { useScroll } from "@/hooks";
import Image from "next/image";
import BorderFrame from "@/components/border-frame";
import InfoContainer from "@/components/info-container";
import BackgroundImage from "@/components/background-image";
import { AreaOportunidad } from "@/types/area-oportunidad";
import { Section } from "@/components/layout/section";

export default function Bienvenida({ area }: { area: AreaOportunidad }) {
  const isScrolled = useScroll();

  return (
    <Section className="py-0 md:py-0" aria-labelledby="bienvenida-heading">
      <div className="flex w-full">
        <div className="box-border flex h-screen w-full items-center pb-23 md:px-45">
          <InfoContainer
            subtitle={area.subtitle}
            title={area.title}
            description={area.description}
          />

          <BackgroundImage image={area.background_image} alt={`Imagen de fondo de ${area.title}`} />

          <BorderFrame isScrolled={isScrolled} />
        </div>
      </div>

      <div className="absolute top-1/2 right-2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
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
            className="relative h-7.5 w-7.5 object-contain"
            aria-hidden="true"
          />
        </button>
      </div>

      <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-90 transform">
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
              className="h-17.25 w-24 -rotate-90 object-cover"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </Section>
  );
}
