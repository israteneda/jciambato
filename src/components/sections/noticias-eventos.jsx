import { Button } from "@nextui-org/react";

export default function NoticiasEventos() {
  return (
    <>
      {/* Titulo de la Seccion*/}
      <div className="w-full mx-auto max-w-7xl px-6 mt-24 sm:mt-32 lg:mt-40">
        <div className="flex justify-between mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="font-display tracking-tight text-3xl font-medium sm:text-4xl text-neutral-950">
                Noticias y Eventos
              </span>
            </h2>
          </div>

          {/* Botón interactivo con transiciones */}
          <Button
            variant="bordered"
            className="relative overflow-hidden text-cyan-800 border-cyan-600 group"
            aria-label="Conoce nuestra misión y visión"
          >
            {/* Fondo del botón con la transición de llenado */}
            <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>

            {/* Texto del botón */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Ver más{" "}
            </span>
          </Button>
        </div>
      </div>

      {/* Contenido de la Sección */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p>Noticia</p>
              <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">
                Lorem, ipsum dolor.
              </p>
              <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
                <span>Más {"-->"}</span>
              </p>

              <p className="mt-4 text-base text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, magnam quod. Sunt, aut fuga doloremque saepe atque
                autem repellendus adipisci nobis possimus aliquam culpa,
                officiis deleniti quam, ab minus expedita.
              </p>
            </article>

            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p>Noticia</p>
              <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">
                Lorem, ipsum dolor.
              </p>
              <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
                <span>Más {"-->"}</span>
              </p>

              <p className="mt-4 text-base text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, magnam quod. Sunt, aut fuga doloremque saepe atque
                autem repellendus adipisci nobis possimus aliquam culpa,
                officiis deleniti quam, ab minus expedita.
              </p>
            </article>

            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p>Noticia</p>
              <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">
                Lorem, ipsum dolor.
              </p>
              <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
                <span>Más {"-->"}</span>
              </p>

              <p className="mt-4 text-base text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, magnam quod. Sunt, aut fuga doloremque saepe atque
                autem repellendus adipisci nobis possimus aliquam culpa,
                officiis deleniti quam, ab minus expedita.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
