import { Carousel } from "@/components/carousel";
import { Section } from "@/components/layout/section";
import { proyectosDestacados } from "@/features/proyectos/data/destacados/proyectos-destacados";

export function ProyectosDestacados() {
  return (
    <Section className="py-0 md:py-0">
      <Carousel proyectos={proyectosDestacados} />
    </Section>
  );
}
