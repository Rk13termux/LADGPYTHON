#!/usr/bin/env python3
"""Generador estático del ecosistema CHMODX.

Lee el contenido modular de ``content/repos`` y ``content/guias`` (Markdown con
front matter), renderiza las páginas del hub y escribe un índice JSON y un
sitemap. No usa dependencias externas: funciona con Python 3.10+.

Uso:
    python3 scripts/build.py
"""

from __future__ import annotations

import html
import json
import os
import re
import shutil
from datetime import date, datetime
from pathlib import Path
from typing import Any, Callable

from markdown import render as render_markdown
from markdown import slugify

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "content"
TEMPLATE_DIR = ROOT / "templates"
BASE_URL = "https://chmodxcode.pro"
SITE_NAME = "CHMODX"

CATEGORIES: dict[str, dict[str, str]] = {
    "ciberseguridad": {
        "label": "Ciberseguridad",
        "icon": "fas fa-shield-halved",
        "desc": "Reconocimiento, hardening y análisis con ética y alcance definido.",
    },
    "python": {
        "label": "Python",
        "icon": "fab fa-python",
        "desc": "Fundamentos, scripts y proyectos que puedes ejecutar hoy.",
    },
    "termux": {
        "label": "Termux",
        "icon": "fas fa-terminal",
        "desc": "Linux, servidores y desarrollo directamente en Android.",
    },
    "automatizacion": {
        "label": "Automatización",
        "icon": "fas fa-robot",
        "desc": "Scripts que eliminan trabajo repetitivo y errores manuales.",
    },
}

MONTHS = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
]

CTA_COPY = {
    "ciberseguridad": (
        "Practicar comandos sueltos no te prepara para una auditoría. En el Curso de Python 3 de 0 a Master "
        "trabajas alcance, evidencia y reporte con método.",
        "Este comando es una pieza. Entender el contexto, el riesgo y la remediación "
        "es lo que convierte una prueba en un trabajo profesional.",
        "La diferencia entre un hallazgo y un informe útil está en el criterio. "
        "En el Curso de Python 3 de 0 a Master entrenas ese criterio con laboratorios guiados.",
    ),
    "python": (
        "Copiar un script resuelve una tarea. Entender cada línea te permite resolver "
        "la siguiente. El Curso de Python 3 de 0 a Master construye esa base paso a paso.",
        "Este bloque funciona hoy. Con estructura, pruebas y buenas prácticas seguirá "
        "funcionando dentro de un año. Eso se aprende con método.",
        "Pasar de scripts sueltos a proyectos mantenibles es el salto que separa al "
        "aficionado del profesional. El Curso de Python 3 de 0 a Master te acompaña en ese salto.",
    ),
    "termux": (
        "Tu Android puede ser un laboratorio completo. En el Curso de Python 3 de 0 a Master montamos el entorno, "
        "los proyectos y el flujo de trabajo desde cero.",
        "Instalar herramientas es el primer paso. Usarlas con orden, versiones y respaldo "
        "es lo que evita perder el trabajo. El Curso de Python 3 de 0 a Master cubre ese flujo.",
        "Termux deja de ser un experimento cuando lo usas para construir. El Curso de Python 3 de 0 a Master "
        "te da la ruta para que cada comando tenga un propósito.",
    ),
    "automatizacion": (
        "Automatizar sin criterio crea deuda técnica. Aprende a diseñar scripts que puedas "
        "mantener, probar y reutilizar durante años.",
        "Un script que solo tú entiendes es un problema futuro. El Curso de Python 3 de 0 a Master trabaja "
        "estructura, pruebas y documentación desde el primer proyecto.",
        "La automatización útil empieza por saber qué no automatizar. Ese criterio "
        "se entrena con casos reales y revisión.",
    ),
}

END_COPY = {
    "ciberseguridad": "Aprende el método completo: alcance, reconocimiento, evidencia y reporte.",
    "python": "Pasa de los scripts sueltos a proyectos completos con estructura y pruebas.",
    "termux": "Convierte tu móvil en un entorno de desarrollo serio, no en un experimento.",
    "automatizacion": "Diseña automatizaciones mantenibles en lugar de parches que se rompen.",
}


# ---------------------------------------------------------------------------
# Utilidades
# ---------------------------------------------------------------------------
def e(value: Any) -> str:
    return html.escape(str(value), quote=False)


def attr(value: Any) -> str:
    return html.escape(str(value), quote=True)


def date_human(value: str) -> str:
    try:
        parsed = date.fromisoformat(value)
    except ValueError:
        return value
    return f"{parsed.day} {MONTHS[parsed.month - 1]} {parsed.year}"


def date_ordinal(value: str) -> int:
    try:
        return date.fromisoformat(value).toordinal()
    except ValueError:
        return 0


def parse_value(raw: str) -> Any:
    value = raw.strip()
    if not value:
        return ""
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        parts = re.split(r',(?=(?:[^"]*"[^"]*")*[^"]*$)', inner)
        return [parse_value(part) for part in parts]
    if value.lower() in {"true", "false"}:
        return value.lower() == "true"
    if re.fullmatch(r"-?\d+", value):
        return int(value)
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    return value


def parse_front_matter(raw: str) -> tuple[dict[str, Any], str]:
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n?", raw, re.DOTALL)
    if not match:
        return {}, raw

    meta: dict[str, Any] = {}
    for line in match.group(1).splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        key, separator, value = line.partition(":")
        if not separator:
            continue
        meta[key.strip()] = parse_value(value)
    return meta, raw[match.end():]


def render_template(name: str, **context: Any) -> str:
    text = (TEMPLATE_DIR / name).read_text(encoding="utf-8")
    for key, value in context.items():
        text = text.replace("{{" + key + "}}", str(value))
    leftovers = sorted(set(re.findall(r"\{\{[A-Z0-9_]+\}\}", text)))
    if leftovers:
        raise ValueError(f"Placeholders sin resolver en {name}: {leftovers}")
    return text


# ---------------------------------------------------------------------------
# Contenido
# ---------------------------------------------------------------------------
def estimate_reading(body: str) -> int:
    words = len(re.findall(r"\w+", body))
    return max(3, round(words / 200))


def load_items(kind: str) -> list[dict[str, Any]]:
    folder = CONTENT_DIR / kind
    items: list[dict[str, Any]] = []
    seen: set[str] = set()

    for path in sorted(folder.glob("*.md")):
        raw = path.read_text(encoding="utf-8")
        meta, body = parse_front_matter(raw)

        title = str(meta.get("title", "")).strip()
        summary = str(meta.get("summary", "")).strip()
        if not title or not summary:
            raise ValueError(f"{path}: faltan 'title' o 'summary' en el front matter")

        slug = str(meta.get("slug") or path.stem).strip()
        slug = re.sub(r"[^a-z0-9-]", "", slug.lower())
        if not slug:
            raise ValueError(f"{path}: slug inválido")
        if slug in seen:
            raise ValueError(f"{path}: slug duplicado '{slug}'")
        seen.add(slug)

        category = str(meta.get("category", "python")).strip()
        if category not in CATEGORIES:
            raise ValueError(f"{path}: categoría desconocida '{category}'")

        updated = str(meta.get("updated", "")).strip()
        if not updated:
            updated = datetime.fromtimestamp(path.stat().st_mtime).date().isoformat()

        tags = meta.get("tags", [])
        stack = meta.get("stack", [])
        if not isinstance(tags, list):
            tags = [tags]
        if not isinstance(stack, list):
            stack = [stack]

        item: dict[str, Any] = {
            "kind": kind,
            "slug": slug,
            "title": title,
            "summary": summary,
            "category": category,
            "category_label": CATEGORIES[category]["label"],
            "category_icon": CATEGORIES[category]["icon"],
            "updated": updated,
            "date_human": date_human(updated),
            "date_ord": date_ordinal(updated),
            "tags": [str(tag) for tag in tags],
            "stack": [str(part) for part in stack],
            "featured": bool(meta.get("featured", False)),
            "order": int(meta.get("order", 999)),
            "repo": str(meta.get("repo", "")).strip(),
            "license": str(meta.get("license", "MIT")).strip(),
            "body": body,
            "url": f"/{'repositorios' if kind == 'repos' else 'guias'}/{slug}/",
        }

        if kind == "guias":
            item["level"] = str(meta.get("level", "Principiante")).strip()
            item["reading"] = int(meta.get("reading") or estimate_reading(body))
        else:
            item["difficulty"] = str(meta.get("difficulty", "Intermedio")).strip()
            item["reading"] = estimate_reading(body)

        blob = " ".join(
            [
                title,
                summary,
                CATEGORIES[category]["label"],
                item.get("level", item.get("difficulty", "")),
                *item["tags"],
                *item["stack"],
            ]
        )
        item["search"] = re.sub(r"\s+", " ", blob).strip().lower()
        item["short_title"] = title if len(title) <= 58 else title[:55].rstrip() + "…"

        items.append(item)

    items.sort(key=lambda item: (item["order"], -item["date_ord"]))
    return items


# ---------------------------------------------------------------------------
# Componentes HTML
# ---------------------------------------------------------------------------
def badge(category: str) -> str:
    data = CATEGORIES[category]
    return (
        f'<span class="badge badge-{category}">'
        f'<i class="{data["icon"]}" aria-hidden="true"></i> {e(data["label"])}'
        "</span>"
    )


def tag_list(item: dict[str, Any], limit: int = 4) -> str:
    tags = item["tags"][:limit]
    if not tags:
        return ""
    return "".join(f'<span class="tag">{e(tag)}</span>' for tag in tags)


def content_card(item: dict[str, Any]) -> str:
    is_repo = item["kind"] == "repos"
    level = item.get("difficulty") if is_repo else item.get("level")
    if is_repo:
        foot_left = (
            f'<span><i class="fas fa-code-branch" aria-hidden="true"></i> '
            f'{e(item["stack"][0] if item["stack"] else "Código")}</span>'
        )
        cta = "Ver repositorio"
    else:
        foot_left = (
            f'<span><i class="far fa-clock" aria-hidden="true"></i> '
            f'{item["reading"]} min</span>'
        )
        cta = "Leer guía"

    return (
        f'<a class="content-card" href="{item["url"]}" '
        f'data-category="{item["category"]}" data-search="{attr(item["search"])}">'
        '<div class="card-top">'
        f"{badge(item['category'])}"
        f'<span class="card-level">{e(level)}</span>'
        "</div>"
        f'<h2 class="card-title">{e(item["title"])}</h2>'
        f'<p class="card-summary">{e(item["summary"])}</p>'
        f'<div class="card-tags">{tag_list(item, 3)}</div>'
        '<div class="card-foot">'
        f"{foot_left}"
        f'<span class="card-cta">{cta} <i class="fas fa-arrow-right" aria-hidden="true"></i></span>'
        "</div>"
        "</a>"
    )


def category_cards(repos: list[dict[str, Any]], guides: list[dict[str, Any]]) -> str:
    cards: list[str] = []
    for key, data in CATEGORIES.items():
        repo_count = sum(1 for item in repos if item["category"] == key)
        guide_count = sum(1 for item in guides if item["category"] == key)
        cards.append(
            f'<a class="cat-card" href="/repositorios/?categoria={key}">'
            f'<span class="cat-icon"><i class="{data["icon"]}" aria-hidden="true"></i></span>'
            f"<h3>{e(data['label'])}</h3>"
            f"<p>{e(data['desc'])}</p>"
            f'<span class="cat-count">{repo_count} repositorios · {guide_count} guías</span>'
            "</a>"
        )
    return "".join(cards)


def chips(items: list[dict[str, Any]], base: str) -> str:
    total = len(items)
    parts = [
        f'<a class="chip is-active" href="{base}" data-filter-category="all">'
        f'Todas <span>{total}</span></a>'
    ]
    for key, data in CATEGORIES.items():
        count = sum(1 for item in items if item["category"] == key)
        if not count:
            continue
        parts.append(
            f'<a class="chip" href="{base}?categoria={key}" data-filter-category="{key}">'
            f'{e(data["label"])} <span>{count}</span></a>'
        )
    return "".join(parts)


def toc_html(toc: list[tuple[int, str, str]]) -> str:
    if not toc:
        return ""
    links = "".join(
        f'<li class="toc-l{level}"><a href="#{attr(heading_id)}">{e(text)}</a></li>'
        for level, text, heading_id in toc
    )
    return (
        '<nav class="toc" aria-label="En esta página">'
        '<p class="toc-title">En esta página</p>'
        f"<ol>{links}</ol>"
        "</nav>"
    )


def code_cta(category: str, slug: str, index: int, lang: str) -> str:
    variants = CTA_COPY.get(category, CTA_COPY["python"])
    copy = variants[(index - 1) % len(variants)]
    href = (
        f"/academia/?utm_source=contenido&utm_medium=cta_codigo"
        f"&utm_campaign={slug}&utm_content=bloque-{index}"
    )
    return (
        f'<aside class="cta-code" data-cta="code" data-content="{attr(slug)}" data-lang="{attr(lang)}">'
        '<span class="cta-code-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></span>'
        f'<p><strong>Curso de Python 3 de 0 a Master</strong> {e(copy)}</p>'
        f'<a href="{href}" class="btn btn-primary btn-sm">Ver el curso '
        '<i class="fas fa-arrow-right" aria-hidden="true"></i></a>'
        "</aside>"
    )


SKIP_CTA_LANGS = {"output", "salida", "console", "tree", "texto"}
MIN_CTA_LINES = 3


def make_cta(item: dict[str, Any]) -> Callable[[int, str, int], str]:
    """Devuelve un CTA contextual solo tras bloques ejecutables y con sustancia.

    Evita banners repetidos detrás de una línea suelta o de una salida de
    consola, que rompen la lectura sin aportar nada. El número máximo de CTAs
    por página lo controla el renderizador.
    """
    shown = 0

    def build(index: int, lang: str, lines: int) -> str:
        nonlocal shown
        if lang.lower() in SKIP_CTA_LANGS:
            return ""
        if lines < MIN_CTA_LINES:
            return ""
        shown += 1
        return code_cta(item["category"], item["slug"], shown, lang)

    return build


def end_cta(item: dict[str, Any], kind: str) -> str:
    href = (
        f"/academia/?utm_source=contenido&utm_medium=cta_final"
        f"&utm_campaign={item['slug']}&utm_content=fin-{kind}"
    )
    return (
        '<section class="cta-end" aria-labelledby="ctaEndTitle">'
        '<div class="cta-end-copy">'
        '<span class="eyebrow">Curso de Python 3 de 0 a Master</span>'
        '<h2 id="ctaEndTitle">¿Quieres aprender a programar tus propias herramientas?</h2>'
        "<p>Domina la lógica y el desarrollo en nuestro Curso de Python 3 de 0 a Master.</p>"
        "</div>"
        '<div class="cta-end-actions">'
        f'<a href="{href}" class="btn btn-primary btn-lg">'
        '<i class="fas fa-graduation-cap" aria-hidden="true"></i> Entrar al curso'
        "</a>"
        '<a href="https://t.me/chmodxcode" target="_blank" rel="noopener noreferrer" class="btn btn-outline">'
        '<i class="fab fa-telegram" aria-hidden="true"></i> Resolver dudas'
        "</a>"
        "</div>"
        "</section>"
    )


def sidebar_academy(item: dict[str, Any], kind: str) -> str:
    href = (
        f"/academia/?utm_source=contenido&utm_medium=sidebar"
        f"&utm_campaign={item['slug']}&utm_content={kind}"
    )
    return (
        '<aside class="sidebar-card sidebar-academy">'
        '<span class="sidebar-kicker">Curso de Python 3 de 0 a Master</span>'
        "<h2>Ordena lo que ya practicas</h2>"
        "<p>19 módulos, proyectos reales y acceso de por vida. La ruta completa para pasar "
        "de copiar comandos a tomar decisiones.</p>"
        '<ul class="sidebar-list">'
        '<li><i class="fas fa-check" aria-hidden="true"></i> Python desde cero</li>'
        '<li><i class="fas fa-check" aria-hidden="true"></i> Proyectos y certificado</li>'
        '<li><i class="fas fa-check" aria-hidden="true"></i> Comunidad en Telegram</li>'
        "</ul>"
        f'<a href="{href}" class="btn btn-primary btn-sm">Ver el temario</a>'
        '<span class="sidebar-note">Pago seguro con Hotmart</span>'
        "</aside>"
    )


def sidebar_telegram() -> str:
    return (
        '<aside class="sidebar-card sidebar-tg">'
        '<span class="sidebar-kicker"><i class="fab fa-telegram" aria-hidden="true"></i> Comunidad</span>'
        "<h2>Canal de Telegram</h2>"
        "<p>Nuevos repositorios, scripts y avisos. Acceso gratuito y sin spam.</p>"
        '<a href="https://t.me/chmodxcode" target="_blank" rel="noopener noreferrer" '
        'class="btn btn-telegram btn-sm">Entrar al canal</a>'
        "</aside>"
    )


def safety_note(item: dict[str, Any]) -> str:
    if item["category"] == "ciberseguridad":
        return (
            '<div class="callout callout-warn">'
            '<i class="fas fa-triangle-exclamation" aria-hidden="true"></i>'
            "<p><strong>Antes de ejecutar:</strong> usa este código solo en equipos propios "
            "o en laboratorios con autorización explícita. El conocimiento técnico no sustituye "
            "el permiso legal.</p>"
            "</div>"
        )
    return (
        '<div class="callout">'
        '<i class="fas fa-circle-info" aria-hidden="true"></i>'
        "<p><strong>Antes de ejecutar:</strong> revisa el código, haz una copia de seguridad "
        "y prueba en un entorno aislado. Los ejemplos son educativos.</p>"
        "</div>"
    )


def repo_action(item: dict[str, Any]) -> str:
    repo = item.get("repo", "")
    if re.match(r"^https://github\.com/[^/]+/[^/]+", repo):
        return (
            f'<a href="{attr(repo)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">'
            '<i class="fab fa-github" aria-hidden="true"></i> Ver el repositorio</a>'
        )
    return (
        '<a href="https://t.me/chmodxcode" target="_blank" rel="noopener noreferrer" class="btn btn-primary">'
        '<i class="fab fa-telegram" aria-hidden="true"></i> Acceder al código en Telegram</a>'
    )


def related_items(
    current: dict[str, Any], pool: list[dict[str, Any]], limit: int = 3
) -> str:
    same = [
        item for item in pool
        if item["slug"] != current["slug"] and item["category"] == current["category"]
    ]
    rest = [
        item for item in pool
        if item["slug"] != current["slug"] and item not in same
    ]
    chosen = (same + rest)[:limit]
    return "".join(content_card(item) for item in chosen)


# ---------------------------------------------------------------------------
# Páginas
# ---------------------------------------------------------------------------
def base_page(
    *,
    title: str,
    description: str,
    canonical: str,
    body: str,
    og_type: str = "website",
    active: str = "",
    jsonld: str = "",
    sticky: str = "",
    head_extra: str = "",
) -> str:
    nav_repos = "is-active" if active == "repos" else ""
    nav_guias = "is-active" if active == "guias" else ""
    return render_template(
        "base.html",
        TITLE=e(title),
        DESCRIPTION=attr(description),
        CANONICAL=canonical,
        OG_TYPE=og_type,
        BODY=body,
        STICKY=sticky,
        HEAD_EXTRA=head_extra,
        SCRIPTS="",
        NAV_REPOS=nav_repos,
        NAV_GUIAS=nav_guias,
        NAV_ACADEMIA="",
        JSONLD=jsonld,
    )


def jsonld_script(data: dict[str, Any]) -> str:
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    return f'<script type="application/ld+json">\n{payload}\n</script>'


def sticky_academy(source: str, medium: str, campaign: str) -> str:
    href = (
        f"/academia/?utm_source={source}&utm_medium={medium}&utm_campaign={campaign}"
    )
    return (
        '<div class="sticky-cta" id="stickyCta">'
        '<div class="sticky-price">'
        '<span class="sticky-old">$450</span>'
        '<span class="sticky-new">$100</span>'
        '<span class="sticky-off"><i class="fas fa-fire" aria-hidden="true"></i> 78% OFF</span>'
        "</div>"
        f'<a href="{href}" class="btn btn-primary btn-sm">'
        '<i class="fas fa-graduation-cap" aria-hidden="true"></i> Curso de Python</a>'
        "</div>"
    )


def build_home(repos: list[dict[str, Any]], guides: list[dict[str, Any]]) -> str:
    featured_repos = [item for item in repos if item["featured"]][:3]
    if len(featured_repos) < 3:
        featured_repos += [item for item in repos if item not in featured_repos][: 3 - len(featured_repos)]

    latest_guides = sorted(guides, key=lambda item: -item["date_ord"])[:3]

    body = render_template(
        "home.html",
        REPO_COUNT=len(repos),
        GUIDE_COUNT=len(guides),
        CATEGORY_COUNT=len(CATEGORIES),
        FEATURED_REPOS="".join(content_card(item) for item in featured_repos),
        LATEST_GUIDES="".join(content_card(item) for item in latest_guides),
        CATEGORY_CARDS=category_cards(repos, guides),
    )

    jsonld = jsonld_script(
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE_NAME,
            "url": BASE_URL + "/",
            "description": "Repositorios, scripts y guías de ciberseguridad, Python y Termux.",
            "inLanguage": "es",
            "potentialAction": {
                "@type": "SearchAction",
                "target": BASE_URL + "/repositorios/?q={search_term_string}",
                "query-input": "required name=search_term_string",
            },
            "publisher": {
                "@type": "Organization",
                "name": SITE_NAME,
                "url": BASE_URL + "/",
                "logo": BASE_URL + "/assets/logo.png",
            },
        }
    )

    return base_page(
        title="CHMODX · Repositorios, scripts y guías de Python, Termux y ciberseguridad",
        description=(
            "Contenido técnico gratuito para aprender haciendo: repositorios de ciberseguridad, "
            "scripts de Python y guías de Termux. Cuando quieras el método completo, Curso de Python 3 de 0 a Master."
        ),
        canonical=BASE_URL + "/",
        body=body,
        jsonld=jsonld,
    )


def build_listing(
    *,
    kind: str,
    items: list[dict[str, Any]],
    title: str,
    eyebrow: str,
    intro: str,
    breadcrumb: str,
    self_path: str,
    utm_source: str,
) -> str:
    body = render_template(
        "listing.html",
        TITLE=e(title),
        EYEBROW=e(eyebrow),
        INTRO=e(intro),
        BREADCRUMB=e(breadcrumb),
        COUNT=len(items),
        QUERY="",
        CHIPS=chips(items, self_path),
        CARDS="".join(content_card(item) for item in items),
        SELF=self_path,
        UTM_SOURCE=utm_source,
    )

    jsonld = jsonld_script(
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": title,
            "description": intro,
            "url": BASE_URL + self_path,
            "inLanguage": "es",
            "isPartOf": {"@type": "WebSite", "url": BASE_URL + "/"},
            "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": len(items),
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": index,
                        "name": item["title"],
                        "url": BASE_URL + item["url"],
                    }
                    for index, item in enumerate(items, start=1)
                ],
            },
        }
    )

    return base_page(
        title=f"{title} | {SITE_NAME}",
        description=intro,
        canonical=BASE_URL + self_path,
        body=body,
        active=kind,
        jsonld=jsonld,
    )


def build_article(item: dict[str, Any], guides: list[dict[str, Any]]) -> str:
    body_html, toc = render_markdown(
        item["body"],
        cta=make_cta(item),
        max_ctas=2,
    )

    body = render_template(
        "article.html",
        TITLE=e(item["title"]),
        SHORT_TITLE=e(item["short_title"]),
        SUMMARY=e(item["summary"]),
        CATEGORY=item["category"],
        CATEGORY_LABEL=e(item["category_label"]),
        CATEGORY_ICON=item["category_icon"],
        DATE_HUMAN=e(item["date_human"]),
        READING=item["reading"],
        LEVEL=e(item["level"]),
        TAGS=tag_list(item, 6),
        BODY=body_html,
        TOC=toc_html(toc),
        SIDEBAR_ACADEMY=sidebar_academy(item, "guia"),
        SIDEBAR_TELEGRAM=sidebar_telegram(),
        END_CTA=end_cta(item, "guia"),
        RELATED=related_items(item, guides),
    )

    jsonld = jsonld_script(
        {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": item["title"],
            "description": item["summary"],
            "dateModified": item["updated"],
            "inLanguage": "es",
            "url": BASE_URL + item["url"],
            "mainEntityOfPage": BASE_URL + item["url"],
            "author": {"@type": "Organization", "name": SITE_NAME},
            "publisher": {
                "@type": "Organization",
                "name": SITE_NAME,
                "logo": {"@type": "ImageObject", "url": BASE_URL + "/assets/logo.png"},
            },
            "keywords": ", ".join(item["tags"]),
        }
    )

    return base_page(
        title=f"{item['title']} | {SITE_NAME}",
        description=item["summary"],
        canonical=BASE_URL + item["url"],
        body=body,
        og_type="article",
        active="guias",
        jsonld=jsonld,
        sticky=sticky_academy("contenido", "sticky", item["slug"]),
    )


def build_repo(item: dict[str, Any], repos: list[dict[str, Any]]) -> str:
    body_html, toc = render_markdown(
        item["body"],
        cta=make_cta(item),
        max_ctas=3,
    )

    body = render_template(
        "repo.html",
        TITLE=e(item["title"]),
        SHORT_TITLE=e(item["short_title"]),
        SUMMARY=e(item["summary"]),
        CATEGORY=item["category"],
        CATEGORY_LABEL=e(item["category_label"]),
        CATEGORY_ICON=item["category_icon"],
        DATE_HUMAN=e(item["date_human"]),
        DIFFICULTY=e(item["difficulty"]),
        STACK=e(", ".join(item["stack"]) or "Python"),
        LICENSE=e(item["license"]),
        TAGS=tag_list(item, 6),
        BODY=body_html,
        TOC=toc_html(toc),
        SIDEBAR_ACADEMY=sidebar_academy(item, "repositorio"),
        SIDEBAR_TELEGRAM=sidebar_telegram(),
        END_CTA=end_cta(item, "repositorio"),
        RELATED=related_items(item, repos),
        SAFETY=safety_note(item),
        REPO_ACTION=repo_action(item),
    )

    jsonld = jsonld_script(
        {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": item["title"],
            "description": item["summary"],
            "dateModified": item["updated"],
            "inLanguage": "es",
            "url": BASE_URL + item["url"],
            "codeRepository": item["repo"] or BASE_URL + item["url"],
            "programmingLanguage": ", ".join(item["stack"]) or "Python",
            "author": {"@type": "Organization", "name": SITE_NAME},
            "publisher": {"@type": "Organization", "name": SITE_NAME},
        }
    )

    return base_page(
        title=f"{item['title']} | {SITE_NAME}",
        description=item["summary"],
        canonical=BASE_URL + item["url"],
        body=body,
        og_type="article",
        active="repos",
        jsonld=jsonld,
        sticky=sticky_academy("contenido", "sticky", item["slug"]),
    )


# ---------------------------------------------------------------------------
# Salida
# ---------------------------------------------------------------------------
def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(f"  escrito {path.relative_to(ROOT)}")


def clean_slug_dirs(folder: Path, valid_slugs: set[str]) -> None:
    if not folder.exists():
        return
    for child in folder.iterdir():
        if child.is_dir() and child.name not in valid_slugs:
            shutil.rmtree(child)
            print(f"  eliminado {child.relative_to(ROOT)}")


# ---------------------------------------------------------------------------
# Configuración pública de Supabase
# ---------------------------------------------------------------------------
def _read_env_file(path: Path) -> dict[str, str]:
    """Lee un .env sin dependencias externas."""
    values: dict[str, str] = {}
    if not path.is_file():
        return values
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def supabase_credentials() -> tuple[str, str]:
    """URL y clave pública. Solo estas dos viajan al navegador.

    Prioridad: entorno (CI) → admin/.env (desarrollo local). La clave de
    servicio nunca se lee aquí: no debe llegar al HTML.
    """
    url = os.environ.get("SUPABASE_URL", "").strip().rstrip("/")
    key = (
        os.environ.get("SUPABASE_ANON_KEY")
        or os.environ.get("SUPABASE_PUBLISHABLE_KEY")
        or ""
    ).strip()

    if not (url and key):
        local = _read_env_file(ROOT / "admin" / ".env")
        url = url or local.get("SUPABASE_URL", "").strip().rstrip("/")
        key = key or local.get("SUPABASE_ANON_KEY", "").strip()

    return url, key


def write_supabase_config() -> None:
    """Genera js/supabase-config.js con la configuración pública.

    Si faltan credenciales se escribe un archivo vacío: el script de captura
    se desactiva solo y el sitio sigue funcionando igual.
    """
    url, key = supabase_credentials()
    payload = (
        "/* Generado por scripts/build.py. No editar a mano. */\n"
        f"window.CX_CONFIG = {{ url: {json.dumps(url)}, key: {json.dumps(key)} }};\n"
    )
    write(ROOT / "js" / "supabase-config.js", payload)


def build_sitemap(repos: list[dict[str, Any]], guides: list[dict[str, Any]]) -> None:
    entries: list[tuple[str, str, str]] = [
        ("/", max([item["updated"] for item in repos + guides] or [date.today().isoformat()]), "1.0"),
        ("/academia/", date.today().isoformat(), "0.9"),
        ("/repositorios/", max([item["updated"] for item in repos] or [date.today().isoformat()]), "0.8"),
        ("/guias/", max([item["updated"] for item in guides] or [date.today().isoformat()]), "0.8"),
    ]
    entries += [(item["url"], item["updated"], "0.7") for item in repos + guides]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for path, lastmod, priority in entries:
        lines.append("  <url>")
        lines.append(f"    <loc>{BASE_URL}{path}</loc>")
        lines.append(f"    <lastmod>{lastmod}</lastmod>")
        lines.append(f"    <priority>{priority}</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")
    write(ROOT / "sitemap.xml", "\n".join(lines) + "\n")

    write(
        ROOT / "robots.txt",
        "User-agent: *\nAllow: /\n\nSitemap: " + BASE_URL + "/sitemap.xml\n",
    )


def main() -> None:
    print("Cargando contenido…")
    repos = load_items("repos")
    guides = load_items("guias")
    print(f"  {len(repos)} repositorios, {len(guides)} guías")

    print("Generando páginas…")
    write(ROOT / "index.html", build_home(repos, guides))

    write(
        ROOT / "repositorios" / "index.html",
        build_listing(
            kind="repos",
            items=repos,
            title="Repositorios de ciberseguridad, Python y Termux",
            eyebrow="Catálogo de repositorios",
            intro=(
                "Scripts funcionales con requisitos, límites y explicación. Clona, ejecuta y "
                "adapta cada proyecto a tu propio laboratorio."
            ),
            breadcrumb="Repositorios",
            self_path="/repositorios/",
            utm_source="listado_repos",
        ),
    )

    write(
        ROOT / "guias" / "index.html",
        build_listing(
            kind="guias",
            items=guides,
            title="Guías técnicas de Python, Termux y ciberseguridad",
            eyebrow="Guías técnicas",
            intro=(
                "Fundamentos, comandos y errores frecuentes explicados sin relleno. Para "
                "entender lo que ejecutas, no solo para copiarlo."
            ),
            breadcrumb="Guías",
            self_path="/guias/",
            utm_source="listado_guias",
        ),
    )

    clean_slug_dirs(ROOT / "repositorios", {item["slug"] for item in repos})
    clean_slug_dirs(ROOT / "guias", {item["slug"] for item in guides})

    for item in repos:
        write(ROOT / "repositorios" / item["slug"] / "index.html", build_repo(item, repos))

    for item in guides:
        write(ROOT / "guias" / item["slug"] / "index.html", build_article(item, guides))

    print("Generando configuración de analítica…")
    write_supabase_config()

    print("Generando índice JSON…")
    index = {
        "site": SITE_NAME,
        "base_url": BASE_URL,
        "categories": CATEGORIES,
        "repos": [
            {key: value for key, value in item.items() if key not in {"body"}}
            for item in repos
        ],
        "guias": [
            {key: value for key, value in item.items() if key not in {"body"}}
            for item in guides
        ],
    }
    write(ROOT / "data" / "content.json", json.dumps(index, ensure_ascii=False, indent=2) + "\n")

    build_sitemap(repos, guides)
    print("Listo.")


if __name__ == "__main__":
    main()
