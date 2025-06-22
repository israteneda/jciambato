import { FiAward, FiGlobe, FiUsers } from "react-icons/fi";

export default function Beneficios() {
    return (
        <section className="my-36">
            <div className="relative z-[1] bg-transparent max-w-6xl px-8 md:mx-auto">
                <div className="flex">
                    {/* Caja de Información */}
                    <div className="relative">
                        <div className="absolute top-[80px] left-[24px] transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative not-italic tracking-[2px] whitespace-nowrap uppercase">
                                <span className="absolute top-[6px] left-[-170px] w-[160px] h-px bg-[#aeaeae]"></span>
                                Cada día
                            </div>
                        </div>
                    </div>

                    <div className="relative ml-[170px]">
                        <div className="mt-20">
                            <div className="text-[48px] not-italic text-left leading-[1.17] tracking-normal text-black max-w-[470px]">
                                Beneficios de ser parte de JCI Ambato
                            </div>

                        </div>

                        <div className="mt-8">
                            <div className="text-lg text-jci-off-black max-w-md space-y-4">
                                <div className="flex items-start">
                                    <FiAward className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" />
                                    <span>
                                        Acceso a <strong>capacitaciones y entrenamientos</strong> exclusivos para potenciar tu liderazgo.
                                    </span>
                                </div>
                                <div className="flex items-start">
                                    <FiGlobe className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" />
                                    <span>
                                        Oportunidad de participar en <strong>proyectos locales e internacionales</strong> de alto impacto.
                                    </span>
                                </div>
                                <div className="flex items-start">
                                    <FiUsers className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" />
                                    <span>
                                        <strong>Networking</strong> con una red global de jóvenes líderes, empresarios y profesionales.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* El mapa se incrustará aquí */}
            {/* <div className="relative z-10 mx-auto w-full max-w-6xl p-8">
                <div className="mt-16 w-full h-[450px] rounded-lg overflow-hidden">
                    
                </div>
            </div> */}
        </section>
    );
}