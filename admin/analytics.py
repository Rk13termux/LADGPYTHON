"""Agregación de métricas a partir de las filas de ``page_views``.

Se calcula en el cliente para que el panel funcione con cualquier esquema
mínimo. Para volúmenes grandes conviene una vista materializada en Supabase;
el README explica cómo.
"""

from __future__ import annotations

from collections import Counter
from dataclasses import dataclass, field
from datetime import date, datetime, timedelta, timezone
from typing import Any
from urllib.parse import urlparse

ACADEMY_PREFIX = "/academia"


@dataclass
class AnalyticsSummary:
    total_views: int = 0
    unique_visitors: int = 0
    academy_views: int = 0
    days: list[tuple[str, int]] = field(default_factory=list)
    pages: list[tuple[str, int]] = field(default_factory=list)
    sources: list[tuple[str, int]] = field(default_factory=list)
    devices: list[tuple[str, int]] = field(default_factory=list)
    rows: int = 0

    @property
    def conversion(self) -> float:
        return (self.academy_views / self.total_views * 100) if self.total_views else 0.0

    @property
    def daily_average(self) -> float:
        active = len([count for _, count in self.days if count])
        return (self.total_views / active) if active else 0.0


def _parse_date(value: str) -> date | None:
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).date()
    except (ValueError, AttributeError):
        return None


def _source_label(referrer: str) -> str:
    if not referrer:
        return "directo"
    try:
        host = urlparse(referrer).netloc.lower().replace("www.", "")
    except ValueError:
        return "otro"
    if not host:
        return "directo"
    if "chmodxcode" in host:
        return "interno"
    if "google" in host:
        return "google"
    if "t.me" in host or "telegram" in host:
        return "telegram"
    if "instagram" in host:
        return "instagram"
    if "tiktok" in host:
        return "tiktok"
    if "youtube" in host:
        return "youtube"
    if "github" in host:
        return "github"
    return host


def summarize(rows: list[dict[str, Any]], days: int = 30) -> AnalyticsSummary:
    """Resume las filas de visitas en métricas listas para pintar."""
    summary = AnalyticsSummary(rows=len(rows))
    if not rows:
        summary.days = _empty_days(days)
        return summary

    visitors: set[str] = set()
    per_day: Counter[str] = Counter()
    per_page: Counter[str] = Counter()
    per_source: Counter[str] = Counter()
    per_device: Counter[str] = Counter()

    for row in rows:
        path = str(row.get("path") or "/")
        per_page[path] += 1

        visitor = row.get("visitor_id")
        if visitor:
            visitors.add(str(visitor))

        if path.startswith(ACADEMY_PREFIX):
            summary.academy_views += 1

        parsed = _parse_date(str(row.get("created_at") or ""))
        if parsed:
            per_day[parsed.isoformat()] += 1

        per_source[_source_label(str(row.get("referrer") or ""))] += 1
        per_device[str(row.get("device") or "desconocido").lower()] += 1

    summary.total_views = len(rows)
    summary.unique_visitors = len(visitors) or len(rows)
    summary.pages = per_page.most_common(8)
    summary.sources = per_source.most_common(6)
    summary.devices = per_device.most_common(4)

    filled = _empty_days(days)
    summary.days = [(day, per_day.get(day, 0)) for day, _ in filled]

    return summary


def _empty_days(days: int) -> list[tuple[str, int]]:
    today = datetime.now(timezone.utc).date()
    return [((today - timedelta(days=offset)).isoformat(), 0) for offset in range(days - 1, -1, -1)]
