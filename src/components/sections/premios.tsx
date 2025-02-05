"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const premios = [
  {
    id: 1,
    title: "Mejor Programa de Crecimiento y Desarrollo Local:",
    projectName: "Lider a Lider 2024",
    edition: "2da Edición",
    description:
      "JCI Ambato desarrolló la 2da edición del proyecto Lider a Lider que permitió incorporar a 13 nuevos miembros, quienes desarrollaron habilidades de liderazgo y emprendimiento.",
    image: "/lideralider2.jpeg",
  },
  {
    id: 2,
    title: "Premio Innovación Social:",
    projectName: "Iniciativa Verde 2023",
    edition: "1ra Edición",
    description:
      "Premio otorgado por la implementación de prácticas sostenibles en la comunidad.",
    image: "/grupo.jpeg",
  },
  // Agrega más premios aquí...
];

export default function Grupo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen cada 5 segundos
  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); */

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + premios.length) % premios.length
    );
  };

  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Imagen de fondo */}
      {/* <Image
        src={premios[currentIndex].image}
        alt={`Premio ${premios[currentIndex].projectName}`}
        fill
        className="object-cover"
        priority
      /> */}

      {/* Capa de oscuridad */}
      <div className="absolute inset-0 h-full bg-black opacity-60 z-20" />

      {/* Contenedor de Información */}
      <div className="relative z-30 h-auto max-w-7xl px-9 my-12 lg:px-20 flex flex-col lg:flex-row">
        {/* Contenedor de Texto */}
        <div className="lg:w-4/5 bg-red-500">
          <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-300 uppercase">
            Proyectos Ganadores
          </span>

          <div className="my-8 text-gray-50">
            <h2 className="font-semibold text-3xl lg:text-4xl">
              {premios[currentIndex].title}
            </h2>
            <div className="mt-5 text-2xl lg:text-3xl">
              <p className="font-bold">{premios[currentIndex].projectName}</p>
              <p>{premios[currentIndex].edition}</p>
            </div>
          </div>

          <p className="text-sm lg:text-base mt-16 mb-4 text-gray-300">
            {premios[currentIndex].description}
          </p>

          <div className="mt-10 text-gray-300">
            Sobre este proyecto {"--->"}{" "}
          </div>
        </div>

        {/* Contenedor de Botones y Número de Imagen */}
        <div className="lg:w-2/5 flex flex-col justify-center items-end space-y-4 bg-blue-500">
          <div className="text-gray-300">
            {currentIndex + 1} | {premios.length}
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={nextImage}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300"
            >
              <HiOutlineChevronRight className="text-gray-300" />
            </button>

            <button
              onClick={prevImage}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300"
            >
              <HiOutlineChevronLeft className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
