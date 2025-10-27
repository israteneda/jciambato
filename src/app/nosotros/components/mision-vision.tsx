import Image from "next/image";

export default function MisionVision() {
  return (
    <section className="relative max-w-6xl mx-8 md:mx-20 lg:mx-auto">
      <div className="my-24 md:my-44">
        <div className="hidden md:block absolute top-[80px] left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
          <div
            className="relative text-[rgb(174,174,174)] leading-none text-[11px] font-medium not-italic tracking-[2px] whitespace-nowrap uppercase"
            aria-hidden="true"
          >
            Nuestro Propósito
            <span className="absolute top-[6px] left-[-170px] w-[160px] h-[1px] bg-[rgb(174,174,174)] content-['']"></span>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="flex flex-col md:flex-row justify-between w-full md:mr-48">
            <header className="md:max-w-md">
              <div className="mt-20">
                <h2 className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black">
                  Nuestra Misión <br /> y Visión
                </h2>
              </div>
              <div className="mt-8">
                <div className="flex flex-col gap-3 text-left text-base leading-[1.78] text-gray-700">
                  <p>
                    Crear oportunidades de desarrollo para que jóvenes se conviertan en agentes de
                    cambio positivo
                  </p>
                  <p>Ser la red de liderazgo juvenil más reconocida y transformadora del mundo.</p>
                </div>
              </div>
            </header>

            <div className="flex justify-center items-center">
              {/*  */}
              <figure className="mt-24 md:mt-0 w-[220px] h-[220px] md:w-[350px] md:h-[350px]">
                <Image
                  src="/icons/eye.svg"
                  alt="Icono representativo de misión y visión"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
