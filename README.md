# Portafolio — Moises

Portafolio personal construido con **Astro 7** + **Tailwind CSS 4** (plugin `@tailwindcss/vite`).
Concepto de diseño: *sala de control* — telemetría industrial, osciloscopio animado y stack presentado por capas (del problema a la solución).

Publicado en **https://soric91.github.io/portafolio** con GitHub Pages
(repo `portafolio`, configurado con `base: "/portafolio"` en `astro.config.mjs`).

## Requisitos

- Node.js **22+**
- npm

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Personalización

1. **`src/config.ts`** — nombre, marca, WhatsApp, email, GitHub, LinkedIn. Todo el sitio se alimenta de ese archivo.
2. **`src/components/Proyectos.astro`** — array de proyectos: descripción, stack, animación de vista previa (`anim`), captura real (`img`), repositorio (`repo`) y demo.
3. **`src/components/Servicios.astro`** y **`SobreMi.astro`** — servicios y niveles de habilidades (arrays al inicio de cada archivo).
4. Capturas de proyectos: van en `public/proyectos/` (ver el README de esa carpeta).

## Despliegue (GitHub Pages)

Automático: cada `git push` a `main` dispara el workflow
`.github/workflows/deploy.yml`, que compila el sitio y lo publica.
No hay que subir `dist/` ni compilar a mano.

Requisito único (una sola vez): en el repo → **Settings → Pages →
Source: GitHub Actions**.

Para verificar el build localmente antes de un push:

```bash
npm run build      # genera /dist (estático)
npm run preview
```

## Estructura

```
src/
  config.ts              ← tus datos (edita esto primero)
  styles/global.css      ← tokens de diseño y animaciones
  layouts/Base.astro     ← <head>, fuentes, script de reveal
  components/
    Nav.astro            ← barra + franja de estado
    Hero.astro           ← eslogan, CTAs y osciloscopio
    HeroGaleria.astro    ← mini-pantallas animadas (landing, dashboard, bot, API)
    Ticker.astro         ← cinta ámbar
    Servicios.astro
    Proyectos.astro
    ProyectoAnim.astro   ← vistas previas animadas de proyectos sin foto
    Stack.astro
    SobreMi.astro        ← perfil técnico con barras de habilidades
    Contacto.astro       ← CTA + footer
  pages/index.astro
public/proyectos/        ← capturas de los proyectos
.github/workflows/       ← deploy automático a GitHub Pages
```

## Accesibilidad y calidad

- `prefers-reduced-motion` respetado (animaciones se desactivan).
- Foco visible por teclado.
- Responsive hasta móvil.
- HTML semántico (`header`, `main`, `section`, `dl`, `ol`).
