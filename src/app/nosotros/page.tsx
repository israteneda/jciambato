import {
    ActividadesAnuales,
    Bienvenida,
    MisionVision,
    Presentacion,
    Valores,
    Opinion
} from "@/components/sections/nosotros";

export const metadata = {
    title: "Sobre Nosotros — Liderazgo y Oportunidades",
    description: "Conoce nuestra misión, visión, valores y la historia de JCI Ambato en el desarrollo de líderes juveniles.",
};

export default function NosotrosPage() {
    return (
        <main className="relative overflow-hidden">
            <Bienvenida />

            {/* Bloque espaciado */}
            <div className="h-[640px]" aria-hidden="true"></div>

            <div
                className="absolute top-0 w-full h-full bg-gray-50"
                style={{
                    transform: 'translateY(99.9vh)'
                }}
                aria-hidden="true"
            >
            </div>
            <Presentacion />
            <MisionVision />
            <Valores />
            <Opinion />
            <ActividadesAnuales />
        </main>
    );
} 