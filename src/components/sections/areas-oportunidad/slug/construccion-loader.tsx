"use client";

import dynamic from 'next/dynamic';
import type { AreaOportunidad } from "@/data/areas-oportunidad";

const Construccion = dynamic(() => import('@/components/sections/areas-oportunidad/slug/construccion'), {
    ssr: false,
    loading: () => (
        <section className="w-full h-screen flex justify-center items-center" aria-label="Cargando contenido">
            <div className="text-center">
                <p>Cargando...</p>
            </div>
        </section>
    )
});

export default function ConstruccionLoader({ area }: { area: AreaOportunidad }) {
    return <Construccion area={area} />;
} 