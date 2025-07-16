"use client"

import { InfoContainer, RowScroll } from "@/components/commons";
import Image from "next/image";

export default function Bienvenida() {
    return (
        <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]">
            <div className="relative w-full pt-48 pb-32">
                <InfoContainer
                    subtitle="Información Legal"
                    title="Declaración de Privacidad"
                    description=""
                />
            </div>

            {/* Botón de scroll pantallas grandes */}
            <RowScroll />

            {/* Botón de scroll pantallas pequeñas */}
            <div className="block md:hidden absolute z-20 bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                    aria-label="Desplazarse hacia abajo"
                    onClick={() => {
                        // Función para scroll suave hacia abajo
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    <Image
                        src="/icons/arrow-down.svg"
                        alt=""
                        width={55}
                        height={55}
                        className="relative w-[55px] h-[55px] object-contain"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </section>
    );
}