# Encanto Digital

Landing estática para presentar invitaciones digitales. Usa HTML, CSS y JavaScript vanilla; no requiere instalación de dependencias ni build.

## Ejecución local

Desde la carpeta del proyecto, ejecuta `node scripts/serve.mjs` y abre `http://127.0.0.1:8000`. El catálogo se carga desde archivos JSON; por la seguridad del navegador no se puede abrir la landing con `file://` y esperar que aparezcan los modelos.

## Datos del catálogo y contacto

Los modelos se agregan en `data/invitations.json`. Cada registro publicado incluye identificador, nombre, categoría, orden, imágenes responsive opcionales, URL HTTPS de demo, opciones de personalización y funciones disponibles. `invitacion/?id=<id>` usa una plantilla común para mostrar la ficha. Las condiciones aprobadas se editan en `data/service-policies.json`; el número de WhatsApp se configura en `js/catalogo.js`.

El número comercial aprobado está configurado en `whatsappNumero` con formato internacional de Ecuador. Los mensajes se generan con el nombre del modelo y el texto se codifica para el enlace `wa.me`.

## Estado de publicación

La landing local está finalizada con una primera demo de boda, portada genérica y contacto contextual por WhatsApp. No se conectará ni publicará en GitHub Pages, según la decisión del usuario. Los modelos adicionales y la revisión de dispositivos físicos son ampliaciones futuras. Consulta `docs/checklist-lanzamiento.md` para el estado del lanzamiento.
