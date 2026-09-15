# Natours

Landing page de Natours, del curso *Advanced CSS and Sass* de Jonas Schmedtmann.
Originalmente HTML + Sass (BEM); portada a **Astro 7 + Tailwind 4**.

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build estático en dist/
npm run preview  # sirve el build
npm run check    # diagnóstico de tipos de Astro
```

## Estructura

```
src/
  assets/       imágenes que procesa Astro (y las que usa el CSS por url())
  components/   un .astro por pieza de UI
  data/site.ts  textos y datos repetidos (tours, stories, features, menú)
  layouts/      <html>, <head> y hojas de estilo globales
  pages/        index.astro
  styles/       global.css: tema de Tailwind, fondos y recortes
public/
  css/          fuente de iconos linea-basic (CSS heredado, sin tocar)
  video/        vídeo de fondo de la sección de stories
```

## Convenciones

**El número de una utilidad es su valor en px del diseño original.** El root va
al 62.5% (`1rem` = 10px) y `--spacing` está en `0.1rem`, así que `p-40` son 4rem
= 40px, y `text-16` es 1.6rem. Al estar todo en rem, bajar el root por
breakpoint reescala la página entera de una vez, igual que hacía el Sass.

**Los breakpoints son `max-width`** (desktop-first), como el mixin `respond()`
original: `phone` (600px), `tab-port` (900px), `tab-land` (1200px) y
`big-desktop` (1800px, este sí `min-width`). Se declaran de más ancho a más
estrecho en `global.css` para que gane el más estrecho cuando varios coinciden.

**Los gradientes llevan `/srgb`.** Tailwind interpola en oklab por defecto;
`bg-linear-to-r/srgb` reproduce el resultado de `linear-gradient()` de Sass.

Lo que no cabe en utilidades vive en `global.css`: los fondos que combinan
degradado con `url()` (cambian de imagen por breakpoint o densidad) y los
`clip-path`/`shape-outside`, que como valores arbitrarios harían el markup
ilegible.

---

Puedes usar esta página con fines personales y comerciales, pero no atribuirte
el diseño. El autor original es Jonas Schmedtmann.
