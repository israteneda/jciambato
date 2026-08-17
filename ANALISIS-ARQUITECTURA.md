# Análisis técnico de arquitectura — `jciambato` vs `my-portfolio`

> **Fecha:** 2026-07-31
> **Proyecto analizado:** `jciambato` (branch `develop`)
> **Proyecto de referencia:** `my-portfolio` (`./My-Portfolio/`, untracked)
> **Alcance:** estructura, componentes, wrappers, composición, secciones, responsive y patrones de arquitectura.

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Construcción de componentes](#2-construcción-de-componentes)
3. [Wrappers y composición](#3-wrappers-y-composición--el-problema-1)
4. [Organización por secciones](#4-organización-por-secciones)
5. [Responsive design](#5-responsive-design)
6. [Patrones de arquitectura](#6-patrones-de-arquitectura)
7. [Tabla comparativa](#tabla-comparativa)
8. [Recomendaciones con tradeoffs](#recomendaciones-con-tradeoffs)
9. [Plan de migración](#plan-de-migración)
10. [Anexo: evidencia medida](#anexo-evidencia-medida)

---

## 1. Estructura del proyecto

La reorganización por features ejecutada el 2026-07-27 funcionó. `jciambato` **ya tiene paridad estructural** con `my-portfolio`: `app/(app)/`, `features/`, `components/ui/`, `config/`, `hooks/`, `lib/`, `types/`, `styles/`. El esqueleto está bien.

|                    | `my-portfolio`                              | `jciambato`                                             |
| ------------------ | ------------------------------------------- | ------------------------------------------------------- |
| Route group        | `app/(app)/` + `(root)`, `(docs)`, `(llms)` | `app/(app)/` + `(inicio)`                               |
| Features           | `profile`, `blog`, `products/shopflow`      | 9 features de dominio                                   |
| Utilidades puras   | `src/utils/` (`copy`, `string`, `url`)      | ❌ todo mezclado en `lib/`                              |
| Types              | colocalizados por feature                   | híbrido: `src/types/` global + `features/inicio/types/` |
| `components/` raíz | 40 archivos planos, kebab-case              | subcarpetas `analytics/`, `layout/`, `seo/` + planos    |

### No todo en `my-portfolio` es superior

- Su `components/` raíz es un basurero plano de 40 archivos (`markdown.tsx`, `mdx.tsx`, `embed.tsx`, `icons.tsx`, `command-menu.tsx`…). La carpeta `layout/` de `jciambato` con `Navbar`, `Footer`, `DesktopNav`, `MobileNav` está **mejor** organizada. No tocar.
- Su `data/projects.ts` es un array monolítico. El `features/proyectos/data/{un-archivo-por-proyecto}.ts` + barrel de `jciambato` escala mejor para contenido editorial.

### Lo que sí conviene adoptar

Separación **`lib/` (acoplado al framework) vs `utils/` (funciones puras)**. Hoy `lib/` mezcla:

| Archivo          | Naturaleza         |
| ---------------- | ------------------ |
| `lib/json-ld.ts` | infra Next / SEO   |
| `lib/nav.ts`     | dominio            |
| `lib/share.ts`   | browser API        |
| `lib/utils.ts`   | helper puro (`cn`) |

Son responsabilidades distintas conviviendo en la misma carpeta.

### Inconsistencia de types

`src/types/miembro.ts` es global (correcto, lo consumen varias features), pero `features/inicio/types/aliado.ts` y `faq.ts` están colocalizados. Los aliados y las FAQs **no** son de "inicio" — las FAQ ya se usan en un componente compartido `FAQSection`.

> **Regla a aplicar:** si lo consume más de una feature o `lib/`, va a `src/types/`. Si no, colocalizado.

---

## 2. Construcción de componentes

Es la brecha más grande, y es de **concepto**, no de carpetas.

### `my-portfolio` — composición atómica

```
features/profile/components/experiences/
├── index.tsx                      ← orquesta: Panel + map
├── experience-item.tsx            ← una empresa
├── experience-position-item.tsx   ← un cargo
└── experience-position-icon.tsx   ← un ícono
```

`index.tsx` completo son **19 líneas**. Cada archivo tiene una sola razón para cambiar.

```tsx
// features/profile/components/experiences/index.tsx
export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
```

### `jciambato` — componentes monolíticos

`features/inicio/components/bienvenida.tsx` = **~300 líneas** que hacen, todo junto:

- animación GSAP de líneas
- animación GSAP de blobs
- parallax con `mousemove`
- cálculo de tamaños responsive **en JavaScript** (`getBlobStyles`)
- listener de `resize` con estado
- guard de hidratación (`isMounted`)
- markup del hero
- logos, enlaces externos y navegación lateral

Eso no es un componente: es un **archivo**. Comparar con `about.tsx` de la referencia (19 líneas, una sola responsabilidad).

### Métricas

|                                       | `my-portfolio`                                                                      | `jciambato` |
| ------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| `export default function` en features | **0**                                                                               | **51**      |
| `export function` (named) en features | **45**                                                                              | **4**       |
| Primitivas de composición             | `Panel` / `PanelHeader` / `PanelTitle` / `PanelContent` con `asChild` + `data-slot` | ❌ ninguna  |
| Componentes genéricos                 | `CollapsibleList<T>` con render prop                                                | ❌ ninguno  |

### Por qué importa el named export

No es capricho estilístico. Con `export default`, el barrel puede renombrar libremente y ahí nacen las mentiras:

```ts
// features/nosotros/components/index.ts
export { default as ActividadesAnuales } from "./historia";
```

El componente se llama `ActividadesAnuales` en la página, pero el archivo dice `historia`. Un dev nuevo hace `grep ActividadesAnuales` y **no encuentra la implementación**. Con named exports eso es imposible.

### El patrón `Panel` es el que más falta

```tsx
<Panel id="about">
  <PanelHeader>
    <PanelTitle>About</PanelTitle>
  </PanelHeader>
  <PanelContent>
    <Prose>
      <Markdown>{USER.about}</Markdown>
    </Prose>
  </PanelContent>
</Panel>
```

Un cambio de padding de sección se hace en **un** archivo. En `jciambato`, `valores.tsx`, `mision-vision.tsx`, `historia.tsx`, `beneficios.tsx`… cada uno reimplementa header + espaciado a mano.

---

## 3. Wrappers y composición — el problema #1

Es el hallazgo más grave, y es medible:

```
mx-8 / md:mx-20 / lg:mx-auto / max-w-6xl
→ 57 ocurrencias en 44 archivos
```

**No existe ni un solo componente contenedor en `jciambato`.** Cada sección copia y pega su propio contenedor. Y como es copia-pega manual, ya divergió:

```tsx
// features/nosotros/components/valores.tsx
<div className="mx-8 max-w-6xl sm:mx-20 lg:mx-auto">      // ← sm:

// features/inicio/components/presentacion.tsx
<div className="mx-8 md:mx-20 lg:mx-auto lg:max-w-6xl">   // ← md: + max-w condicional

// components/info-container.tsx
<section className="mx-8 max-w-6xl md:mx-20 lg:mx-auto">  // ← md:
```

Tres variantes del "mismo" contenedor. Si mañana el cliente pide "el contenido debe ser 100 px más ancho", hay que tocar 44 archivos — y se van a olvidar tres.

### Cómo lo resuelve la referencia

Dos niveles, definidos una sola vez:

```tsx
// app/(app)/layout.tsx — nivel shell
<main className="max-w-screen overflow-x-hidden px-2">{children}</main>

// app/(app)/(root)/page.tsx — nivel contenido
<div className="mx-auto md:max-w-3xl">…</div>
```

Y las líneas decorativas de borde, en vez de repetirse en cada sección, son **utilidades CSS** de Tailwind v4:

```css
@utility screen-line-before { … }
@utility screen-line-after  { … }
@utility link { … }
@utility no-scrollbar { … }
```

### Problemas de los dos "contenedores" actuales

#### `components/sub-container.tsx`

El archivo se llama `sub-container` pero exporta `function InfoContainer`. Hay **dos componentes distintos llamados `InfoContainer`** en el proyecto. Bomba de tiempo.

#### `components/info-container.tsx`

Lo peor arquitectónicamente:

```tsx
const lightTextPages = ["/", "/nosotros", "/proyectos", "/miembros", …];
const darkTextPages  = ["/impacto", "/areas-oportunidad", …];
if (pathname.startsWith("/areas-oportunidad/")) …
```

Un componente compartido **conoce el mapa de rutas del sitio entero**. Agregar una página obliga a editar un componente que no tiene nada que ver con esa página.

Es _control coupling_ de manual: el llamador debería decir **qué** quiere (`tone="light"`), no el componente adivinar **quién** lo llama. Además usa `usePathname` + `useEffect` + `useState` para calcular algo que es una prop estática → re-renders innecesarios y flash de color incorrecto en el primer paint. Y lo fuerza a ser Client Component sin necesidad.

### HTML inválido

`app/(app)/layout.tsx` ya renderiza `<main>`, y **12 páginas** vuelven a renderizar `<main>` adentro. `features/inicio/components/bienvenida.tsx` mete un tercero anidado.

Un documento HTML admite un solo `<main>` visible; los lectores de pantalla se rompen con esto. `my-portfolio` tiene el `<main>` únicamente en el layout.

**Páginas afectadas:**

```
app/(app)/areas-oportunidad/[slug]/page.tsx
app/(app)/areas-oportunidad/page.tsx
app/(app)/impacto/page.tsx
app/(app)/involucrate/page.tsx
app/(app)/miembros/page.tsx
app/(app)/nosotros/page.tsx
app/(app)/noticias-eventos/[slug]/page.tsx
app/(app)/noticias-eventos/page.tsx
app/(app)/politica-gestion/page.tsx
app/(app)/politica-privacidad/page.tsx
app/(app)/proyectos/[slug]/page.tsx
app/(app)/proyectos/page.tsx
```

Más `features/inicio/components/bienvenida.tsx` y los tres de `features/politica-privacidad/components/`.

---

## 4. Organización por secciones

### `my-portfolio`

Una sección = `Panel` + datos + item. Todas idénticas en forma:

```tsx
export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 …">({PROJECTS.length})</sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
```

La página raíz solo compone y separa:

```tsx
<div className="mx-auto md:max-w-3xl">
  <ProfileCover />
  <ProfileHeader />
  <Separator />
  <Overview />
  <Separator />
  <About />…
</div>
```

### `jciambato`

La duplicación más costosa es `bienvenida.tsx`: existe en **9 features** y son ~85 % idénticas:

```tsx
// nosotros, miembros, proyectos, involucrate… todos con la misma forma:
<section className="…">
  <RotatedText text="…" />
  <div className="relative w-full pt-48 pb-32">
    <InfoContainer subtitle="…" title="…" description="…" />
  </div>
  <BackgroundImage image="…" />
  <RowScroll />
</section>
```

Nueve archivos que solo cambian **cuatro strings**. Eso es un `<PageHero>` con props, no nueve componentes.

Y las clases ya divergieron. En `features/nosotros/components/bienvenida.tsx`:

```tsx
className = "h-[190 fixed inset-0 box-border w-full items-center overflow-hidden pb-20";
//         ^^^^^^ corchete sin cerrar → Tailwind descarta la clase silenciosamente
```

Ese es exactamente el tipo de bug que la duplicación esconde.

### Otras oportunidades de extracción

| Situación                                                                                                 | Extracción propuesta |
| --------------------------------------------------------------------------------------------------------- | -------------------- |
| `valores.tsx` mapea el `<article>` inline                                                                 | `<ValorItem>`        |
| `miembros.tsx`, `senadores.tsx`, `junta-directiva.tsx`, `pasados-presidentes.tsx` — 4 grillas de personas | `<PersonGrid>`       |
| Header eyebrow + título + descripción repetido en ~15 secciones                                           | `<SectionHeader>`    |

### Espaciado vertical sin escala

Cuatro ritmos distintos conviviendo:

```
my-28                              → proyectos-destacados
py-14 md:py-28                     → valores
pt-20 pb-20 md:pt-28 md:pb-28 …    → presentacion
pt-48 pb-32                        → bienvenida
```

---

## 5. Responsive design

|                      | `my-portfolio`                     | `jciambato`                                       |
| -------------------- | ---------------------------------- | ------------------------------------------------- |
| Estrategia           | 100 % CSS, mobile-first            | CSS + **JavaScript midiendo el viewport**         |
| Breakpoints usados   | prácticamente solo `md:`           | `sm:` `md:` `lg:` `xl:` sin criterio fijo         |
| Ancho máximo         | `md:max-w-3xl`, un valor, un lugar | `max-w-6xl` / `max-w-4xl` / `max-w-xl` esparcidos |
| Padding lateral      | `px-2` en el shell                 | `mx-8 md:mx-20` × 44 archivos                     |
| Guard de hidratación | `useIsClient`                      | `useState(isMounted)` reimplementado a mano       |

### El problema concreto

`features/inicio/components/bienvenida.tsx`:

```tsx
const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

const isMobile = windowSize.width < 640;
const isTablet = windowSize.width >= 640 && windowSize.width < 1024;

// …y luego getBlobStyles() devuelve width/height/left/top calculados en JS
```

Esto hace responsive **en runtime con JavaScript**. Consecuencias reales:

1. El servidor renderiza siempre el layout desktop → en un móvil hay un **salto visual al hidratar**.
2. Cada píxel de resize dispara un **re-render de todo el hero**.
3. No es testeable sin un browser real.

Tailwind hace esto gratis en CSS: sin JS, sin re-renders, sin flash.

> **Lo irónico:** `useMediaQuery` ya existe en `src/hooks/` (se copió de `my-portfolio` en la sesión anterior) y este componente no lo usa.

### Heroes con `fixed` + espaciador mágico

```tsx
// app/(app)/nosotros/page.tsx
<Bienvenida />
<div className="h-160" aria-hidden="true"></div>   {/* ← compensa el hero fixed */}
<div className="bg-jci-bg absolute top-0 h-full w-full"
     style={{ transform: "translateY(99.9vh)" }} />
```

Un hero `fixed inset-0` + un espaciador de altura fija + un fondo posicionado con `99.9vh` inline. Esto se rompe con cualquier cambio de contenido y no responde bien en móvil (100 vh vs barra de direcciones).

### Frontera RSC

`app/(app)/(inicio)/page.tsx` arranca con `"use client"`.

Consecuencias:

- **Todo el árbol del home** va al bundle del cliente.
- La página **no puede exportar `metadata`** (Next lo prohíbe en Client Components).

Números actuales: **50 de 119** archivos `.tsx` son client. `my-portfolio` no tiene `"use client"` en **ninguna** página; lo pone solo en las hojas que realmente lo necesitan.

La página de inicio no necesita serlo — el `"use client"` está ahí solo porque los hijos lo necesitan, y eso se resuelve marcando los hijos.

---

## 6. Patrones de arquitectura

| Patrón                                          | `my-portfolio`                                  | `jciambato`                        |
| ----------------------------------------------- | ----------------------------------------------- | ---------------------------------- |
| Feature-based organization                      | ✅                                              | ✅ ya presente                     |
| Component Composition (compound)                | ✅ `Panel.*`                                    | ❌                                 |
| Container / Presentational                      | ✅ `index.tsx` orquesta / `*-item.tsx` presenta | ⚠️ parcial                         |
| Layout Components                               | ✅ shell + `Panel`                              | ⚠️ solo shell                      |
| Shared UI Components                            | ✅ `ui/` shadcn puro                            | ✅ ya purgado                      |
| Generic / Polymorphic (`asChild`, render props) | ✅ `Slot`, `CollapsibleList<T>`                 | ❌                                 |
| Custom Hooks                                    | ✅ 8 hooks                                      | ✅ 6 hooks                         |
| Design tokens semánticos                        | ✅ `edge`, `muted`, `link` + `@utility`         | ⚠️ marca sí, semánticos sin mapear |

### Design tokens

`--color-jci-*` está definido con la paleta oficial (correcto). Pero:

- Los tokens semánticos de shadcn siguen siendo los **grises zinc por defecto** → los componentes shadcn no hablan la marca.
- Aparecen hexadecimales crudos en features: `bg-[#003D62]` en `bienvenida.tsx`, gradientes con `#7FFFD4` / `#A3E635` / `#0e3749`. Ninguno está en un token.
- **Cero** `@utility` propias, mientras la referencia abstrae ahí sus patrones repetidos.

---

## Tabla comparativa

| Aspecto                         | `my-portfolio`                                                        | `jciambato`                                                                                                          | Recomendación                                                                                                        | Prioridad       |
| ------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Organización de carpetas**    | features + `lib`/`utils` separados; `components/` plano (40 archivos) | features ✅; `lib/` mezcla todo; `components/` con subcarpetas ✅                                                    | Separar `utils/` de `lib/`. **Mantener** `layout/`, `seo/`, `analytics/` — son mejores que el plano de la referencia | Media           |
| **Organización de componentes** | 45 named exports, archivos de 20–60 líneas                            | 51 default exports, archivos de hasta 300 líneas                                                                     | Migrar a named exports; partir monolitos en `index` + `*-item`                                                       | Alta            |
| **Wrappers**                    | Contenedor definido 2 veces en total                                  | `mx-8 md:mx-20 lg:mx-auto max-w-6xl` × **57 en 44 archivos**                                                         | Crear `<Container>` y reemplazar todo. **El cambio de mayor ROI del proyecto**                                       | **Crítica**     |
| **Layouts**                     | `<main>` solo en el layout                                            | `<main>` en layout + **12 páginas** + 1 componente                                                                   | Quitar `<main>` de todas las páginas                                                                                 | Alta (bug real) |
| **Contenedores de sección**     | `Panel` compound component                                            | `info-container` con mapa de rutas hardcodeado                                                                       | Crear `<Section>` / `<SectionHeader>`; `InfoContainer` recibe `tone` por prop                                        | Alta            |
| **Responsive**                  | CSS puro, mobile-first, 1 breakpoint real                             | JS midiendo `window.innerWidth` + breakpoints ad-hoc                                                                 | Pasar `getBlobStyles` a clases CSS; usar `useMediaQuery` si hace falta JS                                            | Alta            |
| **Componentes reutilizables**   | `CollapsibleList<T>`, `Slot`, genéricos                               | Ninguno genérico                                                                                                     | Extraer `<PersonGrid>`, `<SectionHeader>`, `<PageHero>`                                                              | Media           |
| **Secciones**                   | Todas con la misma forma (`Panel`)                                    | 9 `bienvenida.tsx` ~85 % duplicados, uno con clase rota                                                              | Unificar en `<PageHero>` con props                                                                                   | Alta            |
| **Nomenclatura**                | 100 % kebab-case, named exports                                       | Mezcla PascalCase/kebab; typo `noticias-eventos-incio`; alias `ActividadesAnuales→historia`; `index.tsx` como barrel | Kebab-case en todo; barrels en `.ts`; eliminar alias mentirosos                                                      | Media           |
| **Design tokens**               | Semánticos + `@utility` propias                                       | Marca ✅, semánticos sin mapear, hexes crudos en features                                                            | Mapear `--primary` / `--secondary` a la paleta JCI; erradicar hexes                                                  | Media           |
| **RSC / bundle**                | Cero páginas client                                                   | `(inicio)/page.tsx` es `"use client"` completo                                                                       | Bajar `"use client"` a las hojas                                                                                     | Alta            |
| **Escalabilidad**               | Sección nueva = 1 archivo de 20 líneas                                | Sección nueva = copiar 100 líneas de otra                                                                            | Consecuencia directa de `Container` + `Section`                                                                      | Alta            |
| **Legibilidad**                 | Se lee la intención                                                   | Se lee la implementación (Tailwind crudo en todos lados)                                                             | Ídem                                                                                                                 | Media           |
| **Mantenibilidad**              | Cambio global = 1 archivo                                             | Cambio global = 44 archivos                                                                                          | Ídem                                                                                                                 | **Crítica**     |

---

## Recomendaciones con tradeoffs

### 1. `<Container>` — prioridad crítica

**Ventaja:** un solo punto de cambio para ancho, padding y comportamiento responsive del sitio entero. Elimina la divergencia `sm:`/`md:` que ya existe.

**Desventaja:** un nivel más de indirección; hay que aprender la API (`size="wide|default|narrow"`).

**Veredicto:** el tradeoff prácticamente no existe. 57 ocurrencias es deuda pura.

```tsx
// src/components/layout/container.tsx
import { cn } from "@/lib/utils";

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  size = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & { size?: keyof typeof sizes }) {
  return (
    <div
      data-slot="container"
      className={cn("mx-8 md:mx-20 lg:mx-auto", sizes[size], className)}
      {...props}
    />
  );
}
```

### 2. `<Section>` + `<SectionHeader>` — el `Panel` del dominio

No copiar `Panel` tal cual: sus bordes y líneas (`screen-line-before`) son estética de `my-portfolio`. Copiar el **patrón**, no el CSS.

```tsx
// src/components/layout/section.tsx
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("relative z-10 py-14 md:py-28", className)}
      {...props}
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionHeaderProps) { … }
```

**Ventaja:** ritmo vertical consistente en todo el sitio, hoy inexistente (cuatro escalas distintas conviviendo).

**Desventaja:** las secciones muy custom (`Bienvenida` del home) no encajan y necesitan escape hatch → resuelto aceptando `className`.

### 3. `InfoContainer` — eliminar el `usePathname`

```tsx
// Antes: el componente adivina quién lo llama
<InfoContainer subtitle="…" title="…" description="…" />

// Después: el llamador declara qué quiere
<InfoContainer tone="light" subtitle="…" title="…" description="…" />
```

**Ventaja:** desacopla del router, elimina `useState` + `useEffect` + re-render + flash, y permite que vuelva a ser **Server Component**.

**Desventaja:** hay que tocar los ~9 sitios que lo usan. Aproximadamente una hora.

### 4. Named exports

**Ventaja:** grep confiable, sin alias mentirosos, mejor auto-import del IDE, tree-shaking más predecible.

**Desventaja:** hay que tocar 51 archivos + sus barrels. Es mecánico pero no es gratis.

**Veredicto:** hacerlo por feature, incremental. Sin prisa.

### 5. Lo que NO se debe copiar de `my-portfolio`

| Elemento                         | Motivo                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| `components/` plano              | Las subcarpetas actuales de `jciambato` son mejores          |
| `data/` monolítico               | El archivo-por-entidad escala mejor para contenido editorial |
| `registry/`, `__registry__/`     | Infra de sitio de componentes públicos — no aplica           |
| Plugins `rehype`/`remark`        | Exclusivos de procesamiento MDX/blog — no aplica             |
| `Panel` con `screen-line-before` | Firma visual de esa marca, no de JCI                         |

---

## Plan de migración

Ordenado por **beneficio ÷ esfuerzo**.

> **Estado al 2026-08-16 (actualizado):** Fase 0 ✅ COMPLETA. Fase 1 ✅ COMPLETA — Container ampliado a `max-w-7xl` (decisión de diseño 2026-08-09, más ancho y elegante), Section default `py-24 md:py-34` (ritmo dominante real del sitio), bienvenidas de inicio/involucrate alineadas al estándar `fixed`, y cierre final 2026-08-14 (restos del carril padded erradicados, grises alineados a marca, z-index redundantes limpios). **Fase 2 ✅ COMPLETA el 2026-08-15** (ver abajo, con las decisiones tomadas en ejecución). **Fase 3 ✅ COMPLETA el 2026-08-16** (ver abajo). Pendiente Fase 4.

### Fase 0 — Bugs · ✅ COMPLETA

- [x] Quitar `<main>` de las 12 páginas y de `features/inicio/components/bienvenida.tsx`. Solo el layout lo lleva.
- [x] `features/nosotros/components/bienvenida.tsx`: reparar `className="h-[190 fixed inset-0 …"` → `h-160 md:h-190`.
- [x] Renombrar `features/inicio/components/noticias-eventos-incio.tsx` → `noticias-eventos.tsx` (+ barrel).
- [x] `components/sub-container.tsx`: alinear nombre de archivo y export. Verificado: 3 consumidores reales (historia, cursos, formas-actuar), se conserva.

### Fase 1 — Container · ✅ COMPLETA

- [x] Crear `src/components/layout/container.tsx`. Ancho canónico: **`max-w-7xl` (1280px)** — decisión 2026-08-09 (reemplaza el `max-w-289`/`max-w-6xl`).
- [x] Reemplazar las 57 ocurrencias del patrón padded `mx-8 max-w-6xl md:mx-20 lg:mx-auto`. Pilotos migrados: inicio, nosotros, slug de áreas, explora, siguiente-area.
- [x] Migrados en el cierre (2026-08-09): `proyectos/slug/presentacion`, `involucrate/{cursos,beneficios}`, `miembros/{junta-directiva,pasados-presidentes}`. `pasados-presidentes` migrado de `<section>` crudo a `<Section className="z-10 py-16">` (mantiene su ritmo y su z defensivo).
- [x] **Junta Directiva:** alineada al `max-w-7xl` del contenedor. Requirió ajustar las imágenes: los assets reales son 1414×2000 (retrato 0.707) pero el `<Image width={800} height={800}>` mentía la proporción y `md:h-96` recortaba a cuadrado. Ahora `width/height=1414/2000` + `aspect-[1414/2000] object-cover` — proporción real, sin recorte agresivo, placeholder "Próximamente" con el mismo ratio.
- [ ] **Variantes NO migradas (diseño distinto al padded):** `descripcion` (card blanca `mx-auto max-w-7xl bg-white`), `politica-privacidad/*` (3, centrados `mx-auto px-8 md:max-w-6xl` con z-10), `noticias-eventos/slug/detalles`, `construccion` (swiper `max-w-4xl`/`max-w-3xl`). Son layouts de contenido centrados, no carriles padded — no aplica Container sin rediseño. (`involucrate/acciones` era una de estas; migrada a Section `py-0 md:py-0` el 2026-08-09, card blanca al centro sin Container.)
- [x] Fijar la escala de espaciado: Section default **`py-24 md:py-34`** (ritmo dominante real; antes `py-16 md:py-24` que nadie usaba y JSDoc decía `py-14 md:py-28`). Heroes full-bleed sobrescriben con `py-0`. Secciones cuyo contenido gobierna su propio ritmo usan **`py-0 md:py-0`**: `acciones` (card blanca) y `formulario` (Hablemos `mt-8 md:mt-16` + bloque gris `mt-16 md:mt-60` + `-translate-y-24` de superposición) — el default del Section creaba franja transparente excesiva entre secciones (Cursos cierra con 136px + Formulario abría con otros 136px).
- [x] Limpieza de z-index — ✅ ejecutada el 2026-08-09: eliminados dobles `z-10` anidados (explora, siguiente-area, not-found, error), `z-1` interno de formulario, `z-20` de Link en Carousel. `error.tsx` reescrito (tenía 2 layouts completos apilados por merge mal hecho en fase 1). Conservados con justificación: Navbar z-20, scroll-top z-50, Chatbot z-9999, z-10 defensivos de cursos/beneficios (hero sticky de involucrate sin z-index — el z de las secciones evita que el contenido pase por encima del hero pegado).
- [x] **Cierre Fase 1 (2026-08-14, commit `7cb15fa`):** erradicados los últimos `mx-8` sueltos fuera de Container (`proyectos-por-area` → `px-8 md:px-10` como layout propio; `politica-gestion`/`politica-privacidad` pierden `md:mx-8`/`mx-8` en sus barras), grises de Tailwind alineados a marca (`bg-gray-50` → `bg-jci-bg` + `py-0` en las secciones de políticas; simplificado el wrapper `bg-white` del tabpanel de privacidad), `z-20` redundante eliminado de los links de `cursos`/`formas-actuar` y `z-50` del indicador de `Carousel`, `max-w-6xl` del h1 de `presentacion` retirado, fechas de las políticas actualizadas a 2026-07, y `tooltip.tsx` con `rounded-xs`. Verificado en el navegador: el tabpanel de privacidad se ve correcto sin el card blanco.

### Fase 2 — Section + PageHero · ✅ COMPLETA (2026-08-15)

> **Estándar de bienvenida verificado el 2026-08-09 (todavía sin componente):** 7 de 9 bienvenidas comparten ya la MISMA clase marcadora (`fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20`): `nosotros`, `involucrate`, `miembros`, `proyectos`, `noticias-eventos`, `politica-gestion`, `politica-privacidad`. Difieren SOLO en 4 strings (subtitle, title, description, image+rotatedText) → el `<PageHero>` se vuelve un molde trivial. **Dos sub-variantes de página:**
>
> - **Variante completa** (solo `nosotros`, `involucrate`): tras `<Bienvenida />` → `<div className="h-160">` (compensa el hero fixed) + `<div className="bg-jci-bg absolute top-0 h-full w-full translate-y-[99.9vh]">` (el contenedor de fondo blanco que cubre el hero al scrollear).
> - **Variante simple** (`miembros`, `proyectos`, `noticias-eventos`, `politica-gestion`, `politica-privacidad`): sin el bloque `translate-y-[99.9vh]` — el contenido siguiente tapa el hero fixed naturalmente.
> - `involucrate` era el **outlier** (hero `sticky top-0 h-[760px]` + `<header pt-48 pb-32>` que desplazaba el contenido); alineado a la variante completa el 2026-08-09. Las 2 excepciones reales (sin imagen / con GSAP) siguen siendo `inicio` e `impacto` — no fuerzan el molde.

**Decisiones tomadas en ejecución (2026-08-15):**

- **`PageHero` en `src/components/layout/page-hero.tsx`** — Server Component con 3 variantes y `tone`:
  - **`variant="fixed"`** (default): replica `fixed inset-0 box-border flex h-160 w-full items-center overflow-hidden pb-0 md:h-190 md:pb-20`. Orden DOM fiel al original: `RotatedText` → `div.w-full > InfoContainer` → `BackgroundImage` → `RowScroll`.
  - **`variant="section"`**: `<Section py-50>` + `RotatedText` opcional + `InfoContainer` + `RowScroll`. Usado por `impacto` (con scroll) y `areas-oportunidad` (sin scroll).
  - **`variant="full"`**: `<Section py-0>` + caja `h-screen` con `BackgroundImage` + `BorderFrame` opcional + `InfoContainer`; usado por el slug de áreas (hero a pantalla completa con imagen).
  - Props: `subtitle`, `title`, `description`, `tone="light"|"dark"` (default `light`), `variant`, `rotatedText?`, `image?`, `imageAlt?`, `border?`, `className?`, `children?`.
- **`InfoContainer` → Server Component con prop `tone`** (default `light`). Borrado el `usePathname` + `useState` + `useEffect` con el mapa de rutas hardcodeado. Wrapper `relative z-10` para quedar sobre el `BackgroundImage` absolute (crítico — sin z-index el texto queda debajo de la imagen).
- **`SectionHeader`**: renombrado `sub-container.tsx` → `src/components/layout/section-header.tsx` (el archivo mentía su nombre: se llamaba `sub-container` pero exportaba `InfoContainer`). 4 consumidores actualizados: `cursos`, `formas-actuar`, `historia`, `mision-vision`.
- **`RowScroll` unificado** (un solo componente de scroll-down, sin duplicación): props `size="sm"|"md"` (default `md` — flecha 44px `h-11`), `mobileVariant="arrow"|"label"` (default `arrow`), `mobileOffset?` (px; default 112 = `bottom-28`, 0 si `label`). El slug ya no tiene `SlugHeroExtras` ni `children` de scroll: la variante `full` del PageHero hornea `<RowScroll size="sm" mobileVariant="label" mobileOffset={0} />` (flecha 30px + nav rotada "Descubre más" en mobile). `RowScroll` es Client Component (usa `window.scrollTo`).
- **`BorderFrame` → Client Component** que auto-gestiona `useScroll()` internamente; la prop `isScrolled` desapareció de su API. Consumidores actualizados (`inicio`).
- **Prop `scroll` eliminada de PageHero**: todos los heroes llevan botón de scroll; la config se hornea por variante en vez de exponerse.
- **`inicio/bienvenida.tsx`**: solo limpieza (fuera del molde — rediseño futuro sin GSAP). Se quitó el `useScroll` (ya lo gestiona BorderFrame) y el `<div>` de video comentado.
- **Navbar con `tone` por ruta** (`src/lib/nav.ts: getHeroTone`): las páginas sin imagen de fondo (`impacto`, `areas-oportunidad`, `politica-gestion`, `politica-privacidad`) tienen hero sobre fondo claro; el navbar transparente en estado inicial usaba texto blanco y era invisible. `NavbarWrapper` ahora calcula `data-tone` con `usePathname`; DesktopNav/MobileNav/logo alternan texto `white`/`jci-black` y el logo usa la variante de color cuando `tone="dark"`. El CTA "Involúcrate" sigue amarillo siempre.

- [x] Crear `src/components/layout/section.tsx` con `Section` (ya existe **sin** `SectionHeader`; `SectionHeader` creado en su lugar).
- [x] `InfoContainer` → prop `tone`, borrar `usePathname`, volverlo Server Component.
- [x] Unificar los 9 `bienvenida.tsx` en un `<PageHero eyebrow title description image rotatedText />`.
  - **Migrados directo:** `nosotros`, `miembros`, `proyectos`, `involucrate`, `areas-oportunidad`, `noticias-eventos`, `politica-gestion`, `politica-privacidad`, slug de áreas.
  - **Requieren adaptación específica:** `inicio/bienvenida.tsx` (blobs + GSAP) e `impacto/bienvenida.tsx` (sin imagen de fondo). `impacto` migró al molde `variant="section"`; `inicio` queda fuera hasta Fase 3.

### Fase 3 — Responsive + RSC · ✅ COMPLETA (2026-08-16)

> **Alcance real ajustado en ejecución:** la limpieza de Fase 2 ya había eliminado blobs, GSAP, `windowSize`, `getBlobStyles` e `isMounted` de `inicio/bienvenida.tsx` (verificado con grep: cero resultados). El rediseño de la bienvenida con librerías de animación adicionales se **difiere deliberadamente** al final del plan. El patrón hero `fixed` + espaciador quedó **aprobado** como está (es el mecanismo del carril que se superpone con el `background image`); en `miembros` se elimina el `translate-y-[99.9vh]` y se sube `h-160` → `h-190` porque sus grids son demasiado altos por el número de miembros.

- [x] Quitar `"use client"` de `app/(app)/(inicio)/page.tsx` y de las hojas que no usan hooks: `inicio/components/{bienvenida,presentacion,grupo,preguntas-frecuentes}.tsx`. Ninguna usa `useState/useEffect/useRef` propios; sus hijos interactivos (`Button`, `BackgroundText`, `Swiper`, `Accordion`, `BorderFrame`, `RowScroll`, `ScrollNav`) ya son Client Components.
- [x] `ui/accordion.tsx` **no requirió** `"use client"` (Base UI lo maneja internamente) — verificado con `pnpm build` exitoso. No se tocó.
- [x] Metadata de la home: **no se agregó** — decisión tomada en revisión (2026-08-16). El root layout ya la provee por herencia (`title.default` + `template` + `description` + `canonical` en `src/app/layout.tsx`), y un `<title>` de homepage con el nombre de la marca ("JCI Ambato — Unidos Construyendo un Futuro de Liderazgo") impacta más que uno prefijado con "Inicio — …". Era la única página que no podía exportarla por ser Client Component, pero "bloqueada de exportar" ≠ "sin metadata".
- [x] Verificado: `pnpm tsc --noEmit` ✅, `pnpm build` ✅ (33 rutas, home estática), `pnpm lint` ✅.
- [x] Patrón hero `fixed` + espaciador: **aprobado sin cambios** en `nosotros`, `involucrate`, `proyectos`, `noticias-eventos` (con `translate-y-[99.9vh]`), `miembros` (sin `translate-y`, `h-190`), `politica-gestion`, `politica-privacidad` (`h-160`).
- [x] **Select responsive de filtros** (mismo día): los tabs de categoría (`lg:flex`) desaparecían en pantallas pequeñas sin dejar filtro. Se reemplazó el bloque comentado (API vieja e inexistente) por un `Select` de Base UI (`lg:hidden`, complemento exacto) en `proyectos-por-area.tsx` y `noticas-eventos.tsx`. `value` = índice de categoría (0 = Todos) → cero cambios en la lógica de filtrado/paginación. Corregido además el bug latente del bloque comentado, que usaba `sm:hidden` (en tablet quedaba sin filtro). Ajuste posterior: Base UI requiere la prop `items` para que `SelectValue` muestre el label en vez del índice crudo (0,1,2…), y el trigger pasó de `max-w-xs` a `w-full` para usar todo el ancho del carril (el dropdown hereda `w-(--anchor-width)`).
- [x] **Hook `useFilterableGrid`** (2026-08-16): `proyectos-por-area.tsx` y `noticas-eventos-por-tipo.tsx` duplicaban ~45 líneas de estado de filtro + `selectItems` + paginación. Extraído a `src/hooks/use-filterable-grid.ts` (`items`, `categories`, `getItemsBySlug`, `pageSize` → `{ activeIndex, selectItems, visibleItems, hasMore, handleCategoryChange, loadMore }`). Cada página conserva su JSX (card, grouping 2 vs 3, Container en noticias). Además se eliminó el `<Section>` duplicado: los orquestadores (`proyectos.tsx`, `noticas-eventos.tsx`) son los únicos dueños de la sección; los subcomponentes renderizan fragment. Corregido también el `id` duplicado del heading sr-only (`noticias-contenido-heading` vs `proyectos-contenido-heading`). Colores de debug de testing visual eliminados.
- [x] **Renames semánticos y hoist de doble-llamado** (2026-08-16): `NoticiaEvento.url` → `slug` (era un segmento de ruta, no una URL; `getNoticiaEventoBySlug` ya comparaba `noticia.url === slug`). Eliminado `Proyecto.url` (se derivaba del slug; Carousel ahora usa `href={`/proyectos/${proyecto.slug}`}`). `getAllProyectos()`/`getAllNoticiasEventos()` se llamaban DOS veces por página (`.length` + `items`); se hoistean a una constante. Pendiente: decidir unificación `nombre`/`titulo` (afecta hero del Carousel, es decisión de diseño visible). El destacado `mejor-presidencia-local-2025` se mantiene como está (decisión: no crear proyecto fantasma para un premio; es link muerto conocido).

### Fase 4 — Consistencia · progresivo, sin fecha

- [ ] Named exports, feature por feature. Eliminar el alias `ActividadesAnuales`.
- [ ] Kebab-case en `components/`: `AnimatedNumber.tsx` → `animated-number.tsx`, `Carousel.tsx`, `Chatbot.tsx`, `FAQSection.tsx`, `LaunchCountdown.tsx`, `Breadcrumbs.tsx`, `Clarity.tsx`, `ChatbotWrapper.tsx`.
- [ ] Barrels `index.tsx` → `index.ts` en `politica-gestion` y `politica-privacidad`.
- [ ] Crear `src/utils/` para funciones puras; dejar `lib/` solo para lo acoplado a Next/browser.
- [ ] Mapear tokens semánticos de shadcn a la paleta JCI; erradicar `#003D62` y demás hexes.
- [ ] Extraer `<PersonGrid>` de las 4 secciones de miembros.
- [ ] Mover `features/inicio/types/{aliado,faq}.ts` a `src/types/` (los consume código compartido).

---

## Anexo: evidencia medida

Comandos ejecutados el 2026-07-31 sobre `develop`.

### Duplicación del contenedor

```
$ rg "mx-8|md:mx-20|lg:mx-auto|max-w-6xl|max-w-7xl|container mx-auto" src --count
→ 57 ocurrencias en 44 archivos
```

### Estilo de exports

| Métrica                                     | `my-portfolio` | `jciambato` |
| ------------------------------------------- | -------------- | ----------- |
| `export default function` en `src/features` | 0 archivos     | 51 archivos |
| `export function` en `src/features`         | 45 archivos    | 4 archivos  |

### Client Components

| Métrica                     | `my-portfolio` | `jciambato`             |
| --------------------------- | -------------- | ----------------------- |
| Archivos con `"use client"` | 51             | 50                      |
| Total `.tsx`                | 133            | 119                     |
| Páginas con `"use client"`  | 0              | 1 (`(inicio)/page.tsx`) |

### `<main>` duplicado

12 archivos en `app/(app)/**/page.tsx` + `app/(app)/layout.tsx` + `features/inicio/components/bienvenida.tsx` + 3 en `features/politica-privacidad/components/`.

### Utilidades CSS propias

|                      | `my-portfolio`                                                                | `jciambato` |
| -------------------- | ----------------------------------------------------------------------------- | ----------- |
| `@utility` definidas | 5 (`no-scrollbar`, `link`, `screen-line-before`, `screen-line-after`, `step`) | 0           |
| `@custom-variant`    | 2                                                                             | 1           |

---

## Conclusión

La arquitectura de carpetas ya está a la altura — eso quedó resuelto en la reorganización del 2026-07-27.

Lo que faltaba era **abstracción de layout**. Hay componentes que saben demasiado de CSS y nada de composición. Las **fases 0 a 3** quedaron ejecutadas al 2026-08-16: eliminan aproximadamente el 80 % del dolor de mantenimiento actual y dejan el árbol RSC limpio (página de inicio server, con metadata).

Recorrido de ejecución completado: Fase 0, Fase 1, Fase 2 y Fase 3 se terminaron antes de tocar cualquier otra cosa. El rediseño de la bienvenida (con librerías de animación adicionales) queda como trabajo futuro al cierre del plan.
