"""Renderizador de Markdown mínimo y sin dependencias para CHMODX.

Soporta el subconjunto que usa el contenido del sitio: títulos, párrafos,
listas, citas, tablas, bloques de código, HTML puntual y formato en línea.

La salida es HTML seguro: todo el texto se escapa salvo las etiquetas que el
propio generador produce.
"""

from __future__ import annotations

import html
import re
import unicodedata
from typing import Callable

FENCE_RE = re.compile(r"^```([\w+-]*)\s*$")
HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
UL_RE = re.compile(r"^(\s*)[-*+]\s+(.*)$")
OL_RE = re.compile(r"^(\s*)\d+[.)]\s+(.*)$")
HR_RE = re.compile(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$")
TABLE_SEP_RE = re.compile(r"^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$")
INLINE_CODE_RE = re.compile(r"`([^`]+)`")
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+\"([^\"]*)\")?\)")
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)\s]+)(?:\s+\"([^\"]*)\")?\)")


def slugify(text: str) -> str:
    """Convierte un título en un id estable y sin acentos."""
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text or "seccion"


def _plain(text: str) -> str:
    """Quita el formato en línea para usarlo en índices y metadatos."""
    text = INLINE_CODE_RE.sub(r"\1", text)
    text = re.sub(r"[*_~`]", "", text)
    text = LINK_RE.sub(r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def _safe_url(url: str) -> str:
    url = url.strip()
    if re.match(r"^(?:https?://|mailto:|#|/|\./|\.\./)", url):
        return html.escape(url, quote=True)
    return "#"


def inline(text: str) -> str:
    """Aplica negritas, cursivas, enlaces, imágenes y código en línea."""
    codes: list[str] = []

    def guard_code(match: re.Match[str]) -> str:
        codes.append(match.group(1))
        return f"\x00{len(codes) - 1}\x00"

    text = INLINE_CODE_RE.sub(guard_code, text)
    text = html.escape(text, quote=False)

    def image(match: re.Match[str]) -> str:
        alt, src, title = match.group(1), match.group(2), match.group(3)
        title_attr = f' title="{html.escape(title, quote=True)}"' if title else ""
        return f'<img src="{_safe_url(src)}" alt="{html.escape(alt, quote=True)}"{title_attr} loading="lazy">'

    def link(match: re.Match[str]) -> str:
        label, href, title = match.group(1), match.group(2), match.group(3)
        title_attr = f' title="{html.escape(title, quote=True)}"' if title else ""
        return f'<a href="{_safe_url(href)}"{title_attr}>{label}</a>'

    text = IMAGE_RE.sub(image, text)
    text = LINK_RE.sub(link, text)

    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w_])__(.+?)__(?![\w_])", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<em>\1</em>", text)
    text = re.sub(r"~~(.+?)~~", r"<del>\1</del>", text)

    for index, code in enumerate(codes):
        text = text.replace(
            f"\x00{index}\x00",
            f"<code>{html.escape(code, quote=False)}</code>",
        )
    return text


def _split_table_row(line: str) -> list[str]:
    """Separa celdas sin romper los pipes dentro de `código` o escapados."""
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]

    cells: list[str] = []
    current: list[str] = []
    in_code = False
    i = 0
    while i < len(line):
        char = line[i]
        if char == "\\" and i + 1 < len(line) and line[i + 1] == "|":
            current.append("|")
            i += 2
            continue
        if char == "`":
            in_code = not in_code
            current.append(char)
        elif char == "|" and not in_code:
            cells.append("".join(current).strip())
            current = []
        else:
            current.append(char)
        i += 1
    cells.append("".join(current).strip())
    return cells


def _is_block_start(lines: list[str], index: int) -> bool:
    line = lines[index]
    return bool(
        FENCE_RE.match(line)
        or HEADING_RE.match(line)
        or UL_RE.match(line)
        or OL_RE.match(line)
        or line.lstrip().startswith(">")
        or HR_RE.match(line)
        or (line.lstrip().startswith("<") and line.rstrip().endswith(">"))
        or (
            "|" in line
            and index + 1 < len(lines)
            and TABLE_SEP_RE.match(lines[index + 1])
        )
    )


def _render_list(lines: list[str], start: int) -> tuple[str, int]:
    first = lines[start]
    base_indent = len(first) - len(first.lstrip())
    ordered = bool(OL_RE.match(first))
    tag = "ol" if ordered else "ul"

    out: list[str] = [f"<{tag}>"]
    stack: list[int] = [base_indent]
    i = start

    while i < len(lines):
        line = lines[i]
        if not line.strip():
            look = i + 1
            while look < len(lines) and not lines[look].strip():
                look += 1
            if look < len(lines) and (UL_RE.match(lines[look]) or OL_RE.match(lines[look])):
                i = look
                continue
            break

        match = UL_RE.match(line) or OL_RE.match(line)
        if not match:
            break

        indent = len(match.group(1))
        content = match.group(2)

        if indent > stack[-1]:
            out.append(f"<{tag}>")
            stack.append(indent)
        elif indent < stack[-1]:
            while len(stack) > 1 and indent < stack[-1]:
                out.append(f"</{tag}>")
                stack.pop()

        out.append(f"<li>{inline(content)}</li>")
        i += 1

    while len(stack) > 1:
        out.append(f"</{tag}>")
        stack.pop()
    out.append(f"</{tag}>")
    return "\n".join(out), i


def render(
    text: str,
    cta: Callable[[int, str, int], str] | None = None,
    max_ctas: int = 3,
) -> tuple[str, list[tuple[int, str, str]]]:
    """Convierte Markdown en HTML y devuelve también el índice de contenidos.

    ``cta`` recibe (número de bloque, lenguaje, líneas de código) y devuelve HTML
    que se inserta justo después del bloque de código.
    """
    lines = text.replace("\r\n", "\n").split("\n")
    out: list[str] = []
    toc: list[tuple[int, str, str]] = []
    used_ids: dict[str, int] = {}
    code_index = 0
    cta_count = 0
    i = 0

    while i < len(lines):
        line = lines[i]

        if not line.strip():
            i += 1
            continue

        # Bloques de código
        fence = FENCE_RE.match(line)
        if fence:
            raw_lang = (fence.group(1) or "texto").strip().lower()
            display_lang = raw_lang or "texto"
            LANG_ALIASES = {
                "py": "python", "python3": "python",
                "sh": "bash", "shell": "bash", "zsh": "bash", "console": "bash",
                "js": "javascript", "ts": "typescript",
                "yml": "yaml", "toml": "ini",
                "html": "markup", "xml": "markup", "svg": "markup",
                "md": "markdown", "dockerfile": "docker",
                "sql": "sql", "json": "json",
                "dotenv": "ini", "env": "ini",
                "powershell": "powershell", "ps1": "powershell",
                "texto": "clike", "text": "clike", "output": "clike",
                "salida": "clike", "tree": "clike", "plain": "clike",
                "plaintext": "clike", "none": "clike",
            }
            lang = LANG_ALIASES.get(raw_lang, raw_lang or "clike")
            if lang not in ("python", "bash", "javascript", "typescript", "json",
                            "yaml", "sql", "ini", "docker", "toml", "go", "rust",
                            "markup", "css", "clike", "markdown", "powershell",
                            "ini"):
                lang = "clike"
            i += 1
            buffer: list[str] = []
            while i < len(lines) and not lines[i].startswith("```"):
                buffer.append(lines[i])
                i += 1
            if i < len(lines):
                i += 1
            code_index += 1
            code = html.escape("\n".join(buffer), quote=False)
            _known = {"markup", "css", "clike", "javascript", "python", "bash",
                      "json", "yaml", "sql", "ini", "docker", "toml", "go", "rust",
                      "typescript", "markdown", "powershell"}
            _clean = re.sub(r"[^\w+-]", "", lang) or "texto"
            lang_class = _clean if _clean in _known else "texto"
            if lang_class:
                pre_html = f'<pre class="line-numbers"><code class="language-{lang_class}">{code}</code></pre>'
            else:
                pre_html = f'<pre class="line-numbers"><code>{code}</code></pre>'
            out.append(
                '<div class="code-block" data-lang="' + html.escape(lang_class, quote=True) + '">'
                '<div class="code-head">'
                '<span class="code-dots" aria-hidden="true"><i></i><i></i><i></i></span>'
                f'<span class="code-lang">{html.escape(lang)}</span>'
                '<button type="button" class="code-copy" data-copy-code>'
                '<i class="far fa-copy" aria-hidden="true"></i> Copiar'
                "</button>"
                "</div>"
                + pre_html +
                "</div>"
            )
            if cta and cta_count < max_ctas:
                fragment = cta(code_index, lang, len(buffer))
                if fragment:
                    out.append(fragment)
                    cta_count += 1
            continue

        # Títulos
        heading = HEADING_RE.match(line)
        if heading:
            level = len(heading.group(1))
            title_md = heading.group(2).strip()
            plain = _plain(title_md)
            base_id = slugify(plain)
            used_ids[base_id] = used_ids.get(base_id, 0) + 1
            heading_id = base_id if used_ids[base_id] == 1 else f"{base_id}-{used_ids[base_id]}"
            out.append(
                f'<h{level} id="{heading_id}">{inline(title_md)}</h{level}>'
            )
            if 2 <= level <= 3:
                toc.append((level, plain, heading_id))
            i += 1
            continue

        # Separador
        if HR_RE.match(line):
            out.append("<hr>")
            i += 1
            continue

        # Cita
        if line.lstrip().startswith(">"):
            quote: list[str] = []
            while i < len(lines) and lines[i].lstrip().startswith(">"):
                quote.append(re.sub(r"^\s*>\s?", "", lines[i]))
                i += 1
            paragraphs = [
                f"<p>{inline(p.strip())}</p>"
                for p in "\n".join(quote).split("\n\n")
                if p.strip()
            ]
            out.append("<blockquote>" + "".join(paragraphs) + "</blockquote>")
            continue

        # Listas
        if UL_RE.match(line) or OL_RE.match(line):
            rendered, i = _render_list(lines, i)
            out.append(rendered)
            continue

        # Tablas
        if (
            "|" in line
            and i + 1 < len(lines)
            and TABLE_SEP_RE.match(lines[i + 1])
        ):
            headers = _split_table_row(line)
            i += 2
            rows: list[list[str]] = []
            while i < len(lines) and "|" in lines[i] and lines[i].strip():
                rows.append(_split_table_row(lines[i]))
                i += 1
            thead = "".join(f"<th>{inline(cell)}</th>" for cell in headers)
            tbody = "".join(
                "<tr>" + "".join(f"<td>{inline(cell)}</td>" for cell in row) + "</tr>"
                for row in rows
            )
            out.append(
                '<div class="table-wrap"><table>'
                f"<thead><tr>{thead}</tr></thead>"
                f"<tbody>{tbody}</tbody>"
                "</table></div>"
            )
            continue

        # HTML puntual (callouts del propio contenido)
        if line.lstrip().startswith("<") and line.rstrip().endswith(">"):
            block: list[str] = []
            while i < len(lines) and lines[i].strip():
                block.append(lines[i])
                i += 1
            out.append("\n".join(block))
            continue

        # Párrafo
        paragraph: list[str] = []
        while i < len(lines) and lines[i].strip() and not _is_block_start(lines, i):
            paragraph.append(lines[i].strip())
            i += 1
        out.append(f"<p>{inline(' '.join(paragraph))}</p>")

    return "\n".join(out), toc
