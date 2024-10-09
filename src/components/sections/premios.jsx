import Image from "next/image";

export default function Grupo() {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        /* src="/group.jpg" */
        src="/lideralider2.jpeg"
        alt="Grupo JCI Ambato Lider a Lider 2024"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Capa de oscuridad */}
      <div className="absolute inset-0 bg-black opacity-60 z-20" />

      {/* Contenedor de Información */}
      <div className="relative z-30 flex items-start h-full p-8 md:p-16 lg:p-20">
        <div className="text-left max-w-xl">
          <h2 className="text-xs font-bold mb-5 text-gray-300">
            PROYECTO GANADOR
          </h2>

          <h1 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-50">
            Mejor Proyecto Comunitario:
          </h1>

          <div className="text-2xl lg:text-3xl mb-5 text-gray-50">
            <span className="font-bold">Lider a Lider 2024</span> <br />
            <span> 2da Edición</span>
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
