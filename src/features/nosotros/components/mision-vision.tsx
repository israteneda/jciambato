import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import SubContainer from "@/components/sub-container";
import Image from "next/image";

export default function MisionVision() {
  return (
    <Section className="bg-jci-bg">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <SubContainer
            subtitle="Nuestro Propósito"
            title="Nuestra Misión y Visión"
            description="Ofrecer oportunidades de desarrollo de liderazgo que empoderen a los jóvenes para crear un impacto positivo. Ser la principal red mundial de jóvenes líderes."
          />

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
