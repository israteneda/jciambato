"use client";
import RowScroll from "@/components/row-scroll";
import BackgroundImage from "@/components/background-image";
import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20">
      <RotatedText text="Sé el cambio" />

      <div className="w-full">
        <InfoContainer
          subtitle="Involúcrate"
          title="Da el primer paso hacia el cambio"
          description="¿Te atreves a liderar, servir y crecer? Tu camino empieza aquí."
        />
      </div>

      <BackgroundImage image="/images/involucrate/hero-presidenta.jpg" />

      <RowScroll />
    </section>
  );
}
