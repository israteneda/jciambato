import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AreaOportunidad } from "@/types/area-oportunidad";

export default function Caracteristicas({ area }: { area: AreaOportunidad }) {
  return (
    <Section aria-labelledby={`presentacion-${area.slug}-heading`}>
      <Container>
        <div className="hidden md:block">
          <div className="absolute top-20 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
            <div
              className="text-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase not-italic"
              aria-hidden="true"
            >
              Vicepresidencia Local
              <span className="bg-jci-gray absolute top-1.5 -left-42.5 h-px w-40 content-['']"></span>
            </div>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="flex">
            <header className="md:max-w-2xl">
              <div className="mt-20">
                <h2 className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:text-5xl">
                  Vicepresidencia <br /> {area.title}
                </h2>
              </div>

              <div className="mt-10">
                <section aria-labelledby={`features-${area.id}`}>
                  <h4 id={`features-${area.id}`} className="sr-only">
                    Características de {area.title}
                  </h4>
                  <ul className="mt-2 -mr-2.5 mb-17 -ml-2.5 flex flex-row flex-wrap" role="list">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="w-1/2">
                        <div className="border-t-jci-navy mx-3 border-t py-4">
                          <span className="text-jci-black text-lg leading-[1.78] font-bold tracking-normal not-italic">
                            {feature}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8">
                <div className="text-jci-black flex flex-col gap-3 text-left text-base leading-[1.78]">
                  <div className="text-jci-black mb-6 box-border flex w-full items-center pr-0 text-xl leading-[1.33] font-bold md:mb-0 md:w-1/2 md:pr-10 md:text-2xl">
                    <div className="border-jci-navy/20 w-full border-b p-[24px_0_24px_0] md:p-[24px_40px_24px_0]">
                      {area.responsable.nombre} {area.responsable.apellido}
                      <div>
                        <a
                          href={`mailto:${area.responsable.correo}`}
                          className="text-jci-teal text-lg leading-normal font-normal tracking-normal not-italic underline md:text-xl"
                        >
                          {area.responsable.correo}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </Container>
    </Section>
  );
}
