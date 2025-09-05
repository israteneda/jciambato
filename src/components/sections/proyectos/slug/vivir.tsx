import { FiUsers } from "react-icons/fi";
import { MdLeaderboard } from "react-icons/md";
import { BiMicrophone, BiBody } from "react-icons/bi";


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
                                ¿Qué vas a vivir?
                            </h2>
                        </header>

                        <div className="mt-8">
                            <ul className="text-lg text-jci-off-black max-w-md space-y-4" role="list" aria-label="Lista de beneficios">
                                <li className="flex items-start">
                                    <BiMicrophone className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Talleres vivenciales
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <BiBody className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Mentoría personalizada
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <FiUsers className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Práctica en escenarios reales
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <MdLeaderboard className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Feedback en tiempo real
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <MdLeaderboard className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Enfoque introspectivo y artístico
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