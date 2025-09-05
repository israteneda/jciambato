import {
    Bienvenida,
    Presentacion,
    Valores,
} from "@/components/sections/impacto";

export const metadata = {
    title: "Impacto — Conoce que hacemos",
    description: "Conoce nuestro impacto a través de nuestras actividades anuales, misión, visión y valores que guían nuestro trabajo.",
};

export default function ImpactoPage() {
    return (
        <main className="relative">
            <Bienvenida />
            <Presentacion />
            <Valores />
        </main>
    );
} 