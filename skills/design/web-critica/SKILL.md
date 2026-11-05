---
name: web-critica
description: >-
  Critica una página o interfaz web ya construida y deja un veredicto con
  evidencia y arreglos en orden. Se usa al revisar, pulir, rediseñar o pedir
  calidad de una web, landing, UI o componente visual, y cuando preguntan
  qué falla o si se ve brutal, genérica, premium o a plantilla. También al
  cerrar una página que se acaba de maquetar.
---

# Crítica web

Se mira la página construida. Una opinión sin la pantalla delante no es una crítica.

## Cómo mirar

1. Ábrela como la vería quien llega. Ancho de escritorio y 390px. Recorre el primer pantallazo, una interacción (la acción principal, un menú o un campo) y el modo oscuro si el proyecto lo tiene.
2. Si hace falta el servidor de desarrollo, arráncalo como documenta el repo y mírala de verdad. Una captura quieta, sin usar la página, no basta.
3. Si no se puede renderizar, dilo en la primera línea y critica desde el código, citando el componente. No inventes cómo "se ve".
4. Lee [senales.md](senales.md) y caza esas señales una por una.
5. Lee la ficha de dirección si existe (comentario al inicio del CSS, o la de esta conversación). La crítica juzga si la página la cumple, no si te gusta otro estilo.

## Puertas

Si una falla, la página no está lista. No la compenses con un elogio en otro eje.

- Texto por debajo de 4.5:1 (3:1 si es titular grande, ≥24px o ≥19px en negrita).
- Foco invisible o outline quitado.
- La acción principal solo aparece al hover.
- Scroll horizontal.
- Hay desplazamiento o stagger y `prefers-reduced-motion` no lo anula.
- Un control esencial por debajo de 44px de alto en táctil.

## Ejes

Puntúa del 1 al 5. Cada nota lleva una evidencia: qué viste, en qué zona. Sin evidencia, la nota no vale.

| Eje | Qué se pregunta |
|---|---|
| Dirección | ¿Se reconoce una idea, o se podría cambiar el nombre y seguiría siendo la misma plantilla? |
| Jerarquía | En un segundo, ¿se sabe qué leer y qué hacer? |
| Tipo | Escala, medida, interlineado, un peso que de verdad contrasta. |
| Espacio | Hay ritmo (apretado dentro, amplio entre ideas) o hay el mismo padding en todo. |
| Superficie | Un acento, contraste real, sombra y radio con una sola regla. |
| Conducta | Estados, foco, estrecho, movimiento que confirma y no decora. |

Calibración:

- 5. La idea se ve en un segundo y no hay un bloque intercambiable por el de otra plantilla.
- 4. Hay dirección y un punto flojo, nombrado.
- 3. Correcta y olvidable.
- 2. La plantilla se reconoce.
- 1. Sirve para cualquier sector cambiando el nombre.

Tope: si queda una señal de [senales.md](senales.md), ningún eje pasa de 3. Un 5 con una señal de plantilla es una nota falsa: bájala.

## Entrega

```
Puertas: [ok, o la que falla]

Dirección — n/5. [evidencia]
Jerarquía — n/5. [evidencia]
Tipo — n/5. [evidencia]
Espacio — n/5. [evidencia]
Superficie — n/5. [evidencia]
Conducta — n/5. [evidencia]

Arreglos:
1. [el del primer pantallazo, concreto: qué elemento, qué cambia]
2. [...]
3. [...]
```

Como máximo cinco arreglos. El primero es lo que se ve antes de hacer scroll. Cada arreglo se puede ejecutar sin preguntar: medida, elemento y dirección del cambio.

Si el encargo era construir o mejorar, aplica los arreglos, vuelve a mirar la página y deja esta nota al final, ya con lo que cambió. Si el encargo era solo revisar, no edites.
