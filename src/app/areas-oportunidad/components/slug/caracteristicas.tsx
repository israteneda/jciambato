import { AreaOportunidad } from "@/types/area-oportunidad";

export default function Caracteristicas({ area }: { area: AreaOportunidad }) {
  return (
    <section
      className="relative my-20 lg:my-48"
      aria-labelledby={`presentacion-${area.slug}-heading`}
    >
      <div className="relative max-w-6xl px-8 md:mx-20 lg:mx-auto">
        <div className="hidden md:block">
          <div className="absolute top-[80px] left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
            <div
              className="relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap text-[rgb(174,174,174)] uppercase not-italic"
              aria-hidden="true"
            >
              Vicepresidencia Local
              <span className="absolute top-1.5 left-[-170px] h-px w-40 bg-[rgb(174,174,174)] content-['']"></span>
            </div>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="flex">
            <header className="md:max-w-2xl">
              <div className="mt-20">
                <h2 className="text-left text-4xl leading-[1.17] font-bold tracking-normal text-black not-italic md:text-5xl">
                  Vicepresidencia <br /> {area.title}
                </h2>
              </div>

              <div className="mt-10">
                <section aria-labelledby={`features-${area.id}`}>
                  <h4 id={`features-${area.id}`} className="sr-only">
                    Características de {area.title}
                  </h4>
                  <ul
                    className="mt-[8px] mr-[-10px] mb-[68px] ml-[-10px] flex flex-row flex-wrap"
                    role="list"
                  >
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="w-1/2">
                        <div className="border-t-jci-gray mx-3 border-t py-4">
                          <span className="text-jci-black text-lg leading-[1.78] font-bold tracking-normal not-italic">
                            {feature}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8">
                <div className="text-jci-black flex flex-col gap-3 text-left text-base leading-[1.78]">
                  <div className="mb-6 box-border flex w-full items-center pr-0 text-xl leading-[1.33] font-bold text-[#323232] md:mb-0 md:w-1/2 md:pr-10 md:text-2xl">
                    <div className="w-full border-b border-[#cccccc] p-[24px_0_24px_0] md:p-[24px_40px_24px_0]">
                      {area.responsable.nombre} {area.responsable.apellido}
                      <div>
                        <a
                          href={`mailto:${area.responsable.correo}`}
                          className="text-jci-teal text-lg leading-normal font-normal tracking-normal not-italic underline md:text-xl"
                        >
                          {area.responsable.correo}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
