"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20">
      <RotatedText text="Enfocados en el desarrollo de nuestra ciudad" />

      <div className="w-full">
        <InfoContainer
          subtitle="Quienes Somos"
          title="Creando el futuro de nuestra ciudad, juntos."
          description="Somos una comunidad de líderes jóvenes comprometidos con transformar nuestra ciudad y construir un futuro mejor para todos."
        />
      </div>

      <BackgroundImage
        image="/images/inicio/cincuentenario.png"
        alt="Cincuentenario de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
