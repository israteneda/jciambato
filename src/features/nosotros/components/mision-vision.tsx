import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

export default function MisionVision() {
  return (
    <Section className="bg-jci-bg py-24 md:py-34">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex">
            <div className="hidden md:block">
              <div className="absolute top-20 left-6 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                <div className="text-jci-gray after:bg-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase after:absolute after:top-1.5 after:-left-42.5 after:h-px after:w-40 after:content-['']">
                  Nuestro Propósito
                </div>
              </div>
            </div>

            <div className="relative md:ml-49">
              <div className="mt-20">
                <h3 className="text-jci-black text-left text-[48px] leading-[1.17] font-bold tracking-normal">
                  Nuestra Misión <br /> y Visión
                </h3>
              </div>
              <div className="mt-8">
                <div className="text-jci-black max-w-117 text-left text-[18px] leading-[1.78] font-normal tracking-normal">
                  <p>
                    Ofrecer oportunidades de desarrollo de liderazgo que empoderen a los jóvenes
                    para crear un impacto positivo.
                  </p>
                  <p className="mt-5">Ser la principal red mundial de jóvenes líderes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-0">
            <div className="h-55 w-55 object-cover md:h-70 md:w-70 lg:h-85 lg:w-85">
              <div className="mx-auto h-full w-full overflow-hidden outline-none">
                <Image
                  src="/icons/eye.svg"
                  alt="Icono representativo de misión y visión"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
