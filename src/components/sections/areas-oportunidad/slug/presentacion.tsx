import { AreaOportunidad } from "@/data/areas-oportunidad";

export default function Presentacion({ area }: { area: AreaOportunidad }) {
    return (
        <section className="relative z-20 overflow-hidden">
            <div className="relative z-[1] bg-transparent max-w-6xl mx-8 md:mx-auto">
                <div className="mt-16">
                    <div className="max-w-3xl">
                        <div>
                            <div className="text-[13px] leading-[1.85] not-italic uppercase text-[#989898] font-bold tracking-normal">
                                {area.subtitle}
                            </div>

                            <div className="mt-8">
                                <div className="text-[40px] font-bold not-italic text-left leading-[1.33] tracking-normal text-black max-w-4xl">
                                    {area.description}
                                </div>
                            </div>

                            <div className="mt-20">
                                <div className="text-[18px] font-normal not-italic leading-[1.78] tracking-normal text-[#323232] text-left [column-count:2] [column-gap:40px]">
                                    {area.longDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}