# Patrones

Mapea estas variables a los tokens del proyecto. Si un token ya existe, úsalo y borra el duplicado. La escala de aquí es el punto de partida cuando el repo aún no tiene una.

```css
:root {
  --tipo-titular: clamp(2.75rem, 1.15rem + 5.4vw, 5.75rem);
  --tipo-h2: clamp(1.7rem, 1.15rem + 1.5vw, 2.45rem);
  --tipo-cuerpo: 1.125rem;
  --lh-titular: 0.96;
  --lh-cuerpo: 1.5;
  --medida: 62ch;
  --seccion: clamp(4.5rem, 9vw, 8.5rem);
  --grupo: 0.75rem;
  --margen: clamp(1.25rem, 4vw, 2.5rem);
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}

.titular {
  font-size: var(--tipo-titular);
  line-height: var(--lh-titular);
  letter-spacing: -0.035em;
  font-weight: 560;
  text-wrap: balance;
  max-width: 14ch;
}

.cuerpo {
  font-size: var(--tipo-cuerpo);
  line-height: var(--lh-cuerpo);
  text-wrap: pretty;
  max-width: var(--medida);
}

.cifra {
  font-variant-numeric: tabular-nums;
}

:focus-visible {
  outline: 2px solid CanvasText;
  outline-offset: 3px;
}
```

`max-width: 14ch` en el titular es para el cartel. En otras ideas, súbelo o quítalo. El peso 560 cae a 500 o 600 según la familia disponible.

## Cartel

```css
.cartel {
  padding: var(--seccion) var(--margen);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.cartel .cuerpo {
  font-size: 1.125rem;
  max-width: 36ch;
}
```

## Margen de estudio

En ancho, la columna de texto ocupa ~38rem y el margen guarda el detalle, alineado a la primera línea. En estrecho, el detalle pasa encima del titular.

```css
.estudio {
  display: grid;
  grid-template-columns: 5rem minmax(0, 38rem);
  column-gap: 2rem;
  justify-content: center;
  padding: var(--seccion) var(--margen);
}

.estudio .margen {
  font-variant-numeric: tabular-nums;
  padding-top: 0.35em;
}

@media (max-width: 720px) {
  .estudio { grid-template-columns: 1fr; row-gap: 0.75rem; }
}
```

## Imagen y texto

El texto no va encima de la foto. La foto tiene recorte reservado.

```css
.pieza {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  min-height: 70dvh;
}

.pieza img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 5;
}

.pieza .texto {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  padding: var(--seccion) var(--margen);
}

@media (max-width: 800px) {
  .pieza { grid-template-columns: 1fr; min-height: 0; }
  .pieza img { aspect-ratio: 3 / 2; height: auto; }
}
```

## Índice

Filas, no cards. El filete separa. El número es tabular y queda quieto mientras el título crece.

```css
.indice a {
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  gap: 1rem;
  align-items: baseline;
  padding: 1.05rem 0;
  border-top: 1px solid color-mix(in oklab, CanvasText 16%, transparent);
  text-decoration: none;
}

.indice a:last-child {
  border-bottom: 1px solid color-mix(in oklab, CanvasText 16%, transparent);
}

@media (max-width: 640px) {
  .indice a { grid-template-columns: 2.5rem 1fr; }
  .indice a :last-child { grid-column: 2; }
}
```

## Acción

Un primario. Lo demás es un enlace.

```css
.accion {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.65em 1.05em;
  background: var(--tinta, CanvasText);
  color: var(--papel, Canvas);
  text-decoration: none;
}

.enlace {
  text-underline-offset: 0.18em;
}
```

Sustituye `Canvas` y `CanvasText` por los tokens de papel y tinta del proyecto en cuanto existan. `color-mix` necesita un fallback de color sólido si el repo soporta navegadores que no lo tienen: un hex de los tokens, escrito una sola vez en la variable.
