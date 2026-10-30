---
title: "Organizador de archivos con Python"
slug: "organizador-archivos-python"
summary: "Script para clasificar automáticamente descargas y carpetas desordenadas por tipo de archivo, con simulación previa y registro de cambios."
category: "automatizacion"
difficulty: "Principiante"
stack: ["Python 3", "pathlib", "shutil"]
tags: ["automatización", "archivos", "productividad", "script"]
updated: "2026-10-18"
repo: "https://github.com/chmodxcode"
featured: true
order: 3
license: "MIT"
---

## El problema

La carpeta de descargas acumula PDF, imágenes, comprimidos y archivos sin extensión. Moverlos a mano cada semana es tedioso y propenso a errores.

Este script los clasifica por categoría, **simula primero** y solo mueve cuando se lo pides.

## Cómo funciona

1. Recorre una carpeta de origen.
2. Agrupa cada archivo según su extensión.
3. Si el modo es simulación, imprime el plan sin tocar nada.
4. Si el modo es real, mueve los archivos a subcarpetas y escribe un registro en `organizador.log`.

## El código

```python
from __future__ import annotations

import argparse
import shutil
from datetime import datetime
from pathlib import Path

CATEGORIAS = {
    "imagenes": {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"},
    "documentos": {".pdf", ".doc", ".docx", ".txt", ".md", ".odt"},
    "hojas_calculo": {".xls", ".xlsx", ".csv", ".ods"},
    "comprimidos": {".zip", ".rar", ".7z", ".tar", ".gz"},
    "audio": {".mp3", ".wav", ".ogg", ".flac", ".m4a"},
    "video": {".mp4", ".mkv", ".mov", ".avi", ".webm"},
    "codigo": {".py", ".js", ".ts", ".sh", ".json", ".html", ".css"},
}

def categoria_de(archivo: Path) -> str:
    sufijo = archivo.suffix.lower()
    for nombre, extensiones in CATEGORIAS.items():
        if sufijo in extensiones:
            return nombre
    return "otros"

def planificar(origen: Path) -> list[tuple[Path, Path]]:
    plan = []
    for archivo in origen.iterdir():
        if not archivo.is_file() or archivo.name.startswith("."):
            continue
        destino = origen / categoria_de(archivo) / archivo.name
        if destino.exists():
            marca = datetime.now().strftime("%Y%m%d%H%M%S")
            destino = destino.with_name(f"{destino.stem}-{marca}{destino.suffix}")
        plan.append((archivo, destino))
    return plan

def ejecutar(plan: list[tuple[Path, Path]], simular: bool) -> None:
    with open("organizador.log", "a", encoding="utf-8") as log:
        for origen, destino in plan:
            print(f"{'[simulación]' if simular else '[mover]'} {origen.name} -> {destino.parent.name}/")
            log.write(f"{datetime.now().isoformat()} {origen} -> {destino}\n")
            if not simular:
                destino.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(origen), str(destino))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("carpeta", type=Path)
    parser.add_argument("--aplicar", action="store_true", help="Mueve los archivos de verdad")
    args = parser.parse_args()

    if not args.carpeta.is_dir():
        raise SystemExit(f"No existe la carpeta: {args.carpeta}")

    plan = planificar(args.carpeta)
    print(f"{len(plan)} archivos encontrados")
    ejecutar(plan, simular=not args.aplicar)
```

## Uso

Primero, una simulación:

```bash
python3 organizador.py ~/Descargas
```

Revisa el plan. Si todo tiene sentido, aplica los cambios:

```bash
python3 organizador.py ~/Descargas --aplicar
```

## Por qué simular primero

Mover archivos es una operación destructiva desde el punto de vista del usuario: un error de clasificación puede dejar una carpeta importante vacía. La simulación permite validar el plan y detectar casos raros antes de tocar el disco.

## Mejoras que puedes añadir

- Clasificar por fecha en lugar de por tipo.
- Detectar archivos duplicados con `hashlib`.
- Ignorar carpetas concretas con una lista de exclusión.
- Enviar un resumen a Telegram al terminar.

## Siguiente paso

Automatizar una tarea puntual es fácil. Diseñar scripts que puedas mantener, probar y reutilizar durante años es otra cosa.
