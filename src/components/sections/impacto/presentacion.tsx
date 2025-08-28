export default function Presentacion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center items-center">
                {/* Información */}
                <div className="w-full flex justify-center">
                    <div className="relative mx-auto max-w-6xl py-20 px-8 md:px-20 pb-20 bg-white">

                        <header className="max-w-3xl">
                            <p className="text-xs leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                                Cómo generamos impacto
                            </p>
                            <div className="mt-8">
                                <h2 className="text-3xl md:text-5xl font-bold md:leading-[1.33] text-black text-left">
                                    Liderando el desarrollo de líderes jóvenes en Ambato
                                </h2>
                            </div>
                        </header>

                        <div className="mt-16 md:mt-20">
                            <div className="text-base leading-loose text-jci-off-black text-justify md:text-left">
                                En JCI brindamos oportunidades de desarrollo de liderazgo prácticas, deliberadas y sostenibles. A través de una amplia gama de eventos, programas, sesiones de formación y proyectos, empoderamos a jóvenes líderes para generar un cambio real en sus comunidades y carreras.
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="md:p-6 my-5 leading-loose">
                                <p className="mb-4">Nuestro enfoque está guiado por cuatro áreas de oportunidad:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-jci-aqua mr-3 mt-1" aria-hidden="true">•</span>
                                        <span>
                                            <strong>Negocios y Emprendimiento: </strong>
                                            Impulsamos la innovación y el crecimiento mediante capacitación, networking y conexiones con líderes de la industria.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-jci-aqua mr-3 mt-1" aria-hidden="true">•</span>
                                        <span>
                                            <strong>Colaboración Internacional: </strong>
                                            Conectamos a jóvenes líderes de más de 100 países para fomentar la cooperación global y el entendimiento intercultural.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-jci-aqua mr-3 mt-1" aria-hidden="true">•</span>
                                        <span>
                                            <strong>Desarrollo Individual: </strong>
                                            Potenciamos el crecimiento personal y profesional con herramientas de liderazgo, oratoria, mentoría y habilidades clave.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-jci-aqua mr-3 mt-1" aria-hidden="true">•</span>
                                        <span>
                                            <strong>Impacto Comunitario: </strong>
                                            Lideramos proyectos sociales sostenibles que responden a desafíos locales y contribuyen a los Objetivos de Desarrollo Sostenible.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="text-base leading-loose text-jci-off-black text-justify md:text-left">
                                Al integrar estas áreas, cada experiencia en JCI fortalece a nuestros miembros como agentes de cambio global. Ya sea liderando un proyecto, participando en una formación o asistiendo a un evento internacional, JCI te prepara para dejar huella.
                            </div>
                        </div>

                        {/* <div className="hidden lg:block absolute right-[50px] bottom-[25%] rotate-90 origin-bottom-right">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[-170px]" aria-hidden="true">
                                Conoce, Suma, Transforma
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section >
    );
}	