import { RotatedText } from "@/components/commons";
import { getAllAreas } from "@/features/home/data/areas-oportunidad";
import { AreaOportunidad } from "@/types/area-oportunidad";
import Image from "next/image";
import Link from "next/link";

export default function SiguienteArea({ area }: { area: AreaOportunidad }) {
  // Obtener todas las áreas y encontrar la siguiente
  const allAreas = getAllAreas();
  const currentIndex = allAreas.findIndex((a) => a.slug === area.slug);
  const nextIndex = (currentIndex + 1) % allAreas.length; // Ciclo al inicio si es la última
  const nextArea = allAreas[nextIndex];

  if (!area || !area.title || !nextArea) {
    return null; // O puedes retornar un componente de error/loading
  }

  return (
    <section className="relative z-1 bg-transparent">
      <div className="bg-white py-28">
        <div className="relative">
          {/* Texto rotado */}
          <RotatedText text="Nuestras Áreas" />
          {/* Caja de Información */}
          <div>
            <div className="relative z-10 mx-8 max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
              <Link
                href={`/areas-oportunidad/${nextArea.slug}`}
                className="group cursor-pointer md:ml-48"
                aria-label={`Ir a ${nextArea.title}`}
              >
                <div className="relative z-10">
                  <div className="font-sans text-[13px] leading-[1.85] font-bold tracking-normal text-jci-gray uppercase not-italic">
                    Áreas de Oportunidad
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center">
                      <div className="flex flex-col">
                        <h2 className="text-jci-black max-w-4xl text-left text-3xl leading-[1.33] font-light tracking-normal md:text-4xl lg:text-5xl">
                          Siguiente Área
                        </h2>
                        <h2 className="text-jci-black max-w-4xl text-left text-3xl leading-[1.33] font-bold tracking-normal not-italic md:text-4xl lg:text-5xl">
                          {nextArea.title}
                        </h2>
                      </div>

                      <div className="my-8 md:ml-56">
                        <Image
                          src="/icons/arrow-right-gray.svg"
                          alt=""
                          width={128}
                          height={128}
                          className="h-20 w-20 -rotate-90 transform transition-transform duration-300 group-hover:translate-x-4 md:h-32 md:w-32"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
