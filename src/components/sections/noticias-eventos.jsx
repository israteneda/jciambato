import { Button } from "@nextui-org/react";

export default function NoticiasEventos() {
  return (
    <div className="w-full mx-auto max-w-7xl px-6 mt-28 lg:mt-32">
      <header className="flex justify-between mx-auto max-w-2xl lg:max-w-none">
        <h2 className="font-display tracking-tight text-3xl font-medium sm:text-4xl text-neutral-950">
          Noticias y Eventos
        </h2>
        <Button
          variant="bordered"
          className="relative overflow-hidden text-cyan-800 border-cyan-600 group"
          aria-label="Conoce nuestra misión y visión"
        >
          <span className="absolute inset-0 bg-cyan-600 transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            Ver más
          </span>
        </Button>
      </header>

      <div className="mx-auto max-w-2xl lg:max-w-none mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article
            key="Noticia 1"
            className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
          >
            <h3 className="text-neutral-950">Noticia</h3>
            <h4 className="mt-2 font-display text-2xl font-semibold text-neutral-950">
              Lorem, ipsum dolor.
            </h4>
            <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
              <span>Más {"-->"}</span>
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              magnam quod. Sunt, aut fuga doloremque saepe atque autem
              repellendus adipisci nobis possimus aliquam culpa, officiis
              deleniti quam, ab minus expedita.
            </p>
          </article>

          <article
            key="Noticia 2"
            className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
          >
            <h3 className="text-neutral-950">Noticia</h3>
            <h4 className="mt-2 font-display text-2xl font-semibold text-neutral-950">
              Lorem, ipsum dolor.
            </h4>
            <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
              <span>Más {"-->"}</span>
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              magnam quod. Sunt, aut fuga doloremque saepe atque autem
              repellendus adipisci nobis possimus aliquam culpa, officiis
              deleniti quam, ab minus expedita.
            </p>
          </article>

          <article
            key="Noticia 3"
            className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
          >
            <h3 className="text-neutral-950">Noticia</h3>
            <h4 className="mt-2 font-display text-2xl font-semibold text-neutral-950">
              Lorem, ipsum dolor.
            </h4>
            <p className="mt-5 flex gap-x-2 text-sm text-neutral-950">
              <span>Más {"-->"}</span>
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              magnam quod. Sunt, aut fuga doloremque saepe atque autem
              repellendus adipisci nobis possimus aliquam culpa, officiis
              deleniti quam, ab minus expedita.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
