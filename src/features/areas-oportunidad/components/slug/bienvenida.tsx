import PageHero from "@/components/layout/page-hero";
import { AreaOportunidad } from "@/types/area-oportunidad";

export default function Bienvenida({ area }: { area: AreaOportunidad }) {
  return (
    <PageHero
      variant="full"
      tone="light"
      subtitle={area.subtitle}
      title={area.title}
      description={area.description}
      image={area.background_image}
      imageAlt={`Imagen de fondo de ${area.title}`}
      border
    />
  );
}