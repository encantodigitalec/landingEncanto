# Encanto Digital

Landing estática para presentar invitaciones digitales. Usa HTML, CSS y JavaScript vanilla; no requiere instalación de dependencias ni build.

## Ejecución local

Desde la carpeta del proyecto, inicia un servidor estático con `python -m http.server 8000` y abre `http://localhost:8000`. También se puede abrir `index.html` directamente, aunque un servidor local reproduce mejor el despliegue estático.

## Datos del catálogo y contacto

Los modelos se agregan en `window.ENCANTO_DIGITAL.invitaciones`, dentro de `js/catalogo.js`. Cada registro requiere identificador, nombre, categoría, estilo, ruta de portada local, URL HTTPS de demo y `activo: true`. La primera demo confirmada es una invitación de boda; su tarjeta usa una portada genérica de la landing. Las demás portadas deben guardarse en `assets/invitaciones/`.

El número comercial aprobado está configurado en `whatsappNumero` con formato internacional de Ecuador. Los mensajes se generan con el nombre del modelo y el texto se codifica para el enlace `wa.me`.

## Estado de publicación

La landing local está finalizada con una primera demo de boda, portada genérica y contacto contextual por WhatsApp. No se conectará ni publicará en GitHub Pages, según la decisión del usuario. Los modelos adicionales y la revisión de dispositivos físicos son ampliaciones futuras. Consulta `docs/checklist-lanzamiento.md` para el estado del lanzamiento.
