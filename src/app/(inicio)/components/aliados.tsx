import { aliados } from "@/data/aliados";
import Image from "next/image";

export default function Aliados() {
  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative mx-8 md:mx-20 md:w-[calc(100%-180px)] lg:mx-auto">
        <div className="flex justify-center">
          <h2
            id="aliados-heading"
            className="text-jci-off-black text-left text-2xl leading-tight font-bold tracking-normal not-italic md:text-[calc(22.4px+0.5vw)]"
          >
            Nuestros Aliados
          </h2>
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
