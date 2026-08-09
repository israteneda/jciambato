import InfoContainer from "@/components/info-container";
import { Section } from "@/components/layout/section";
import RotatedText from "@/components/rotated-text";

export default function Bienvenida() {
  return (
    <Section>
      <div className="relative">
        <RotatedText text="Nuestras Áreas de Oportunidad" />

        <InfoContainer
          subtitle="Cómo lo Hacemos"
          title="Elige tu camino de crecimiento"
          description="Descubre en qué área puedes desarrollarte, servir y liderar con propósito."
        />
      </div>
    </Section>
  );
}
