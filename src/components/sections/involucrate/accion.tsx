import { Button } from "@heroui/button";

export default function Accion() {
    return (
        <section className="relative z-10">
            <div className="my-20">
                <div className="relative z-10 bg-transparent w-[1156px] mx-auto">
                    <div>
                        <div className="text-[13px] leading-[1.85] not-italic uppercase text-jci-gold font-bold tracking-normal">
                            Grupo JCI
                        </div>
                        <div className="mt-8">
                            <h3 className="font-bold text-[48px] leading-[1.33] tracking-normal text-jci-aqua text-left max-w-[852px]">
                                Se parte de un mundo cambiante, contribuir día a día, estés donde estés.
                            </h3>
                        </div>
                        <div className="mt-8">
                            <p className="text-[18px] font-normal leading-[1.78] tracking-normal text-[rgb(50,50,50)] text-left max-w-[666px]">
                                La JCI es una organización internacional sin fines de lucro, que busca el desarrollo de los jóvenes a través de la acción. Con más de 100 años de historia, la JCI ha demostrado que los jóvenes pueden marcar la diferencia en sus comunidades y en el mundo. Únete a nosotros y sé parte del cambio.
                            </p>
                        </div>

                        <div className="mt-9">
                            <Button
                                radius="none"
                                className="relative bg-jci-aqua text-white group overflow-hidden"
                                aria-label="Más información sobre nosotros"
                            >
                                <span className="absolute inset-0 w-full h-full transform -translate-x-full bg-cyan-950 transition-transform duration-300 group-hover:translate-x-0"></span>
                                <span className="relative z-10">Únete a nosotros y sé parte del cambio.</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}