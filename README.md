# CHMODX · Hub de contenido + Academia

Sitio estático de **chmodxcode.pro** reorganizado como un ecosistema modular de contenido técnico:

- **Hub** (`/`): repositorios, guías y rutas de aprendizaje.
- **Repositorios** (`/repositorios/`): scripts de ciberseguridad, Python y Termux.
- **Guías** (`/guias/`): artículos técnicos con fundamentos y buenas prácticas.
- **Academia** (`/academia/`): página de ventas del curso **Python 3 de 0 a MASTER**.

No hay tienda tradicional ni carrito. El contenido gratuito atrae, educa y deriva al siguiente paso natural: la Academia Python Pro.

---

## Arquitectura

```
.
├── index.html                     # Hub (generado)
├── academia/index.html            # Página de ventas (edición manual)
├── repositorios/                  # Catálogo + fichas (generado)
├── guias/                         # Catálogo + artículos (generado)
├── content/
│   ├── repos/*.md                 # Repositorios en Markdown + front matter
│   └── guias/*.md                 # Guías en Markdown + front matter
├── data/content.json              # Índice generado para integraciones
├── templates/                     # Plantillas HTML del generador
├── scripts/
│   ├── build.py                   # Generador estático
│   └── markdown.py                # Renderizador Markdown sin dependencias
├── css/
│   ├── style.css                  # Estilos de la Academia
│   └── site.css                   # Estilos del hub y del contenido
├── js/
│   ├── main.js                    # WebViews, Telegram, checkout Hotmart, contador
│   └── content.js                 # Copiar código, filtros, TOC, progreso
├── assets/                        # Logo y foto del instructor
├── admin/                         # Panel de Administración Pro (Flet)
│   ├── app.py                     # Ventana, pestañas y estado
│   ├── branding.py                # Plantilla Maestra de contenido
│   ├── content.py                 # Front matter, validación y guardado
│   ├── supabase_api.py            # Cliente REST de Supabase
│   ├── git_ops.py                 # Build + commit + push con subprocess
│   ├── tabs/                      # Editor, Analíticas, Leads, Publicación
│   └── sql/schema.sql             # Tablas y políticas RLS
├── sitemap.xml                    # Generado
├── robots.txt                     # Generado
├── CNAME                          # chmodxcode.pro
└── .github/workflows/deploy.yml   # Build + deploy a GitHub Pages
```

### Decisiones técnicas

1. **Generación estática en Python**, sin dependencias externas. El contenido vive en Markdown con front matter; `scripts/build.py` lo convierte en HTML, `data/content.json` y `sitemap.xml`.
2. **URLs limpias** (`/repositorios/<slug>/` y `/guias/<slug>/`) para SEO y para que cada pieza sea enlazable.
3. **Un solo `main.js`** compartido por todo el sitio. La lógica crítica de WebViews, modales de Telegram y checkout perezoso de Hotmart se conserva intacta y funciona también en las páginas de contenido.
4. **Progressive enhancement**: las páginas funcionan sin JavaScript. Los filtros, el copiado de código y el progreso de lectura se añaden con `content.js`.
5. **Contenido desacoplado del diseño**: para publicar una guía o un repositorio solo se añade un `.md` y se ejecuta el build.

---

## Ejecución local

```bash
python3 scripts/build.py
python3 -m http.server 8080
```

Abre <http://localhost:8080>.

> Usa un servidor local, no `file://`: las rutas absolutas (`/css/site.css`, `/academia/`) están pensadas para el dominio raíz.

---

## Cómo publicar contenido

### 1. Crear el archivo

- Repositorio: `content/repos/mi-script.md`
- Guía: `content/guias/mi-guia.md`

### 2. Front matter

**Repositorios**

```yaml
---
title: "Escáner de puertos con Python y sockets"
slug: "escaner-puertos-python"
summary: "Descripción de una o dos frases que aparecerá en las tarjetas y en Google."
category: "ciberseguridad"        # ciberseguridad | python | termux | automatizacion
difficulty: "Intermedio"          # Principiante | Intermedio | Avanzado
stack: ["Python 3", "Sockets"]
tags: ["redes", "reconocimiento"]
updated: "2026-10-24"             # YYYY-MM-DD
repo: ""                          # URL de GitHub si existe; si está vacío, se enlaza Telegram
featured: true                    # aparece en el hub
order: 1                          # orden manual dentro del catálogo
license: "MIT"
---
```

**Guías**

```yaml
---
title: "Termux desde cero"
slug: "termux-desde-cero"
summary: "Descripción breve."
category: "termux"
level: "Principiante"
reading: 9                        # minutos; si se omite, se calcula
tags: ["android", "python"]
updated: "2026-10-23"
featured: true
order: 1
---
```

### 3. Escribir el cuerpo

El renderizador admite:

- Títulos `##` y `###` (generan índice lateral y anclas).
- Párrafos, **negritas**, *cursivas*, `código en línea` y enlaces.
- Listas, citas con `>` y tablas.
- Bloques de código con \`\`\`lenguaje.
- HTML puntual para avisos: `<div class="callout callout-warn">…</div>`.

Los bloques con lenguaje `output`, `console`, `salida` o `tree` no reciben CTA automática (son salidas, no comandos ejecutables).

### 4. Generar

```bash
python3 scripts/build.py
```

El build valida campos obligatorios, slugs duplicados y categorías desconocidas. Si algo falta, falla con un mensaje claro.

### 5. Publicar

Commit y push a `main`. El workflow ejecuta el build y despliega en GitHub Pages.

---

## Panel de Administración Pro

`admin/` es una aplicación de escritorio en **Flet** que automatiza todo el flujo de publicación:

```bash
python3 -m pip install -r admin/requirements.txt
cp admin/.env.example admin/.env      # SUPABASE_URL + claves
python3 -m admin                      # abre la ventana
python3 -m admin --check              # diagnóstico sin interfaz
```

- **Editor**: manual, con IA (OmniRoute) o importando un `.md`, siempre con Plantilla Maestra, vista previa y guardado directo en `content/`.
- **Contenido**: biblioteca de lo publicado, con edición, vista previa en el sitio y borrado.
- **Analíticas**: visitas, únicos y conversión leídos de Supabase.
- **Leads**: correos capturados, con búsqueda y exportación a CSV.
- **Publicación**: `scripts/build.py` + `git add` + `git commit` + `git push`, con consola en vivo.

Documentación completa en [`admin/README.md`](admin/README.md).

---

## Embudo de inbound marketing

Cada pieza de contenido incluye CTAs contextuales, sin venta agresiva:

| Ubicación | Comportamiento |
|---|---|
| Después de cada bloque de código | Banner compacto con copy según la categoría |
| Barra lateral | Tarjeta de la Academia + tarjeta de Telegram |
| Final del artículo | CTA principal con dos salidas: Academia y dudas |
| Barra fija móvil | Precio y acceso a la Academia |
| Catálogo | Banda final con el siguiente paso |

Todos los enlaces internos a `/academia/` llevan UTM:

```
/academia/?utm_source=contenido&utm_medium=cta_codigo&utm_campaign=<slug>&utm_content=bloque-1
```

Esto permite medir qué bloque y qué artículo convierten cuando se añada analítica.

La Academia conserva su propio embudo: promesa, prueba social, temario, instructor, opiniones, comunidad, FAQ, oferta y CTA final. El hub añade un puente de recursos gratuitos dentro de esa página.

---

## Lógica de WebViews y pagos

`js/main.js` conserva el comportamiento original:

1. **Detección** de navegadores internos de TikTok, Instagram, Facebook, Pinterest, Snapchat, LinkedIn, X, WhatsApp, LINE y WebViews genéricos.
2. **Telegram**: si el WebView bloquea `t.me`, se abre un modal con instrucciones, botón de apertura y copiado de enlace con respaldo (`execCommand`).
3. **Hotmart**: en WebView se carga bajo demanda `checkout.hotmart.com/lib/hotmart-checkout-elements.js` y se monta el checkout en un overlay. Si falla en 15 s, se ofrece copiar el enlace del curso.
4. **Navegador normal**: los enlaces externos funcionan sin interceptación. `?pago=1` permite probar el checkout embebido.
5. **Contador**: solo se inicializa en `/academia/`, donde existe la oferta. En el hub no se escribe `localStorage`.

Los enlaces internos (`/academia/`, `/repositorios/`, `/guias/`) nunca se interceptan.

---

## Analítica y captura de leads

El sitio envía sus propios datos a Supabase, sin servicios de terceros:

| Archivo | Función |
|---|---|
| `js/supabase-config.js` | Generado por el build con la URL y la clave pública |
| `js/tracking.js` | Una fila en `page_views` por página vista (visitante, sesión, dispositivo, UTM) |
| `js/leads.js` | Conecta los formularios `data-cx-lead` con la tabla `leads` |

La clave pública viaja al navegador a propósito: RLS solo permite `insert`.
La clave de servicio queda en `admin/.env`, excluido de Git, y solo la usa el
panel de escritorio para leer.

Sin credenciales configuradas el script se desactiva y el sitio sigue igual.

---

## SEO

Cada página generada incluye:

- `<title>`, `meta description` y `canonical`.
- Open Graph y Twitter Card.
- Datos estructurados JSON-LD: `WebSite`, `CollectionPage`, `TechArticle` y `SoftwareSourceCode`.
- Migas de pan visibles.
- `sitemap.xml` y `robots.txt`.

La Academia incluye JSON-LD de tipo `Course` con `Offer` en USD.

---

## Diseño

Se mantiene la identidad visual existente:

- Fondo negro (`#000000`) y tarjetas `#0c0c0c`.
- Verde fosforescente `#00e676`, cian `#00e5ff`, amarillo `#ffd43b`.
- Tipografías **Space Grotesk** (títulos), **Inter** (texto) y **Fira Code** (código).
- Componentes tipo terminal, corchetes y ventanas de código.

`css/site.css` replica los tokens de `css/style.css` para que el hub y la Academia se vean como un mismo producto. Si cambias la paleta, actualiza ambos archivos.

---

## Despliegue

`.github/workflows/deploy.yml`:

1. Checkout.
2. `actions/configure-pages`.
3. `python3 scripts/build.py`.
4. Subida del directorio raíz como artefacto.
5. `actions/deploy-pages`.

Dominio personalizado en `CNAME`: `chmodxcode.pro`. En DNS:

- **A** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **AAAA** → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- **CNAME** de `www` → `rk13termux.github.io`

Activa **Enforce HTTPS** en GitHub Pages.

---

## Mantenimiento

- **Cambiar un precio**: se edita en `academia/index.html`, `templates/home.html`, `templates/listing.html` y `scripts/build.py` (barra fija y CTAs). Está centralizado en pocos lugares, pero conviene revisarlo con una búsqueda de `$100` y `$450`.
- **Añadir una categoría**: actualiza `CATEGORIES` en `scripts/build.py`, los estilos `.badge-*` en `css/site.css` y los filtros del catálogo.
- **Cambiar el dominio**: actualiza `BASE_URL` en `scripts/build.py` y `CNAME`.
- **Borrar contenido**: elimina el `.md` y ejecuta el build. El generador limpia las carpetas de slugs que ya no existen.

---

© 2026 CHMODX. Todos los derechos reservados.
