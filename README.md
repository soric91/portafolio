# Portafolio — Moises

Portafolio personal construido con **Astro 7** + **Tailwind CSS 4** (plugin `@tailwindcss/vite`).
Concepto de diseño: *sala de control* — telemetría industrial, señal de energía animada y stack presentado por capas (de la infraestructura a la interfaz).

## Requisitos

- Node.js **22+**
- npm (o pnpm)

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:4321
```

## Antes de publicar

1. **Edita `src/config.ts`** — nombre, WhatsApp, email, GitHub. Todo el sitio se alimenta de ese archivo.
2. Cambia `site` en `astro.config.mjs` por tu dominio real.
3. Ajusta proyectos/servicios en `src/components/Proyectos.astro` y `Servicios.astro` (son arrays al inicio de cada archivo).

## Build de producción

```bash
npm run build      # genera /dist (estático)
npm run preview
```

## Despliegue con Docker + Nginx (tu flujo habitual)

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

Ideal para validar tu Cloudflare Tunnel apuntando al contenedor antes de montar los bots de clientes.

## Estructura

```
src/
  config.ts              ← tus datos (edita esto primero)
  styles/global.css      ← tokens de diseño y animaciones
  layouts/Base.astro     ← <head>, fuentes, script de reveal
  components/            ← Nav, Hero, Servicios, Proyectos, Stack, SobreMi, Contacto
  pages/index.astro
```

## Accesibilidad y calidad

- `prefers-reduced-motion` respetado (animaciones se desactivan).
- Foco visible por teclado.
- Responsive hasta móvil.
- HTML semántico (`header`, `main`, `section`, `dl`, `ol`).
