"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-[190 w-full items-center overflow-hidden pb-20">
      <RotatedText text="Enfocados en el desarrollo de nuestra ciudad" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Quienes Somos"
          title="Creando el futuro de nuestra ciudad, juntos."
          description="Somos una comunidad de líderes jóvenes comprometidos con transformar nuestra ciudad y construir un futuro mejor para todos."
        />
      </div>

      <BackgroundImage image="/images/inicio/cincuentenario.png" />

      {/* Botón de scroll */}
      <RowScroll />
    </section>
  );
}
