import { notFound } from 'next/navigation';
import { getAreaBySlug, getAllAreas } from '@/data/areas-oportunidad';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="relative">
            {/* Hero Section */}
            <section className="relative bg-gray-100">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                        src={area.image}
                        alt={area.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-8">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                {area.title}
                            </h1>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto">
                                {area.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-8 lg:mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Sobre esta área
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-8">
                                    {area.longDescription}
                                </p>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Características principales
                                </h3>
                                <ul className="space-y-2 mb-8">
                                    {area.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-jci-aqua rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-lg shadow-lg border">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    ¿Interesado en esta área?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Únete a JCI Ambato y forma parte de nuestro equipo de trabajo en esta área de oportunidad.
                                </p>
                                <Link
                                    href="/involucrate"
                                    className="inline-block bg-jci-aqua text-white px-6 py-3 rounded-md font-medium hover:bg-jci-aqua/90 transition-colors"
                                >
                                    Involúcrate
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Areas */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-6xl mx-8 lg:mx-auto">
                    <Link
                        href="/areas-oportunidad"
                        className="inline-flex items-center text-jci-aqua hover:text-jci-aqua/80 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver a Áreas de Oportunidad
                    </Link>
                </div>
            </section>
        </div>
    );
} 