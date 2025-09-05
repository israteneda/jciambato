import { SubContainer } from "@/components/commons";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Valores() {
    return (
        <section className="relative z-10 max-w-6xl mx-8 md:mx-20 lg:mx-auto">
            <div className="my-16 md:my-32">
                <SubContainer
                    title="Transformamos ideas en acciones concretas"
                    subtitle="Nuestras formas de actuar"
                    description="En JCI Ambato, convertimos el liderazgo en impacto a través de cuatro formas de actuar. Estas representan cómo llevamos a la práctica el desarrollo de nuestros miembros y el servicio a la comunidad."
                />

                <div className="flex flex-col md:flex-row my-10">
                    <div className="flex flex-col flex-1 md:mr-3 md:mt-48">
                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-jci-navy">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-gray-50 self-end">
                                    <strong>Negocios y Emprendimiento</strong>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-gray-50 w-full">
                                        Programas
                                    </h4>
                                </div>

                                <p className="text-sm text-gray-50 mb-5">
                                    A través de iniciativas como CYE (Creative Young Entrepreneur) y JIB, impulsamos la mentalidad emprendedora y el desarrollo profesional. Estos programas fomentan la innovación, el crecimiento económico y el liderazgo empresarial entre nuestros miembros.
                                </p>

                                <Link
                                    href="/areas-oportunidad"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Áreas de Oportunidad"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-gray-50 leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Negocios y Emprendimiento
                                        </span>
                                        <div
                                            className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-gray-50 group-hover:text-jci-red transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-jci-gold">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-gray-50 self-end">
                                    <strong>Cooperación Internacional</strong>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Eventos
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    Desde Congresos Nacionales hasta el Congreso Mundial JCI, conectamos a jóvenes líderes de todo el mundo. Estos eventos fortalecen redes, fomentan el entendimiento intercultural y promueven soluciones globales colaborativas.
                                </p>

                                <Link
                                    href="/areas-oportunidad"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Áreas de oportunidad"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Cooperación Internacional
                                        </span>
                                        <div
                                            className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-off-black group-hover:text-jci-red transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 md:ml-3">
                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-[#D8D8D8]">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-jci-off-black self-end">
                                    <strong>Desarrollo Individual</strong>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Formación
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    Ofrecemos talleres, mentorías y cursos presenciales y en línea, en temas como liderazgo, oratoria, inteligencia emocional y gestión de proyectos. Estas oportunidades preparan a nuestros miembros para liderar con ética y efectividad.
                                </p>

                                <Link
                                    href="/areas-oportunidad"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Áreas de Oportunidad"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Desarrollo Individual
                                        </span>
                                        <div
                                            className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-off-black group-hover:text-jci-red transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-jci-seafoam">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-jci-off-black self-end">
                                    <strong>Impacto en la Comunidad</strong>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Proyectos
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    A través de iniciativas como JCI RISE, nuestros miembros desarrollan proyectos comunitarios centrados en sostenibilidad, salud mental, resiliencia económica y bienestar social. Cada proyecto responde a necesidades reales con impacto medible.
                                </p>

                                <Link
                                    href="/areas-oportunidad"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Áreas de Oportunidad"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Impacto en la Comunidad
                                        </span>
                                        <div
                                            className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-off-black group-hover:text-jci-red transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}