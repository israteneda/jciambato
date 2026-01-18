"use client";
import { RowScroll } from "@/components/commons";
import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section
      className="fixed inset-0 box-border h-[760px] w-full items-center overflow-hidden pb-[80px]"
      aria-labelledby="proyectos-heading"
    >
      <header className="sr-only">
        <h1 id="proyectos-heading">Proyectos</h1>
      </header>

      <RotatedText text="Dentro de nuestros proyectos" />

      <div className="relative w-full pb-32 pt-48">
        <InfoContainer
          subtitle="Proyectos"
          title="Acciones que dejan huella"
          description="Cada proyecto nace del compromiso por mejorar nuestra ciudad. Unidos, logramos un mayor impacto."
        />
      </div>

      <BackgroundImage
        image="/images/secciones/proyecto-feria-libro.webp"
        alt="Imagen de fondo de proyectos de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
