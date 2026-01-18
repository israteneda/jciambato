"use client";

import { Button } from "@heroui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      {/* <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}

      <div className="relative z-10 h-screen">
        <div className="flex h-full items-center">
          <div className="relative z-10 mx-8 max-w-6xl md:mx-auto">
            <div className="flex">
              <div className="relative">
                <div className="absolute left-6 top-20 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform md:block">
                  <div className="relative whitespace-nowrap text-[11px] font-medium uppercase not-italic leading-none tracking-[2px] text-[rgb(174,174,174)]">
                    Error
                    <span className="absolute left-[-170px] top-[6px] h-[1px] w-[160px] bg-[rgb(174,174,174)] content-['']"></span>
                  </div>
                </div>
              </div>

              <div className="relative md:ml-36">
                <div className="mt-20">
                  <h3 className="text-left text-4xl font-bold not-italic leading-[1.17] tracking-normal text-black md:max-w-[470px] md:text-5xl">
                    ¡Algo salió mal!
                  </h3>
                </div>

                <div className="mt-9 flex flex-col gap-2">
                  <div className="text-jci-gray max-w-[470px] text-left text-medium font-normal leading-[1.78] tracking-normal">
                    Ocurrio un error inesperado. Por favor, intenta nuevamente o contacta al
                    soporte.
                  </div>
                  <a href="mailto:tecnologias@jciambato.com" className="text-jci-teal underline">
                    tecnologias@jciambato.com
                  </a>
                </div>

                <div className="mt-8">
                  <Button
                    radius="none"
                    className="group relative overflow-hidden bg-jci-teal text-white"
                    aria-label="Más información sobre nosotros"
                    onPress={() => reset()}
                  >
                    <Link href="/">
                      <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-[#003D62] transition-transform duration-300 group-hover:translate-x-0"></span>
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
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
              Volver al inicio
            </Button>
          </Link>
          <Link href="/contacto" className="text-sm font-semibold leading-6 text-gray-900">
            Contactar soporte <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
