import { heroui } from "@heroui/react";

/**
 * En Tailwind v4, el archivo apuntado por @plugin
 * debe tener una exportación por defecto (default export)
 * que sea la función del plugin.
 */
export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#1f4789", // El azul JCI
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#efc40f", // El amarillo JCI
          foreground: "#130f2d",
        },
        focus: "#1f4789",
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#1f4789",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#efc40f",
          foreground: "#130f2d",
        },
        focus: "#1f4789",
      },
    },
  },
});
