"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border h-screen w-full items-center overflow-hidden pb-20">
      <RotatedText text="Comunidad JCI Ambato" />

      <div className="relative w-full pt-48 pb-32">
        <InfoContainer
          subtitle="Miembros"
          title="Líderes en formación constante"
          description="Somos jóvenes comprometidos con nuestro crecimiento y con dejar una huella positiva en el mundo."
        />
      </div>

      <BackgroundImage
        image="/images/miembros/miembros.webp"
        alt="Imagen de fondo de miembros de JCI Ambato"
      />

      <RowScroll />
    </section>
  );
}
