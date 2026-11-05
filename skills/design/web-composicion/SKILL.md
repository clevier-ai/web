---
name: web-composicion
description: >-
  Compone páginas web de marca, marketing, editorial, portafolio y landing:
  tipo, medida, ritmo vertical, color, imagen y primer pantallazo. Se usa al
  maquetar, retocar o rehacer el layout, la tipografía, el espaciado o las
  secciones de una web. Paneles, ajustes, tablas y formularios de producto
  van a web-interfaz.
---

# Composición web

Para páginas que se leen y se recuerdan. Si la pantalla es una herramienta que se usa a diario, para y aplica `web-interfaz`.

## Antes del CSS

1. Lee tokens, guía de marca y CSS global si existen. Esos nombres se usan tal cual.
2. Si la página es nueva y no hay ficha de dirección, escríbela con `web-direccion` y sigue en el mismo turno.
3. Traduce la idea a un esqueleto: qué es lo grande, qué calla, dónde está la acción. Después escribe CSS.
4. Los números de abajo son la ley. La sintaxis se adapta al sistema del repo (CSS, Tailwind, lo que ya haya). No instales un framework para una página de marca.

Al cerrar una página nueva, aplica `web-critica` y corrige lo que falle. Recetas de layout en [patrones.md](patrones.md).

## Tipo

- Dos familias como máximo. Un peso para leer y uno para el momento. Semibold en todo es no tener peso.
- Cuerpo: 17–19px en páginas de lectura, interlineado 1.45–1.55, medida 58–68ch. Nunca justificado.
- Titular de marca: al menos 2.5× el cuerpo. En cartel, 4× o más. Interlineado 0.92–1.05. Interletraje negativo solo a partir de ~40px, entre −0.02em y −0.04em.
- `text-wrap: balance` en titulares. `text-wrap: pretty` en párrafos.
- Cifras en datos: `font-variant-numeric: tabular-nums`.
- Un párrafo centrado de más de dos líneas se vuelve ilegible. El centro es para una frase, no para el texto.
- Las mayúsculas de etiqueta, si la etiqueta informa (fecha, categoría real), van a 12px con interletraje ~0.06em. Una etiqueta decorativa encima de cada titular es un tic: quítala.

## Espacio

- Dentro de un grupo, poco aire. Entre ideas, mucho. La misma padding en todas las secciones aplana la página.
- Sección: `clamp(4.5rem, 9vw, 8.5rem)` como base, y luego rómpela donde la idea lo pida. El primer pantallazo puede ser más corto o más largo que el resto.
- El espacio interior de un bloque responde a su contenido. Un padding idéntico en todas las cards es la señal de que son cards.
- Agrupa por cercanía. Una caja, un borde y una sombra alrededor de cada grupo sobran cuando la cercanía ya agrupa.

## Color y superficie

- Papel, tinta, un acento. El acento aparece en la acción y en el detalle de la ficha. En ningún otro sitio.
- El texto secundario cumple 4.5:1 sobre su fondo. El gris claro sobre gris es texto que no se quiere leer.
- Un radio para todo el sistema. Un filete de 1px en tinta al 12%, o ninguno.
- Una sombra en toda la página, grande y baja, o ninguna. Nada de sombra por card.
- Los fondos de sección no alternan claro/gris/oscuro como ritmo. El ritmo lo da el espacio.
- Si el proyecto tiene modo oscuro, compruébalo: la tinta y el papel se invierten, el acento se mantiene solo si el contraste aguanta, la sombra casi desaparece y la imagen no se queda dentro de un rectángulo blanco.

## Imagen

- Una imagen grande, tratada de una sola manera, o ninguna. Tres fotos medianas iguales son stock, no una galería.
- `aspect-ratio` siempre, para que la página no salte al cargar.
- El texto va en sólido, al lado o debajo. Un velo degradado sobre la foto es el último recurso, no la primera idea.
- Si no hay foto real, la página se sostiene en tipo. No encargues una ilustración genérica para tapar el hueco.

## Primer pantallazo

- Dice qué es esto y qué hacer. Se entiende con la imagen rota.
- Una acción primaria. La secundaria, si existe, es un enlace de texto, no un segundo botón del mismo peso.
- El titular no compite con un párrafo, una fila de logos y dos botones en el mismo bloque.
- `min-height: 100dvh` solo si la idea es un cartel a pantalla. `100vh` se evita: en el móvil se come con la barra del navegador.

## Estrecho

- El titular baja con `clamp` y sigue siendo lo más grande. En 390px ocupa dos a cuatro líneas, no ocho.
- Margen lateral mínimo 20px. Sin scroll horizontal.
- El orden del pantallazo se conserva al apilar. No escondas la acción debajo de tres bloques.
- Los objetivos táctiles de la acción principal miden al menos 44px de alto.

## Estructura

- Un botón primario por vista. El texto del botón es un verbo con objeto.
- Los enlaces dentro del texto van subrayados. El color solo no basta.
- Los encabezados no se saltan niveles. Una lista es `ul` u `ol`.
- Foco visible: anillo de 2px con offset de 3px en el color de tinta. No se quita el outline para “limpiar”.
- Iconos de una sola familia y un solo grosor, a 20 o 24. Si la palabra ya se entiende, el icono sobra.

## Rechazos

Si aparece alguno, la página todavía es una plantilla. Sustitúyelo por la idea de la ficha.

- Etiqueta pequeña + titular + párrafo + dos botones, centrado.
- Tres columnas iguales de icono, título y dos líneas.
- Fila de logos mudos, métricas sin fuente, testimonios en cards idénticas.
- Degradado violeta o malla de color de fondo.
- Hero a pantalla completa con el texto flotando en el centro óptico y nada más.
- Flecha dentro de cada botón, por defecto.
- Sombra y radio grandes en cada bloque, section tras section.
