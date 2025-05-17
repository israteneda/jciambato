"use client";

import { builder, Builder } from "@builder.io/react";
import { BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Bienvenida,
  Presentacion,
  Grupo,
  Premios,
  NoticiasEventos,
} from "@/components/sections/inicio";
import "../builder-registry";

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Enable dev tools
Builder.isStatic = false;

export default function BuilderPage() {
  const [content, setContent] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Fetch content from Builder.io based on the current path
    builder
      .get("page", {
        userAttributes: {
          urlPath: pathname,
        },
      })
      .promise()
      .then((content) => {
        setContent(content);
      })
      .catch((error) => {
        console.error("Error fetching Builder.io content:", error);
      });
  }, [pathname]);

  return (
    <>
      <BuilderComponent
        content={content}
        data={{
          title: "Builder.io Page",
          path: pathname,
        }}
        model="page"
        options={{ includeRefs: true }}
      />

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
        {/* <Aliados /> */}

        {/* Noticias y Eventos */}
        <NoticiasEventos />
      </div>
    </>
  );
}
