"""Pestaña 1 · Editor de contenido con Plantilla Maestra."""

from __future__ import annotations

from pathlib import Path

import flet as ft

from .. import branding, theme as t, widgets
from ..content import (
    ContentDraft,
    SaveError,
    existing_files,
    load_document,
    save_draft,
    slugify,
)
from ..context import AppContext


class EditorTab:
    """Formulario de creación y edición con vista previa en vivo."""

    def __init__(self, ctx: AppContext) -> None:
        self.ctx = ctx
        self._slug_touched = False
        self._build()
        self.view = self._compose()

    # ------------------------------------------------------------------ estado
    def draft(self) -> ContentDraft:
        return ContentDraft(
            kind=self.kind.value or "repos",
            title=self.title.value or "",
            summary=self.summary.value or "",
            category=self.category.value or "python",
            level=self.level.value or "Principiante",
            slug=self.slug.value or "",
            body=self.body.value or "",
            commands=self.commands.value or "",
            tags=self.tags.value or "",
            stack=self.stack.value or "",
            repo_url=self.repo_url.value or "",
            license=self.license.value or "MIT",
            featured=bool(self.featured.value),
            order=int(self.order.value or 99),
        )

    # ------------------------------------------------------------------ controles
    def _build(self) -> None:
        self.kind = widgets.dropdown(
            "Tipo de contenido", branding.KIND_OPTIONS, "repos", self._on_kind_change
        )
        self.category = widgets.dropdown(
            "Categoría", branding.CATEGORY_OPTIONS, "python", self._on_any_change
        )
        self.level = widgets.dropdown(
            "Nivel", [(level, level) for level in branding.LEVELS], "Principiante", None
        )

        self.title = widgets.field(
            "Título",
            hint="Ej.: Escáner de puertos con Python y sockets",
            on_change=self._on_title_change,
        )
        self.summary = widgets.field(
            "Gancho (una frase que resuma el valor)",
            hint="Ej.: Un script para entender qué ocurre en la capa de transporte.",
            multiline=True,
            min_lines=2,
            max_lines=3,
            on_change=self._on_any_change,
        )

        self.slug = widgets.field(
            "Slug (URL)",
            hint="se-genera-desde-el-titulo",
            on_change=self._on_slug_change,
            prefix_icon=ft.Icons.LINK,
        )
        self.tags = widgets.field(
            "Etiquetas",
            hint="redes, sockets, auditoría",
            on_change=self._on_any_change,
        )

        self.stack = widgets.field(
            "Stack", hint="Python 3, Sockets, TCP", on_change=self._on_any_change
        )
        self.repo_url = widgets.field(
            "Repositorio en GitHub",
            hint="https://github.com/usuario/repo (opcional)",
            on_change=self._on_any_change,
        )
        self.license = widgets.field("Licencia", value="MIT")
        self.order = widgets.field("Orden", value="99")
        self.order.width = 96

        self.featured = ft.Switch(
            label="Destacar en el hub",
            value=False,
            active_color=t.BRAND,
            label_text_style=ft.TextStyle(size=12.5, color=t.MUTED),
            on_change=self._on_any_change,
        )

        self.repo_only = ft.Row(
            [self.stack, self.repo_url, self.license], spacing=12, visible=True
        )

        self.body = widgets.field(
            "Contenido Markdown",
            hint="Escribe el cuerpo. La plantilla maestra añade gancho, comandos y cierre.",
            multiline=True,
            min_lines=16,
            max_lines=38,
            on_change=self._on_any_change,
            helper="Admite títulos ##, listas, tablas y bloques de código. No pegues el front matter.",
        )
        self.commands = widgets.field(
            "Comandos de Termux",
            hint="pkg update -y\npkg install -y python git",
            multiline=True,
            min_lines=5,
            max_lines=10,
            on_change=self._on_any_change,
            helper="Se envuelven en un bloque bash bajo la sección de comandos.",
        )

        self.overwrite = ft.Switch(
            label="Sobrescribir si existe",
            value=False,
            active_color=t.YELLOW,
            label_text_style=ft.TextStyle(size=12, color=t.MUTED),
        )

        self.open_dropdown = widgets.dropdown(
            "Abrir existente",
            self._existing_options(),
            None,
            self._on_open_existing,
            expand=False,
        )
        self.open_dropdown.width = 240

        self.status_text = ft.Text("Listo para escribir.", size=12, color=t.MUTED)

        self.preview_md = ft.Markdown(
            value="",
            selectable=True,
            extension_set=ft.MarkdownExtensionSet.GITHUB_FLAVORED,
            auto_follow_links=False,
        )
        self.preview_meta = ft.Text("—", size=11, color=t.DIM)
        self.preview_path = ft.Text("", size=11.5, color=t.CYAN, font_family=t.mono_font())
        self.live_preview = ft.Switch(
            label="Vista previa en vivo",
            value=True,
            active_color=t.BRAND,
            label_text_style=ft.TextStyle(size=11.5, color=t.MUTED),
            on_change=self._on_any_change,
        )

    # ------------------------------------------------------------------ layout
    def _compose(self) -> ft.Control:
        header = widgets.panel_header(
            "Editor de contenido",
            "La Plantilla Maestra se aplica sola al guardar: mismo gancho, mismos avisos, mismo cierre.",
            icon=ft.Icons.EDIT_NOTE,
            actions=[
                self.open_dropdown,
                widgets.ghost_button(
                    "Estructura maestra",
                    ft.Icons.AUTO_AWESOME,
                    self._insert_skeleton,
                    tooltip="Inserta el esqueleto de secciones",
                ),
                widgets.icon_button(
                    ft.Icons.RESTART_ALT, self._reset, tooltip="Limpiar formulario"
                ),
            ],
        )

        form = ft.Column(
            [
                ft.Row([self.kind, self.category, self.level], spacing=12),
                self.title,
                self.summary,
                ft.Row([self.slug, self.tags], spacing=12),
                self.repo_only,
                self.body,
                self.commands,
                ft.Row(
                    [self.featured, self.overwrite, self.order],
                    spacing=18,
                    vertical_alignment=ft.CrossAxisAlignment.CENTER,
                ),
            ],
            spacing=14,
            scroll=ft.ScrollMode.AUTO,
            expand=6,
        )

        preview_panel = ft.Column(
            [
                widgets.card(
                    ft.Row(
                        [
                            ft.Text(
                                "Vista previa",
                                size=13,
                                weight=ft.FontWeight.W_700,
                                color=t.TEXT,
                            ),
                            ft.Container(expand=True),
                            self.live_preview,
                        ],
                        vertical_alignment=ft.CrossAxisAlignment.CENTER,
                    ),
                    padding=(14, 10),
                ),
                ft.Container(
                    content=ft.Column(
                        [self.preview_md], scroll=ft.ScrollMode.AUTO, expand=True
                    ),
                    expand=True,
                    padding=ft.Padding.symmetric(horizontal=22, vertical=18),
                    bgcolor=t.SURFACE,
                    border=ft.Border.all(1, t.BORDER),
                    border_radius=ft.BorderRadius.all(14),
                ),
                ft.Row(
                    [self.preview_path, ft.Container(expand=True), self.preview_meta],
                    spacing=10,
                ),
            ],
            spacing=12,
            expand=5,
        )

        action_bar = ft.Container(
            content=ft.Row(
                [
                    self.status_text,
                    ft.Container(expand=True),
                    widgets.ghost_button("Guardar borrador", ft.Icons.SAVE, self._on_save),
                    widgets.primary_button(
                        "Guardar y publicar",
                        ft.Icons.ROCKET_LAUNCH,
                        self._on_save_and_publish,
                    ),
                ],
                spacing=10,
                vertical_alignment=ft.CrossAxisAlignment.CENTER,
            ),
            padding=ft.Padding.symmetric(horizontal=16, vertical=12),
            bgcolor=t.SURFACE,
            border=ft.Border.all(1, t.BORDER),
            border_radius=ft.BorderRadius.all(12),
        )

        self._refresh_preview(update=False)

        return ft.Column(
            [
                header,
                ft.Row(
                    [form, preview_panel],
                    spacing=20,
                    expand=True,
                    vertical_alignment=ft.CrossAxisAlignment.START,
                ),
                action_bar,
            ],
            spacing=16,
            expand=True,
        )

    # ------------------------------------------------------------------ helpers
    def _existing_options(self) -> list[tuple[str, str]]:
        options: list[tuple[str, str]] = []
        for kind, label in (("repos", "Repo"), ("guias", "Guía")):
            for path in existing_files(self.ctx.settings.project_root, kind)[:12]:
                options.append((str(path), f"{label} · {path.stem}"))
        return options

    def _on_kind_change(self, _event: ft.Event | None) -> None:
        is_repo = (self.kind.value or "repos") == "repos"
        self.repo_only.visible = is_repo
        self.repo_only.update()
        self._refresh_preview()

    def _on_title_change(self, _event: ft.Event) -> None:
        if not self._slug_touched:
            self.slug.value = slugify(self.title.value or "")
            self.slug.update()
        self._refresh_preview()

    def _on_slug_change(self, _event: ft.Event) -> None:
        self._slug_touched = bool((self.slug.value or "").strip())
        self._refresh_preview()

    def _on_any_change(self, _event: ft.Event) -> None:
        self._refresh_preview()

    def _on_open_existing(self, _event: ft.Event) -> None:
        selected = self.open_dropdown.value
        if not selected:
            return
        path = Path(selected)
        if not path.is_file():
            self.ctx.toast("El archivo ya no existe.", "error")
            return
        try:
            draft = load_document(path)
        except OSError as exc:
            self.ctx.toast(f"No se pudo leer el archivo: {exc}", "error")
            return

        self.kind.value = draft.kind
        self.title.value = draft.title
        self.summary.value = draft.summary
        self.category.value = draft.category
        self.level.value = draft.level
        self.slug.value = draft.slug
        self.body.value = draft.body
        self.commands.value = ""
        self.tags.value = draft.tags
        self.stack.value = draft.stack
        self.repo_url.value = draft.repo_url
        self.license.value = draft.license
        self.featured.value = draft.featured
        self.order.value = str(draft.order)
        self._slug_touched = True
        self.overwrite.value = True

        for control in (
            self.kind, self.title, self.summary, self.category, self.level,
            self.slug, self.body, self.commands, self.tags, self.stack,
            self.repo_url, self.license, self.featured, self.order, self.overwrite,
        ):
            control.update()

        self.repo_only.visible = draft.kind == "repos"
        self.repo_only.update()
        self._refresh_preview()
        self.ctx.toast(f"Cargado {path.name}", "info")

    def _insert_skeleton(self, _event: ft.Event) -> None:
        skeleton = branding.master_skeleton(
            self.kind.value or "repos", self.category.value or "python"
        )
        current = (self.body.value or "").strip()
        self.body.value = f"{current}\n\n{skeleton}".strip() if current else skeleton
        self.body.update()
        self._refresh_preview()
        self.ctx.toast("Estructura maestra insertada.", "info")

    def _reset(self, _event: ft.Event) -> None:
        self._slug_touched = False
        for control, value in (
            (self.title, ""), (self.summary, ""), (self.slug, ""),
            (self.body, ""), (self.commands, ""), (self.tags, ""),
            (self.stack, ""), (self.repo_url, ""), (self.license, "MIT"),
            (self.order, "99"),
        ):
            control.value = value
            control.update()
        self.featured.value = False
        self.overwrite.value = False
        self.featured.update()
        self.overwrite.update()
        self._refresh_preview()

    # ------------------------------------------------------------------ preview
    def _refresh_preview(self, update: bool = True) -> None:
        draft = self.draft()
        site = self.ctx.settings.site_url

        if self.live_preview.value:
            self.preview_md.value = draft.body_markdown(site)
            stats = draft.stats()
            self.preview_meta.value = (
                f"{stats['palabras']} palabras · {stats['lectura']} · "
                f"{stats['secciones']} secciones"
            )
            self.preview_path.value = draft.public_path if draft.final_slug else "—"

        self._refresh_issues(update=update)

        if not update:
            return
        for control in (self.preview_md, self.preview_meta, self.preview_path):
            try:
                control.update()
            except (AssertionError, RuntimeError):
                pass

    def _refresh_issues(self, update: bool = True) -> None:
        draft = self.draft()
        issues = draft.validate(
            self.ctx.settings.project_root,
            allow_overwrite=bool(self.overwrite.value),
        )
        errors = [msg for level, msg in issues if level == "error"]
        warns = [msg for level, msg in issues if level == "warn"]

        if errors:
            self.status_text.value = f"{len(errors)} error(es) por resolver · {errors[0]}"
            self.status_text.color = t.DANGER
        elif warns:
            self.status_text.value = f"Listo con {len(warns)} aviso(s): {warns[0]}"
            self.status_text.color = t.YELLOW
        else:
            self.status_text.value = "Todo correcto · listo para guardar"
            self.status_text.color = t.BRAND

        if update:
            try:
                self.status_text.update()
            except (AssertionError, RuntimeError):
                pass

    # ------------------------------------------------------------------ acciones
    def _on_save(self, _event: ft.Event) -> None:
        self._save(notify=True)

    def _on_save_and_publish(self, _event: ft.Event) -> None:
        path = self._save(notify=True)
        if path is None:
            return
        self.ctx.request_publish(self.draft())

    def _save(self, *, notify: bool) -> Path | None:
        draft = self.draft()
        try:
            path = save_draft(
                draft,
                self.ctx.settings.project_root,
                self.ctx.settings.site_url,
                allow_overwrite=bool(self.overwrite.value),
            )
        except SaveError as exc:
            if notify:
                self.ctx.toast(str(exc), "error")
            return None
        except OSError as exc:
            if notify:
                self.ctx.toast(f"No se pudo escribir el archivo: {exc}", "error")
            return None

        self.ctx.saved_path = path
        self.open_dropdown.options = [
            ft.DropdownOption(key=key, text=text) for key, text in self._existing_options()
        ]
        widgets.safe_update(self.open_dropdown)
        self._refresh_issues()

        if notify:
            self.ctx.toast(f"Guardado en content/{draft.folder}/{path.name}", "ok")
        return path
