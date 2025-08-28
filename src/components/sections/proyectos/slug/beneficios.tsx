import { FaStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdLeaderboard } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { BiMicrophone, BiBody, BiPalette } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";


export default function Beneficios() {
    return (
        <section className="my-12 md:my-20" aria-labelledby="beneficios-heading">
            <div className="relative z-[1] bg-transparent max-w-6xl px-8 md:mx-auto">
                <article className="flex">
                    {/* Caja de Información */}
                    <div className="hidden md:block relative">
                        <div className="absolute top-[80px] left-[24px] transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative not-italic tracking-[2px] whitespace-nowrap uppercase">
                                <span className="absolute top-[6px] left-[-170px] w-[160px] h-px bg-[#aeaeae]"></span>
                                Beneficios
                            </div>
                        </div>
                    </div>

                    <div className="relative md:ml-[170px]">
                        <header className="mt-20">
                            <h2 id="beneficios-heading" className="text-4xl md:text-5xl not-italic text-left leading-[1.17] tracking-normal text-black max-w-[470px]">
                                Beneficios de DominArte
                            </h2>
                        </header>

                        <div className="mt-8">
                            <ul className="text-lg text-jci-off-black max-w-md space-y-4" role="list" aria-label="Lista de beneficios">
                                <li className="flex items-start">
                                    <BiMicrophone className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Técnicas <strong> prácticas de oratoria </strong> y <strong> storytelling </strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <BiBody className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Control del <strong>miedo escénico</strong> y uso del <strong>lenguaje corporal</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <FiUsers className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Confianza para <strong>hablar en público</strong> frente a públicos diversos
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <MdLeaderboard className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Mentoría <strong>personalizada por expertos en comunicación y liderazgo.</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <BiPalette className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Un <strong> espacio artístico </strong> para explorar tu autenticidad y creatividad.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <TbCertificate className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Certificado de participación
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <FaStar className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        <strong>Oportunidad de formar parte de JCI Ambato</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <HiSparkles className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Experiencia inolvidable de <strong>crecimiento personal y liderazgo</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}