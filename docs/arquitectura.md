# Arquitectura

Proyecto estático de HTML, CSS y JavaScript vanilla. Las rutas son relativas para soportar GitHub Pages bajo una subruta y no hay proceso de compilación ni dependencias externas.

## Archivos y responsabilidades

- `index.html`: estructura semántica, metadatos y contenido de la landing.
- `css/variables.css`: tokens de color, tipografía, espaciado y componentes.
- `css/styles.css`: estilos base y componentes compartidos.
- `css/responsive.css`: adaptación por ancho y preferencia de movimiento reducido.
- `css/details.css`: composición responsive de las fichas.
- `data/invitations.json`: datos independientes del catálogo.
- `data/service-policies.json`: condiciones comerciales aprobadas.
- `js/catalogo.js`: configuración de WhatsApp.
- `js/app.js`: renderizado seguro del catálogo, filtros, menú móvil y enlaces de contacto.
- `invitacion/index.html` y `invitacion/details.js`: plantilla reutilizable de ficha por ID.
- `scripts/serve.mjs`: servidor HTTP local sin dependencias, con soporte para rutas estáticas e índices.
- `assets/logo/`: versiones originales del logo.
- `assets/invitaciones/`: fotografía editorial local en WebP y portada SVG de la demo usada como pantalla decorativa del mockup de teléfono.
- `docs/`: plan, arquitectura, diseño y checklist de lanzamiento.

## Catálogo

`data/invitations.json` contiene una lista de objetos con `id`, `name`, `category`, `published`, `order`, `images` y `demoUrl`. Se muestran registros publicados válidos y se ordenan por `order`; los filtros se generan solo con las categorías presentes. Las imágenes `desktop` y `mobile` son opcionales e independientes; `phone` agrega la vista decorativa dentro del mockup en la tarjeta. Las demos deben usar HTTPS; una demo ausente conserva la tarjeta con la acción deshabilitada.

La ficha usa `invitacion/?id=<id>` y carga el mismo registro del catálogo. `personalization` y `features` contienen claves booleanas; la plantilla solo muestra las opciones activas. `included` y `requirements` son listas opcionales. Las condiciones se mantienen aparte para poder actualizarlas sin rehacer la ficha. Los IDs inexistentes o no publicados muestran un estado de error con retorno al catálogo.

Las tarjetas se construyen con métodos del DOM y `textContent`; los datos no se interpolan en HTML. Las imágenes usan `loading="lazy"`, `decoding="async"` y dimensiones reservadas. Los enlaces de demo abren en nueva pestaña con `rel="noopener noreferrer"`; los detalles apuntan a `invitacion/?id=<id>`.

## Contacto

El número se configura en `window.ENCANTO_DIGITAL.whatsappNumero`, con código de país y solo dígitos. Vacío, la interfaz muestra contacto pendiente y no crea enlaces ficticios. Con número válido, se genera el enlace `wa.me` y el texto contextual se codifica con `encodeURIComponent`.

## Logo

El encabezado y el favicon utilizan `assets/logo/logoEncantoDigital.png` sin alteraciones. `assets/logo/logoblanco.jpeg` se conserva para fondos oscuros. La imagen Open Graph definitiva queda pendiente hasta contar con una URL pública e imagen promocional aprobada.
