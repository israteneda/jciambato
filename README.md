# JCI Ambato - Página Web Oficial

Página web oficial de **JCI Ambato**, desarrollada con **Next.js 14** y **HeroUI v2**. 

![Previsualización](/public/images/preview-welcome.png)

## 🚀 Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/docs/getting-started) - Framework de React para aplicaciones web.
- [HeroUI v2](https://heroui.com/) - Biblioteca de componentes UI moderna.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos basado en utilidades.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript.

## 📌 Requisitos Previos

Antes de iniciar el proyecto, asegúrate de tener instalado:
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

---

_Desarrollado con ❤️ por el equipo de JCI Ambato._

