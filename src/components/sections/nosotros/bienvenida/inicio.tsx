import Image from "next/image";

export default function Bienvenida() {

  return (
    <section className="fixed inset-0 w-full h-[760px] pb-20 flex items-center overflow-hidden box-border">

      <div className="absolute top-1/2 left-[30px] z-[3] text-jci-black text-[11px] leading-[60px] tracking-[2px] uppercase transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
        ENFOCADOS EN EL DESARROLLO DE NUESTRA CIUDAD
      </div>

      <div className="relative z-[3] bg-transparent w-[1156px] mx-auto">
        <span className="text-[13px] leading-[1.85] not-italic uppercase text-[rgb(152,152,152)] font-bold font-aeonik-bold tracking-normal">
          Sobre Nosotros
        </span>

        <div className="mt-8">
          <h1
            className="text-black text-left font-bold leading-[1] max-w-[960px] text-5xl"
          >
            Creando el futuro de nuestra ciudad, juntos.
          </h1>

          <div className="mt-10">
            <p
              className="text-white text-left font-normal leading-[1.45] max-w-[568px] md:text-xl"
            >
              We are a leading company in the execution of big projects in the metallic constructions sector, naval industry and energy. We integrate in our culture the values and commitments with our employees, partners and clients.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="relative bg-white w-full h-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full text-transparent">
            <Image
              src="/images/secciones/nosotros.webp"
              width={1920}
              height={1080}
              alt="Texto alternativo"
              className="w-full h-[760px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
