import Image from "next/image";

export default function Grupo() {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/group.jpg"
        alt="Imagen de premios"
        layout="fill"
        objectFit="cover"
        aria-label="Imagen de premios"
        priority
      />

      {/* Capa de oscuridad para el video */}
      <div className="absolute inset-0 bg-black opacity-50 z-20" />

      {/* Contenedor de Información */}
      {/* <div className="relative z-30 flex items-start h-full"> */}
      <div className="relative z-30 flex items-start h-full p-8 md:p-16 lg:p-20">
        <div className="text-left max-w-xl">
          <h2 className="text-xs font-bold mb-5 text-gray-300">
            PROYECTO GANADOR
          </h2>

          <h1 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-50">
            Mejor Proyecto Comunitario:
          </h1>

          <div className="text-2xl lg:text-3xl mb-5 text-gray-50">
            <div className="font-bold">Lider a Lider 2024</div>
            2da Edición
          </div>

          <p className="text-sm lg:text-base mt-16 mb-4 text-gray-300">
            JCI Ambato desarrolló la 2da edición del proyecto Lider a Lider que
            permitio incorporar a 13 nuevos miembros junto a los que
            desarrollaron habilidades de liderazgo y emprendimiento
          </p>

          <div className="mt-10 text-gray-300">
            Sobre este proyecto {"--->"}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
