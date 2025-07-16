import Image from "next/image";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function Presentacion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center items-center">
                {/* Información */}
                <div className="w-full flex justify-center">
                    <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-24 pb-36 bg-white">
                        <div className="relative">
                            <header>
                                <p className="text-xs leading-[1.85] font-bold uppercase text-jci-gray">
                                    Conócenos mejor
                                </p>
                                <div className="mt-8">
                                    <h2 className="text-3xl md:text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                                        En JCI Ambato, unimos jóvenes líderes para transformar ideas en acciones que impulsan el cambio social, cultural y económico.
                                    </h2>
                                </div>
                            </header>

                            <div className="mt-20">
                                <div className="text-medium leading-loose text-jci-off-black text-left columns-1 md:columns-2 gap-10 space-y-4">
                                    <p>
                                        Aquí, cada miembro es un protagonista que impulsa el cambio, guiado por la innovación, el compromiso con la comunidad y una visión de liderazgo global. Juntos, fusionamos ideas, acciones y propósitos para generar un impacto positivo y transformador en nuestra ciudad y más allá. Para alcanzar este objetivo, trabajamos con dedicación diaria, superando las expectativas de nuestros clientes, cumpliendo plazos con precisión y entregando soluciones óptimas para cada proyecto. Nuestro compromiso se sustenta en la motivación de nuestros equipos, quienes abordan cada desafío con un análisis crítico y creativo, siempre enfocados en encontrar la mejor solución.
                                    </p>

                                    <p>
                                        Fomentamos el desarrollo personal y profesional de nuestros empleados como pilar fundamental para innovar y superar retos con confianza, ambición y excelencia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 md:mt-40">
                            <div className="flex justify-end">
                                <div className="flex flex-wrap gap-8 md:gap-0" role="list" aria-label="Estadísticas de JCI Ambato">
                                    <div className="mr-20" role="listitem">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <AnimatedNumber
                                                end={50}
                                                prefix="+"
                                                duration={2.5}
                                                delay={0.2}
                                            />
                                        </div>
                                        <p className="md:text-medium text-black text-left uppercase max-w-44">
                                            <strong>Años</strong> inspirando líderes
                                        </p>
                                    </div>

                                    <div className="mr-20" role="listitem">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <AnimatedNumber
                                                end={200}
                                                prefix="+"
                                                duration={2.5}
                                                delay={0.4}
                                            />
                                        </div>
                                        <p className="md:text-medium text-black text-left uppercase max-w-44">
                                            <strong>Proyectos</strong> ejecutados
                                        </p>
                                    </div>

                                    <div className="mr-20" role="listitem">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <AnimatedNumber
                                                end={500}
                                                prefix="+"
                                                duration={2.5}
                                                delay={0.6}
                                            />
                                        </div>
                                        <p className="md:text-medium text-black text-left uppercase max-w-44">
                                            <strong>Jóvenes</strong> formados y empoderados
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block absolute right-[50px] bottom-[25%] rotate-90 origin-bottom-right">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[-170px]" aria-hidden="true">
                                Conoce, Suma, Transforma
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fotografía */}
                <div className="w-full px-0">
                    <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8 md:gap-12">
                        {/* Flecha solo visible en pantallas grandes */}
                        <div className="hidden md:flex justify-center items-center flex-shrink-0">
                            <Image
                                src="/icons/arrow-down.svg"
                                alt=""
                                width={120}
                                height={120}
                                className="object-contain w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Imagen principal */}
                        <figure className="w-full md:w-auto md:flex-1 h-auto max-h-[650px] relative overflow-hidden">
                            <Image
                                src="/images/grupo/grupo.webp"
                                alt="Miembros de JCI Ambato trabajando en equipo"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}	