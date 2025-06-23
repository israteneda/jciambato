import { notFound } from 'next/navigation';
import { getAreaBySlug, getAllAreas } from '@/data/areas-oportunidad';
import {
    Bienvenida,
    Presentacion,
    Construccion,
    ExploraAreasOportunidad,
    Responsable,
} from '@/components/sections/areas-oportunidad/slug';

interface AreaOportunidadPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const areas = getAllAreas();

    return areas.map((area) => ({
        slug: area.slug,
    }));
}

export async function generateMetadata({ params }: AreaOportunidadPageProps) {
    const { slug } = await params;
    const area = getAreaBySlug(slug);

    if (!area) {
        return {
            title: 'Área no encontrada — Áreas de Oportunidad',
            description: 'La página que buscas no existe.',
        };
    }

    return {
        title: `${area.title} — Áreas de Oportunidad`,
        description: area.description,
    };
}

export default async function AreaOportunidadPage({ params }: AreaOportunidadPageProps) {
    const { slug } = await params;
    const area = getAreaBySlug(slug);

    if (!area) {
        notFound();
    }

    return (
        <main className="relative">
            <Bienvenida area={area} />
            <Presentacion area={area} />
            <Construccion area={area} />
            <ExploraAreasOportunidad area={area} />
            <Responsable area={area} />
        </main>
    );
} 