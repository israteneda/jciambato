import { aliados } from "@/features/inicio/data/aliados";
import Image from "next/image";

export default function Aliados() {
  return (
    <section className="select-none" aria-labelledby="aliados-heading">
      <header className="relative mx-8 md:mx-20 md:w-[calc(100%-180px)] lg:mx-auto">
        <div
          id="aliados-heading"
          className="relative z-10 mx-8 w-full max-w-6xl bg-transparent md:mx-20 lg:mx-auto"
        >
          <div className="lg:max-w-5xl">
            <p className="text-jci-yellow text-sm leading-[1.85] font-bold tracking-normal uppercase">
              Apoyo que impulsa nuestro impacto
            </p>
            <h2 className="text-jci-black mt-5 max-w-xs text-left text-3xl leading-[1.33] font-semibold tracking-normal normal-case md:max-w-[60%] lg:max-w-[75%] lg:text-5xl lg:leading-[1.33]">
              Aliados Estratégicos
            </h2>
          </div>
        </div>
      </header>

      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-8 p-5 lg:gap-16"
        role="list"
        aria-label="Logos de aliados estratégicos"
      >
        {aliados.map((aliado) => (
          <figure key={aliado.id} role="listitem" className="flex h-20 items-center justify-center">
            <a
              href={aliado.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center"
              aria-label={`Visitar sitio web de ${aliado.titulo}`}
            >
              <Image
                src={aliado.imagenUrl}
                alt={`Logo ${aliado.titulo}`}
                width={170}
                height={64}
                className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
                style={{ width: "auto", height: "100%" }}
                draggable={false}
              />
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
