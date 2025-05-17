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

    interface Logo {
      alt: string;
      src: string;
    }

    interface Container extends HTMLDivElement {
      scrollLeft: number;
      scrollWidth: number;
    }

    const animateLogos = (container: Container, direction: number): number => {
      let scrollAmount = 0;

      const scroll = (): void => {
        scrollAmount += direction;
        container.scrollLeft = scrollAmount;

        if (direction > 0 && scrollAmount > container.scrollWidth / 2) {
          scrollAmount = 0;
        } else if (direction < 0 && scrollAmount < 0) {
          scrollAmount = container.scrollWidth / 2;
        }

        requestAnimationFrame(scroll);
      };

      return requestAnimationFrame(scroll);
    };

    const animationId1 = animateLogos(container1, 1); // Izquierda a derecha
    const animationId2 = animateLogos(container2, -1); // Derecha a izquierda

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
          className="h-auto"
          height={48}
          src={logo.src}
          width={158}
        />
      ));
  };

  return (
    <>
      {/* Titulo de la Seccion*/}
      <div className="mx-auto max-w-7xl px-6 bg-red-100">
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
      <div className="mx-auto w-full  px-3 lg:px-6">
        <div className="flex w-full justify-center overflow-x-hidden">
          <div className="flex w-max items-center space-x-16">
            <div className="flex-shrink-0 w-48 h-24 m-10 flex items-center justify-between">
              <Image
                alt="Logo UTI"
                className="object-contain"
                height={50}
                src="/aliados/logo-UTI.webp"
                width={200}
              />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white">
              <Image
                alt="Logo UTA"
                className="object-contain"
                height={50}
                src="/aliados/logo-UTA.webp"
                width={200}
              />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white">
              <Image
                alt="Logo Rompiendo Barreras"
                className="object-contain"
                height={50}
                src="/aliados/logo-RB.png"
                width={200}
              />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white">
              <Image
                alt="Logo MAGAP"
                className="object-contain"
                height={50}
                src="/aliados/logo-MAGAP.png"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* 
<div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mt-3">

<div className="flex flex-col justify-center items-center mx-auto max-w-6xl py-10">

  <div
    ref={containerRef1}
    className="flex w-full overflow-x-hidden py-4 whitespace-nowrap"
  >
    <div className="flex w-max items-stretch gap-8">
      {renderLogos()}
    </div>
  </div>

  <div
    ref={containerRef2}
    className="flex w-full overflow-x-hidden py-4 whitespace-nowrap"
  >
    <div className="flex w-max items-stretch gap-8">
      {renderLogos()}
    </div>
  </div>
</div>
</div> */
