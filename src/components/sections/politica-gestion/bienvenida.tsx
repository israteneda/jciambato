"use client"
import { InfoContainer, RowScroll } from "@/components/commons";

export default function Bienvenida() {
    return (
        <section className="inset-0 w-full fixed overflow-hidden items-center box-border h-[760px] pb-[80px]">
            <div className="relative w-full pt-48 pb-32">
                <InfoContainer
                    subtitle="Acerca de"
                    title="Política de Gestión"
                    description=""
                />
            </div>

            {/* Botón de scroll */}
            <RowScroll />
        </section>
    );
}