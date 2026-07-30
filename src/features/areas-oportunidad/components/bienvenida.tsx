import InfoContainer from "@/components/info-container";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <section className="relative z-1 box-border h-auto w-full pt-48 pb-32">
      <div className="relative">
        <RotatedText text="Nuestras Áreas de Oportunidad" />

        <InfoContainer
          subtitle="Cómo lo Hacemos"
          title="Elige tu camino de crecimiento"
          description="Descubre en qué área puedes desarrollarte, servir y liderar con propósito."
        />
      </div>
    </section>
  );
}
