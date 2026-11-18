# PLAN MAESTRO DE MEJORA UX/UI --- ENCANTO DIGITAL

## 1. Contexto y objetivo general

Encanto Digital contará con una landing page orientada principalmente a
funcionar como **catálogo visual de invitaciones digitales**.

El objetivo no es crear una landing informativa tradicional, sino una
experiencia donde el cliente pueda:

1.  Entrar a la página.
2.  Entender inmediatamente que se ofrecen invitaciones digitales.
3.  Visualizar los diseños disponibles casi desde el primer viewport.
4.  Filtrar los diseños por tipo de evento.
5.  Abrir directamente una demo interactiva.
6.  Consultar una ficha individual de cada invitación.
7.  Entender qué elementos son personalizables.
8.  Conocer de forma sencilla las condiciones principales del servicio.
9.  Contactar por WhatsApp indicando automáticamente el diseño que le
    interesa.

La prioridad UX será siempre:

**Catálogo → Demo → Detalles → Contacto**

La información secundaria nunca debe competir visualmente con el
catálogo.

------------------------------------------------------------------------

# 2. Principios UX/UI aprobados

## 2.1. Catálogo como protagonista

La landing no utilizará un hero tradicional grande con fotografía.

La primera pantalla debe permitir visualizar rápidamente:

-   Logo.
-   Mensaje principal muy corto.
-   Filtros del catálogo.
-   Primeras invitaciones disponibles.

En móvil, parte de las primeras tarjetas debería ser visible desde el
primer viewport o requerir un desplazamiento mínimo.

## 2.2. Menos texto

Evitar:

-   párrafos comerciales largos;
-   explicaciones repetidas;
-   frases excesivamente románticas;
-   información técnica;
-   políticas completas dentro del catálogo.

El usuario debe comprender la página principalmente mediante:

-   imágenes;
-   títulos;
-   iconos;
-   botones;
-   etiquetas;
-   microtextos.

## 2.3. Marca preparada para distintos eventos

Encanto Digital no debe parecer una marca exclusiva de bodas.

La arquitectura y la identidad visual deben funcionar para:

-   bodas;
-   XV años;
-   cumpleaños;
-   baby shower;
-   graduaciones;
-   bautizos;
-   otros eventos futuros.

Inicialmente el catálogo puede contener únicamente bodas, pero la
estructura debe quedar preparada para crecer.

------------------------------------------------------------------------

# 3. Dirección visual aprobada

## 3.1. Estilo

**Modern Light**

Características:

-   limpio;
-   moderno;
-   profesional;
-   elegante;
-   visual;
-   confiable;
-   con espacios amplios;
-   sin decoración excesiva.

## 3.2. Paleta aprobada

### Azul petróleo

Color principal de Encanto Digital.

Utilizar en:

-   encabezados;
-   botones principales;
-   navegación;
-   iconografía importante;
-   footer;
-   elementos de confianza.

Debe aportar:

-   seguridad;
-   profesionalismo;
-   contraste;
-   identidad.

### Cobre

Color de acento.

Utilizar de forma moderada en:

-   filtros activos;
-   detalles decorativos;
-   líneas;
-   iconos;
-   pequeños indicadores;
-   estados interactivos;
-   elementos destacados.

No utilizar grandes superficies cobre.

### Neutros

Complementar con:

-   blanco cálido;
-   gris muy claro;
-   gris medio;
-   gris oscuro.

Las fotografías de los eventos serán las principales responsables de
aportar variedad cromática.

## 3.3. Variables visuales

Centralizar mediante variables CSS:

-   colores;
-   sombras;
-   border-radius;
-   espaciados;
-   anchos máximos;
-   tamaños tipográficos;
-   transiciones;
-   estados interactivos.

Evitar valores repetidos innecesariamente.

------------------------------------------------------------------------

# 4. Arquitectura UX general

``` text
ENCANTO DIGITAL
│
├── LANDING / CATÁLOGO
│   ├── Header compacto
│   ├── Mensaje principal
│   ├── Filtros por categoría
│   ├── Tarjetas de invitaciones
│   │   ├── Ver demo
│   │   └── Ver detalles
│   ├── Qué incluye
│   ├── Cómo funciona
│   ├── Contacto
│   └── Footer
│
├── FICHA DE INVITACIÓN
│   ├── Volver al catálogo
│   ├── Categoría
│   ├── Nombre
│   ├── Imagen principal
│   ├── Ver demo
│   ├── Personalización
│   ├── Funcionalidades
│   ├── Información necesaria
│   ├── Condiciones
│   └── Consultar por WhatsApp
│
└── DEMO
    └── Invitación interactiva real
```

------------------------------------------------------------------------

# 5. Header

Crear un header compacto.

Debe contener:

-   Logo Encanto Digital.
-   Catálogo.
-   Cómo funciona.
-   Contacto.

En móvil utilizar navegación compacta.

El header no debe consumir demasiado espacio vertical.

El catálogo debe seguir siendo visible rápidamente.

------------------------------------------------------------------------

# 6. Primera pantalla

Eliminar el protagonismo del hero tradicional.

Mensaje sugerido:

## Invitaciones digitales para momentos especiales.

Texto secundario:

> Explora nuestros diseños y encuentra el ideal para tu celebración.

Debajo deben aparecer inmediatamente:

-   filtros;
-   tarjetas.

Evitar imágenes gigantes antes del catálogo.

------------------------------------------------------------------------

# 7. Categorías y filtros

Inicialmente:

-   Todos.
-   Bodas.

Preparar para:

-   XV años.
-   Cumpleaños.
-   Baby shower.
-   Graduaciones.
-   Bautizos.
-   Otros.

## Reglas

-   No mostrar categorías sin invitaciones publicadas.
-   Los filtros deben generarse a partir de los datos disponibles.
-   Cambiar de categoría no debe recargar la página.
-   En móvil permitir scroll horizontal de filtros si existen muchas
    categorías.
-   El filtro activo debe utilizar el cobre como acento.

------------------------------------------------------------------------

# 8. Diseño definitivo de las tarjetas

Las tarjetas serán el elemento visual principal.

## 8.1. Concepto aprobado

**Fotografía emocional + smartphone mostrando una captura real de la
invitación.**

Ejemplo conceptual:

``` text
┌─────────────────────────┐
│                         │
│       FOTOGRAFÍA        │
│                         │
│             ┌──────┐    │
│             │PHONE │    │
│             │ DEMO │    │
│             └──────┘    │
│                         │
├─────────────────────────┤
│ BODAS                   │
│ Romance Eterno          │
│                         │
│ [ Ver demo ] Detalles → │
└─────────────────────────┘
```

## 8.2. Objetivo de la composición

La fotografía debe generar conexión emocional.

El smartphone debe dejar claro que el producto es:

-   digital;
-   interactivo;
-   pensado para celular.

## 8.3. Imagen

Proporción recomendada:

**3:4 vertical**

La imagen debe ocupar aproximadamente 70--75 % de la tarjeta.

## 8.4. Información de tarjeta

Mostrar únicamente:

-   categoría;
-   nombre;
-   Ver demo;
-   Detalles.

No mostrar:

-   precios;
-   políticas;
-   textos largos;
-   listas de funciones;
-   requisitos.

## 8.5. Acciones

### Ver demo

Acción principal.

Debe abrir directamente la demo interactiva.

### Detalles

Acción secundaria.

Debe abrir la ficha independiente de esa invitación.

No obligar al usuario a entrar primero a la ficha para poder visualizar
la demo.

------------------------------------------------------------------------

# 9. Sistema visual de imágenes del catálogo

Crear una plantilla gráfica consistente para todas las tarjetas.

Debe mantener:

-   proporción;
-   tratamiento visual;
-   posición coherente del smartphone;
-   calidad;
-   márgenes;
-   iluminación;
-   estilo editorial.

La fotografía cambiará según la categoría.

Ejemplos:

-   boda → pareja;
-   XV años → quinceañera;
-   cumpleaños → celebración;
-   baby shower → temática relacionada;
-   graduación → graduado/a.

La identidad de Encanto Digital debe mantenerse aunque cambie el evento.

------------------------------------------------------------------------

# 10. Imágenes responsive

Preparar soporte para imágenes específicas según dispositivo.

Cada invitación podrá tener:

-   imagen de catálogo desktop;
-   imagen de catálogo mobile.

Esto evitará recortes incorrectos.

Utilizar preferentemente:

-   WebP;
-   AVIF cuando resulte conveniente.

Aplicar:

-   compresión;
-   lazy loading;
-   dimensiones reservadas.

Evitar layout shift durante la carga.

------------------------------------------------------------------------

# 11. Interacciones de las tarjetas

## Desktop

Permitir:

-   elevación ligera;
-   sombra progresiva;
-   zoom de imagen muy sutil;
-   transición corta.

## Mobile

No depender de hover.

Los botones deben estar disponibles directamente.

## Restricción

Evitar:

-   animaciones exageradas;
-   efectos 3D innecesarios;
-   movimientos largos;
-   efectos que retrasen la exploración.

------------------------------------------------------------------------

# 12. Diseño responsive

La implementación debe ser **mobile-first**.

## Móvil

Intentar inicialmente 2 columnas.

Mantener dos columnas únicamente cuando exista espacio suficiente para:

-   imagen;
-   nombre;
-   categoría;
-   botones.

En dispositivos muy estrechos pasar automáticamente a una columna.

No sacrificar legibilidad para mantener dos columnas.

## Tablet

2 o 3 columnas dependiendo del espacio disponible.

## Desktop

3 columnas.

Preparar la arquitectura para poder utilizar 4 columnas en el futuro si
el catálogo crece considerablemente.

## Contenedor

Ancho máximo aproximado:

``` css
max-width: 1200px;
```

Contenido centrado.

------------------------------------------------------------------------

# 13. Arquitectura de datos

Separar los datos del catálogo de la presentación.

Crear un archivo central, por ejemplo:

``` text
data/invitations.json
```

Cada invitación debe poder definir conceptualmente:

``` json
{
  "id": "boda-001",
  "name": "Romance Eterno",
  "category": "bodas",
  "published": true,
  "order": 1,

  "images": {
    "desktop": "",
    "mobile": ""
  },

  "demoUrl": "",

  "personalization": {
    "colors": true,
    "texts": true,
    "photos": true,
    "music": true
  },

  "features": {
    "map": true,
    "rsvp": true,
    "agenda": true,
    "countdown": true
  }
}
```

La estructura definitiva puede ajustarse si Codex encuentra una solución
técnica más limpia, siempre manteniendo la separación entre datos y
presentación.

------------------------------------------------------------------------

# 14. Renderizado dinámico del catálogo

Las tarjetas no deben duplicarse manualmente en HTML.

JavaScript debe:

1.  Leer los datos.
2.  Obtener invitaciones publicadas.
3.  Ordenarlas.
4.  Crear las tarjetas.
5.  Detectar categorías disponibles.
6.  Crear filtros.
7.  Gestionar filtrado.

Agregar una nueva invitación debería requerir principalmente:

1.  Añadir sus imágenes.
2.  Añadir su configuración.
3.  Indicar su URL de demo.

------------------------------------------------------------------------

# 15. Página independiente de detalle

Decisión aprobada:

**Cada invitación tendrá una ficha independiente.**

No crear manualmente un HTML completo para cada producto.

Crear una plantilla reutilizable.

Ejemplo conceptual:

``` text
/invitacion/?id=boda-001
```

La ficha cargará los datos correspondientes al ID.

Si el ID no existe:

-   mostrar mensaje sencillo;
-   permitir volver al catálogo;
-   no romper la interfaz.

------------------------------------------------------------------------

# 16. Ficha adaptable

Decisión aprobada:

**Ficha adaptable según la complejidad de la invitación.**

## Invitación sencilla

``` text
Imagen
Nombre
Demo
Personalización
Condiciones
WhatsApp
```

## Invitación avanzada

``` text
Imagen
Nombre
Demo

Personalización

Características
- Música
- Google Maps
- Agenda
- Confirmación
- Cuenta regresiva

Galería opcional

Información necesaria

Condiciones

WhatsApp
```

La misma arquitectura debe servir para ambas.

No mostrar secciones vacías.

------------------------------------------------------------------------

# 17. Estructura UX de la ficha

``` text
← Volver al catálogo

CATEGORÍA

Nombre de la invitación

[ COMPOSICIÓN VISUAL ]

Texto corto

[ VER DEMO INTERACTIVA ]

────────────────────

Personalízala

Colores
Textos
Fotografías
Música
Ubicación
...

────────────────────

¿Qué incluye?            +

¿Qué necesitamos?        +

Condiciones del servicio +

────────────────────

¿Te gusta este diseño?

[ CONSULTAR POR WHATSAPP ]
```

------------------------------------------------------------------------

# 18. Personalización dinámica

La página debe mostrar únicamente las opciones compatibles con cada
diseño.

Posibles opciones:

-   colores;
-   textos;
-   fotografías;
-   música;
-   ubicación;
-   agenda;
-   confirmación;
-   cuenta regresiva;
-   otras futuras.

Ejemplo:

Una invitación puede admitir:

``` text
Colores · Textos · Fotografías · Música
```

Otra:

``` text
Colores · Textos · Ubicación
```

No mostrar funciones inexistentes.

------------------------------------------------------------------------

# 19. Funcionalidades dinámicas

Las invitaciones podrán indicar características como:

-   música;
-   Google Maps;
-   agenda;
-   confirmación de asistencia;
-   cuenta regresiva.

La ficha debe adaptarse automáticamente.

No utilizar características falsas únicamente para rellenar contenido.

------------------------------------------------------------------------

# 20. Información comercial

La información comercial debe estar disponible sin convertir la ficha en
una página llena de texto.

Utilizar:

-   acordeones;
-   desplegables;
-   bloques compactos.

Apartados recomendados:

### ¿Qué incluye tu invitación?

Explicar brevemente qué recibe el cliente.

### ¿Qué puedes personalizar?

Mostrar únicamente las opciones disponibles.

### ¿Qué necesitamos para comenzar?

Solicitar según el diseño:

-   nombres;
-   fecha;
-   hora;
-   ubicación;
-   textos;
-   fotografías;
-   canción;
-   datos de confirmación;
-   otros datos necesarios.

### ¿Cómo recibes tu invitación?

Explicar que después de la aprobación recibirá un enlace para compartir
digitalmente.

------------------------------------------------------------------------

# 21. Políticas comerciales aprobadas

## 21.1. Correcciones

Incluye:

**1 ronda de correcciones antes de la aprobación.**

Una ronda puede contener varios ajustes enviados conjuntamente.

Ejemplos:

-   nombres;
-   fechas;
-   horarios;
-   textos;
-   pequeños datos.

No se considera corrección:

-   cambiar completamente de plantilla;
-   rediseñar la invitación;
-   incorporar funciones nuevas;
-   cambiar sustancialmente la estructura.

Estos trabajos podrán cotizarse por separado.

## 21.2. Pago

Condición aprobada:

**50 % para iniciar.**

**50 % antes de la entrega/publicación definitiva.**

El enlace definitivo debe entregarse una vez completado el pago
acordado.

## 21.3. Vigencia

La invitación tendrá una disponibilidad ofrecida de:

**6 meses desde su publicación.**

No prometer enlaces permanentes.

## 21.4. Cambios después de la entrega

Condición aprobada:

**Ajustes menores gratuitos durante 7 días posteriores a la entrega.**

Limitar a pequeños cambios sobre información existente.

No incluir:

-   nuevas secciones;
-   nuevas funcionalidades;
-   cambio de plantilla;
-   rediseños;
-   cambios estructurales importantes.

------------------------------------------------------------------------

# 22. Políticas pendientes

Todavía no establecer como definitivas:

-   cancelaciones;
-   devolución del anticipo;
-   renovación del enlace después de seis meses.

La arquitectura debe permitir añadir estas políticas posteriormente sin
modificar el diseño general.

No inventar condiciones mientras estén pendientes.

------------------------------------------------------------------------

# 23. Precios

Decisión aprobada:

**No mostrar precios en el catálogo.**

CTA:

**Consultar por WhatsApp**

Esto permite evaluar:

-   diseño seleccionado;
-   personalización requerida;
-   funcionalidades;
-   necesidades específicas.

------------------------------------------------------------------------

# 24. WhatsApp

WhatsApp será el principal canal de conversión.

## Landing

Implementar un botón flotante discreto.

Debe:

-   permanecer accesible;
-   no tapar tarjetas;
-   no interferir con filtros;
-   no obstaculizar navegación móvil.

## Ficha

CTA destacado:

### ¿Te gusta este diseño?

**Consultar por WhatsApp**

Generar dinámicamente un mensaje contextual.

Ejemplo:

> Hola, me interesa la invitación digital "Romance Eterno". Quisiera
> conocer el precio y las opciones de personalización.

El nombre debe obtenerse automáticamente desde los datos de la
invitación.

------------------------------------------------------------------------

# 25. Sección "Qué incluye"

Después del catálogo añadir una sección compacta.

Ejemplo:

### Personalizable

Adapta textos, colores y contenido según el diseño.

### Interactiva

Funciones disponibles según la invitación seleccionada.

### Lista para compartir

Recibe un enlace para compartir con tus invitados.

Utilizar iconografía.

Evitar párrafos extensos.

------------------------------------------------------------------------

# 26. Sección "Cómo funciona"

Crear tres pasos visuales:

### 01 --- Elige

Encuentra el diseño que te gusta.

### 02 --- Personaliza

Envíanos los datos de tu evento.

### 03 --- Comparte

Recibe tu invitación y compártela.

Debe ser una sección breve y secundaria respecto al catálogo.

------------------------------------------------------------------------

# 27. Footer

Footer minimalista.

Puede utilizar azul petróleo para generar contraste.

Incluir únicamente:

-   Encanto Digital;
-   contacto;
-   redes sociales cuando existan;
-   información básica necesaria.

No sobrecargar.

------------------------------------------------------------------------

# 28. Accesibilidad

Implementar:

-   HTML semántico;
-   contraste suficiente;
-   navegación mediante teclado;
-   estados focus visibles;
-   textos alternativos;
-   botones correctamente identificados;
-   áreas táctiles adecuadas;
-   jerarquía correcta de headings.

Respetar:

``` css
prefers-reduced-motion
```

No utilizar únicamente color para comunicar estados.

------------------------------------------------------------------------

# 29. Rendimiento

La landing será visual, por lo que la optimización de imágenes es
crítica.

Aplicar:

-   WebP/AVIF;
-   compresión;
-   lazy loading;
-   dimensiones explícitas;
-   CSS optimizado;
-   JavaScript mínimo;
-   eliminación de recursos innecesarios.

Evitar frameworks o librerías grandes para funciones sencillas.

Priorizar:

-   HTML;
-   CSS;
-   JavaScript nativo.

------------------------------------------------------------------------

# 30. Microinteracciones

Utilizar únicamente cuando mejoren el feedback.

Permitidas:

-   hover ligero;
-   zoom mínimo;
-   transición de botones;
-   cambio suave de filtros;
-   apertura de acordeones;
-   aparición discreta de contenido.

Evitar:

-   loaders decorativos;
-   animaciones largas;
-   parallax pesado;
-   efectos llamativos que compitan con el catálogo.

------------------------------------------------------------------------

# 31. Estructura conceptual del proyecto

Antes de reorganizar, analizar la estructura actual.

Objetivo conceptual:

``` text
landingEncanto/
│
├── index.html
│
├── invitacion/
│   └── index.html
│
├── data/
│   └── invitations.json
│
├── assets/
│   ├── images/
│   │   └── catalog/
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── base.css
│   ├── components.css
│   └── responsive.css
│
└── js/
    ├── catalog.js
    ├── filters.js
    └── details.js
```

No reorganizar archivos simplemente para replicar esta estructura si el
proyecto actual ya tiene una arquitectura equivalente o mejor.

------------------------------------------------------------------------

# 32. Compatibilidad con GitHub Pages

Todo debe seguir funcionando como sitio estático.

No incorporar:

-   backend;
-   base de datos;
-   servidor obligatorio;
-   dependencias incompatibles con GitHub Pages.

Las URLs deben funcionar correctamente al publicar.

No romper URLs públicas existentes.

------------------------------------------------------------------------

# 33. Pruebas responsive

Probar como mínimo:

-   320 px;
-   360 px;
-   375 px;
-   390 px;
-   430 px;
-   tablet;
-   laptop;
-   desktop.

Validar:

-   header;
-   filtros;
-   tarjetas;
-   imágenes;
-   botones;
-   WhatsApp;
-   ficha;
-   acordeones;
-   navegación;
-   footer.

Cuando corresponda, probar orientación vertical y horizontal.

------------------------------------------------------------------------

# 34. Pruebas funcionales

## Catálogo

Comprobar:

-   carga correcta;
-   filtros;
-   orden;
-   invitaciones publicadas;
-   invitaciones ocultas;
-   categorías dinámicas.

## Tarjetas

Comprobar:

-   URL de demo;
-   URL de detalles;
-   imágenes;
-   contenido.

## Fichas

Comprobar:

-   ID correcto;
-   datos correctos;
-   personalización;
-   características;
-   acordeones;
-   retorno al catálogo.

## WhatsApp

Comprobar:

-   enlace;
-   mensaje;
-   nombre correcto del diseño.

## Errores

Probar:

-   ID inexistente;
-   imagen faltante;
-   campo opcional vacío;
-   URL demo ausente;
-   características vacías.

La interfaz no debe romperse por datos opcionales inexistentes.

------------------------------------------------------------------------

# 35. Revisión UX final

Antes de dar el rediseño por terminado comprobar:

### En menos de 5 segundos

¿El visitante entiende que Encanto Digital ofrece invitaciones
digitales?

### Sin buscar

¿Puede encontrar inmediatamente el catálogo?

### Con un toque

¿Puede abrir una demo?

### Desde la ficha

¿Comprende qué puede personalizar?

### Sin leer demasiado

¿Comprende cómo contratar?

### Desde móvil

¿Puede navegar y contactar fácilmente?

Si alguna respuesta es negativa, revisar esa parte de la experiencia.

------------------------------------------------------------------------

# 36. Plan de ejecución para Codex

NO ejecutar todo el plan simultáneamente.

La implementación debe dividirse en bloques.

------------------------------------------------------------------------

## BLOQUE 1 --- Base visual

Incluye:

1.  Auditoría del proyecto actual.
2.  Respaldo.
3.  Sistema de colores.
4.  Variables CSS.
5.  Tipografía.
6.  Header compacto.
7.  Eliminación/rediseño del hero.
8.  Primera pantalla orientada al catálogo.

### Al finalizar

Detener ejecución.

Informar:

-   archivos modificados;
-   cambios;
-   problemas;
-   pruebas.

Esperar aprobación.

------------------------------------------------------------------------

## BLOQUE 2 --- Catálogo

Incluye:

1.  Arquitectura de datos.
2.  invitations.json.
3.  Renderizado dinámico.
4.  Categorías.
5.  Filtros.
6.  Tarjetas.
7.  Imágenes responsive.
8.  Acciones Demo / Detalles.
9.  Responsive del catálogo.

### Al finalizar

Detener ejecución.

Probar especialmente:

-   móvil;
-   filtros;
-   tarjetas;
-   enlaces.

Esperar aprobación.

------------------------------------------------------------------------

## BLOQUE 3 --- Fichas

Incluye:

1.  Plantilla reutilizable.
2.  Lectura por ID.
3.  Ficha adaptable.
4.  Personalización dinámica.
5.  Funcionalidades dinámicas.
6.  Información comercial.
7.  Acordeones.
8.  Políticas aprobadas.
9.  Manejo de errores.

### Al finalizar

Detener ejecución.

Esperar aprobación.

------------------------------------------------------------------------

## BLOQUE 4 --- Conversión

Incluye:

1.  WhatsApp flotante.
2.  WhatsApp contextual.
3.  Qué incluye.
4.  Cómo funciona.
5.  Footer.
6.  Ajustes de jerarquía comercial.

### Al finalizar

Detener ejecución.

Esperar aprobación.

------------------------------------------------------------------------

## BLOQUE 5 --- Calidad final

Incluye:

1.  Accesibilidad.
2.  Rendimiento.
3.  Optimización de imágenes.
4.  Microinteracciones.
5.  Responsive final.
6.  Pruebas funcionales.
7.  Revisión UX.
8.  Limpieza final.

------------------------------------------------------------------------

# 37. Reglas obligatorias para Codex

1.  No ejecutar todos los bloques de una sola vez.
2.  Trabajar únicamente el bloque solicitado.
3.  Analizar el código existente antes de modificar.
4.  No destruir funcionalidades actuales.
5.  No modificar las demos existentes salvo instrucción explícita.
6.  No romper URLs públicas.
7.  Mantener compatibilidad con GitHub Pages.
8.  No incorporar backend.
9.  No incorporar base de datos.
10. Evitar frameworks innecesarios.
11. Priorizar HTML, CSS y JavaScript nativo.
12. Mantener datos separados de presentación.
13. Diseñar mobile-first.
14. Priorizar catálogo sobre contenido informativo.
15. Mantener textos comerciales cortos.
16. No inventar precios.
17. No inventar políticas pendientes.
18. No mostrar categorías vacías.
19. No mostrar características que una invitación no tenga.
20. Mantener accesibilidad básica.
21. Optimizar imágenes.
22. No utilizar animaciones pesadas.
23. Después de cada bloque informar:
    -   archivos modificados;
    -   cambios realizados;
    -   decisiones técnicas;
    -   pruebas realizadas;
    -   problemas encontrados.
24. Esperar aprobación antes de continuar.

------------------------------------------------------------------------

# 38. Flujo final esperado

``` text
ENTRAR A ENCANTO DIGITAL
        ↓
VER CATÁLOGO
        ↓
FILTRAR POR EVENTO
        ↓
SELECCIONAR INVITACIÓN
        ↓
 ┌──────────────────────┐
 │                      │
 ↓                      ↓
VER DEMO            VER DETALLES
 │                      │
 │              PERSONALIZACIÓN
 │                      │
 │               CONDICIONES
 │                      │
 └───────────┬──────────┘
             ↓
      CONTACTAR WHATSAPP
```

------------------------------------------------------------------------

# 39. Resultado esperado

Encanto Digital debe dejar de sentirse como una landing principalmente
informativa y convertirse en un **catálogo digital profesional, visual,
rápido y escalable**.

La experiencia debe transmitir:

-   confianza;
-   profesionalismo;
-   modernidad;
-   personalización;
-   facilidad de uso.

La prioridad siempre será permitir que el cliente vea las invitaciones y
sus demos con la menor fricción posible.

La información comercial debe existir, pero permanecer subordinada a la
exploración del catálogo.

La arquitectura debe permitir que en el futuro se agreguen nuevos
diseños y categorías sin reconstruir la landing.
