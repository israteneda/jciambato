import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineCollection,
} from "react-icons/hi";
import { Divider } from "@heroui/divider";

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

  // Función para avanzar el slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Función para retroceder el slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <div className="relative w-full mx-auto">
      <Card className="w-full" radius="none" shadow="none">
        <CardBody className="p-0">
          <div className="relative h-[650px]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute w-full h-full duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Superposición oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                <div className="absolute top-0 m-16">
                  <div className="max-w-5xl mx-auto">
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-300 uppercase">
                      Proyectos Ganadores
                    </span>

                    <div className="my-8 text-gray-50">
                      <h2 className="font-semibold text-3xl lg:text-4xl">{item.title}</h2>
                      <div className="mt-5 text-2xl lg:text-3xl">
                        <p className="font-bold">{item.projectName}</p>
                        <p>{item.edition}</p>
                      </div>
                      <div className="my-8 text-gray-50">
                        <p className="text-xl">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 m-16">
                  <h3 className="text-cyan-600 text-md font-semibold">Ver Proyecto {"--->"}</h3>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <div className="absolute right-8 bottom-8 flex flex-col gap-16">
        <div className="flex flex-col items-center text-gray-50">
          <span className="text-3xl font-serif leading-3">{currentIndex + 1}</span>
          <Divider className="my-5 w-4 bg-gray-50" />
          <span className="text-3xl font-serif leading-3">{items.length}</span>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <Button isIconOnly variant="bordered" radius="full" onPress={prevSlide}>
              <HiChevronLeft className="w-6 h-6 text-gray-50" />
            </Button>

            <Button isIconOnly variant="bordered" radius="full" onPress={nextSlide}>
              <HiChevronRight className="w-6 h-6 text-gray-50" />
            </Button>
          </div>

          <Button
            isIconOnly
            variant="bordered"
            radius="full"
            className="bg-cyan-600 border-cyan-600"
          >
            <HiOutlineCollection className="w-6 h-6 text-gray-50" />
          </Button>
        </div>
      </div>
    </div>
  );
};
