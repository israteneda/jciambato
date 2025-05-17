"use client";

import Image from "next/image";

interface Aliado {
  alt: string;
  src: string;
}

const aliados: Aliado[] = [
  {
    alt: "Logo UTI",
    src: "/aliados/logo-UTI.webp",
  },
  {
    alt: "Logo UTA",
    src: "/aliados/logo-UTA.webp",
  },
  {
    alt: "Logo Rompiendo Barreras",
    src: "/aliados/logo-RB.png",
  },
  {
    alt: "Logo MAGAP",
    src: "/aliados/logo-MAGAP.png",
  },
];

export default function Aliados() {
  return (
    <section className="py-12">
      {/* Título de la Sección */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2 className="font-display tracking-tight text-3xl font-medium sm:text-4xl text-neutral-950">
              Aliados Estratégicos
            </h2>
          </div>
        </div>
      </div>

      {/* Contenido de la Sección */}
      <div className="mx-auto w-full px-3 lg:px-6 mt-8">
        <div className="flex w-full justify-center">
          <div className="flex w-max items-center space-x-16">
            {aliados.map((aliado, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white"
              >
                <Image
                  alt={aliado.alt}
                  className="object-contain"
                  height={50}
                  src={aliado.src}
                  width={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
