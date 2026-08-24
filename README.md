# JCI Ambato - Página Web Oficial

<div align="center">

![JCI Ambato Logo](/public/images/marca/jci-ambato-bw.webp)

**Unidos Construyendo un Futuro de Liderazgo**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.18.2-F69220?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4.15.0-black?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)

</div>

**JCI Ambato** es la plataforma web oficial de la Cámara Junior Internacional de Ambato, una organización dedicada al desarrollo del liderazgo juvenil y la generación de impacto positivo en la comunidad.

La aplicación presenta información institucional, proyectos, noticias, eventos, oportunidades de participación y contenidos relacionados con la organización.

![Previsualización de la plataforma](/public/images/preview-welcome.png)

## Arquitectura del Proyecto

El proyecto utiliza una arquitectura basada en funcionalidades (**Feature-Based Architecture**), permitiendo organizar cada módulo del sistema de manera independiente y escalable.

La estructura separa responsabilidades entre:

- **Shell global** — root layout con Navbar, Footer y providers compartidos.
- Rutas y layouts de aplicación.
- Componentes reutilizables.
- Funcionalidades específicas del negocio.
- Configuraciones globales.
- Utilidades puras (separadas de lib acoplada al framework).
- Tipos y definiciones TypeScript.

### Shell global (root layout)

`src/app/layout.tsx` es el **SiteShell** de toda la aplicación. Contiene Navbar, Footer, NavbarToneProvider y `<main>`. El route group `(app)` es puramente organizativo — no tiene layout propio.

```
RootLayout (Server Component)
│
├── <html> + <head> (metadata, JSON-LD, GTM, fonts)
│
└── <body>
     └── Providers (Client — analytics, chatbot, clarity)
          └── NavbarToneProvider (Client — tone override state)
               ├── Navbar
               ├── <main>{children}</main>
               │    ├── (app)/ → páginas del sitio
               │    ├── not-found → 404 global
               │    └── error → Error Boundary global
               ├── Footer
               └── ScrollTop
```

- `error.tsx` y `not-found.tsx` están en `src/app/` (no en `(app)/`) y ya renderizan dentro del shell.
- `global-error.tsx` es el Error Boundary del root layout mismo — captura errores que `error.tsx` no puede (errores en `layout.tsx` o en el árbol de providers). Renderiza su propio `<html>` y `<body>` porque el shell original se destruye.
- El tone del navbar se gestiona por contexto (`NavbarToneProvider`), no por `usePathname` en componentes hijos.

### Estructura de archivos

```text
src/
├── app/                        # Rutas y layouts — Next.js App Router
│   ├── layout.tsx              # Shell global (Navbar + Footer + providers)
│   ├── not-found.tsx           # 404 global
│   ├── error.tsx               # Error Boundary (dentro del shell)
│   ├── global-error.tsx        # Error Boundary del root layout (fuera del shell)
│   ├── providers.tsx           # Client boundary (analytics, chatbot)
│   ├── (app)/                  # Route group organizativo (sin layout propio)
│   │   ├── (inicio)/
│   │   ├── areas-oportunidad/
│   │   ├── impacto/
│   │   ├── involucrate/
│   │   ├── miembros/
│   │   ├── nosotros/
│   │   ├── noticias-eventos/
│   │   ├── politica-gestion/
│   │   ├── politica-privacidad/
│   │   └── proyectos/
│   ├── api/
│   ├── og/
│   ├── robots.ts
│   └── sitemap.ts
├── components/                 # Componentes reutilizables globales
│   ├── layout/                 # Componentes de layout (Container, Section, etc.)
│   ├── ui/                     # Componentes shadcn/ui
│   ├── analytics/
│   └── seo/
├── config/                     # Configuraciones generales (site, fonts, SEO)
├── contexts/                   # React contexts (NavbarToneProvider)
├── features/                   # Módulos organizados por funcionalidad
│   ├── areas-oportunidad/
│   ├── impacto/
│   ├── inicio/
│   ├── involucrate/
│   ├── miembros/
│   ├── nosotros/
│   ├── noticias-eventos/
│   ├── politica-gestion/
│   ├── politica-privacidad/
│   └── proyectos/
├── hooks/                      # Custom hooks compartidos
├── lib/                        # Lógica acoplada al framework (Next.js, SEO, browser)
├── styles/                     # Estilos globales (Tailwind)
├── types/                      # Definiciones TypeScript compartidas
└── utils/                      # Funciones puras (cn, nav helpers)
```

### Componentes de layout

Componentes compartidos que definen la estructura visual del sitio:

| Componente | Archivo | Responsabilidad |
|---|---|---|
| `Container` | `components/layout/container.tsx` | Ancho max-w-7xl, padding responsive. Un solo punto de cambio para todo el sitio. |
| `Section` | `components/layout/section.tsx` | Ritmo vertical py-24 md:py-34. Base para todas las secciones. |
| `PageHero` | `components/layout/page-hero.tsx` | Hero unificado con 3 variantes (fixed, section, full). |
| `SectionHeader` | `components/layout/section-header.tsx` | Header de sección (eyebrow + título + descripción). |
| `PersonGrid` | `components/layout/person-grid.tsx` | Grilla de personas reutilizable (miembros, junta, pasados). |
| `NavbarToneProvider` | `contexts/navbar-tone-context.tsx` | Contexto que gestiona tone light/dark del navbar. |

## Stack Tecnológico

### Frontend

- **[Next.js 16](https://nextjs.org/)** — Framework React basado en App Router, utilizado para construir una aplicación optimizada con soporte para renderizado moderno, SEO y alto rendimiento.
- **[React 19](https://react.dev/)** — Biblioteca principal para la construcción de interfaces dinámicas y componentes reutilizables.
- **[TypeScript](https://www.typescriptlang.org/)** — Lenguaje utilizado para proporcionar tipado estático, mejorar la seguridad del código y facilitar su mantenimiento.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitario utilizado para construir interfaces consistentes, responsivas y mantenibles.
- **[shadcn/ui](https://ui.shadcn.com/)** — Sistema de componentes accesibles y personalizables construido sobre primitivas modernas de React. Los componentes viven en `src/components/ui/` y se agregan con la CLI: `pnpm dlx shadcn@latest add <componente>`.
- **[Base UI](https://base-ui.com/)** — Librería de componentes headless utilizada como base para construir interfaces flexibles.
- **[Framer Motion](https://www.framer.com/motion/)** — Librería utilizada para crear animaciones e interacciones fluidas.

> Guía de marca (colores, tipografía, logo): [`docs/jci-brand-guidelines.md`](docs/jci-brand-guidelines.md)

### Herramientas de Desarrollo

- **[ESLint](https://eslint.org/)** — Herramienta para análisis estático y aplicación de reglas de calidad de código.
- **[Prettier](https://prettier.io/)** — Herramienta de formateo automático para mantener consistencia en el proyecto.
- **[Turbopack](https://turbo.build/pack)** — Bundler optimizado utilizado durante el desarrollo con Next.js.

### Componentes UI adicionales

- **[Swiper](https://swiperjs.com/)** — Librería utilizada para crear carruseles, sliders y contenido interactivo.
- **[React Icons](https://react-icons.github.io/react-icons/)** — Librería de iconos utilizada para elementos visuales generales.
- **[Lucide](https://lucide.dev/)** — Librería de iconografía utilizada principalmente dentro del sistema de componentes UI.

## Requisitos

- [Node.js](https://nodejs.org/) >= 20.12
- [pnpm](https://pnpm.io/)

Activar pnpm mediante Corepack:

```bash
corepack enable
```

## Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/israteneda/jciambato.git
cd jciambato
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar entorno de desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# URL pública del sitio (SEO, sitemap, OG images)
NEXT_PUBLIC_SITE_URL=https://www.jciambato.org

# Envío del formulario de contacto (Resend)
RESEND_API_KEY=your_resend_api_key

# Chatbot (OpenAI)
OPENAI_API_KEY=your_openai_api_key
```

## Scripts

```bash
# Desarrollo
pnpm dev

# Construcción para producción
pnpm build

# Ejecutar versión producción
pnpm start

# Calidad de código
pnpm lint

# Formateo automático
pnpm format
```

## Deployment

El sitio se despliega en **[Vercel](https://vercel.com/)**.

- El comando de instalación (`pnpm install --frozen-lockfile`) está fijado en [`vercel.json`](./vercel.json), que tiene prioridad sobre cualquier configuración manual del dashboard (Settings → Build & Development Settings). Esto asegura que Vercel siempre use pnpm, sin depender de configuración fuera del repositorio.
- Las variables de entorno de [Variables de Entorno](#variables-de-entorno) deben configurarse en el proyecto de Vercel (Settings → Environment Variables) para que el build y el runtime de producción funcionen.

## Contribución

### Flujo de trabajo

1. Crear una rama desde `main` con el prefijo correspondiente:
   - `feat/`
   - `fix/`
   - `chore/`
   - `refactor/`
   - `docs/`
2. Instalar dependencias:

   ```bash
   pnpm install
   ```

3. Utilizar [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` nueva funcionalidad
   - `fix:` corrección de error
   - `chore:` mantenimiento
   - `refactor:` mejora interna
   - `docs:` documentación
4. Ejecutar validaciones antes de crear un Pull Request:

   ```bash
   pnpm lint
   ```

5. Crear Pull Request hacia la rama `main`.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## Contacto

### JCI Ambato

- **Email**: tecnologia@jciambato.com
- **Ubicación**: Ambato, Ecuador

### Redes Sociales

- **Facebook**: [@jciambatoec](https://www.facebook.com/jciambatoec)
- **Instagram**: [@jciambato](https://www.instagram.com/jciambato)
- **LinkedIn**: [JCI Ambato](https://www.linkedin.com/company/jci-ambato/)

---

<div align="center">

**Desarrollado con ❤️ por el equipo de JCI Ambato**

</div>
