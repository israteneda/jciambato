import Image from "next/image";
import Link from "next/link";

export default function AreasOportunidad() {
    return (
        <section className="relative bg-transparent">
            <div className="my-20">
                <div className="flex flex-col">
                    <div className="relative block md:flex flex-col md:flex-row justify-start">
                        {/* Imagen */}
                        <div className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/areas_oportunidad/area.webp"
                                    width={1920}
                                    height={1080}
                                    alt="Texto alternativo"
                                    className="absolute h-full w-full inset-0 object-cover"
                                />
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                            <div>
                                <div className="mt-0">
                                    <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                        Negocios y Emprendimiento
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <div className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                        Impulsamos la cultura emprendedora. Creamos espacios donde las ideas se convierten en negocios y los jóvenes acceden a herramientas reales, mentoría y redes estratégicas.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="text-[12px] font-semibold uppercase not-italic text-left leading-[1.78] tracking-[2px] text-jci-aqua">
                                    Leer más
                                </div>

                                <div className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]">
                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/areas-oportunidad"
                                    className=""
                                >
                                    <div className="relative block transition-all duration-400">
                                        <div className="flex pt-4 pb-0">
                                            <div className="z-[1] text-jci-black leading-[1] text-[14px] relative not-italic tracking-normal font-medium">
                                                Explore this Business Area
                                            </div>
                                            <div className="sc-f6462093-2 iDznfc">
                                                <i className="icon-icon-seta-dir-BTs">
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row-reverse xl:flex-row justify-end">
                        {/* Imagen */}
                        <div className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/areas_oportunidad/area.webp"
                                    width={1920}
                                    height={1080}
                                    alt="Texto alternativo"
                                    className="absolute h-full w-full inset-0 object-cover"
                                />
                            </div>

                        </div>

                        {/* Contenido */}
                        <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                            <div>
                                <div className="mt-0">
                                    <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                        Cooperación Internacional
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <div className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                        Participamos en academias, hermanamientos y eventos globales para conectar a nuestros miembros con una red mundial de líderes comprometidos.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="text-[12px] font-semibold uppercase not-italic text-left leading-[1.78] tracking-[2px] text-jci-aqua">
                                    Leer más
                                </div>

                                <div className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]">
                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/areas-oportunidad"
                                    className=""
                                >
                                    <div className="relative block transition-all duration-400">
                                        <div className="flex pt-4 pb-0">
                                            <div className="z-[1] text-jci-black leading-[1] text-[14px] relative not-italic tracking-normal font-medium">
                                                Explore this Business Area
                                            </div>
                                            <div className="sc-f6462093-2 iDznfc">
                                                <i className="icon-icon-seta-dir-BTs">
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="relative block md:flex flex-col md:flex-row justify-start">
                        {/* Imagen */}
                        <div className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/areas_oportunidad/area.webp"
                                    width={1920}
                                    height={1080}
                                    alt="Texto alternativo"
                                    className="absolute h-full w-full inset-0 object-cover"
                                />
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                            <div>
                                <div className="mt-0">
                                    <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                        Desarrollo Individual
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <div className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                        Formamos líderes desde adentro: oratoria, inteligencia emocional, liderazgo ético y más. Nuestro objetivo es empoderar al ser para impactar mejor.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="text-[12px] font-semibold uppercase not-italic text-left leading-[1.78] tracking-[2px] text-jci-aqua">
                                    Leer más
                                </div>

                                <div className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]">
                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/areas-oportunidad"
                                    className=""
                                >
                                    <div className="relative block transition-all duration-400">
                                        <div className="flex pt-4 pb-0">
                                            <div className="z-[1] text-jci-black leading-[1] text-[14px] relative not-italic tracking-normal font-medium">
                                                Explore this Business Area
                                            </div>
                                            <div className="sc-f6462093-2 iDznfc">
                                                <i className="icon-icon-seta-dir-BTs">
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row-reverse xl:flex-row justify-end">
                        {/* Imagen */}
                        <div className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/areas_oportunidad/area.webp"
                                    width={1920}
                                    height={1080}
                                    alt="Texto alternativo"
                                    className="absolute h-full w-full inset-0 object-cover"
                                />
                            </div>

                        </div>

                        {/* Contenido */}
                        <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                            <div>
                                <div className="mt-0">
                                    <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                        Impacto en la Comunidad
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <div className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                        La acción social es nuestra bandera. Trabajamos en proyectos que mejoran vidas, fortalecen barrios y transforman realidades locales.
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="text-[12px] font-semibold uppercase not-italic text-left leading-[1.78] tracking-[2px] text-jci-aqua">
                                    Leer más
                                </div>

                                <div className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]">
                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2">
                                        <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                            <div className="text-[14px] font-normal not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                Aluminium and glass façades
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/areas-oportunidad"
                                    className=""
                                >
                                    <div className="relative block transition-all duration-400">
                                        <div className="flex pt-4 pb-0">
                                            <div className="z-[1] text-jci-black leading-[1] text-[14px] relative not-italic tracking-normal font-medium">
                                                Explore this Business Area
                                            </div>
                                            <div className="sc-f6462093-2 iDznfc">
                                                <i className="icon-icon-seta-dir-BTs">
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}