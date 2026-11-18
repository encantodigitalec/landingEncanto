# Checklist de lanzamiento

## Implementado

- [x] Landing semántica, navegación y secciones comerciales.
- [x] Catálogo dinámico con filtros por categorías disponibles, estado vacío e imágenes diferidas.
- [x] Renderizado de contenido con APIs del DOM y `textContent`.
- [x] Menú móvil con estado accesible y cierre por Escape.
- [x] Preferencia `prefers-reduced-motion` respetada.
- [x] Metadatos base y reglas responsive.
- [x] Proyecto sin dependencias ni proceso de build.
- [x] URL de la primera demo abre en el navegador y muestra una invitación de boda.
- [x] Portada genérica propia de la landing; no se copiaron recursos ni se modificó la demo.

## Pendiente si se amplía o publica

- [ ] Agregar nombres, estilos, portadas y URLs HTTPS reales de los modelos adicionales.
- [x] Incorporar la primera demo de boda confirmada con una portada genérica propia de la landing.
- [x] Configurar el número comercial aprobado y activar WhatsApp contextual.
- [ ] Aprobar una versión legible del logo para favicon; el original no se ha alterado.
- [ ] Definir metadatos e imagen Open Graph finales si se decide publicar con URL pública.

GitHub Pages y los enlaces de redes sociales quedan fuera del alcance de esta entrega por decisión del usuario.

## Revisión previa a publicar

- [x] Revisar consola y solicitudes locales; los recursos cargan y no hay errores de consola.
- [x] Revisar 320, 375, 390, 768, 1024 y 1440 px; no se encontró overflow horizontal.
- [x] Abrir/cerrar el menú móvil por teclado y comprobar que Escape devuelve el foco al botón.
- [x] Probar el filtro de bodas, la portada local y la carga de la demo.
- [x] Verificar el enlace WhatsApp contextual generado para la demo de boda, sin enviar mensajes.
- [x] Lighthouse móvil local: accesibilidad 100, buenas prácticas 100, SEO 83.
- [ ] Revisar Safari iPhone y Chrome Android en dispositivos físicos.
