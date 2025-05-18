import Image from "next/image";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 flex box-border items-center overflow-hidden w-full h-[760px] pb-[80px]">
      <div className="hidden xl:block absolute top-1/2 left-[30px] text-[10.5px] font-semibold z-[3] text-gray-200 leading-[60px] tracking-[2px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
        ENFOCADOS EN EL DESARROLLO DE NUESTRA CIUDAD
      </div>

      <div className="relative z-10 bg-transparent w-[1156px] mx-8 xl:mx-auto">
        <span className="text-sm leading-[1.85] not-italic uppercase text-gray-200 font-bold tracking-normal lg:text-base">
          Sobre Nosotros
        </span>

        <div className="mt-8">
          <h1
            className="text-gray-200 text-left font-bold leading-[1] max-w-xl text-3xl md:text-5xl"
          >
            Creando el futuro de nuestra ciudad, juntos.
          </h1>

          <div className="mt-10">
            <p
              className="text-white text-left font-normal leading-[1.45] max-w-2xl text-medium md:text-xl"
            >
              We are a leading organization in the development of our city, focused on creating a better future for all. Our mission is to empower young people to take action and make a difference in their communities. We believe that together we can create a positive impact and build a better world.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="relative bg-white w-full h-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full text-transparent">
            <Image
              src="/images/secciones/nosotros2.webp"
              width={1920}
              height={1080}
              alt="Texto alternativo"
              className="w-full h-[760px] object-cover"
            />
            {/* Fondo Oscuro */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
