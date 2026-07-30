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
          <div className="absolute top-20 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform">
            <div className="text-jci-gray relative text-[11px] leading-none font-medium tracking-[2px] whitespace-nowrap uppercase not-italic">
              <span className="bg-jci-gray absolute top-1.5 -left-42.5 h-px w-40"></span>
              Cada día
            </div>
          </div>
        </div>

        <article className="flex">
          <div className="lg:ml-36">
            <header className="mt-20 md:max-w-xl">
              <h2
                id="beneficios-heading"
                className="text-jci-black text-left text-4xl leading-[1.17] font-bold tracking-normal not-italic md:text-5xl"
              >
                Beneficios de ser parte de JCI Ambato
              </h2>
            </header>

            <div className="mt-8">
              <ul
                className="text-jci-black max-w-md space-y-4 text-base"
                role="list"
                aria-label="Lista de beneficios"
              >
                <li className="flex items-start">
                  <FiAward
                    className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Acceso a <strong>capacitaciones y entrenamientos</strong> exclusivos para
                    potenciar tu liderazgo.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiGlobe
                    className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Oportunidad de participar en{" "}
                    <strong>proyectos locales e internacionales</strong> de alto impacto.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiUsers
                    className="text-jci-teal mt-1 mr-3 h-6 w-6 shrink-0"
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
