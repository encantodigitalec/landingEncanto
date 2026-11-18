# Sistema de diseño

La interfaz usa la identidad Modern Neutral Premium aprobada en el plan maestro. Los tokens están centralizados en `css/variables.css`; los estilos base y componentes reutilizables viven en `css/styles.css`, y los cambios por ancho de pantalla en `css/responsive.css`.

## Color y contraste

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#FAFAF8` | Fondo principal |
| `--color-surface` | `#F0F1F2` | Superficies alternas |
| `--color-text` | `#29323D` | Texto y CTA principal |
| `--color-accent` | `#526779` | Enlaces, CTA secundario y foco |
| `--color-detail` | `#C6B8A5` | Decoración puntual, no texto pequeño |

Texto principal sobre el fondo y enlaces/acento sobre el fondo superan el contraste mínimo WCAG AA de 4.5:1 para texto normal. El color detalle queda reservado para elementos decorativos, sin información esencial.

## Tipografía y espaciado

Se usa una pila de fuentes de sistema. Los tamaños de título se adaptan al ancho con `clamp`; cuerpo y textos auxiliares usan una escala fija. El espaciado sigue incrementos de 4 px, definidos como variables `--space-*`.

## Componentes

- `.container`: ancho máximo compartido con márgenes fluidos.
- `.button` y `.button--secondary`: acciones primarias y secundarias con foco visible.
- `.card`, `.card__image`, `.card__content` y `.card__meta`: base reutilizable para tarjetas con imagen vertical.
- `.section-heading`: ancho y separación para introducciones de sección.

Los componentes quedan disponibles para fases posteriores; aquí no se agrega catálogo ni contenido comercial.

## Responsive, interacción y movimiento

El catálogo usa una columna por defecto, dos desde 640 px y tres desde 1024 px. Los beneficios pasan de una columna a dos y luego cuatro; el proceso de tres pasos se muestra en una columna, dos y tres. Las imágenes mantienen relación 4:5 sin deformarse. El menú móvil tiene estado expandido, cierra al navegar o pulsar Escape, y devuelve el foco al botón al cerrarse con Escape.

Los controles tienen estados de foco visibles. Las transiciones de botones son breves y las secciones aparecen al entrar en pantalla solo si el navegador admite `IntersectionObserver` y el usuario no pidió movimiento reducido. La preferencia `prefers-reduced-motion` desactiva esas apariciones y el desplazamiento suave.

La revisión manual en Safari iPhone y Chrome Android queda pendiente. La comprobación automatizada de anchos 320, 375, 390, 768, 1024 y 1440 px se realizará durante la revisión final del navegador.
