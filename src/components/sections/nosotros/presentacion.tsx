import Image from "next/image";

export default function Presentacion() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col justify-center">
                {/* Información */}
                <div className=" mx-auto w-full md:w-2/3 bg-gray-50 md:bg-white">
                    <div className="relative mx-auto md:max-w-6xl py-20 px-8 md:px-24 pb-[120px]">
                        <div className="relative">
                            <div className="">
                                <p className="text-xs leading-[1.85] font-bold uppercase text-jci-gray">
                                    Get to know us better
                                </p>
                                <div className="mt-8">
                                    <h3 className="text-3xl md:text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                                        Exceeding expectations, Martifer is a synonym of achievement, quality, trust and differentiation in the solutions and services it provides to its clients.
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
                                            <span>+43</span>
                                        </div>
                                        <div className="md:text-medium text-black text-left uppercase max-w-44">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>

                                    <div className="mr-20">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <span>+43</span>
                                        </div>
                                        <div className="md:text-medium text-black text-left uppercase max-w-44">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>

                                    <div className="mr-20">
                                        <div className="text-7xl md:text-8xl leading-none font-light text-jci-aqua">
                                            <span>+43</span>
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
                <div className="relative z-10 mx-0 md:mx-auto md:w-2/3">
                    <div className="flex justify-between">
                        <div className="hidden md:flex flex-grow-2 flex-shrink items-center justify-center">
                            <Image
                                src="/images/icon-seta-down-big.svg"
                                alt=""
                                width={500}
                                height={500}
                                className="relative w-[200px] object-cover m-24"
                            />
                        </div>

                        <div className="relative overflow-hidden max-w-6xl max-h-[470px] w-full md:w-[1182px] md:h-[470px]">
                        <div style={{ willChange: 'transform', transform: 'translateY(-14.2939%)' }}>
                                <div className="relative w-full h-[664px]">
                                    <div className="relative bg-white w-full h-full overflow-hidden">
                                        <Image
                                            src={"/images/secciones/nosotros.webp"}
                                            width={1920}
                                            height={1080}
                                            alt="Texto alternativo"
                                            className="absolute inset-0 h-full w-full text-transparent object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}	