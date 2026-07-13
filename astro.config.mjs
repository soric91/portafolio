// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages: repo "portafolio" → la página vive en
  // https://soric91.github.io/portafolio
  // Si algún día la mueves a un repo "soric91.github.io" (raíz),
  // elimina la línea `base`.
  site: "https://soric91.github.io",
  base: "/portafolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
