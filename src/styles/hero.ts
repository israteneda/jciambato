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
          DEFAULT: "#0097d7", // JCI Blue — color héroe de la marca
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#efc40f", // JCI Yellow — acento secundario
          foreground: "#130f2d",
        },
        focus: "#0097d7",
      },
    },
    dark: {
      colors: {
        primary: {
          DEFAULT: "#0097d7",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#efc40f",
          foreground: "#130f2d",
        },
        focus: "#0097d7",
      },
    },
  },
});
