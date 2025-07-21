import { AreaOportunidad } from "@/data/areas-oportunidad";

export default function Caracteristicas({ area }: { area: AreaOportunidad }) {
    return (
        <section className="relative my-24 md:my-48" aria-labelledby={`presentacion-${area.slug}-heading`}>
            <div className="relative max-w-6xl px-8 md:mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Caja de Información */}
                    <div>
                        <div className="flex">
                            {/* Texto Vertical */}
                            <div className="hidden md:block absolute top-0 left-3 translate-x-[-50%] translate-y-[-50%] -rotate-90 origin-bottom-right">
                                <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[4px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[160px]" aria-hidden="true">
                                    Características
                                </div>
                            </div>


                            <div className="relative md:ml-44">
                                <header>
                                    <h2 className="text-4xl text-black font-bold leading-2 text-left">
                                        Trabajando en <br /> {area.title}
                                    </h2>
                                </header>
                               {/*  <div className="mt-8">
                                    <div className="flex flex-col gap-3 text-gray-700 text-left text-medium leading-[1.78] max-w-[470px]">
                                        <p>{area.description}</p>
                                    </div>
                                </div> */}


                                <div className="mt-10">
                                    <section aria-labelledby={`features-${area.id}`}>
                                        <h4 id={`features-${area.id}`} className="sr-only">
                                            Características de {area.title}
                                        </h4>
                                        <ul
                                            className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]"
                                            role="list"
                                        >
                                            {area.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="w-1/2">
                                                    <div className="mx-3 py-4 border-t border-t-jci-gray">
                                                        <span className="text-lg text-jci-black font-bold not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}