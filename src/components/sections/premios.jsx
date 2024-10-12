import Image from "next/image";

export default function Grupo() {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/lideralider2.jpeg"
        alt="Grupo JCI Ambato Lider a Lider 2024"
        fill
        className="object-cover"
        priority
      />

      {/* Capa de oscuridad */}
      <div className="absolute inset-0 bg-black opacity-60 z-20" />

      {/* Contenedor de Información */}
      <div className="mx-auto max-w-7xl px-9 lg:px-20">
        <div className="relative z-30 lg:w-3/5 my-12">
          <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-300 uppercase">
            En Ambato
          </span>

          <div className="my-8 text-gray-50">
            <h2 className="font-semibold text-3xl lg:text-4xl">
              Mejor Proyecto Comunitario:
            </h2>
            <div className="mt-5 text-2xl lg:text-3xl">
              <p className="font-bold">Lider a Lider 2024</p>
              <p>2da Edición</p>
            </div>
          </div>

          <p className="text-sm lg:text-base mt-16 mb-4 text-gray-300">
            JCI Ambato desarrolló la 2da edición del proyecto Lider a Lider que
            permitió incorporar a 13 nuevos miembros, quienes desarrollaron
            habilidades de liderazgo y emprendimiento.
          </p>

          <div className="mt-10 text-gray-300">
            Sobre este proyecto {"--->"}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
