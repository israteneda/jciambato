import Image from "next/image";

export default function Bienvenida() {
  return (
    <section className="fixed inset-0 w-full h-full md:p-20 flex items-center overflow-hidden box-border">
      <div className="hidden md:block absolute top-1/2 left-[30px] z-[3] text-gray-200 text-[11px] leading-[60px] tracking-[2px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
        ENFOCADOS EN EL DESARROLLO DE NUESTRA CIUDAD
      </div>

      <div className="relative z-10 bg-transparent max-w-6xl mx-8 md:mx-auto">
        <span className="text-medium leading-[1.85] not-italic uppercase text-gray-200 font-bold font-aeonik-bold tracking-normal">
          Sobre Nosotros
        </span>

        <div className="mt-8">
          <h1 className="text-gray-200 text-left font-bold leading-[1] max-w-[960px] text-3xl md:text-5xl">
            Creando el futuro de nuestra ciudad, juntos.
          </h1>

          <div className="mt-10">
            <p className="text-white text-left font-normal leading-[1.45] max-w-[568px] text-medium md:text-xl">
              We are a leading company in the execution of big projects in the metallic
              constructions sector, naval industry and energy. We integrate in our culture the
              values and commitments with our employees, partners and clients.
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
            <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
