# LANDINGPYTHON — CHMODX

Landing page del curso **Python 3 de 0 a MASTER**, dictado por Brian De Vita.

Sitio estático (HTML + CSS + JavaScript) pensado para convertir visitas en inscripciones,
con un embudo claro: promesa, prueba social, temario, opiniones y oferta por tiempo limitado.

## Características

- **Diseño oscuro** (#000000) con identidad de marca CHMODX.
- **Totalmente responsive**: móvil, tablet y escritorio.
- **Contador de oferta** con ventana persistente (48 h por visitante, guardado en `localStorage`).
- **Precio promocional**: $450 tachado y $100 como oferta (78% OFF).
- **Gráfico de lenguajes** de programación con Python en el puesto #1 (referencia TIOBE).
- **Sección de opiniones** con foto de perfil y nombre de usuario.
- **Barra de compra fija** en móvil y botón "volver arriba".
- **Dos llamadas a la acción principales**: compra en Hotmart y canal de Telegram.

## Estructura del proyecto

```
LANDINGPYTHON/
├── index.html            # Página principal
├── CNAME                 # Dominio personalizado (chmodxcode.pro)
├── .nojekyll             # Evita el procesado de Jekyll en GitHub Pages
├── css/
│   └── style.css         # Estilos (tema oscuro y responsive)
├── js/
│   └── main.js           # Contador, animaciones, menú móvil
└── assets/
    ├── logo.png          # Logotipo CHMODX (usado en cabecera, pie y favicon)
    └── brian-de-vita.jpg # Foto del instructor
```

## Ejecución en local

Abre el archivo directamente en el navegador:

```
index.html
```

O levanta un servidor local (recomendado):

```bash
python3 -m http.server 8080
```

Luego visita <http://localhost:8080>.

## Enlaces de conversión

| Destino | URL |
|---|---|
| Página de pago (Hotmart) | https://go.hotmart.com/S99672631V?ap=7ba0 |
| Canal de Telegram | https://t.me/chmodxcode |

## Dominio

El dominio personalizado está definido en el archivo `CNAME`:

```
chmodxcode.pro
```

Para que funcione con GitHub Pages hay que configurar en DNS:

- **A** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **AAAA** → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- **CNAME** de `www` → `rk13termux.github.io`

Después, activar **Enforce HTTPS** en la configuración de GitHub Pages.

## Despliegue

El repositorio incluye un flujo de trabajo (`.github/workflows/deploy.yml`) que publica
el sitio automáticamente en GitHub Pages con cada push a la rama `main`.

## Licencia

© 2026 CHMODX. Todos los derechos reservados.
