import { FiAward, FiGlobe, FiUsers } from "react-icons/fi";

export default function Beneficios() {
  return (
    <section
      className="relative z-10 mx-8 max-w-6xl md:mx-20 lg:mx-auto"
      aria-labelledby="beneficios-heading"
    >
      <div className="my-12 md:my-28">
        {/* Caja de Información */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 top-[80px] -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
            <div className="relative whitespace-nowrap text-[11px] font-medium uppercase not-italic leading-none tracking-[2px] text-[#aeaeae]">
              <span className="absolute left-[-170px] top-[6px] h-px w-[160px] bg-[#aeaeae]"></span>
              Cada día
            </div>
          </div>
        </div>

        <article className="flex">
          <div className="lg:ml-36">
            <header className="mt-20 md:max-w-xl">
              <h2
                id="beneficios-heading"
                className="text-left text-4xl font-bold not-italic leading-[1.17] tracking-normal text-black md:text-5xl"
              >
                Beneficios de ser parte de JCI Ambato
              </h2>
            </header>

            <div className="mt-8">
              <ul
                className="max-w-md space-y-4 text-base text-jci-black"
                role="list"
                aria-label="Lista de beneficios"
              >
                <li className="flex items-start">
                  <FiAward
                    className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-jci-teal"
                    aria-hidden="true"
                  />
                  <span>
                    Acceso a <strong>capacitaciones y entrenamientos</strong> exclusivos para
                    potenciar tu liderazgo.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiGlobe
                    className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-jci-teal"
                    aria-hidden="true"
                  />
                  <span>
                    Oportunidad de participar en{" "}
                    <strong>proyectos locales e internacionales</strong> de alto impacto.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiUsers
                    className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-jci-teal"
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Networking</strong> con una red global de jóvenes líderes, empresarios y
                    profesionales.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
