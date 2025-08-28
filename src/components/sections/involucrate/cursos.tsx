import { SubContainer } from "@/components/commons";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Cursos() {
    return (
        <section className="relative z-10 max-w-6xl mx-8 md:mx-20 lg:mx-auto">
            <div className="my-24 md:my-40">
                <SubContainer
                    title="Prepárate para ser parte de JCI"
                    subtitle="Conócenos más a fondo"
                    description="Participa en nuestros cursos de inducción, formación y liderazgo. Estos programas te permitirán comprender a profundidad el propósito de nuestra organización, fortalecer tus competencias personales y profesionales, y descubrir cómo contribuir activamente al desarrollo de tu comunidad."
                />

                <div className="flex flex-col md:flex-row my-10">
                    <div className="flex flex-col flex-1 md:mr-3 md:mt-48">
                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-jci-navy">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-gray-50 self-end">
                                    <strong>Introducción a JCI</strong>
                                    <span> - Gratis</span>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-gray-50 w-full">
                                        ¿Qué es la JCI?
                                    </h4>
                                </div>

                                <p className="text-sm text-gray-50 mb-5">
                                    Descubre qué es JCI, cómo está estructurada y cómo esta plataforma global impulsa tu desarrollo personal y liderazgo.
                                </p>

                                <Link
                                    href="https://aprende.educat.tech/course/section.php?id=624"
                                    target="_blank"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Leer más sobre"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-seafoam leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Leer más
                                        </span>
                                        <div
                                            className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                            aria-hidden="true"
                                        >
                                            <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-seafoam group-hover:text-jci-red transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="md:mt-6">
                            <div className="w-full p-10 min-h-52 box-border bg-jci-gold">
                                <div className="text-base font-normal not-italic leading-[1.5] tracking-normal text-gray-50 self-end">
                                    <strong>Introducción a JCI</strong>
                                    <span> - Gratis</span>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Credo, Misión <br /> y Visión
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    Conoce los principios que definen nuestra identidad y cómo guían nuestras acciones como ciudadanos activos.
                                </p>

                                <Link
                                    href="https://aprende.educat.tech/course/view.php?id=54"
                                    target="_blank"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Leer más sobre"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Leer más
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
                                    <strong>Introducción a JCI</strong>
                                    <span> - Gratis</span>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Eventos
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    Explora el impacto de nuestros eventos locales, nacionales e internacionales, y cómo puedes participar activamente.
                                </p>

                                <Link
                                    href="https://aprende.educat.tech/course/view.php?id=53"
                                    target="_blank"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Leer más sobre"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Leer más
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
                                    <strong>Introducción a JCI</strong>
                                    <span> - Gratis</span>
                                </div>
                                <div className="my-2">
                                    <h4 className="text-2xl font-bold not-italic leading-[1-2] tracking-normal text-jci-off-black w-full">
                                        Plan de Carrera
                                    </h4>
                                </div>

                                <p className="text-sm text-jci-off-black mb-5">
                                    Traza tu ruta de crecimiento dentro de JCI Ambato y JCI Ecuador para desarrollar tu potencial al máximo.
                                </p>

                                <Link
                                    href="https://aprende.educat.tech/course/view.php?id=57"
                                    target="_blank"
                                    className="z-20 group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                    aria-label="Leer más sobre"
                                >
                                    <div className="flex items-center py-4">
                                        <span className="text-xs text-jci-off-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-red">
                                            Leer más
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


                <div className="flex flex-col justify-center items-center text-sm md:text-base font-normal text-center not-italic tracking-normal text-[#323232]">
                    <span>
                        ¿Quieres conocer más opciones de formación?
                    </span>
                    <span>
                        Visita más cursos en&nbsp;
                        <a
                            href="https://jciecuador.com/cursos/"
                            target="_blank"
                            className="text-jci-aqua underline"
                            aria-label="Redirección a la página de cursos de JCI Ecuador"
                        >
                            JCI Ecuador &mdash; Cursos
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}