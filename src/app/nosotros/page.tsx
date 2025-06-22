import {
    ActividadesAnuales,
    Bienvenida,
    MisionVision,
    Presentacion,
    Valores,
} from "@/components/sections/nosotros";

export const metadata = {
    title: "Sobre Nosotros — Liderazgo y Oportunidades",
    description: "Conoce nuestra misión, visión, valores y la historia de JCI Ambato en el desarrollo de líderes juveniles.",
};

export default function NosotrosPage() {
    return (
        <div className="relative">
            <Bienvenida />

            {/* Bloque espaciado */}
            <div className="h-[700px] md:h-[640px]"></div>
            <div
                className="absolute top-0 w-full h-full bg-gray-50"
                style={{ transform: 'translateY(99.9vh)' }}
            >
            </div>

            <Presentacion />

            <MisionVision />

            <Valores />

            {/* <DescripcionPersonal /> */}

            <ActividadesAnuales />
        </div>
    );
} 