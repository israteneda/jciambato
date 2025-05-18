# JCI Ambato - Página Web Oficial

Bienvenido al repositorio oficial de la página web de **JCI Ambato**, una organización dedicada a empoderar a jóvenes líderes para generar impacto positivo en la comunidad de Ambato, Ecuador. Esta plataforma, desarrollada con **Next.js 14** y **HeroUI v2**, ofrece información sobre nuestras iniciativas, eventos y oportunidades de participación.

![Previsualización](/public/images/preview-welcome.png)

## 🚀 Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/docs/getting-started) - Framework de React para aplicaciones web modernas.
- [HeroUI v2](https://heroui.com/) - Biblioteca de componentes UI para interfaces elegantes.
- [Tailwind CSS](https://tailwindcss.com/) - Estilos basados en utilidades para un diseño consistente.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para un código robusto y mantenible.

## 📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (v18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (gestor de paquetes) o **pnpm** (opcional)

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/jci-ambato/web.git
cd web
```

### 2️⃣ Instalar dependencias

Usa `npm` o `pnpm` para instalar los paquetes necesarios:

```bash
npm install
```

Si usas `pnpm`, asegúrate de configurar el `.npmrc`:

```bash
echo "public-hoist-pattern[]=*@heroui/*" >> .npmrc
pnpm install
```

### 3️⃣ Iniciar el servidor de desarrollo

Ejecuta el siguiente comando para levantar el entorno de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000/`.

## 📁 Estructura del Proyecto

```
/jci-ambato
 ├── public/          # Archivos estáticos
 ├── src/             # Código fuente
 │   ├── app/         # Páginas principales (app router)
 │   ├── components/  # Componentes reutilizables
 │   ├── config/      # Archivos de aplicación
 │   ├── data/        # Información estática (temporal)
 │   ├── hooks/       # Funciones de estado
 │   ├── styles/      # Estilos globales
 │   ├── utils/       # Utilidades y funciones auxiliares
 ├── package.json     # Dependencias y scripts
 ├── README.md        # Documentación
```

## 📜 Licencia

Este proyecto está licenciado bajo la [MIT License](https://github.com/jci-ambato/web/blob/main/LICENSE).


## 📬 Contacto

Para preguntas, sugerencias o más información sobre JCI Ambato:

- **Correo**: tecnologias@jciambato.com

---

_Desarrollado por el equipo de JCI Ambato._
