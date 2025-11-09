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
              className="relative text-[rgb(174,174,174)] leading-none text-[11px] font-medium not-italic tracking-[2px] whitespace-nowrap uppercase"
              aria-hidden="true"
            >
              Vicepresidencia Local
              <span className="absolute top-[6px] left-[-170px] w-[160px] h-[1px] bg-[rgb(174,174,174)] content-['']"></span>
            </div>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="flex">
            <header className="md:max-w-2xl">
              <div className="mt-20">
                <h2 className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black">
                  Vicepresidencia <br /> {area.title}
                </h2>
              </div>

              <div className="mt-10">
                <section aria-labelledby={`features-${area.id}`}>
                  <h4 id={`features-${area.id}`} className="sr-only">
                    Características de {area.title}
                  </h4>
                  <ul
                    className="flex flex-row flex-wrap mt-[8px] mr-[-10px] mb-[68px] ml-[-10px]"
                    role="list"
                  >
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="w-1/2">
                        <div className="mx-3 py-4 border-t border-t-jci-gray">
                          <span className="text-lg text-jci-black font-bold not-italic leading-[1.78] tracking-normal">
                            {feature}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-3 text-left text-base leading-[1.78] text-jci-black">
                  <div className="text-xl md:text-2xl font-bold leading-[1.33] text-[#323232] w-full md:w-1/2 flex pr-0 md:pr-10 box-border items-center mb-6 md:mb-0">
                    <div className="p-[24px_0_24px_0] md:p-[24px_40px_24px_0] w-full border-b border-[#cccccc]">
                      {area.responsable.nombre} {area.responsable.apellido}
                      <div>
                        <a
                          href={`mailto:${area.responsable.correo}`}
                          className="text-lg underline text-jci-aqua leading-[1.5] not-italic font-normal tracking-normal md:text-xl"
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
