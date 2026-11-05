# Recetas de movimiento

Declara esto una vez. Si el proyecto ya tiene tokens de duración o de curva, usa esos nombres.

```css
:root {
  --ease-std: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-1: 140ms;
  --dur-2: 220ms;
  --dur-3: 480ms;
}

.accion {
  transition: background-color var(--dur-1) var(--ease-std),
    color var(--dur-1) var(--ease-std);
}

.enlace {
  text-decoration-color: transparent;
  text-underline-offset: 0.18em;
  transition: text-decoration-color var(--dur-1) var(--ease-std);
}

.enlace:hover,
.enlace:focus-visible {
  text-decoration: underline;
  text-decoration-color: currentColor;
}
```

## Entrada de un solo bloque

Solo el primer pantallazo, y solo si la ficha lo admite. El estado final es el que queda sin animación.

```css
@keyframes entra {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}

.entra {
  animation: entra var(--dur-3) var(--ease-out) both;
}

.entra > * + * {
  animation: entra var(--dur-3) var(--ease-out) both;
  animation-delay: calc(var(--i, 1) * 60ms);
}
```

El stagger se asigna con `--i: 1` … `--i: 5` en el elemento. No en cada sección de la página.

## Menú que nace del botón

```css
.menu {
  transform-origin: top left;
  transition: opacity var(--dur-2) var(--ease-out),
    transform var(--dur-2) var(--ease-out);
}

.menu[hidden] {
  display: none;
}

.menu.cerrando,
.menu:not(.abierto) {
  opacity: 0;
  transform: translateY(-4px);
}
```

Quitar `display` y animar a la vez no funciona. Primero visible, luego la clase que anima; al cerrar, espera `--dur-2` y entonces esconde.

## Cambio de página

Con View Transitions, un fundido de la raíz y, si la pieza continúa, un nombre compartido en ese elemento. Nada más.

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 180ms;
  animation-timing-function: var(--ease-std);
}
```

## Reducción

Anula los selectores que tú has movido. No uses un `* { transition: none !important }`: apaga indicadores de carga y transiciones de opacidad que otro código necesite.

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  .entra,
  .entra > * {
    animation: none;
  }

  .menu,
  .accion,
  .enlace {
    transition: none;
  }
}
```

Bajo esta media query el menú aparece ya abierto o ya cerrado, en el sitio, sin viaje.
