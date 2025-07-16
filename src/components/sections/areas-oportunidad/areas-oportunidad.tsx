import Image from "next/image";
import Link from "next/link";
import { areasOportunidad } from "@/data/areas-oportunidad";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function AreasOportunidad() {
    return (
        <section
            className="relative bg-transparent"
            aria-labelledby="areas-oportunidad-heading"
        >
            <div className="my-20">
                <header className="sr-only">
                    <h2 id="areas-oportunidad-heading">Áreas de Oportunidad</h2>
                </header>

                <div className="flex flex-col" role="list">
                    {areasOportunidad.map((area, index) => (
                        <article
                            key={area.id}
                            className={`relative ${index % 2 === 0
                                ? 'block md:flex flex-col md:flex-row justify-start'
                                : 'flex flex-col md:flex-row-reverse xl:flex-row justify-end'
                                }`}
                            role="listitem"
                        >
                            {/* Imagen */}
                            <figure className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src={area.image}
                                        width={1920}
                                        height={1080}
                                        alt={`Imagen representativa de ${area.title}`}
                                        className="absolute h-full w-full inset-0 object-cover"
                                    />
                                </div>
                            </figure>

                            {/* Contenido */}
                            <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                                <header>
                                    <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                        {area.title}
                                    </h3>
                                </header>

                                <div className="mt-5">
                                    <p className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                        {area.description}
                                    </p>
                                </div>

                                <div className="mt-5">
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
                                                    <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                                        <span className="text-[14px] text-jci-navy font-semibold not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    <footer>
                                        <Link
                                            href={`/areas-oportunidad/${area.slug}`}
                                            className="group max-w-full relative inline-block transition duration-[400ms] cursor-pointer"
                                            aria-label={`Explorar área de ${area.title}`}
                                        >
                                            <div className="flex items-center py-4">
                                                <span className="text-sm text-jci-black leading-none not-italic tracking-normal font-medium transition-colors duration-300 group-hover:text-jci-seafoam">
                                                    Explora esta área
                                                </span>
                                                <div
                                                    className="flex ml-3 items-center transform transition-transform duration-300 group-hover:translate-x-1"
                                                    aria-hidden="true"
                                                >
                                                    <HiOutlineArrowNarrowRight className="w-6 h-6 text-jci-black group-hover:text-jci-seafoam transition-colors duration-300" />
                                                </div>
                                            </div>
                                        </Link>
                                    </footer>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}