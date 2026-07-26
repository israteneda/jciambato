import { ImageResponse } from "next/og";
import { getProyectoBySlug } from "@/data/proyectos";
import { getNoticiaEventoBySlug } from "@/data/noticias";
import { getAreaBySlug } from "@/features/home/data/areas-oportunidad";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jciambato.org";

  let title = "JCI Ambato";
  let subtitle = "";
  let category = "";

  if (type && slug) {
    if (type === "proyecto") {
      const proyecto = getProyectoBySlug(slug);
      if (proyecto) {
        title = proyecto.nombre;
        subtitle = proyecto.area_oportunidad || "";
        category = "Proyectos";
      }
    } else if (type === "noticia") {
      const noticia = getNoticiaEventoBySlug(slug);
      if (noticia) {
        title = noticia.titulo;
        subtitle = noticia.subtitulo || "";
        category = noticia.tipo === "evento" ? "Eventos" : "Noticias";
      }
    } else if (type === "area") {
      const area = getAreaBySlug(slug);
      if (area) {
        title = area.title;
        subtitle = area.subtitle || "";
        category = "Área de Oportunidad";
      }
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1F4789 0%, #130F2D 100%)",
          fontFamily: "'Plus Jakarta Sans'",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <img
            src={`${baseUrl}/images/logos/jci-ambato.webp`}
            alt="JCI Ambato"
            width={60}
            height={60}
            style={{ borderRadius: "8px" }}
          />
          <span
            style={{
              color: "#57BCBC",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            JCI AMBATO
          </span>
        </div>

        {category && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                color: "#EFC40F",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {category}
            </span>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              margin: 0,
              maxWidth: "900px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                color: "#aeaeae",
                fontSize: "28px",
                fontWeight: 400,
                marginTop: "16px",
                margin: 0,
                maxWidth: "700px",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            jciambato.org
          </span>
          <span
            style={{
              color: "#57BCBC",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            @jciambato
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: await fetch(
            new URL(
              "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yygg_e5.woff",
              import.meta.url
            )
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
        {
          name: "Plus Jakarta Sans",
          data: await fetch(
            new URL(
              "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko70yygg_e5.woff",
              import.meta.url
            )
          ).then((res) => res.arrayBuffer()),
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
