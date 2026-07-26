import { aliados } from "@/features/home/data/aliados";
import Image from "next/image";

export default function Aliados() {
  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative mx-8 md:mx-20 md:w-[calc(100%-180px)] lg:mx-auto">
        <div
          id="aliados-heading"
          className="relative z-10 mx-8 w-full max-w-6xl bg-transparent md:mx-20 lg:mx-auto"
        >
          <header className="lg:max-w-5xl">
            <div className="text-jci-yellow text-sm leading-[1.85] font-bold tracking-normal uppercase">
              Apoyo que impulsa nuestro impacto
            </div>
            <div className="mt-5">
              <h3 className="text-jci-black max-w-xs text-left text-3xl leading-[1.33] font-semibold tracking-normal normal-case md:max-w-[60%] lg:max-w-[75%] lg:text-5xl lg:leading-[1.33]">
                Aliados Estratégicos
              </h3>
            </div>
          </header>
        </div>
      </header>

      <div
        className="mt-8 flex flex-wrap justify-center gap-8 p-5 lg:gap-16"
        role="list"
        aria-label="Logos de aliados estratégicos"
      >
        {aliados.map((aliado) => (
          <figure key={aliado.id} role="listitem" className="flex items-center justify-center">
            <Image
              src={aliado.imagenUrl}
              alt={`Logo ${aliado.titulo}`}
              width={170}
              height={170}
              className={`w-auto object-contain h-[${aliado.tamano}px]`}
              draggable="false"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
