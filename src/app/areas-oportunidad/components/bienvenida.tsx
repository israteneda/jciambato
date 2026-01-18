import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section
      className="relative z-[1] box-border h-auto w-full pb-32 pt-48"
      aria-labelledby="areas-oportunidad-heading"
    >
      <header className="sr-only">
        <h1 id="areas-oportunidad-heading">Áreas de Oportunidad</h1>
      </header>

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
