"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-[760px] w-full items-center overflow-hidden pb-[80px]">
      <RotatedText text="Dentro de nuestros proyectos" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Proyectos"
          title="Acciones que dejan huella"
          description="Cada proyecto nace del compromiso por mejorar nuestra ciudad. Unidos, logramos un mayor impacto."
        />
      </div>

      <BackgroundImage
        image="/images/proyectos/proyecto-feria-libro.webp"
        alt="Imagen de fondo de proyectos de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
