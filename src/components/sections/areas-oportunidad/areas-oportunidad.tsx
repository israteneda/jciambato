import Image from "next/image";
import Link from "next/link";
import { areasOportunidad } from "@/data/areas-oportunidad";

export default function AreasOportunidad() {
    return (
        <section className="relative bg-transparent">
            <div className="my-20">
                <div className="flex flex-col">
                    {areasOportunidad.map((area, index) => (
                        <div
                            key={area.id}
                            className={`relative ${index % 2 === 0
                                ? 'block md:flex flex-col md:flex-row justify-start'
                                : 'flex flex-col md:flex-row-reverse xl:flex-row justify-end'
                                }`}
                        >
                            {/* Imagen */}
                            <div className="relative w-full min-h-min h-[300px] md:w-1/2 md:h-auto xl:w-1/3 overflow-hidden md:min-h-[632px]">
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src={area.image}
                                        width={1920}
                                        height={1080}
                                        alt={area.title}
                                        className="absolute h-full w-full inset-0 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="relative w-full h-auto md:w-1/2 xl:w-1/3 overflow-hidden md:min-h-[632px] p-10 md:p-20 bg-white">
                                <div>
                                    <div className="mt-0">
                                        <h3 className="text-4xl not-italic text-left font-semibold leading-[1.17] tracking-normal max-w-[372px]">
                                            {area.title}
                                        </h3>
                                    </div>
                                    <div className="mt-5">
                                        <div className="text-md font-normal not-italic text-left leading-[1.78] tracking-normal text-jci-gray max-w-[372px]">
                                            {area.description}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    {/* <div className="text-[12px] font-semibold uppercase not-italic text-left leading-[1.78] tracking-[2px] text-jci-aqua">
                                        Leer más
                                    </div> */}

                                    <div className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]">
                                        {area.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="w-1/2">
                                                <div className="mx-[10px] py-[11px] border-t border-t-[#f5f5f5]">
                                                    <div className="text-[14px] text-jci-navy font-semibold not-italic leading-[1.78] tracking-normal text-jci-gray">
                                                        {feature}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/areas-oportunidad/${area.slug}`}
                                        className=""
                                    >
                                        <div className="relative block transition-all duration-400">
                                            <div className="flex pt-4 pb-0">
                                                <div className="z-[1] text-jci-black hover:text-jci-seafoam transition-all duration-300 leading-[1] text-[14px] relative not-italic tracking-normal font-medium">
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
                    ))}
                </div>
            </div>
        </section>
    );
}