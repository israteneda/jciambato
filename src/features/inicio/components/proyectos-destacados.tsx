import { Carousel } from "@/components/Carousel";
import { Section } from "@/components/layout/section";
import { proyectosDestacados } from "@/features/proyectos/data/destacados/proyectos-destacados";

export default function ProyectosDestacados() {
  return (
    <Section className="py-0 md:py-0">
      <Carousel proyectos={proyectosDestacados} />
    </Section>
  );
}
