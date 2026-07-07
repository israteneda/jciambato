import { Proyecto } from "@/types/proyecto";

export default function Presentacion({ proyecto }: { proyecto: Proyecto }) {
  return (
    <section
      className="relative overflow-hidden bg-transparent"
      aria-labelledby={`proyecto-${proyecto.slug}-heading`}
    >
      <div className="py-24">
        <div className="relative mx-8 max-w-6xl md:mx-20 lg:mx-auto">
          <div>
            <div className="text-jci-black text-xs leading-[1.85] tracking-[1px] uppercase not-italic">
              {proyecto.area_oportunidad}
            </div>
            <div className="mt-8">
              <h2 className="text-jci-black max-w-6xl text-left text-3xl leading-[1.33] font-bold md:text-5xl">
                {proyecto.nombre}
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-32">
              <div className="text-jci-teal text-sm leading-[1.33] font-semibold uppercase">
                {proyecto.estado}
              </div>
              <div className="text-jci-black text-sm leading-[1.33]">{proyecto.lugar}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
