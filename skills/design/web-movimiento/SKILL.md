---
name: web-movimiento
description: >-
  Aplica movimiento a una web o a una interfaz: transiciones, hover, entrada,
  scroll, View Transitions, GSAP y prefers-reduced-motion. Se usa al animar,
  pulir interacción, añadir motion o quitar animación que estorba. El
  movimiento confirma un cambio de estado o de lugar.
---

# Movimiento

Quieto es el estado normal. Se mueve lo que acaba de cambiar, lo que llega de un sitio concreto, o lo que enseña una relación. Un fade en cada bloque al hacer scroll es decorado.

Lee la ficha de dirección si existe. Silencio y cartel casi no se mueven. Taller se mueve en los controles, no en la página. Las duraciones de abajo mandan sobre cualquier preset de un catálogo.

Recetas en [recetas.md](recetas.md).

## Duración y curva

Una curva de entrada y una de interfaz en todo el sistema.

| Uso | Duración | Curva |
|---|---|---|
| Color, subrayado, icono | 140ms | estándar `cubic-bezier(0.4, 0, 0.2, 1)` |
| Overlay, menú, popover | 200–240ms | salida `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| Entrada del primer pantallazo, una sola vez | 420–560ms | salida |
| Stagger entre hermanos | 50–70ms | como máximo 5 hermanos |

Por debajo de 100ms se siente corte. Por encima de 700ms, en UI, se siente espera. Nada de bounce ni elastic en interfaz de trabajo o en una página seria.

## Qué se anima

- Propiedades: `opacity` y `transform`. Nunca `width`, `height`, `top`, `left`, `margin`.
- Entrada: opacidad más 8–16px de desplazamiento. Sin escala desde 0. Sin desenfoque como sistema.
- Hover: cambia color, subrayado o el estado del icono. La card no se eleva, no crece y no gana sombra.
- Origen: un menú sale del botón que lo abrió (`transform-origin`). Un panel entra desde el borde por el que se va.
- Entre páginas, un fundido corto. Un elemento compartido (la marca, el título de la pieza) puede continuar. El resto aparece.

GSAP, scroll con pin o una secuencia coreografiada solo si la página cuenta una historia que de verdad lo necesita. Un fade no justifica una librería. Si el proyecto ya usa View Transitions (Astro u otra), usa eso para el cambio de página y no añadas otra capa.

## Qué no se mueve

- Cada sección al entrar en el viewport.
- El fondo, un degradado animado, un grano que vibra, un cursor propio.
- Contadores que suben desde cero.
- Parallax en todo el scroll.
- Loaders decorativos cuando la carga ya es instantánea. Si la espera es real, el hueco está reservado y el indicio es pequeño.
- Cualquier cosa que tape texto mientras dura.

## Reducción de movimiento

`prefers-reduced-motion: reduce` deja el estado final ya puesto: sin desplazamiento, sin stagger, sin scroll suave. Un indicador de carga puede seguir girando si es la única señal de espera; el resto se queda quieto.

El hover no es la única forma de ver un estado. Foco y activo existen, y se ven igual de claros.

## Cómo aplicarlo

1. Escribe las dos curvas y las tres duraciones una sola vez, en el CSS global o en los tokens.
2. Anima selectores concretos. No pongas `transition: all`.
3. Añade en el mismo sitio el bloque de reducción de movimiento que anula esos selectores.
4. Prueba el primer pantallazo y un menú. Si se nota la animación como tema, recorta hasta que solo se note el cambio.
