import InfoContainer from "@/components/commons/info-container";
import RotatedText from "@/components/commons/rotated-text";

export default function Bienvenida() {
  return (
    <section className="relative z-[1] w-full pt-48 pb-32 box-border h-auto" aria-labelledby="areas-oportunidad-heading">
      <header className="sr-only">
        <h1 id="areas-oportunidad-heading">Áreas de Oportunidad</h1>
      </header>

      <div className="relative">
        <RotatedText text="Nuestras Áreas de Oportunidad" />

        <InfoContainer
          subtitle="Tu camino empieza aquí. Elige dónde crecer y servir"
          title="Áreas de Oportunidad"
          description="Te permitirán crecer y servir en JCI Ambato. Cada una de ellas tiene un propósito y una misión."
        />
      </div>
    </section>
  );
}


