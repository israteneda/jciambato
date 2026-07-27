import RotatedText from "@/components/rotated-text";
import Image from "next/image";

export default function Opinion() {
  return (
    <section className="relative z-10 overflow-hidden">
      <RotatedText text="Forma parte de una organización a futuro" />
      <div className="mx-8 py-36 md:mx-20 md:max-w-7xl md:py-48 lg:mx-auto">
        <div className="relative z-10 max-w-lg">
          <div className="flex flex-col">
            <div className="text-jci-gray text-xs leading-[1.85] font-bold uppercase">
              Emilia Santamaría, Presidenta de JCI Ambato 2026
            </div>
            <div className="mt-10">
              <p className="max-w-md text-left text-lg leading-[1.78] font-normal text-white">
                50 años después, JCI Ambato se distingue por su capacidad de implementación,
                valentía para enfrentar retos y compromiso con nuestros valores fundamentales. Esta
                forma de pensar nos guía en los momentos más difíciles. Seguimos siendo una
                organización innovadora y diferenciada, adaptándonos ágilmente a la evolución del
                mundo, siempre con la misión de generar un impacto positivo y sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black">
        <div className="relative h-full w-full overflow-hidden bg-white">
          <Image
            alt="Emilia Santamaría, Presidenta de JCI Ambato 2025"
            draggable="false"
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/nosotros/hero-presidenta.png"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
