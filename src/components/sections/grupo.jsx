"use client";

import Image from "next/image";

export default function Grupo() {
  return (
    <section className="container mx-auto p-6 my-20">
      {/* Contenedor de Texto e Imagen a la izquierda */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Texto */}
        <div className="text-left lg:pr-8">
          <h2 className="text-sm lg:text-sm font-bold mb-5 text-gray-600">
            GRUPO
          </h2>
          <h2 className="text-3xl font-bold mb-4">
            Organización mas Importante del Centro del País
          </h2>
          <p className="text-gray-700 mb-4">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </p>
        </div>

        {/* Imagen al lado del texto */}
        <div className="lg:col-span-1">
          <Image
            src="/grupo.jpeg"
            alt="People having a conversation"
            width={700}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
