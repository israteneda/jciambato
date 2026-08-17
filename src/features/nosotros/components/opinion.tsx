import RotatedText from "@/components/rotated-text";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { Container } from "@/components/layout/container";

export function Opinion() {
  return (
    <Section className="overflow-hidden">
      <div className="py-24">
        <RotatedText text="Forma parte de una organización a futuro" />

        <Container className="z-10">
          <div className="flex justify-start">
            <div>
              <div className="text-jci-gray text-xs leading-[1.85] font-bold tracking-normal uppercase">
                Emilia Santamaría, Presidenta de JCI Ambato 2026
              </div>
              <div className="mt-8">
                <p className="max-w-117 text-left text-[18px] leading-[1.78] font-normal tracking-normal text-white">
                  50 años después, JCI Ambato se distingue por su capacidad de implementación,
                  valentía para enfrentar retos y compromiso con nuestros valores fundamentales.
                  Esta forma de pensar nos guía en los momentos más difíciles. Seguimos siendo una
                  organización innovadora y diferenciada, adaptándonos ágilmente a la evolución del
                  mundo, siempre con la misión de generar un impacto positivo y sostenible.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute inset-0 bg-black">
        <div className="relative h-full w-full overflow-hidden bg-white">
          <Image
            alt="Emilia Santamaría, Presidenta de JCI Ambato 2025"
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/nosotros/hero-presidenta.png"
            fill
          />
        </div>
      </div>
    </Section>
  );
}
