import { valores } from "@/data/valores";

export default function Valores() {
  return (
    <section className="relative z-10">
      <div className="bg-gray-200 py-14 md:py-28">
        <div className="mx-8 max-w-6xl sm:mx-20 lg:mx-auto">
          {/* Titulo */}
          <header>
            <div className="leading-2 text-xs font-bold uppercase text-jci-yellow">Nuestro ADN</div>

            <div className="mt-6">
              <h2 className="max-w-[470px] text-left text-4xl font-bold leading-none text-black md:text-5xl">
                Nuestros Valores
              </h2>
            </div>

            <div className="mt-16">
              <p className="max-w-md text-left text-medium leading-[1.78] text-jci-black md:text-xl">
                En JCI Ambato, nuestros valores guían el crecimiento personal y organizacional,
                impulsando un progreso mutuo y sostenible.
              </p>
            </div>
          </header>

          {/* Valores */}
          <div className="mt-14 md:mt-28">
            {/* Contenedor Padre */}
            <div
              className="mx-auto grid max-w-4xl grid-cols-1 grid-rows-3 gap-5 md:grid-cols-2"
              role="list"
              aria-label="Lista de valores de JCI Ambato"
            >
              {valores.map((valor) => (
                <article key={valor.id} className="mb-8 flex flex-row items-start" role="listitem">
                  <div className="mr-5">
                    <div className="text-5xl font-bold leading-none text-jci-seafoam">
                      {valor.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-left text-xl font-bold leading-[1.45] text-jci-black">
                      {valor.titulo}
                    </h3>
                    <div className="mt-2">
                      <p className="text-jci-gray text-left text-sm leading-normal">
                        {valor.descripcion}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
