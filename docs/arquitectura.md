# Arquitectura

Proyecto estático de HTML, CSS y JavaScript vanilla. Las rutas son relativas para soportar GitHub Pages bajo una subruta y no hay proceso de compilación ni dependencias externas.

## Archivos y responsabilidades

- `index.html`: estructura semántica, metadatos y contenido de la landing.
- `css/variables.css`: tokens de color, tipografía, espaciado y componentes.
- `css/styles.css`: estilos base y componentes compartidos.
- `css/responsive.css`: adaptación por ancho y preferencia de movimiento reducido.
- `js/catalogo.js`: datos del catálogo y único lugar para configurar WhatsApp.
- `js/app.js`: renderizado seguro del catálogo, filtros, menú móvil y mejoras de movimiento.
- `assets/logo/`: versiones originales del logo.
- `assets/invitaciones/`: portadas locales, incluida una SVG genérica para la primera demo.
- `docs/`: plan, arquitectura, diseño y checklist de lanzamiento.

## Catálogo

`window.ENCANTO_DIGITAL.invitaciones` es una lista de objetos con `id`, `nombre`, `categoria`, `estilo`, `imagen`, `demoUrl` y `activo`; `destacado` es opcional. Solo se muestran registros activos con campos válidos, una imagen local de mismo origen y una URL HTTPS de demo. Las categorías sin modelos activos no generan filtros. Sin registros válidos se muestra un estado vacío.

Las tarjetas se construyen con métodos del DOM y `textContent`; los datos no se interpolan en HTML. Las imágenes usan `loading="lazy"` y `decoding="async"`. Los enlaces de demo abren en nueva pestaña con `rel="noopener noreferrer"`.

## Contacto

El número se configura en `window.ENCANTO_DIGITAL.whatsappNumero`, con código de país y solo dígitos. Vacío, la interfaz muestra contacto pendiente y no crea enlaces ficticios. Con número válido, se genera el enlace `wa.me` y el texto contextual se codifica con `encodeURIComponent`.

## Logo

El encabezado utiliza `assets/logo/logoEncantoDigital.png` sin alteraciones. `assets/logo/logoblanco.jpeg` se conserva para fondos oscuros. El favicon y la imagen Open Graph definitiva siguen pendientes: la adaptación del logo requiere aprobación y no se recibió una imagen promocional ni URL pública.
