import { notFound } from 'next/navigation';
import { getProyectoBySlug, getAllProyectos } from '@/data/proyectos';
import {
    Detalles,
} from '@/components/sections/proyectos/slug';

interface ProyectosPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const proyectos = getAllProyectos();

    return proyectos.map((proyecto) => ({
        slug: proyecto.slug,
    }));
}

export async function generateMetadata({ params }: ProyectosPageProps) {
    const { slug } = await params;
    const proyecto = getProyectoBySlug(slug);

    if (!proyecto) {
        return {
            title: 'Proyecto no encontrado — Proyectos',
            description: 'La página que buscas no existe.',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jciambato.org';
    const projectUrl = `${baseUrl}/proyectos/${slug}`;
    const projectImage = proyecto.imagen ? `${baseUrl}${proyecto.imagen}` : `${baseUrl}/images/logos/jci-ambato.webp`;

    return {
        title: `${proyecto.titulo} — Proyectos`,
        description: proyecto.descripcion || proyecto.subtitulo || 'Descubre este proyecto de JCI Ambato',
        keywords: [
            'JCI Ambato',
            'proyectos sociales',
            'liderazgo juvenil',
            'voluntariado',
            proyecto.titulo,
            ...(proyecto.area_oportunidad ? [proyecto.area_oportunidad] : [])
        ],
        openGraph: {
            title: proyecto.titulo,
            description: proyecto.descripcion || proyecto.subtitulo || 'Descubre este proyecto de JCI Ambato',
            url: projectUrl,
            siteName: 'JCI Ambato',
            images: [
                {
                    url: projectImage,
                    width: 1200,
                    height: 630,
                    alt: `Imagen del proyecto: ${proyecto.titulo}`,
                },
            ],
            locale: 'es_EC',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: proyecto.titulo,
            description: proyecto.descripcion || proyecto.subtitulo || 'Descubre este proyecto de JCI Ambato',
            images: [projectImage],
        },
        alternates: {
            canonical: projectUrl,
        },
    };
}

export default async function ProyectosPage({ params }: ProyectosPageProps) {
    const { slug } = await params;
    const proyecto = getProyectoBySlug(slug);

    if (!proyecto) {
        notFound();
    }

    return (
        <main className="relative">
            <Detalles proyecto={proyecto} />
        </main>
    );
} 