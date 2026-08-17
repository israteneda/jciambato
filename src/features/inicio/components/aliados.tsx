import { aliados } from "@/features/inicio/data/aliados";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

export function Aliados() {
  return (
    <Section>
      <Container>
        <div className="text-jci-yellow text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
          <p>Apoyo que impulsa nuestro impacto</p>
        </div>

        <div className="mt-6">
          <h3 className="text-jci-black text-left text-3xl leading-[1.33] font-bold tracking-normal normal-case not-italic md:text-5xl">
            Aliados Estratégicos
          </h3>
        </div>
      </Container>

      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-8 p-5 lg:gap-16"
        role="list"
        aria-label="Logos de aliados estratégicos"
      >
        {aliados.map((aliado) => (
          <figure
            key={aliado.id}
            role="listitem"
            className="flex h-16 items-center justify-center md:h-22"
          >
            <a
              href={aliado.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center"
              aria-label={`Visitar sitio web de ${aliado.titulo}`}
            >
              <Image
                src={aliado.imagenUrl}
                alt={`Logo ${aliado.titulo}`}
                width={170}
                height={64}
                className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
                style={{ width: "auto", height: "100%" }}
                draggable={false}
              />
            </a>
          </figure>
        ))}
      </div>
    </Section>
  );
}
