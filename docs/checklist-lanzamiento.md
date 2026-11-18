# Checklist de implementacion

## Completado

- [x] Landing orientada al catalogo con filtros generados a partir de invitaciones publicadas.
- [x] Tarjetas responsivas con demo directa, ficha por ID, fotografia editorial local, portada real en mockup de telefono, espacio reservado y carga diferida.
- [x] Ficha reutilizable con personalizacion y funciones configuradas por invitacion.
- [x] Manejo de IDs desconocidos e informacion opcional sin romper la ficha.
- [x] Acordeones comerciales con las cuatro condiciones aprobadas; no se agregaron politicas pendientes ni precios.
- [x] WhatsApp contextual en la ficha, contacto en la landing y boton flotante que se oculta sobre el catalogo.
- [x] Secciones breves de beneficios y pasos, footer de contacto y navegacion movil accesible.
- [x] Preferencia `prefers-reduced-motion`, foco visible, HTML semantico y etiquetas alternativas.
- [x] Reserva de espacio durante la carga del catalogo y de la ficha para evitar desplazamientos de contenido.
- [x] Servidor estatico local sin dependencias en `scripts/serve.mjs`; no se requiere build.
- [x] URL de la demo preservada; el proyecto de demo no se modifico.

## Verificacion local

- [x] Rutas principales, JSON, politicas, CSS, JavaScript, logo, fotografia WebP y portada SVG responden correctamente por HTTP.
- [x] Sintaxis JavaScript y formato JSON verificados.
- [x] Filtros, menu movil y cierre por Escape comprobados.
- [x] Enlaces de demo, ficha y WhatsApp comprobados sin enviar mensajes.
- [x] ID inexistente y campos opcionales probados.
- [x] Acordeones y contenido de politicas comprobados.
- [x] Sin desbordamiento horizontal a 320, 360, 375, 390, 430, 768, 1024, 1280 y 1440 px, ni a 844 x 390 en horizontal.
- [x] Lighthouse local: 100 en accesibilidad, buenas practicas, SEO y navegacion agentica para la landing movil/escritorio y la ficha movil.
- [x] Consola local sin errores despues de declarar el logo existente como favicon.

## Pendiente para ampliar o publicar

- [ ] Agregar invitaciones y categorias solo cuando existan sus imagenes, demos y opciones confirmadas.
- [ ] Definir la imagen Open Graph final cuando exista una URL publica.
- [ ] Revisar Safari en iPhone y Chrome en Android fisicos.

GitHub Pages y la publicacion quedan fuera de esta ejecucion local. El sitio conserva rutas relativas para soportar GitHub Pages bajo una subruta.
