"use client";

import InfoContainer from "@/components/info-container";
import RowScroll from "@/components/row-scroll";
import Image from "next/image";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-[760px] w-full items-center overflow-hidden pb-[80px]">
      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Información Legal"
          title="Declaración de Privacidad"
          description=""
        />
      </div>

      {/* Botón de scroll pantallas grandes */}
      <RowScroll />

      {/* Botón de scroll pantallas pequeñas */}
      <div className="absolute bottom-28 left-1/2 z-20 block -translate-x-1/2 -translate-y-1/2 transform md:hidden">
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
            width={55}
            height={55}
            className="relative h-[55px] w-[55px] object-contain"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
