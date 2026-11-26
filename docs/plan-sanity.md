# Plan: contenido administrable con Sanity

> Estado: **propuesta** · Noviembre 2026 · Responsable técnico: Tenpisoft
>
> Depende de: PR #42 (protección de datos LOPDP), que define qué datos se pueden publicar.

## 1. Objetivo

Que la directiva de JCI Ambato actualice **miembros, proyectos, noticias y demás
contenido que cambia cada año** desde un panel web, sin tocar código, sin costo
y sin depender de una persona técnica.

### Por qué Sanity (y no Keystatic)

| Criterio                     | Sanity                                  | Keystatic                                                                                |
| ---------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| Dónde vive el contenido      | En Sanity (fuera del repo)              | Archivos en el repo                                                                      |
| Repo privado en Vercel Hobby | **Sí**: editar no crea commits          | No: cada edición es un commit y Hobby solo despliega commits del dueño en repos privados |
| Editores gratis              | 20 (todos administradores)              | 3 (Keystatic Cloud)                                                                      |
| Actualización del sitio      | Revalidación bajo demanda, sin redeploy | Redeploy por cada guardado                                                               |
| Esfuerzo inicial             | Medio                                   | Bajo                                                                                     |

Se elige Sanity porque permite cerrar el repo en el futuro y escala a más editores.
Si se decide mantener el repo público para siempre y bastan 3 editores, Keystatic
sigue siendo una alternativa más simple.

## 2. Arquitectura

```
Editor ──▶ Sanity Studio (jciambato.org/studio)
               │  publica
               ▼
         Sanity Content Lake (dataset "production", público)
               │  webhook firmado (solo documentos publicados)
               ▼
   /api/revalidate en Next.js ──▶ revalidateTag("miembro" | "proyecto" | …)
               │
               ▼
   jciambato.org (páginas estáticas con caché; se regeneran solo las afectadas)
```

- **Studio embebido** en el propio sitio, en `/studio`, con `next-sanity`. Así el
  panel vive en el mismo proyecto de Vercel. Alternativa sin costo: alojarlo en
  `<proyecto>.sanity.studio` con `sanity deploy`.
- **Lectura**: en el servidor (Server Components) usando el **API CDN** de Sanity
  (`useCdn: true`), con etiquetas de caché por tipo de documento.
- **Actualización**: un webhook de Sanity llama a `/api/revalidate`, que verifica
  la firma (`parseBody` de `next-sanity/webhook`) y ejecuta `revalidateTag`.
  **No** se usa revalidación por tiempo (`revalidate: N`) ni Live Content API en
  producción: multiplican las escrituras de caché de Vercel (ver §5).
- **Imágenes**: servidas desde el CDN de imágenes de Sanity con el URL builder
  (`width`, `auto=format`), sin pasar por la optimización de imágenes de Vercel.

## 3. Modelo de contenido

Un **solo dataset** (`production`) contiene todos los tipos. El segundo dataset
del plan gratis queda como `staging` para probar cambios de esquema.

Todos los esquemas siguen la skill `proteccion-datos-lopdp`: **no existen campos**
para cédula, teléfono, dirección, fecha de nacimiento ni correos personales.

### `miembro`

| Campo                 | Tipo                                                                 | Reglas                                        |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------- |
| `nombre`, `apellido`  | string                                                               | obligatorios                                  |
| `cargo`               | string                                                               |                                               |
| `rol`                 | lista: `junta`, `miembro`, `senador`, `nacional`, `pasadoPresidente` | obligatorio                                   |
| `periodo`             | number (año, p. ej. 2026)                                            | obligatorio; la página muestra el año vigente |
| `foto`                | image + `alt`                                                        | obligatoria                                   |
| `correoInstitucional` | string                                                               | solo `@jciecuador.com` / `@jciambato.org`     |
| `redes`               | `{ instagram, linkedin }` (url)                                      | opcional                                      |
| `autorizaPublicacion` | boolean                                                              | **obligatorio**; si es `false` no se muestra  |
| `orden`               | number                                                               | orden dentro de la sección                    |

### `proyecto`

`titulo`, `slug`, `subtitulo`, `nombre`, `edicion`, `fecha`, `lugar`, `imagen`,
`logo`, `descripcion` (texto enriquecido), `impacto`, `director` y `subdirector`
(referencias a `miembro`), `areaOportunidad` (referencia), `estado`
(`activo` | `completado` | `planificado`), `premio`, `destacado` (boolean).

### `noticiaEvento`

`tipo` (`evento` | `noticia`), `titulo`, `slug`, `subtitulo`, `fecha`, `lugar`,
`imagen`, `descripcion`, `cuerpo` (texto enriquecido con imágenes, citas,
destacados), `logros[]`, `impacto[]`.

### Otros

- `areaOportunidad`: hoy son 4 fijas; se migran en la fase 4.
- `aliado`: `titulo`, `url`, `logo`, `alturaRelativa`, `orden`.
- `faq`: `pregunta`, `respuesta`, `orden`.
- `ajustes` (singleton): cifras del inicio (+50 años, +200 proyectos, +500 jóvenes), enlaces de redes.

### Validaciones en el Studio

- Reutilizar la lógica de `scripts/check-datos-personales.mjs` como validación
  personalizada en los campos de texto: si detecta cédula, celular o correo
  personal, **no deja publicar** y muestra el motivo.
- `correoInstitucional` valida el dominio.
- `alt` obligatorio en todas las imágenes (accesibilidad).

## 4. Inventario actual a migrar

| Contenido                                                              | Origen hoy                                | Cantidad aprox.      |
| ---------------------------------------------------------------------- | ----------------------------------------- | -------------------- |
| Miembros (junta, miembros, senadores, nacionales, pasados presidentes) | `src/features/miembros/data/*.ts`         | ~70                  |
| Noticias y eventos                                                     | `src/features/noticias-eventos/data/*.ts` | 7                    |
| Proyectos (+ destacados)                                               | `src/features/proyectos/data/*.ts`        | 7                    |
| Aliados                                                                | `src/features/inicio/data/aliados.ts`     | 14                   |
| FAQ, valores, historia, áreas                                          | `src/features/inicio/data/*.ts`           | ~30                  |
| Imágenes                                                               | `public/images/`                          | 138 archivos, ~70 MB |

Total < 200 documentos y < 100 MB de imágenes: muy por debajo de los límites.

## 5. Límites de los planes gratis y cómo nos mantenemos dentro

### Sanity (Free)

| Límite                    | Valor                  | Cómo lo cuidamos                                                         |
| ------------------------- | ---------------------- | ------------------------------------------------------------------------ |
| Documentos                | 10.000                 | Usamos < 200                                                             |
| Solicitudes API CDN / mes | 1 millón               | Lectura solo en servidor con caché; los visitantes no consultan a Sanity |
| Solicitudes API / mes     | 250.000                | Solo el webhook y el Studio (el Studio no cuenta)                        |
| Transferencia / mes       | 100 GB                 | Imágenes con ancho y formato adecuados (`auto=format`)                   |
| Archivos                  | 100 GB                 | Fotos comprimidas antes de subir (< 500 KB)                              |
| Datasets                  | 2, **solo públicos**   | Solo contenido publicable (LOPDP)                                        |
| Roles                     | Administrador y Lector | Todos los editores son admin → control de altas y bajas (§6)             |

Al llegar a un límite, el plan gratis **bloquea** (no cobra): el sitio seguiría
mostrando lo que tiene en caché, pero no se actualizaría hasta el mes siguiente.

**Trampa conocida**: cada proyecto nuevo arranca con una prueba del plan Growth.
Al terminar, los datasets privados pasan a públicos y los roles no-admin a
lectores. No usar nada "privado" durante la prueba.

### Vercel (Hobby)

| Límite                     | Valor    | Cómo lo cuidamos                                           |
| -------------------------- | -------- | ---------------------------------------------------------- |
| Escrituras ISR / mes       | 200.000  | Solo `revalidateTag` desde el webhook; sin `revalidate: N` |
| Funciones en segundo plano | Solo Pro | El webhook responde rápido y revalida por etiqueta         |

Si se excede un límite de Hobby, Vercel **pausa** la función durante hasta 30
días. Es el riesgo operativo principal y se mitiga con la regla anterior.

Nota: el plan Hobby es para uso personal no comercial. Antes de crecer,
confirmar con Vercel que el sitio de la ONG califica (ver riesgos).

## 6. Seguridad, LOPDP y operación

- **Accesos**: una cuenta de Tenpisoft es siempre administradora. Cada año, al
  cambiar la directiva: dar de baja a quien sale, alta a quien entra (checklist
  en el README de `/studio`).
- **Secretos** (en Vercel, nunca en el repo): `SANITY_WEBHOOK_SECRET`,
  `SANITY_REVALIDATE_SECRET` y, si se usa vista previa de borradores,
  `SANITY_API_READ_TOKEN` (solo servidor, nunca `NEXT_PUBLIC_`).
- **IDs públicos**: `NEXT_PUBLIC_SANITY_PROJECT_ID` y `NEXT_PUBLIC_SANITY_DATASET`
  no son secretos.
- **Borradores**: no se leen desde el sitio sin token; el dataset público expone
  solo documentos publicados.
- **Derecho de supresión**: si un miembro pide dejar de aparecer, se borra su
  documento y su foto en Sanity; la página se actualiza con el webhook.
- **Respaldo**: GitHub Action mensual que ejecuta `sanity dataset export` y guarda
  el archivo como artefacto (el contenido ya es público).

## 7. Plan por fases

Cada fase va en su propio PR, con vista previa en Vercel y verificación antes de
fusionar. Durante la migración, `CONTENT_SOURCE=local|sanity` permite volver a los
datos en TypeScript sin redeploy de código.

| Fase                    | Entregable                                                                         | Criterio de aceptación                                                              |
| ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 0. Decisión y cuentas   | Proyecto Sanity creado por Tenpisoft; datasets `production` y `staging`            | Acceso de 1 admin de Tenpisoft + 1 de la directiva                                  |
| 1. Base                 | `next-sanity`, `/studio`, cliente, `/api/revalidate`, webhook, variables en Vercel | Publicar un documento de prueba actualiza el sitio en < 1 min, sin deploy           |
| 2. Miembros             | Esquema `miembro` + script de importación desde los `.ts` actuales                 | /miembros idéntico al actual (comparación visual) y `autorizaPublicacion` respetado |
| 3. Noticias y proyectos | Esquemas + importación + páginas de detalle                                        | Mismas rutas y slugs; sin enlaces rotos                                             |
| 4. Resto                | Aliados, FAQ, áreas, ajustes                                                       | Inicio idéntico al actual                                                           |
| 5. Limpieza             | Borrar datos `.ts` e imágenes migradas; quitar `CONTENT_SOURCE`                    | `pnpm check:datos`, build y QA visual en verde                                      |
| 6. Capacitación         | Guía corta para la directiva (cómo publicar, fotos, qué no publicar)               | La directiva publica una noticia sin ayuda                                          |

Estimación: fases 1–2 ≈ 2–3 días de trabajo; fases 3–5 ≈ 3–4 días; fase 6 ≈ medio día.

## 8. Riesgos y decisiones pendientes

| Riesgo                                                   | Mitigación                                                                   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Exceder escrituras ISR en Hobby → pausa de hasta 30 días | Solo revalidación por etiqueta desde el webhook; monitorear el uso en Vercel |
| Todos los editores son admin (pueden borrar todo)        | Pocos editores, baja anual, respaldo mensual                                 |
| Contenido del dataset es público                         | Esquemas sin campos sensibles + validación en el Studio + skill LOPDP        |
| Vercel Hobby es "uso personal no comercial"              | Consultar a Vercel por escrito sobre el sitio de la ONG                      |
| Retraso entre publicar y ver el cambio                   | Revalidación por etiqueta con lecturas frescas en el webhook                 |

**Decisiones pendientes**

1. ¿Studio embebido en `/studio` o alojado en `sanity.studio`?
2. ¿Quiénes de la directiva serán editores en 2026?
3. ¿Se hará el repo privado tras la migración? (Requiere que solo el dueño de la cuenta de Vercel fusione código, o pasar a Pro.)
