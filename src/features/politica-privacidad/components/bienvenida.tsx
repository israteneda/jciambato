"use client";

import InfoContainer from "@/components/info-container";
import RowScroll from "@/components/row-scroll";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20">
      <div className="w-full">
        <InfoContainer
          subtitle="Información Legal"
          title="Declaración de Privacidad"
          description=""
        />
      </div>

      {/* Botón de scroll pantallas grandes */}
      <RowScroll />
    </section>
  );
}
