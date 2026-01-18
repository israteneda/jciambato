import Image from "next/image";
import Link from "next/link";
import { areasOportunidad } from "@/data/areas-oportunidad";
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
                  <h3 className="max-w-[372px] text-left text-4xl font-semibold not-italic leading-[1.17] tracking-normal">
                    {area.title}
                  </h3>
                </header>

                <div className="mt-5">
                  <p className="text-md text-jci-gray max-w-[372px] text-left font-normal not-italic leading-[1.78] tracking-normal">
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
                        height={0}
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
                      className="ml-[-10px] mr-[-10px] mt-[8px] flex flex-row flex-wrap"
                      role="list"
                    >
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="w-1/2">
                          <div className="mx-[10px] border-t border-t-[#f5f5f5] py-[11px]">
                            <span className="text-jci-gray text-[14px] font-semibold not-italic leading-[1.78] tracking-normal text-jci-navy">
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
                      className="group relative inline-block max-w-full cursor-pointer transition duration-[400ms]"
                      aria-label={`Explorar área de ${area.title}`}
                    >
                      <div className="flex items-center py-4">
                        <span className="text-sm font-medium not-italic leading-none tracking-normal text-jci-black transition-colors duration-300 group-hover:text-jci-seafoam">
                          Explora esta Área de Oportunidad
                        </span>
                        <div
                          className="ml-3 flex transform items-center transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <HiOutlineArrowNarrowRight className="h-6 w-6 text-jci-black transition-colors duration-300 group-hover:text-jci-seafoam" />
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
