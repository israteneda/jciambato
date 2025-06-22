import { valores } from "@/data/valores";

export default function Valores() {
    return (
        <section className="relative z-10">
            <div className="py-14 md:py-28 bg-gray-200">
                <div className="max-w-6xl mx-8 md:mx-auto">
                    {/* Titulo */}
                    <div>
                        <div className="text-jci-gold text-xs leading-2 font-bold uppercase">
                            Nuestro ADN
                        </div>

                        <div className="mt-6">
                            <div className="text-gray-800 text-4xl md:text-5xl leading-none font-bold text-left max-w-[470px]">
                                Nuestros Valores
                            </div>
                        </div>

                        <div className="mt-16">
                            <div className="text-jci-black text-medium md:text-xl leading-[1.78] text-left max-w-md">
                                Nuestros valores son el punto de referencia para desarrollar un trabajo excelente. Desde el primer hasta el último día de cada proyecto. Creando valor, siempre enfocados en la calidad del producto final.
                            </div>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="mt-14 md:mt-28">
                        {/* Contenedor Padre */}
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-5 max-w-3xl mx-auto">
                            {valores.map((valor) => (
                                <div key={valor.id} className="flex flex-row items-start mb-7 md:mb-14">
                                    <div className="w-12 mr-5">
                                        <div className="text-jci-seafoam text-4xl leading-none font-bold">
                                            {valor.id}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-jci-off-black text-xl leading-[1.45] font-bold text-left">
                                            {valor.title}
                                        </div>
                                        <div className="mt-2">
                                            <div className="text-jci-gray text-xs leading-normal text-left">
                                                {valor.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}