"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="relative z-10 h-screen">
        <div className="flex h-full items-center">
          <div className="relative z-10 mx-8 max-w-6xl md:mx-auto">
            <div className="flex">
              <div className="relative">
                <div className="absolute top-20 left-6 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform md:block">
                  <div className="text-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase not-italic">
                    Error
                    <span className="bg-jci-gray absolute top-1.5 -left-42.5 h-px w-40 content-['']"></span>
                  </div>
                </div>
              </div>

              <div className="relative md:ml-36">
                <div className="mt-20">
                  <h3 className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:max-w-117.5 md:text-5xl">
                    ¡Algo salió mal!
                  </h3>
                </div>

                <div className="mt-9 flex flex-col gap-2">
                  <div className="text-jci-navy text-medium max-w-117.5 text-left leading-[1.78] font-normal tracking-normal">
                    Ocurrio un error inesperado. Por favor, intenta nuevamente o contacta al
                    soporte.
                  </div>
                  <a href="mailto:tecnologias@jciambato.com" className="text-jci-teal underline">
                    tecnologias@jciambato.com
                  </a>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-jci-blue hover:bg-jci-blue group relative overflow-hidden text-white"
                    aria-label="Más información sobre nosotros"
                  >
                    <Link href="/">
                      <span className="bg-jci-black absolute inset-0 h-full w-full -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0"></span>
                      <span className="relative z-10">Volver al inicio</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          500 - Error inesperado
        </h1>
        <p className="text-jci-gray mt-6 max-w-2xl text-lg leading-8">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
              Volver al inicio
            </Button>
          </Link>
          <Link href="/contacto" className="text-jci-gray text-sm leading-6 font-semibold">
            Contactar soporte <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
