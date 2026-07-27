"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-[760px] w-full items-center overflow-hidden pb-[80px]">
      <RotatedText text="Lo más reciente en JCI Ambato" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Noticias y Eventos"
          title="Nuestras Noticias y Eventos"
          description="Explora nuestras noticias, logros y próximos eventos. Todo lo que pasa en JCI Ambato, aquí."
        />
      </div>

      <BackgroundImage
        image="/images/secciones/noticias-eventos.webp"
        alt="Imagen de fondo de noticias y eventos de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
