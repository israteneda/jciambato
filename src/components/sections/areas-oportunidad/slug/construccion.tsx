"use client";

import { AreaOportunidad } from "@/data/areas-oportunidad";
import { FaFilePdf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState, useRef } from "react";

import 'swiper/css';
import 'swiper/css/navigation';

export default function Construccion({ area }: { area: AreaOportunidad }) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = area.images?.length || 0;
    const swiperRef = useRef<{ swiper: SwiperType }>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(swiper.activeIndex + 1);
    };

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <section className="relative z-[1] overflow-hidden">
            <div>
                {/*Caja Roja del Brochure*/}
                <div className="relative z-20">
                    <div className="relative z-10 max-w-6xl m-8 md:mx-auto">
                        <div className="p-4 md:p-10 bg-jci-navy z-30 md:translate-y-1/2 md:max-w-[50%] box-border flex">
                            <div className="w-full">
                                <div className="text-white text-xs md:text-sm font-bold flex flex-wrap gap-x-2">
                                    <span>Brochure</span>
                                    <span>14.02.2025</span>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                                        {area.title}
                                    </h3>
                                </div>

                                <div className="mt-4">
                                    <a href="#" className="text-xs md:text-sm text-white font-semibold inline-flex items-center gap-2 hover:underline">
                                        Descargar PDF
                                        <span className="opacity-75">3.9 MB</span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-center pl-16">
                                <FaFilePdf className="text-white text-4xl opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenedor del Swiper*/}
                <section className="relative z-10 bg-transparent">
                    {/* Swiper con imágenes */}
                    <div className="select-none">
                        <div className="cursor-none">
                            <div className="relative z-10 bg-transparent max-w-4xl mx-auto px-8 md:px-0">
                                <Swiper
                                    ref={swiperRef}
                                    modules={[Navigation]}
                                    spaceBetween={0}
                                    slidesPerView={"auto"}
                                    grabCursor={true}
                                    className="!overflow-visible"
                                    onSlideChange={handleSlideChange}
                                >
                                    {area.images?.map((item, index) => (
                                        <SwiperSlide key={`${item.src}-${index}`}>
                                            <div className="w-full group">
                                                <div className="w-full h-96 md:h-[650px] overflow-hidden bg-gray-200">
                                                    <div className="relative w-full h-full overflow-hidden">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.alt}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* Controles de navegación */}
                    <div className="relative z-10 bg-transparent max-w-3xl mx-8 md:mx-auto px-4 md:px-0">
                        <div className="flex justify-between items-center mt-2">

                            {/* Contador */}
                            <div className="inline-flex flex-col -rotate-90 pointer-events-none">
                                <div className="text-2xl md:text-4xl text-jci-black py-1 md:py-2 inline-block border-b border-jci-black">
                                    {currentSlide.toString().padStart(2, '0')}
                                </div>

                                <div className="text-2xl md:text-4xl text-jci-black py-1 md:py-2 inline-block">
                                    {totalSlides.toString().padStart(2, '0')}
                                </div>
                            </div>


                            {/* Mensaje de Accion */}
                            {/* <div className="flex items-center">
                                <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gray font-bold tracking-normal">
                                    Arrastra para mover
                                </div>
                                <div className="w-[60px] h-px overflow-hidden ml-[32px] relative bg-[rgb(204,204,204)]">
                                    <span className="absolute top-0 left-0 w-[60px] h-px bg-jci-aqua animate-loop" aria-hidden="true" />
                                </div>
                            </div> */}

                            {/* Navegación */}
                            <nav className="flex space-x-4 md:space-x-8 items-center" aria-label="Navegación del carrusel">
                                <button
                                    type="button"
                                    onClick={handlePrevClick}
                                    className="p-1 md:p-2"
                                    aria-label="Imagen anterior"
                                >
                                    <Image
                                        src="/icons/arrow-down.svg"
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="relative w-[16px] md:w-[24px] rotate-90 object-cover transition-transform duration-300 hover:scale-110"
                                        aria-hidden="true"
                                    />
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNextClick}
                                    className="p-1 md:p-2"
                                    aria-label="Imagen siguiente"
                                >
                                    <Image
                                        src="/icons/arrow-down.svg"
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="relative w-[16px] md:w-[24px] -rotate-90 object-cover transition-transform duration-300 hover:scale-110"
                                        aria-hidden="true"
                                    />
                                </button>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}