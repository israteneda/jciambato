"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Aliados() {
  // Logos
  const logos = [
    {
      alt: "Transistor",
      src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
    },
    {
      alt: "Reform",
      src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
    },
    {
      alt: "Tuple",
      src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
    },
    {
      alt: "SavvyCal",
      src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
    },
    {
      alt: "Statamic",
      src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
    },
  ];

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const container1 = containerRef1.current;
    const container2 = containerRef2.current;

    if (!container1 || !container2) return;

    const animateLogos = (container, direction) => {
      let scrollAmount = 0;

      const scroll = () => {
        scrollAmount += direction;
        container.scrollLeft = scrollAmount;

        if (direction > 0 && scrollAmount > container.scrollWidth / 2) {
          scrollAmount = 0;
        } else if (direction < 0 && scrollAmount < 0) {
          scrollAmount = container.scrollWidth / 2;
        }

        requestAnimationFrame(scroll);
      };

      scroll();
    };

    let animationId1 = animateLogos(container1, 1); // Izquierda a derecha
    let animationId2 = animateLogos(container2, -1); // Derecha a izquierda

    return () => {
      cancelAnimationFrame(animationId1);
      cancelAnimationFrame(animationId2);
    };
  }, []);

  const renderLogos = () => {
    return logos
      .concat(logos)
      .map((logo, index) => (
        <Image
          key={index}
          alt={logo.alt}
          src={logo.src}
          width={158}
          height={48}
          className="h-auto"
        />
      ));
  };

  return (
    <>
      {/* Titulo de la Seccion*/}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:mt-20 lg:mt-30">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="font-display tracking-tight text-3xl font-medium sm:text-4xl text-neutral-950">
              Aliados Estratégicos
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Contenido de la Sección */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mt-3">

        {/* Contenedor */}
        <div className="flex flex-col justify-center items-center mx-auto max-w-6xl py-10">
          {/* Contenedor de logos (izquierda a derecha) */}
          <div
            ref={containerRef1}
            className="flex w-full overflow-x-hidden py-4 whitespace-nowrap"
          >
            <div className="flex w-max items-stretch gap-8">
              {renderLogos()}
            </div>
          </div>

          {/* Contenedor de logos (derecha a izquierda) */}
          <div
            ref={containerRef2}
            className="flex w-full overflow-x-hidden py-4 whitespace-nowrap"
          >
            <div className="flex w-max items-stretch gap-8">
              {renderLogos()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
