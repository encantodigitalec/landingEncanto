# PLAN MAESTRO — ENCANTO DIGITAL

**Versión:** 1.0  
**Estado:** Aprobado para planificación; implementación únicamente por fases y previa autorización.  
**Producto:** Landing comercial con catálogo de invitaciones digitales.  
**Stack:** HTML5, CSS3 y JavaScript vanilla.  
**Despliegue:** GitHub Pages.  
**Prioridad:** Mobile-first, rendimiento, accesibilidad y claridad comercial.

## 1. Objetivo y alcance

Crear desde cero una landing page sobria, profesional y agradable que presente la marca **Encanto Digital**, muestre inicialmente invitaciones de **bodas**, permita abrir demos reales y facilite consultas por WhatsApp. La estructura deberá permitir incorporar categorías futuras (15 años, baby shower y graduaciones) sin rehacer la interfaz.

### Incluido en el MVP
- Encabezado con logo, navegación y menú móvil.
- Portada con propuesta de valor y CTA «Explorar catálogo».
- Catálogo de tarjetas con portada, nombre, estilo y CTA «Ver demo».
- Secciones breves de beneficios, «Cómo funciona» y contacto.
- Integración de enlaces a demos independientes en GitHub Pages.
- Botón de WhatsApp con mensaje contextual del modelo elegido.
- SEO básico, accesibilidad, responsive y optimización de recursos.

### Fuera de alcance
- Backend, base de datos, cuentas, carrito, pagos y panel de administración.
- Formularios que almacenen datos personales.
- Frameworks o bibliotecas pesadas sin justificación.
- Nuevas invitaciones o modificación del código de las demos existentes.
- Precios públicos hasta nueva aprobación.

## 2. Identidad y diseño aprobado

**Estilo:** Modern Neutral Premium. Diseño limpio, comercial y sobrio; las imágenes de las invitaciones deben ser protagonistas.

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#FAFAF8` | Fondo principal |
| `--color-surface` | `#F0F1F2` | Secciones alternas |
| `--color-text` | `#29323D` | Títulos, texto principal y CTA fuerte |
| `--color-accent` | `#526779` | Botones secundarios, enlaces y estados |
| `--color-detail` | `#C6B8A5` | Acentos decorativos puntuales |

Verificar contrastes WCAG antes de fijar combinaciones de texto y fondo. No usar arena para texto pequeño sin contraste suficiente. No modificar el logo original; evaluar su legibilidad en fondos claros y oscuros. Si se requiere una versión adaptada, solicitar aprobación.

### Guía de interfaz
- Tipografía sans serif moderna y legible; preferir fuentes de sistema o una sola familia web optimizada.
- Espaciado consistente y jerarquía clara de títulos, párrafos y botones.
- Tarjetas con bordes redondeados moderados, borde tenue y sombra sutil.
- Imágenes verticales de portada con proporción consistente, sin distorsión (`object-fit: cover` cuando corresponda).
- Microinteracciones discretas, no animaciones que retrasen el acceso al contenido.
- CTA principal evidente y accesible por teclado.

## 3. Wireframe funcional

```text
[HEADER: LOGO                         MENÚ]
[HERO: titular + descripción + CTA catálogo]
[PREVISUALIZACIÓN DESTACADA DE INVITACIÓN]
[CATÁLOGO]
  [Filtro: Todas | Bodas]  (ocultar categorías sin modelos)
  [Tarjeta] [Tarjeta] [Tarjeta...]  (según ancho)
[BENEFICIOS: música, ubicación, confirmación, personalización]
[CÓMO FUNCIONA: elegir → enviar datos → recibir]
[CTA CONTACTO WHATSAPP]
[FOOTER: marca y enlaces reales disponibles]
```

### Responsive
- Diseño desde 320 px sin desplazamiento horizontal.
- Teléfono: una columna en catálogo por defecto; dos solo si el ancho permite mantener legibilidad y tamaño táctil.
- Tablet: dos columnas.
- Escritorio: tres columnas, con ancho máximo de contenido.
- Menú móvil accesible con estado expandido, cierre y foco apropiados.
- Probar especialmente Safari iPhone, Chrome Android y escritorio.

## 4. Arquitectura propuesta

```text
encanto-digital/
├── index.html
├── css/
│   ├── variables.css
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── catalogo.js
│   └── app.js
├── assets/
│   ├── logo/
│   ├── invitaciones/
│   └── icons/
├── docs/
│   ├── plan-maestro.md
│   ├── arquitectura.md
│   └── diseno-ux-ui.md
└── README.md
```

La estructura es una propuesta inicial; mantenerla simple y evitar fragmentación artificial. `catalogo.js` contendrá una lista declarativa de invitaciones, sin necesidad de editar `index.html` para agregar un modelo. `app.js` renderizará tarjetas, filtros y navegación. Usar rutas relativas compatibles con repositorios GitHub Pages alojados bajo subruta.

### Contrato de datos del catálogo

Campos sugeridos por invitación:
- `id`: identificador único y estable, por ejemplo `boda-001`.
- `nombre`: nombre comercial visible.
- `categoria`: inicialmente `bodas`.
- `estilo`: descripción corta del diseño.
- `imagen`: ruta relativa de la portada optimizada.
- `demoUrl`: URL HTTPS pública y verificada.
- `activo`: booleano para mostrar/ocultar.
- `destacado`: booleano opcional.

No inventar invitaciones ni imágenes: usar solamente modelos, recursos y enlaces confirmados. Los ejemplos de diseño son marcadores hasta recibir portadas definitivas.

### Integración de demos
- Cada demo permanece independiente y alojada en su propia URL.
- «Ver demo» abre en nueva pestaña con `target="_blank"` y `rel="noopener noreferrer"`.
- Los enlaces deben verificarse antes de publicar.
- Nunca incrustar demos pesadas en cada tarjeta del catálogo.

### WhatsApp
- Definir número comercial en una única configuración, pendiente de proporcionar.
- Construir `https://wa.me/NUMERO?text=MENSAJE` con codificación segura del texto.
- Ejemplo de mensaje: «Hola, me interesa la invitación Boda Elegante de Encanto Digital. Quisiera conocer más información».
- No mostrar botones operativos con número ficticio; durante desarrollo usar estado claramente pendiente.

## 5. Plan por fases

### Fase 1 — Arquitectura base
**Objetivo:** preparar proyecto limpio y documentado.

**Tareas:** crear estructura de carpetas, HTML semántico base, archivos CSS/JS, metadatos iniciales, documentación y README con instrucciones de ejecución local. Integrar logo suministrado sin alterarlo, una vez disponible en el directorio del proyecto.

**Entregables:** árbol de archivos, base que carga sin errores, README y arquitectura.

**Aceptación:** no errores en consola; rutas relativas; sin dependencias innecesarias; ninguna lógica de catálogo avanzada todavía.

### Fase 2 — Sistema de diseño
**Objetivo:** establecer identidad visual consistente.

**Tareas:** variables CSS, escala tipográfica, contenedores, espaciado, botones, tarjetas base, estados hover/focus, componentes y reglas responsive.

**Entregables:** sistema visual documentado y componentes reutilizables.

**Aceptación:** paleta aprobada, contraste suficiente, diseño coherente a 320/375/390/768/1024/1440 px.

### Fase 3 — Landing principal
**Objetivo:** desarrollar secciones comerciales.

**Tareas:** header, hero, CTA catálogo, beneficios, proceso de compra, contacto y footer; textos concisos en español; imágenes reales cuando estén disponibles.

**Entregables:** landing navegable con contenido completo y secciones responsive.

**Aceptación:** navegación funcional, jerarquía visual clara, sin overflow horizontal y sin elementos falsamente interactivos.

### Fase 4 — Catálogo dinámico
**Objetivo:** agregar modelos sin modificar el HTML.

**Tareas:** contrato de datos, renderizado seguro de tarjetas, filtro por categoría, estado vacío y ocultamiento de categorías sin productos; carga diferida de imágenes.

**Entregables:** catálogo conectado a `catalogo.js`.

**Aceptación:** agregar un registro válido crea una tarjeta; registros inactivos no aparecen; filtros funcionan; ausencia de datos muestra mensaje útil; no se usa `innerHTML` con datos no confiables.

### Fase 5 — Demos y contacto
**Objetivo:** permitir exploración real y consulta comercial.

**Tareas:** enlaces de demos, apertura segura en nueva pestaña, mensaje WhatsApp contextual, CTA global de contacto y validación de URLs.

**Entregables:** flujo completo catálogo → demo → regreso → consulta.

**Aceptación:** ninguna URL inventada; mensaje identifica modelo; enlace de WhatsApp correcto con número aprobado; las demos no se modifican.

### Fase 6 — Pulido UX/UI
**Objetivo:** mejorar percepción premium sin afectar rendimiento.

**Tareas:** transiciones suaves, aparición moderada al hacer scroll, estados táctiles y de teclado, desplazamiento suave condicionado a preferencias del usuario.

**Entregables:** interfaz pulida.

**Aceptación:** `prefers-reduced-motion` respetado; sin pantallas de carga innecesarias; animaciones no bloquean acciones; funcionamiento en Safari iPhone.

### Fase 7 — Calidad, SEO y optimización
**Objetivo:** garantizar calidad de lanzamiento.

**Tareas:** revisar accesibilidad, enlaces, títulos, descripción, Open Graph, favicon, imágenes WebP, tamaño y carga de recursos, Lighthouse cuando sea posible y pruebas manuales.

**Entregables:** lista de pruebas, incidencias corregidas y checklist de lanzamiento.

**Aceptación:** sin errores críticos de accesibilidad o consola; recursos cargan; botones y enlaces funcionan; no hay desplazamiento horizontal; metadatos correctos.

### Fase 8 — Publicación
**Objetivo:** publicar y verificar la landing.

**Tareas:** configurar repositorio y GitHub Pages, verificar rutas bajo subdirectorio, probar sitio publicado en móvil y escritorio, comprobar demos y WhatsApp.

**Entregables:** URL pública verificada y README actualizado.

**Aceptación:** página accesible públicamente; imágenes y CSS/JS cargan; enlaces de demos operativos; contacto real validado.

## 6. Protocolo obligatorio para Codex

1. Leer `docs/plan-maestro.md` antes de trabajar.
2. **No ejecutar todas las fases de una sola vez.** Esperar la autorización explícita de una fase.
3. Antes de editar, informar archivos que se crearán o modificarán y riesgos previstos.
4. No tocar proyectos de invitaciones existentes ni repositorios de demos.
5. No instalar dependencias ni introducir frameworks sin aprobación.
6. No inventar precios, testimonios, redes sociales, número de WhatsApp, imágenes o enlaces.
7. Mantener HTML, CSS y JavaScript simples, comentando solo decisiones no obvias.
8. Al terminar una fase, resumir cambios, pruebas realizadas, limitaciones y pendientes; detenerse para revisión.
9. Preservar lo ya aprobado salvo solicitud expresa de rediseño.
10. Si falta información esencial, detener la parte afectada y pedirla.

## 7. Información pendiente antes de fases específicas

- **Fase 1:** disponer del archivo de logo original en `assets/logo/` y validar cómo se ve sobre fondos claros.
- **Fase 4:** imágenes de portada y nombres definitivos de los modelos disponibles.
- **Fase 5:** número de WhatsApp comercial y URLs de demos que se publicarán.
- **Fase 7:** enlaces reales de redes sociales, si se decide incluirlos; título y descripción SEO definitivos.
- **Fase 8:** nombre del repositorio y URL pública definitiva.

## 8. Orden de aprobación

1. Revisar este plan maestro.
2. Aprobar expresamente la **Fase 1**.
3. Ejecutar Fase 1 con Codex y revisar resultado.
4. Aprobar siguiente fase; repetir hasta Fase 8.

**Instrucción inicial para Codex (usar solo cuando se apruebe Fase 1):**

> Lee íntegramente `docs/plan-maestro.md`. Ejecuta únicamente la Fase 1 (Arquitectura base). Antes de editar, enumera los archivos que crearás y las decisiones técnicas. No implementes todavía el diseño final, catálogo dinámico, integraciones ni animaciones. Al finalizar, informa archivos creados, pruebas y pendientes, y espera mi aprobación para continuar.
