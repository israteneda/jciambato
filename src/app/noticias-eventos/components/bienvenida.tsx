"use client";
import { RowScroll } from "@/components/commons";
import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section
      className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]"
      aria-labelledby="proyectos-heading"
    >
      {/* inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px] */}
      <header className="sr-only">
        <h1 id="proyectos-heading">Noticias y Eventos</h1>
      </header>

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
