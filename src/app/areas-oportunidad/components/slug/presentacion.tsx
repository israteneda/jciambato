import { AreaOportunidad } from "@/types/area-oportunidad";
import Image from "next/image";

export default function Presentacion({ area }: { area: AreaOportunidad }) {
  return (
    <section
      className="relative z-20 overflow-hidden"
      aria-labelledby={`presentacion-${area.slug}-heading`}
    >
      <div className="relative z-1 mx-8 max-w-6xl bg-transparent md:mx-20 lg:mx-auto">
        <div className="mt-16">
          <div className="max-w-5xl">
            <header>
              <div className="text-xs leading-[1.85] font-bold tracking-normal text-jci-gray uppercase not-italic">
                {area.subtitle}
              </div>

              <div className="mt-8">
                <h2
                  id={`presentacion-${area.slug}-heading`}
                  className="text-left text-3xl font-bold text-jci-black md:text-5xl md:leading-[1.33]"
                >
                  {area.description}
                </h2>
              </div>
            </header>

            <div className="mt-16 md:mt-20">
              <p className="text-jci-black columns-1 gap-10 space-y-4 text-justify text-base leading-loose md:text-left lg:columns-2">
                {area.longDescription}
              </p>
            </div>

            {/* Logo Area */}
            <div className="my-10">
              <div className="flex justify-center py-5">
                {area.logo && (
                  <Image
                    src={area.logo}
                    alt={`Logo de ${area.title}`}
                    width={400}
                    height={0}
                    draggable="false"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
