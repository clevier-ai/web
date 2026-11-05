---
name: web-interfaz
description: >-
  Diseña interfaces de producto: paneles, herramientas, ajustes, tablas,
  listados y formularios de uso diario. Se usa al crear o rehacer un
  dashboard, app UI, settings, data table, formulario de producto, navegación
  de aplicación o estados vacío, carga y error. Landings y páginas de marca
  van a web-composicion.
---

# Interfaz de producto

Una herramienta se juzga por lo que deja hacer en el segundo uso, no por el primer pantallazo. Densidad elegida, una acción clara, estados honestos.

Si la pantalla es de marca o de campaña, aplica `web-composicion`. Si el producto aún no tiene ficha y se está inventando el aspecto entero, escribe una con `web-direccion` usando la idea Taller, y quédate en estas medidas.

## Densidad

Elígela antes de maquetar y no la mezcles en la misma pantalla.

| | Diaria (puntero) | Media | Ocasional |
|---|---|---|---|
| Cuerpo | 13px / 18px | 14px / 20px | 16px / 24px |
| Alto de control | 32px | 36px | 44px |
| Alto de fila | 36px | 44px | 52px |
| Aire entre campos | 12px | 16px | 20px |
| Padding de página | 16px | 24px | 32px |

En táctil, el control no baja de 44px aunque la densidad sea diaria. Las cifras van en `tabular-nums`. El cuerpo de un párrafo largo, si lo hay, sube a 16px: la densidad aprieta la herramienta, no la lectura.

## Anatomía de la pantalla

- Navegación que es un mapa: un nivel visible, el sitio actual marcado con peso o con una barra, no con un color chillón. Como mucho cinco destinos primarios.
- Título de la pantalla en una línea, y una acción primaria a su altura. El resto de acciones van a secundario o a un menú.
- El contenido llega enseguida. Nada de hero, ni de párrafo de bienvenida, ni de ilustración de cabecera.
- Un solo nivel de contenedor. Una card dentro de otra card es una pantalla que no se ha decidido.

## Formularios

- Label siempre visible, encima del campo. El placeholder es un ejemplo, no el nombre del campo.
- El ancho del campo imita al dato: un código postal no mide lo mismo que un comentario.
- El error sale junto al campo, en una frase que dice cómo corregirlo. Un resumen arriba solo si hay varios errores, y enlaza a cada uno.
- La ayuda va bajo el label, antes de que el campo falle.
- Agrupa en bloques con título. No entregues veinte campos en una columna muda.
- El botón de envío dice lo que va a pasar. "Guardar cambios", no "Enviar" ni "OK".

## Tablas y listas

- Texto a la izquierda, números a la derecha, cabecera quieta, mismo alto de fila.
- El separador es un filete de 1px. La cebra se usa solo cuando el filete no basta para seguir la fila.
- Hover de fila: un tinte de tinta al 4%. Nada de elevación ni de sombra.
- Acciones de fila al foco y al hover, más un menú teclado-accesible. No una barra de iconos siempre encendida en cada fila.
- Orden, filtro y búsqueda viven juntos, encima de la tabla, con el resultado contado ("128"). Vacío y cero resultados son dos estados distintos.
- En estrecho, la tabla que no cabe se convierte en lista con las dos columnas que importan. Un scroll horizontal con la primera columna fija es la alternativa cuando las columnas son datos y no se pueden perder.

## Estados

- Vacío: una frase que dice por qué está vacío y la acción para llenarlo. Sin ilustración genérica.
- Cargando: el hueco reservado (el alto final) y un indicio de espera. La página no salta cuando llegan los datos.
- Error: qué falló y qué hacer ahora. El color de error es el color de estado del sistema, no el acento de marca.
- Éxito: confirma cerca de donde se actuó. Un toast que desaparece solo no es la única confirmación si el dato cambió en la pantalla: el dato ya se ve nuevo.

## Color

- La marca tiñe la acción primaria y poco más.
- Estado (éxito, aviso, error, información) usa los tokens de estado. Si no existen, defínelos una vez y no reutilices el acento verde de la marca como "ok" y como "botón".
- El texto sobre el primario cumple 4.5:1. Si el acento de marca no llega, el primario es tinta y el acento queda para el foco o el enlace.

## Puertas

- Foco visible en cada control. El orden de tabulación sigue el orden visual.
- Nada que solo exista en hover.
- Iconos de herramienta con nombre accesible.
- Contraste 4.5:1 en texto de UI; 3:1 en bordes de campos y en iconos esenciales.
- `prefers-reduced-motion` respetado. El movimiento de interfaz vive en `web-movimiento` y es corto: 120–180ms.

## Rechazos

- Stat cards idénticas en una rejilla como sustituto de una jerarquía (una cifra manda, las otras son filas).
- Modal para navegar o para un formulario largo.
- Sidebar llena de grupos plegados que esconden el mapa.
- Bordes redondeados, sombra y gradiente en cada widget.
- Texto de UI por debajo de 12px.
