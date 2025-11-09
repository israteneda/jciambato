import { FiAward, FiGlobe, FiUsers } from "react-icons/fi";

export default function Beneficios() {
  return (
    <section
      className="relative z-10 max-w-6xl mx-8 md:mx-20 lg:mx-auto "
      aria-labelledby="beneficios-heading"
    >
      <div className="my-12 md:my-28">
        {/* Caja de Información */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[80px] left-0 transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
            <div className="text-[#aeaeae] leading-none text-[11px] font-medium relative not-italic tracking-[2px] whitespace-nowrap uppercase">
              <span className="absolute top-[6px] left-[-170px] w-[160px] h-px bg-[#aeaeae]"></span>
              Cada día
            </div>
          </div>
        </div>

        <article className="flex">
          <div className="lg:ml-36">
            <header className="md:max-w-xl mt-20">
              <h2
                id="beneficios-heading"
                className="text-4xl md:text-5xl font-bold not-italic text-left leading-[1.17] tracking-normal text-black"
              >
                Beneficios de ser parte de JCI Ambato
              </h2>
            </header>

            <div className="mt-8">
              <ul
                className="text-base text-jci-black max-w-md space-y-4"
                role="list"
                aria-label="Lista de beneficios"
              >
                <li className="flex items-start">
                  <FiAward
                    className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Acceso a <strong>capacitaciones y entrenamientos</strong> exclusivos para
                    potenciar tu liderazgo.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiGlobe
                    className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Oportunidad de participar en{" "}
                    <strong>proyectos locales e internacionales</strong> de alto impacto.
                  </span>
                </li>
                <li className="flex items-start">
                  <FiUsers
                    className="w-6 h-6 mr-3 mt-1 text-jci-aqua flex-shrink-0"
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
