"use client";

import { builder, Builder } from "@builder.io/react";
import { BuilderComponent } from "@builder.io/react";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import {
  BienvenidaV3,
  Presentacion,
  Grupo,
  Premios,
  NoticiasEventos,
  Aliados
} from "@/components/sections/inicio";
import "../builder-registry";

// Initialize Builder with your API key
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

// Enable dev tools
Builder.isStatic = false;

export default function BuilderPage() {
  const [content, setContent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  const fetchContent = useCallback(async () => {
    // Si no hay API key de Builder.io, simplemente no hacer nada
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
      console.log("Builder.io no configurado - usando contenido estático");
      return;
    }

    try {
      const builderContent = await builder
        .get("page", {
          userAttributes: {
            urlPath: pathname,
          },
        })
        .promise();

      setContent(builderContent);
    } catch (error) {
      console.error("Error fetching Builder.io content:", error);
      setError("Error al cargar el contenido dinámico");
    }
  }, [pathname]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <>
      {/* Builder.io Content - solo mostrar si hay contenido */}
      {content && (
        <BuilderComponent
          content={content}
          data={{
            title: "Builder.io Page",
            path: pathname,
          }}
          model="page"
          options={{ includeRefs: true }}
        />
      )}

      {/* Static Content - siempre mostrar inmediatamente */}
      <div>
        {/* Sección de Bienvenida (V1, V2 y V3 Disponibles) */}
        <BienvenidaV3 />

        {/* Sección Presentación */}
        <Presentacion />

        {/* Seccion Grupo */}
        <Grupo />

        {/* Seccion Premios */}
        <Premios />

        {/* Aliados */}
        <Aliados />

        {/* Noticias y Eventos */}
        <NoticiasEventos />
      </div>

      {/* Error message - solo mostrar si hay error real */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </>
  );
}
