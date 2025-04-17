import React from "react";
import { Button } from "@heroui/button";
import { HiChevronLeft, HiChevronRight, HiOutlineCollection, HiArrowNarrowRight } from "react-icons/hi";

interface CarouselProps {
    items: {
        id: number;
        title: string;
        projectName: string;
        edition: string;
        description: string;
        image: string;
    }[];
    autoPlayInterval?: number;
}

export const Carousel = ({ items, autoPlayInterval = 5000 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    React.useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval]);

    return (
        <div className="relative bg-[#f5f5f5] z-10 overflow-hidden">
            <div className="relative h-[760px] w-full">
                <div className="z-30 w-full h-full pt-24 relative pb-[46px]">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}

                        >
                            {/* Imagen de fondo */}
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover absolute inset-0" />
                            {/* Capa oscura */}
                            <div className="absolute inset-0 bg-black bg-opacity-60" />

                            {/* Contenido del Slide */}
                            <div className="relative z-30 w-full h-full pt-24 pb-[46px]">
                                <div className="relative z-10 h-full w-[1352px] md:w-[1156px] mx-auto">
                                    {/* Texto y botón */}
                                    <div>
                                        <div className="text-[13px] leading-[1.85] uppercase text-white font-bold">
                                            Lider A Lider
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-[48px] font-light text-left leading-[1.17] text-white max-w-[666px] md:text-[calc(28.8px+1vw)]">
                                                <p>{item.title} <strong>{item.projectName}</strong></p>
                                            </h3>
                                        </div>
                                        <div className="mt-20">
                                            <div className="text-[18px] leading-[1.78] text-white text-left max-w-[470px] md:text-[calc(15.6px+0.125vw)]">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botón "Ver Proyecto" */}
                                    <div className="absolute left-0 bottom-0">
                                        <div className="relative inline-block transition duration-400">
                                            <div className="flex py-4">
                                                <Button
                                                    className="bg-transparent text-white text-[14px] font-medium"
                                                    endContent={<HiArrowNarrowRight className="h-5 w-5" />}
                                                >
                                                    Ver Proyecto
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicadores numéricos */}
            <div className="absolute top-1/2 right-[54px] w-[22px] flex items-center flex-col transform -translate-y-1/2 z-50">
                <div className="text-white text-[48px] font-normal">
                    {String(currentIndex + 1).padStart(2, "0")}
                </div>
                <div className="opacity-50 text-white text-[48px] mt-2 pt-2 border-t border-white">
                    {String(items.length).padStart(2, "0")}
                </div>
            </div>

            {/* Botones de navegación */}
            <div className="absolute right-[45px] bottom-[112px] flex flex-col z-50">
                <Button
                    isIconOnly
                    variant="bordered"
                    radius="full"
                    className="w-[40px] h-[40px] text-[#989898] border-[#989898]"
                    onPress={prevSlide}
                >
                    <HiChevronLeft className="w-6 h-6 text-gray-50" />
                </Button>
                <div className="h-[12px]" />
                <Button
                    isIconOnly
                    variant="bordered"
                    radius="full"
                    className="w-[40px] h-[40px] text-[#989898] border-[#989898]"
                    onPress={nextSlide}
                >
                    <HiChevronRight className="w-6 h-6 text-gray-50" />
                </Button>
            </div>

            {/* Botón colección */}
            <div className="absolute right-[45px] bottom-[48px] z-50">
                <Button
                    isIconOnly
                    variant="bordered"
                    radius="full"
                    className="w-[40px] h-[40px] bg-[#db0029] text-[#5f0012] text-[14px]"
                >
                    <HiOutlineCollection className="w-6 h-6 text-gray-50" />
                </Button>
            </div>
        </div>
    );
};
