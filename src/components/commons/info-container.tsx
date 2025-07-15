"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface InfoContainerProps {
    subtitle: string;
    title: string;
    description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
    const pathname = usePathname();
    const [shouldUseLightText, setShouldUseLightText] = useState(false);

    // Función para detectar si debe usar texto claro (para fondos oscuros)
    const detectTextColor = () => {
        // Páginas que siempre necesitan texto claro (fondo oscuro)
        const lightTextPages = ['/', '/nosotros', '/proyectos', '/miembros', '/noticias-eventos'];

        // Páginas que siempre necesitan texto oscuro (fondo claro)
        const darkTextPages = ['/areas-oportunidad', '/involucrate', '/politica-gestion', '/politica-privacidad'];

        // Si estamos en una página que necesita texto claro
        if (lightTextPages.includes(pathname)) {
            setShouldUseLightText(true);
            return;
        }

        // Si estamos en una página que necesita texto oscuro
        if (darkTextPages.includes(pathname)) {
            setShouldUseLightText(false);
            return;
        }

        // Para páginas dinámicas (como áreas individuales), usar texto claro
        if (pathname.startsWith('/areas-oportunidad/')) {
            setShouldUseLightText(true);
            return;
        }

        // Por defecto, usar texto claro
        setShouldUseLightText(true);
    };

    useEffect(() => {
        detectTextColor();
    }, [pathname]);

    return (
        <section className="relative z-30 bg-transparent max-w-6xl mx-8 md:mx-auto">
            {shouldUseLightText ? (
                // Version Claro (para fondos oscuros)
                <>
                    <header>
                        <h2 className="text-xs leading-[1.85] not-italic uppercase text-jci-gold font-bold tracking-normal">
                            {subtitle}
                        </h2>

                        <div className="mt-8">
                            <h1 className="text-3xl lg:text-6xl font-bold not-italic text-left leading-[1] tracking-[-0.5px] text-gray-200 max-w-4xl">
                                {title}
                            </h1>
                        </div>
                    </header>

                    <div className="mt-9">
                        <p className="text-xl font-normal not-italic leading-[1.45] tracking-normal text-gray-100 text-left max-w-xl">
                            {description}
                        </p>
                    </div>
                </>
            ) : (
                // Version Oscuro (para fondos claros)
                <>
                    <header>
                        <h2 className="text-xs leading-[1.85] not-italic uppercase text-jci-aqua font-bold tracking-normal">
                            {subtitle}
                        </h2>

                        <div className="mt-8">
                            <h1 className="text-3xl lg:text-6xl font-bold not-italic text-left leading-[1] tracking-[-0.5px] text-gray-900 max-w-4xl">
                                {title}
                            </h1>
                        </div>
                    </header>

                    <div className="mt-9">
                        <p className="text-xl font-normal not-italic leading-[1.45] tracking-normal text-gray-900 text-left max-w-xl">
                            {description}
                        </p>
                    </div>
                </>
            )}
        </section>
    );
}