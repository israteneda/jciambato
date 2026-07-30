import Image from "next/image";
import Link from "next/link";
import { areasOportunidad } from "@/features/inicio/data/areas-oportunidad";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function AreasOportunidad() {
  return (
    <section className="relative bg-transparent" aria-labelledby="areas-oportunidad-heading">
      <div className="my-20">
        <header className="sr-only">
          <h2 id="areas-oportunidad-heading">Áreas de Oportunidad</h2>
        </header>

        <div className="flex flex-col" role="list">
          {areasOportunidad.map((area, index) => (
            <article
              key={area.id}
              className={`relative ${
                index % 2 === 0
                  ? "block flex-col justify-start md:flex md:flex-row"
                  : "flex flex-col justify-end md:flex-row-reverse xl:flex-row"
              }`}
              role="listitem"
            >
              {/* Imagen */}
              <figure className="relative h-[300px] min-h-min w-full overflow-hidden md:h-auto md:min-h-[632px] md:w-1/2 xl:w-1/3">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={area.image}
                    width={1920}
                    height={1080}
                    alt={`Imagen representativa de ${area.title}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
              </figure>

              {/* Contenido */}
              <div className="relative h-auto w-full overflow-hidden bg-white p-10 md:min-h-[632px] md:w-1/2 md:p-20 xl:w-1/3">
                <header>
                  <h3 className="max-w-[372px] text-left text-4xl leading-[1.17] font-semibold tracking-normal not-italic">
                    {area.title}
                  </h3>
                </header>

                <div className="mt-5">
                  <p className="text-md text-jci-navy max-w-[372px] text-left leading-[1.78] font-normal tracking-normal not-italic">
                    {area.description}
                  </p>
                </div>

                {/* Logo Area */}
                <div className="mt-5">
                  <div className="flex justify-center py-5">
                    {area.logo && (
                      <Image
                        src={area.logo}
                        alt={`Logo de ${area.title}`}
                        width={290}
                        height={100}
                        className="h-auto w-auto max-w-[180px] object-contain"
                        draggable="false"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <section aria-labelledby={`features-${area.id}`}>
                    <h4 id={`features-${area.id}`} className="sr-only">
                      Características de {area.title}
                    </h4>
                    <ul
                      className="mt-[8px] mr-[-10px] ml-[-10px] flex flex-row flex-wrap"
                      role="list"
                    >
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="w-1/2">
                          <div className="mx-[10px] border-t border-t-white py-[11px]">
                            <span className="text-jci-navy text-[14px] leading-[1.78] font-semibold tracking-normal not-italic">
                              {feature}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <footer className="mt-10">
                    <Link
                      href={`/areas-oportunidad/${area.slug}`}
                      className="group relative inline-block max-w-full cursor-pointer transition duration-400"
                      aria-label={`Explorar área de ${area.title}`}
                    >
                      <div className="flex items-center py-4">
                        <span className="text-jci-black group-hover:text-jci-teal text-sm leading-none font-medium tracking-normal not-italic transition-colors duration-300">
                          Explora esta Área de Oportunidad
                        </span>
                        <div
                          className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="text-jci-black group-hover:text-jci-teal h-6 w-6 transition-colors duration-300" />
                        </div>
                      </div>
                    </Link>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
