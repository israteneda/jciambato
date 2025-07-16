import { RotatedText } from "@/components/commons";
import Image from "next/image";

export default function Opinion() {
  return (
    <section className="relative z-10 overflow-hidden">
      <RotatedText text="Forma parte de una organización a futuro" />
      <div className="py-36 md:py-48 md:max-w-7xl mx-8 md:mx-auto">
        <div className="relative max-w-lg z-10">
          <div className="flex flex-col">
            <div className="text-xs leading-[1.85] uppercase text-[#989898] font-bold">
              Gabriela González, Presidenta de JCI Ambato 2025
            </div>
            <div className="mt-10">
              <p className="text-lg font-normal leading-[1.78] text-white text-left max-w-md]">
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

      <div className="inset-0 absolute bg-black">
        <div className="w-full h-full overflow-hidden relative bg-white">
          <Image
            alt="Gabriela González, Presidenta de JCI Ambato 2025"
            className="absolute w-full h-full inset-0 object-cover"
            src="/images/secciones/hero-presidenta.png"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
