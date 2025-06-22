import { AreaOportunidad } from "@/data/areas-oportunidad";
import { FaFilePdf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';

// Datos de ejemplo para las imágenes del Swiper
const construccionImages = [
    {
        id: 1,
        src: "/images/areas_oportunidad/area.webp",
        alt: "Construcción en progreso",
        title: "Proyecto en desarrollo"
    },
    {
        id: 2,
        src: "/images/secciones/actividades.webp",
        alt: "Obra civil",
        title: "Infraestructura"
    },
    {
        id: 3,
        src: "/images/secciones/proyectos.webp",
        alt: "Construcción avanzada",
        title: "Proyecto finalizado"
    },
    {
        id: 4,
        src: "/images/secciones/miembros.webp",
        alt: "Equipo de trabajo",
        title: "Trabajo en equipo"
    }
];

export default function Construccion({ area }: { area: AreaOportunidad }) {
    return (
        <section className="relative z-[1] py-20 md:py-44">
            {/* --- Contenedor Principal --- */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Caja Roja del Brochure (Superpuesta) --- */}
                <div className="relative md:absolute top-0 left-8 md:-translate-y-1/2 z-10 w-full md:w-1/2 lg:w-5/12">
                    <div className="p-8 bg-jci-navy">
                        <div className="flex justify-between items-start">
                            <div className="w-full">
                                <div className="text-white text-sm font-bold flex flex-wrap gap-x-2">
                                    <span>{area.title}</span>
                                    <span>14.02.2025</span>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-3xl font-bold text-white leading-tight">
                                        Lo que estamos construyendo
                                    </h3>
                                </div>

                                <div className="mt-4">
                                    <a href="#" className="text-white font-semibold text-sm inline-flex items-center gap-2 hover:underline">
                                        Descargar PDF
                                        <span className="opacity-75">3.9 MB</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                                <FaFilePdf className="text-white text-4xl opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Contenedor del Swiper (Debajo de la caja en el flujo) --- */}
                <div className="relative mt-16 md:mt-0 pt-0 md:pt-24">
                    {/* Swiper con imágenes */}
                    <div className="w-full overflow-hidden">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={"auto"}
                            navigation={{
                                nextEl: ".construccion-next",
                                prevEl: ".construccion-prev",
                            }}
                            grabCursor={true}
                            className="!overflow-visible"
                        >
                            {construccionImages.map((item) => (
                                <SwiperSlide key={item.id} style={{ width: "400px" }}>
                                    <div className="w-full group">
                                        <div className="w-full h-[300px] overflow-hidden bg-gray-200">
                                            <div className="relative w-full h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-[18px] font-bold text-left text-gray-800">
                                                {item.title}
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Controles de navegación */}
                    <div className="hidden md:flex justify-between items-center mt-8">
                        <div className="flex items-center gap-4">
                            <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">
                                Desliza para ver más
                            </div>
                            <div className="w-16 h-px bg-gray-300"></div>
                        </div>

                        <div className="flex space-x-4">
                            <button className="construccion-prev p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                                <Image
                                    src="/icons/arrow-down.svg"
                                    alt="Anterior"
                                    width={20}
                                    height={20}
                                    className="rotate-90"
                                />
                            </button>

                            <button className="construccion-next p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                                <Image
                                    src="/icons/arrow-down.svg"
                                    alt="Siguiente"
                                    width={20}
                                    height={20}
                                    className="-rotate-90"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}