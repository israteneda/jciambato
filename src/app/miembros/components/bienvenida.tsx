"use client";
import { RowScroll } from "@/components/commons";
import BackgroundImage from "@/components/commons/background-image";
import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section
      className="fixed inset-0 box-border h-screen w-full items-center overflow-hidden pb-[80px]"
      aria-labelledby="miembros-heading"
    >
      <header className="sr-only">
        <h1 id="miembros-heading">Miembros JCI Ambato</h1>
      </header>

      <RotatedText text="Comunidad JCI Ambato" />

      <div className="relative w-full pb-32 pt-48">
        <InfoContainer
          subtitle="Miembros"
          title="Líderes en formación constante"
          description="Somos jóvenes comprometidos con nuestro crecimiento y con dejar una huella positiva en el mundo."
        />
      </div>

      <BackgroundImage
        image="/images/secciones/miembros.webp"
        alt="Imagen de fondo de miembros de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
