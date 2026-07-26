import Image from "next/image";

export default function MisionVision() {
  return (
    <section className="relative mx-8 max-w-6xl md:mx-20 lg:mx-auto">
      <div className="my-24 md:my-44">
        <div className="absolute top-[80px] left-0 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 transform md:block">
          <div
            className="relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap text-jci-gray uppercase not-italic"
            aria-hidden="true"
          >
            Nuestro Propósito
            <span className="absolute top-1.5 left-[-170px] h-px w-40 bg-jci-gray content-['']"></span>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="flex w-full flex-col justify-between md:mr-48 md:flex-row">
            <header className="md:max-w-md">
              <div className="mt-20">
                <h2 className="text-left text-4xl leading-[1.17] font-bold tracking-normal text-jci-black not-italic md:text-5xl">
                  Nuestra Misión <br /> y Visión
                </h2>
              </div>
              <div className="mt-8">
                <div className="flex flex-col gap-5 text-left text-base leading-[1.78] text-jci-black">
                  <p>
                    Ofrecer oportunidades de desarrollo de liderazgo que empoderen a los jóvenes
                    para crear un impacto positivo.
                  </p>
                  <p>Ser la red mundial de jóvenes líderes.</p>
                </div>
              </div>
            </header>

            <div className="flex items-center justify-center">
              {/*  */}
              <figure className="mt-24 h-[220px] w-[220px] md:mt-0 md:h-[350px] md:w-[350px]">
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
