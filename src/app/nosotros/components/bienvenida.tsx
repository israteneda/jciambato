"use client";
import { RowScroll } from "@/components/commons";
import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-20">
      <RotatedText text="Enfocados en el desarrollo de nuestra ciudad" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Quienes Somos"
          title="Creando el futuro de nuestra ciudad, juntos."
          description="Somos una comunidad de líderes jóvenes comprometidos con transformar nuestra ciudad y construir un futuro mejor para todos."
        />
      </div>

      <BackgroundImage image="/images/secciones/nosotros.png" />

      {/* Botón de scroll */}
      <RowScroll />
    </section>
  );
}
