import Image from "next/image";

export default function Presentacion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center items-center">
                {/* Información */}
                <div className="w-full flex justify-center">
                    <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-24 pb-36 bg-white">
                        <div className="relative">
                            <div className="">
                                <p className="text-xs leading-[1.85] font-bold uppercase text-jci-gray">
                                    Get to know us better
                                </p>
                                <div className="mt-8">
                                    <h3 className="text-3xl md:text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                                        Exceeding expectations, JCI Ambato is a team of professionals with extensive experience in the field of engineering and architecture.
                                    </h3>
                                </div>

                                <div className="mt-20">
                                    <div className="text-medium leading-loose text-jci-off-black text-left columns-1 md:columns-2 gap-10">
                                        We work daily to exceed our clients' expectations, meeting deadlines and presenting the best solutions for each project. To undertake this commitment, the motivation of our teams is to analyse each project critically and creatively, always oriented to the best solution. The personal and professional development of our employees is the way to reach the best solutions, surprising and surpassing all challenges with confidence and ambition.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 md:mt-40">
                            <div className="flex justify-end">
                                <div className="flex flex-wrap gap-8 md:gap-0">
                                    <div className="mr-20">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <span>+20</span>
                                        </div>
                                        <div className="md:text-medium text-black text-left uppercase max-w-44">
                                            <p className="mr-0"><strong>Members</strong> of proven experience</p>
                                        </div>
                                    </div>

                                    <div className="mr-20">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <span>+50</span>
                                        </div>
                                        <div className="md:text-medium text-black text-left uppercase max-w-44">
                                            <p className="mr-0"><strong>Years</strong> of the city</p>
                                        </div>
                                    </div>

                                    <div className="mr-20">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <span>+10</span>
                                        </div>
                                        <div className="md:text-medium text-black text-left uppercase max-w-44">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block absolute right-[50px] bottom-[25%] rotate-90 origin-bottom-right">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[-170px]">
                                A fantastic year
                            </div>

                        </div>
                    </div>
                </div>

                {/* Fotografía */}
                <div className="w-full px-0">
                    <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-8 md:gap-12 bg-white">

                        {/* Flecha solo visible en pantallas grandes */}
                        <div className="hidden md:flex justify-center items-center flex-shrink-0">
                            <Image
                                src="/icons/arrow-down.svg"
                                alt="Flecha decorativa"
                                width={120}
                                height={120}
                                className="object-contain w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                            />
                        </div>

                        {/* Imagen principal */}
                        <div className="w-full md:w-auto md:flex-1 h-auto max-h-[470px] relative overflow-hidden">
                            <Image
                                src="/images/secciones/miembros.webp"
                                alt="Nosotros"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}	