import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AreaOportunidad } from "@/types/area-oportunidad";
import Image from "next/image";

export function Presentacion({ area }: { area: AreaOportunidad }) {
  return (
    <Section className="overflow-hidden" aria-labelledby={`presentacion-${area.slug}-heading`}>
      <Container>
        <div className="mt-16">
          <div className="max-w-5xl">
            <header>
              <div className="text-jci-gray text-[13px] leading-[1.85] font-bold tracking-normal uppercase not-italic">
                {area.subtitle}
              </div>

              <div className="mt-8">
                <h2
                  id={`presentacion-${area.slug}-heading`}
                  className="text-jci-black text-left text-3xl leading-[1.1] font-bold tracking-[-1px] not-italic md:max-w-[75%] md:text-4xl lg:text-5xl"
                >
                  {area.description}
                </h2>
              </div>
            </header>

            <div className="mt-16 md:mt-20">
              <p className="text-jci-black columns-1 gap-10 space-y-4 text-justify text-base leading-loose md:text-left lg:columns-2">
                {area.longDescription}
              </p>
            </div>

            {/* Logo Area */}
            <div className="my-10">
              <div className="flex justify-center py-5">
                {area.logo && (
                  <Image
                    src={area.logo}
                    alt={`Logo de ${area.title}`}
                    width={400}
                    height={140}
                    className="h-auto w-auto max-w-70 object-contain"
                    draggable="false"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
