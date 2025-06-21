"use client";

import { builder, Builder } from "@builder.io/react";
import { BuilderComponent } from "@builder.io/react";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import {
  Bienvenida,
  Presentacion,
  Grupo,
  Premios,
  NoticiasEventos,
  Aliados,
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
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const fetchContent = useCallback(async () => {
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
      console.warn("Builder.io API key not found");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <>
      {!loading && (
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

      {/* Legacy Sections */}
      <div>
        {/* Sección de Bienvenida */}
        <Bienvenida />

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
    </>
  );
}
