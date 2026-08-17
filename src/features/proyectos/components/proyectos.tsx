import { Section } from "@/components/layout/section";
import { ProyectosPorArea } from "@/features/proyectos/components";

export default function Proyectos() {
  return (
    <Section className="py-0 md:py-0" aria-labelledby="proyectos-contenido-heading">
      <header className="sr-only">
        <h2 id="proyectos-contenido-heading">Contenido de Proyectos</h2>
      </header>

      <ProyectosPorArea />
    </Section>
  );
}
