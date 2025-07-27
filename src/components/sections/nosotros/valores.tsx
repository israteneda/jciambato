import { valores } from "@/data/valores";

export default function Valores() {
    return (
        <section className="relative z-10">
            <div className="py-14 md:py-28 bg-gray-200">
                <div className="max-w-6xl mx-8 lg:mx-auto">
                    {/* Titulo */}
                    <header>
                        <div className="text-jci-gold text-xs leading-2 font-bold uppercase">
                            Nuestro ADN
                        </div>

                        <div className="mt-6">
                            <h2 className="text-black text-4xl md:text-5xl leading-none font-bold text-left max-w-[470px]">
                                Nuestros Valores
                            </h2>
                        </div>

                        <div className="mt-16">
                            <p className="text-jci-black text-medium md:text-xl leading-[1.78] text-left max-w-md">
                                En JCI Ambato, nuestros valores guían el crecimiento personal y organizacional, impulsando un progreso mutuo y sostenible.
                            </p>
                        </div>
                    </header>

                    {/* Valores */}
                    <div className="mt-14 md:mt-28">
                        {/* Contenedor Padre */}
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-5 max-w-4xl mx-auto" role="list" aria-label="Lista de valores de JCI Ambato">
                            {valores.map((valor) => (
                                <article key={valor.id} className="flex flex-row items-start mb-7" role="listitem">
                                    <div className="mr-5">
                                        <div className="text-jci-seafoam text-4xl leading-none font-bold">
                                            {valor.id}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-jci-off-black text-xl leading-[1.45] font-bold text-left">
                                            {valor.title}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-jci-gray text-sm leading-normal text-left">
                                                {valor.description}
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