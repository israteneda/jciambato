import Image from "next/image";

export default function Presentacion() {
    return (
        <section className="relative bg-transparent z-10 h-full overflow-hidden">
            <div className="block">

                {/* Información */}
                <div className="relative z-10 bg-white mx-auto w-2/3">
                    <div className="relative w-[1156px] py-[80px] px-[98px] pb-[120px]">
                        <div className="relative">
                            <div className="w-[862px]">
                                <p className="text-[13px] leading-[1.85] font-bold uppercase text-[rgb(152,152,152)] font-aeonik-bold">
                                    Get to know us better
                                </p>
                                <div className="mt-8">
                                    <h3 className="text-[48px] font-aeonik-bold font-bold leading-[1.33] text-black max-w-[862px] text-left sm:text-[calc(28.8px+1vw)]">
                                        Exceeding expectations, Martifer is a synonym of achievement, quality, trust and differentiation in the solutions and services it provides to its clients.
                                    </h3>

                                </div>

                                <div className="mt-20">
                                    <div className="font-aeonik-regular text-[18px] leading-[1.78] text-[rgb(50,50,50)] text-left columns-2 gap-[40px] sm:text-[calc(15.6px+0.125vw)]">
                                        We work daily to exceed our clients' expectations, meeting deadlines and presenting the best solutions for each project. To undertake this commitment, the motivation of our teams is to analyse each project critically and creatively, always oriented to the best solution. The personal and professional development of our employees is the way to reach the best solutions, surprising and surpassing all challenges with confidence and ambition.
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className="mt-40">
                            <div className="flex justify-end">
                                <div className="flex flex-wrap">
                                    <div className="mr-[120px]">
                                        <div className="font-aeonik-light text-[calc(44px+3.125vw)] sm:text-[104px] md:text-[104px] leading-none font-light text-[#db0029] tracking-[-5px]">
                                            <span>+43</span>
                                        </div>
                                        <div className="font-aeonik-regular text-[16px] sm:text-[calc(13.6px+0.125vw)] leading-[1.5] text-black text-left uppercase max-w-[180px]">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>

                                    <div className="mr-[120px]">
                                        <div className="font-aeonik-light text-[calc(44px+3.125vw)] sm:text-[104px] md:text-[104px] leading-none font-light text-[#db0029] tracking-[-5px]">
                                            <span>+43</span>
                                        </div>
                                        <div className="font-aeonik-regular text-[16px] sm:text-[calc(13.6px+0.125vw)] leading-[1.5] text-black text-left uppercase max-w-[180px]">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>

                                    <div className="mr-[120px]">
                                        <div className="font-aeonik-light text-[calc(44px+3.125vw)] sm:text-[104px] md:text-[104px] leading-none font-light text-[#db0029] tracking-[-5px]">
                                            <span>+43</span>
                                        </div>
                                        <div className="font-aeonik-regular text-[16px] sm:text-[calc(13.6px+0.125vw)] leading-[1.5] text-black text-left uppercase max-w-[180px]">
                                            <p className="mr-0"><strong>Years</strong> of proven experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute right-[100px] bottom-[35%] rotate-90 origin-bottom-right">
                            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative tracking-[2px] uppercase after:content-[''] after:absolute after:top-[6px] after:w-[160px] after:h-[1px] after:bg-[#aeaeae] after:right-[-170px]">
                                A fantastic year
                            </div>

                        </div>
                    </div>
                </div>

                {/* Fotografía */}
                <div className="relative bg-gray-50">
                    <div className="relative z-10 mx-auto w-2/3">
                        <div className="flex">

                            <div className="flex flex-grow-2 flex-shrink items-center justify-center relative mb-[-120px] translate-y-[-100px]">
                                <Image
                                    src="/images/icon-seta-down-big.svg"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="relative w-[100px] object-cover m-28"
                                />
                            </div>

                            <div className="relative overflow-hidden mb-[-120px]" style={{ width: "1182px", height: "664px" }}>
                                <div style={{ willChange: 'transform', transform: 'translateY(-14.2939%)' }}>
                                    <div className="relative w-full h-[664px]">
                                        <div className="relative bg-white w-full h-full overflow-hidden">
                                            <Image
                                                src={"/images/secciones/nosotros.webp"}
                                                width={1920}
                                                height={1080}
                                                alt="Texto alternativo"
                                                className="absolute inset-0 h-full w-full text-transparent  object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className=""></div>
        </section>

    );
}	