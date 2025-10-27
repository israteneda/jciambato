import { aliados } from "@/data/aliados";
import Image from "next/image";

export default function Aliados() {
  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative md:w-[calc(100%-180px)] mx-8 md:mx-20 lg:mx-auto">
        <div className="flex justify-center">
          <h2
            id="aliados-heading"
            className="text-2xl font-bold not-italic leading-[1.25] tracking-normal text-left text-jci-off-black md:text-[calc(22.4px+0.5vw)]"
          >
            Nuestros Aliados
          </h2>
        </div>
      </header>

      <div
        className="flex flex-wrap justify-center mt-8 gap-8 lg:gap-16 p-5"
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
              className={`object-contain w-auto h-[${aliado.tamano}px]`}
              draggable="false"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
