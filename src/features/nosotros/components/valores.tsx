import { valores } from "@/features/inicio/data/valores";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

export function Valores() {
  return (
    <Section className="bg-jci-navy py-24 md:py-34">
      <Container>
        <div>
          <div className="text-jci-yellow text-[13px] leading-[1.85] font-bold tracking-normal uppercase">
            Nuestro ADN
          </div>
          <div className="mt-6">
            <h3 className="max-w-117 text-left text-4xl leading-[1.33] font-bold tracking-normal text-white md:text-5xl">
              Nuestros Valores
            </h3>
          </div>
          <div className="mt-16">
            <p className="max-w-117 text-left text-[18px] leading-[1.78] tracking-normal text-white md:text-xl">
              En JCI Ambato, nuestros valores guían el crecimiento personal y organizacional,
              impulsando un progreso mutuo y sostenible.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-28">
          <div
            className="mx-auto grid max-w-4xl grid-cols-1 grid-rows-3 gap-5 md:grid-cols-2"
            role="list"
            aria-label="Lista de valores de JCI Ambato"
          >
            {valores.map((valor) => (
              <article key={valor.id} className="mb-8 flex flex-row items-start" role="listitem">
                <div className="mr-5">
                  <div className="text-jci-teal text-5xl leading-none font-bold">{valor.id}</div>
                </div>
                <div>
                  <h3 className="text-left text-xl leading-[1.45] font-bold text-white">
                    {valor.titulo}
                  </h3>
                  <div className="mt-2">
                    <p className="text-left text-sm leading-normal text-white">
                      {valor.descripcion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
