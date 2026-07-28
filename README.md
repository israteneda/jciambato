# JCI Ambato - Página Web Oficial

<div align="center">

![JCI Ambato Logo](/public/images/marca/jci-ambato-bw.webp)

**Unidos Construyendo un Futuro de Liderazgo**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
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

- Rutas y layouts de aplicación.
- Componentes reutilizables.
- Funcionalidades específicas del negocio.
- Configuraciones globales.
- Utilidades compartidas.
- Tipos y definiciones TypeScript.

Estructura principal:

```text
src/
├── app/                    # Rutas y layouts mediante Next.js App Router
├── components/             # Componentes reutilizables globales
├── config/                 # Configuraciones generales
├── features/               # Módulos organizados por funcionalidad
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
├── hooks/                  # Custom hooks compartidos
├── lib/                    # Utilidades y lógica compartida
├── styles/                 # Estilos globales
└── types/                  # Definiciones TypeScript compartidas
```

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

- Vercel detecta pnpm automáticamente a través del campo `packageManager` en `package.json` (vía Corepack), sin configuración adicional de build.
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
