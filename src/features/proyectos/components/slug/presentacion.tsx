import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Proyecto } from "@/types/proyecto";

export default function Presentacion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Section aria-labelledby={`presentacion-${proyecto.slug}-heading`}>
      <Container>
        <div>
          <div className="text-jci-black text-xs leading-[1.85] tracking-[1px] uppercase not-italic">
            {proyecto.area_oportunidad}
          </div>
          <div className="mt-8">
            <h1 className="text-jci-black text-left text-3xl leading-[1.33] font-bold md:text-5xl">
              {proyecto.nombre}
            </h1>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex gap-32">
            <div className="text-jci-teal text-sm leading-[1.33] font-semibold uppercase">
              {proyecto.estado}
            </div>
            <div className="text-jci-black text-sm leading-[1.33]">{proyecto.lugar}</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
