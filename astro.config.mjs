// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages: repo llamado "soric91.github.io" → se sirve en la raíz.
  // Si algún día usas otro nombre de repo (ej. "portafolio"), agrega:
  //   base: "/portafolio",
  // y ajusta las rutas absolutas de imágenes (/proyectos/...) y el favicon.
  site: "https://soric91.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
