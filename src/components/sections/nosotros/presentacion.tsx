import Image from "next/image";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function Presentacion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center items-center">
                {/* Información */}
                <div className="w-full flex justify-center">
                    <div className="relative mx-auto max-w-6xl py-20 px-8 md:px-20 pb-36 bg-white">

                        <header className="max-w-3xl">
                            <p className="text-xs leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                                Conócenos mejor
                            </p>
                            <div className="mt-8">
                                <h2 className="text-3xl md:text-5xl font-bold md:leading-[1.33] text-black text-left">
                                    {/* En JCI Ambato, unimos jóvenes líderes para transformar ideas en acciones que impulsan el cambio social, cultural y económico. */}
                                    Lideramos con propósito para transformar nuestra ciudad y conectar con el mundo.
                                </h2>
                            </div>
                        </header>

                        <div className="mt-16 md:mt-20">

                            <div className="text-base leading-loose text-jci-off-black text-justify md:text-left columns-1 lg:columns-2 gap-10 space-y-4">
                                <p>
                                    En JCI Ambato creemos que el liderazgo joven es la fuerza que impulsa la transformación de nuestra sociedad. Somos parte de la red global de la <a href="https://www.jcipartnerships.com/" className="text-jci-aqua underline" target="_blank">Cámara Junior Internacional (JCI)</a>, una organización sin fines de lucro fundada en 1915, que hoy conecta a más de 150.000 jóvenes líderes en más de 100 países.
                                </p>
                                <p>
                                    A nivel nacional, formamos parte de <a href="https://jciecuador.com/" className="text-jci-aqua underline" target="_blank">JCI Ecuador</a>, una red que agrupa a los capítulos locales presentes en diversas ciudades del país, todos comprometidos con una misma misión: empoderar a los jóvenes para que sean ciudadanos activos y agentes de cambio positivo.
                                </p>
                                <p>
                                    Nuestra organización local fue fundada hace más de 50 años con el propósito de empoderar a los jóvenes ambateños para liderar con propósito y generar impacto real. Desde entonces, hemos trabajado de forma continua en el diseño e implementación de proyectos innovadores que transforman social, cultural y económicamente a nuestra ciudad.
                                </p>
                                <p>
                                    Impulsamos el desarrollo en cuatro áreas clave: <strong>crecimiento personal</strong>, <strong>impacto comunitario</strong>, <strong>negocios y emprendimiento</strong>, y <strong>colaboración internacional</strong>. Cada miembro de JCI Ambato se forma como un líder ético, creativo y comprometido con soluciones sostenibles, alineadas con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.
                                </p>
                                <p>
                                    Hoy, JCI Ambato sigue siendo una plataforma de oportunidades para quienes desean generar impacto, crecer como líderes y dejar una huella significativa en su ciudad y en el mundo.
                                </p>
                            </div>
                        </div>


                        <div className="mt-20 lg:mt-40">
                            <div className="flex justify-end">
                                <div className="flex flex-wrap gap-8" role="list" aria-label="Estadísticas de JCI Ambato">
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
                                        <p className="text-base text-black text-left uppercase max-w-44">
                                            <strong>Jóvenes</strong> formados y empoderados
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block absolute right-[50px] bottom-[25%] rotate-90 origin-bottom-right">
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
                        <div className="hidden md:flex justify-center items-center flex-shrink-0 md:ml-20">
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
                        <figure className="w-full md:w-auto md:flex-1 h-auto max-h-auto relative overflow-hidden">
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