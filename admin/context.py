"""Estado compartido entre pestañas."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass, field
from pathlib import Path

import flet as ft

from . import widgets
from .config import Settings
from .content import ContentDraft
from .supabase_api import SupabaseClient


@dataclass
class AppContext:
    """Todo lo que una pestaña necesita del resto de la aplicación."""

    page: ft.Page
    settings: Settings
    supabase: SupabaseClient | None = None
    pending_draft: ContentDraft | None = None
    saved_path: Path | None = None
    publish_requests: list[ContentDraft] = field(default_factory=list)

    # Callback que instala la app para cambiar de pestaña.
    go_to_tab: Callable[[int], None] | None = None

    # ------------------------------------------------------------------ avisos
    def toast(self, message: str, kind: str = "ok") -> None:
        widgets.toast(self.page, message, kind=kind)

    # ------------------------------------------------------------------ puente
    def request_publish(self, draft: ContentDraft) -> None:
        """Guarda el borrador y salta a la pestaña de publicación."""
        self.pending_draft = draft
        if self.go_to_tab:
            self.go_to_tab(3)
