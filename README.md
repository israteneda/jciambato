# JCI Ambato - Página Web Oficial

<div align="center">

![JCI Ambato Logo](/public/images/logos/jci-ambato.webp)

**Formación de Líderes Juveniles con Impacto Social**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v2-000000?style=for-the-badge)](https://heroui.com/)

</div>

## 📋 Descripción

**JCI Ambato** es la plataforma web oficial de la Cámara Junior Internacional de Ambato, una organización sin fines de lucro dedicada a empoderar a jóvenes líderes para generar impacto positivo en la comunidad de Ambato, Ecuador. Esta aplicación web moderna ofrece información integral sobre nuestras iniciativas, eventos, oportunidades de participación y el trabajo que realizamos en pro del desarrollo comunitario.

### 🎯 Características Principales

- **Diseño Responsivo**: Interfaz optimizada para todos los dispositivos
- **CMS Integrado**: Gestión de contenido con Builder.io
- **SEO Optimizado**: Configuración completa para motores de búsqueda
- **Accesibilidad**: Cumple con estándares WCAG
- **Rendimiento**: Optimizado con Next.js 15 y Turbopack
- **Internacionalización**: Soporte para múltiples idiomas

![Previsualización de la Plataforma](/public/images/preview-welcome.png)

## 🛠️ Stack Tecnológico

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://reactjs.org/)** - Biblioteca de interfaz de usuario
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utilitario
- **[HeroUI v2](https://heroui.com/)** - Biblioteca de componentes UI
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones fluidas

### CMS y Gestión de Contenido

- **[Builder.io](https://builder.io/)** - CMS headless para gestión de contenido
- **[Builder.io React SDK](https://www.npmjs.com/package/@builder.io/react)** - Integración React

### Herramientas de Desarrollo

- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formateo de código
- **[Turbopack](https://turbo.build/pack)** - Bundler de desarrollo rápido

### Componentes UI

- **[Swiper](https://swiperjs.com/)** - Carousel y slider
- **[React Icons](https://react-icons.github.io/react-icons/)** - Iconografía
- **[React Aria](https://react-spectrum.adobe.com/react-aria/)** - Accesibilidad


## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/jci-ambato/web.git
cd jci-ambato
```

### 2. Instalar Dependencias

```bash
# Usando npm (recomendado)
npm install

# Usando pnpm (alternativo)
pnpm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Builder.io Configuration
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.jciambato.org

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 4. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
jci-ambato/
├── 📁 public/                    # Archivos estáticos
│   ├── 📁 fonts/                # Fuentes tipográficas
│   ├── 📁 icons/                # Iconos SVG
│   ├── 📁 images/               # Imágenes optimizadas
│   │   ├── 📁 aliados/          # Logos de aliados
│   │   ├── 📁 areas_oportunidad/ # Imágenes de áreas
│   │   ├── 📁 grupo/            # Imágenes del grupo
│   │   ├── 📁 logos/            # Logos oficiales
│   │   ├── 📁 miembros/         # Fotos de miembros
│   │   └── 📁 secciones/        # Imágenes por sección
│   └── 📁 videos/               # Contenido multimedia
├── 📁 src/
│   ├── 📁 app/                  # App Router (Next.js 15)
│   │   ├── 📁 [...page]/        # Páginas dinámicas
│   │   ├── 📁 actividades/      # Sección de actividades
│   │   ├── 📁 areas-oportunidad/ # Áreas de oportunidad
│   │   ├── 📁 involucrate/      # Página de involucramiento
│   │   ├── 📁 miembros/         # Directorio de miembros
│   │   ├── 📁 nosotros/         # Información institucional
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página de inicio
│   │   └── providers.tsx        # Proveedores de contexto
│   ├── 📁 components/           # Componentes reutilizables
│   │   ├── 📁 commons/          # Componentes comunes
│   │   ├── 📁 layout/           # Componentes de layout
│   │   ├── 📁 sections/         # Secciones de página
│   │   └── 📁 ui/               # Componentes de UI
│   ├── 📁 config/               # Configuraciones
│   │   ├── fonts.ts             # Configuración de fuentes
│   │   ├── primitives.ts        # Primitivas de diseño
│   │   └── site.ts              # Configuración del sitio
│   ├── 📁 data/                 # Datos estáticos
│   ├── 📁 hooks/                # Custom hooks
│   └── 📁 styles/               # Estilos globales
├── 📄 package.json              # Dependencias y scripts
├── 📄 tailwind.config.js        # Configuración de Tailwind
├── 📄 next.config.js            # Configuración de Next.js
└── 📄 tsconfig.json             # Configuración de TypeScript
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **JCI Navy**: `#3A67B1` - Color principal institucional
- **JCI Aqua**: `#0087D7` - Color secundario
- **JCI Gold**: `#EDBE3B` - Color de acento
- **JCI Seafoam**: `#56BDA3` - Color complementario


## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con Turbopack
npm run build        # Construye la aplicación para producción
npm run start        # Inicia servidor de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint con correcciones automáticas
npm run format       # Formatea código con Prettier

# Análisis
npm run analyze      # Analiza el bundle (si está configurado)
```


## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE) - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto y Soporte

### JCI Ambato

- **Sitio Web**: [jciambato.org](https://www.jciambato.org)
- **Email**: tecnologias@jciambato.com
- **Ubicación**: Ambato, Ecuador

### Redes Sociales

- **Facebook**: [@jciambatoec](https://www.facebook.com/jciambatoec)
- **Instagram**: [@jciambato](https://www.instagram.com/jciambato)
- **LinkedIn**: [JCI Ambato](https://www.linkedin.com/company/jci-ambato/)
- **YouTube**: [JCI Ambato](https://www.youtube.com/channel/jciambato)

---

<div align="center">

**Desarrollado con ❤️ por el equipo de JCI Ambato**

_Empoderando líderes juveniles para un futuro mejor_

</div>
