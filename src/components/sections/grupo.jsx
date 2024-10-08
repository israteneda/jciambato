"use client";

import Image from "next/image";

export default function Grupo() {
  return (
    <section>
      <div className="w-full h-full mx-auto my-20 max-w-8xl">
        <div className="relative flex flex-col-reverse lg:flex-row">
          {/* Contenedor de la imagen en la derecha para pantallas grandes y arriba para pantallas pequeñas */}
          <div className="w-full lg:w-1/2 bg-blue-100 order-2 lg:order-2">
            <Image
              src="/grupo.jpeg"
              alt="People having a conversation"
              width={700}
              height={500}
              className="justify-end w-full h-auto"
            />
          </div>

          {/* Superposición del bloque rojo sobre la imagen */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
            <div className="relative lg:absolute lg:top-10 lg:transform lg:translate-x-10 z-10">
              <p className="text-xs md:text-sm lg:text-md xl:text-sm font-bold mb-5 text-gray-600">
                GRUPO
              </p>
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-800">
                Somos la organización de líderes y emprendedores mas importante del centro del país
              </h2>
              <p className="m-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus dignissimos accusantium culpa eligendi?
                Repudiandae minus repellat eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
