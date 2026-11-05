---
name: web-direccion
description: >-
  Fija la dirección de arte de una web antes de maquetar o escribir código.
  Se usa al empezar o rediseñar una página, landing, homepage, hero o sitio,
  y cuando el encargo habla de look and feel, art direction, dirección visual,
  personalidad, editorial, premium o de que se vea brutal. Obliga a una idea
  compositiva, una escala de tipo y tres rechazos antes de tocar componentes.
---

# Dirección de arte web

Una página es una pieza con un punto de vista. Un tema de componentes no lo es.

## Precedencia

1. Marca, tokens y voz que ya existan en el repo. Búscalos y léelos antes de proponer color, tipo o tono.
2. Esta ficha.
3. `web-composicion` en páginas de marca, marketing, editorial y landing. `web-interfaz` en producto, paneles, ajustes y formularios de herramienta.
4. `web-movimiento` solo donde el movimiento cambia lo que se entiende.
5. `web-critica` antes de dar por cerrada una página nueva o un rediseño.

Los catálogos de `skills/design/` (estilos, paletas, emparejamientos) informan. Si un resultado del catálogo contradice la ficha, gana la ficha.

## Decidir y seguir

Si pidieron construir, escribe la ficha y construye en el mismo turno. Elige tú. No ofrezcas un menú de estilos.

Pregunta solo cuando falte un dato que cambie la pieza y no esté en el repo: a quién sirve la página, o qué parte de la marca no se puede tocar. Si la marca ya decide, afina dentro de ella. No inventes una segunda paleta ni una segunda voz.

## Ficha

Escríbela en la respuesta, antes del código. Cabe en una pantalla. Cada línea nombra una decisión visible. Prohibidos como contenido de la ficha: moderno, premium, limpio, elegante, innovador, minimalista.

```
Dirección — [nombre de la pieza]
Para quién: [persona y momento]
Sensación: [qué se siente al verla, en concreto]
Idea: [una frase compositiva]
Tipo: [familias y la relación de tamaño, p. ej. titular ≈ 4× el cuerpo]
Color: [papel, tinta, un acento, y el único sitio donde el acento aparece]
Detalle: [una decisión que una plantilla no tomaría]
Rechazos: [tres cosas que esta página no va a tener]
```

La idea cabe en una frase. Si hacen falta dos, quédate con la más específica.

Elige la idea en [ideas.md](ideas.md) o inventa una del mismo calibre. No enseñes la lista ni pidas que elijan entre ellas.

Al implementar, copia la ficha como comentario al inicio del CSS de esa página. No crees un markdown de dirección salvo que lo pidan.

## Ejemplo que sí decide

```
Dirección — inicio del estudio
Para quién: alguien que compara estudios y abre la página un martes, con prisa
Sensación: papel de taller, luz plana, nada que demostrar
Idea: margen de estudio — columna de 60 caracteres y el año solo en el margen
Tipo: la serif del proyecto a 19px; el titular es la misma serif a 4×, en regular
Color: papel y tinta de los tokens; el acento solo en el enlace de contacto
Detalle: el año alineado a la primera línea del titular, no al centro del bloque
Rechazos: cards, fila de iconos, hero a toda la pantalla
```

## Ejemplo que no decide

"Premium, moderno y limpio, con una sans geométrica, azul y blanco, y un toque de color." Eso no se puede construir. Vuelve a escribir la ficha hasta que un extraño pudiera maquetarla sin preguntar.

## Leyes

- Un acento. Vive en la acción principal y, como mucho, en el detalle. No pinta secciones alternas.
- Dos familias como máximo. Una mono para etiquetas cuenta como segunda.
- El tamaño hace la jerarquía. El color significa acción o estado.
- Un solo momento grande por pantallazo: el titular, la imagen o el producto. Los otros dos se retiran.
- El primer pantallazo dice qué es esto y qué hacer, y se entiende sin la imagen.
- Un detalle de autor por página. Dos detalles compiten y la página vuelve a ser un tema.

## Al construir

Aplica `web-composicion` o `web-interfaz` según la pieza. Cuando la página ya se ve, aplica `web-critica` y corrige antes de cerrar.
