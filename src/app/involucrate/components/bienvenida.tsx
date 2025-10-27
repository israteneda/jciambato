"use client";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";
import BackgroundImage from "@/components/commons/background-image";
import { RowScroll } from "@/components/commons";

export default function Bienvenida() {
  return (
    <section
      className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]"
      aria-label="Bienvenida a Involúcrate"
      role="banner"
    >
      <RotatedText text="Sé el cambio" />

      <header className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Involúcrate"
          title="Da el primer paso hacia el cambio"
          description="¿Te atreves a liderar, servir y crecer? Tu camino empieza aquí."
        />
      </header>

      <BackgroundImage image="/images/secciones/involucrate.jpg" />

      <RowScroll />
    </section>
  );
}
