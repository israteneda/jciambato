"use client";

import { Button } from "@nextui-org/react";
import TextoFondo from "../commons/TextoFondo";

export default function Presentacion() {
  return (
    <div>
      <section className="relative w-full h-[75vh] overflow-hidden">
        {/* Contenedor principal de los elementos sobre el video */}
        <div className="relative z-30 flex items-center justify-start h-full px-4 md:px-8 lg:px-24">
          {/* Contenedor de información - Se ajusta al tamaño de la pantalla */}
          <div className="max-w-4xl mx-5 lg:mx-10 text-left p-4 lg:p-8 leading-loose">
            <h2 className="text-xs md:text-sm lg:text-md xl:text-sm font-bold mb-4 text-gray-600">
              GRUPO
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-5xl font-light mb-16 text-cyan-600">
              JCI Ambato ha liderado el desarrollo de liderazgo durante más de
              cincuenta años, destacándose por sus proyectos de impacto que han
              cultivado una nueva generación de líderes en la comunidad.
            </h1>
            <Button
              variant="bordered"
              className="text-cyan-800 border-cyan-600"
            >
              Nuestra misión y visión
            </Button>
          </div>
        </div>
      </section>

      <TextoFondo />
    </div>
  );
}

{
  /* Texto de fondo con alineación y posiciones ajustadas */
}
{
  /* <div className="absolute inset-0 flex flex-col justify-center overflow-hidden leading-snug">
          <h1 className="text-[11vw] font-bold text-gray-300 opacity-30 transform translate-x-[10vw] text-right">
            JCI AMBATO
          </h1>
          <h1 className="text-[11vw] font-bold text-gray-300 opacity-30 transform -translate-x-[20vw] text-left">
            JUNIOR CHAMBER
          </h1>
        </div> */
}
