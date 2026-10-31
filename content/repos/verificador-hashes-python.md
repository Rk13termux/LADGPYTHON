---
title: "Verificador de hashes con Python"
slug: "verificador-hashes-python"
summary: "Herramienta para calcular y comparar SHA-256 de archivos descargados, entender la diferencia con un cifrado y detectar corrupción o manipulación."
category: "ciberseguridad"
difficulty: "Principiante"
stack: ["Python 3", "hashlib", "CLI"]
tags: ["hashes", "integridad", "criptografía", "verificación"]
updated: "2026-10-15"
repo: "https://github.com/chmodxcode"
featured: false
order: 4
license: "MIT"
---

## Hash no es cifrado

Un hash es una huella digital de un contenido. No se puede revertir, y dos archivos distintos deberían producir valores distintos. Se usa para verificar integridad, almacenar contraseñas con sal y detectar cambios accidentales o maliciosos.

Este script calcula el **SHA-256** de un archivo y lo compara con un valor esperado.

## Requisitos

- Python 3.8 o superior.
- Un archivo y su hash oficial (por ejemplo, el publicado junto a una ISO).

## El código

```python
from __future__ import annotations

import argparse
import hashlib
from pathlib import Path

BLOQUE = 1024 * 1024  # 1 MiB

def sha256(ruta: Path) -> str:
    digest = hashlib.sha256()
    with ruta.open("rb") as archivo:
        while bloque := archivo.read(BLOQUE):
            digest.update(bloque)
    return digest.hexdigest()

def main() -> None:
    parser = argparse.ArgumentParser(description="Calcula y compara SHA-256")
    parser.add_argument("archivo", type=Path)
    parser.add_argument("--esperado", help="Hash SHA-256 publicado por el proveedor")
    args = parser.parse_args()

    if not args.archivo.is_file():
        raise SystemExit(f"No existe el archivo: {args.archivo}")

    calculado = sha256(args.archivo)
    print(f"SHA-256: {calculado}")

    if args.esperado:
        esperado = args.esperado.strip().lower()
        if calculado == esperado:
            print("Resultado: coincide. El archivo está íntegro.")
        else:
            print("Resultado: NO coincide. No uses este archivo.")
            raise SystemExit(1)

if __name__ == "__main__":
    main()
```

## Uso

```bash
python3 verificar.py imagen.iso --esperado 3f79bb7b435b05321651daefd374cdc681dc06faa65e374e38337b88ca046dea
```

Si el hash coincide, el comando termina con código `0`. Si no coincide, termina con `1`, lo que permite encadenarlo en scripts:

```bash
python3 verificar.py imagen.iso --esperado "$HASH_OFICIAL" && echo "Listo para usar"
```

## Por qué leer por bloques

Cargar un archivo de varios gigabytes en memoria con `read()` puede agotar la RAM de un móvil o de una máquina pequeña. Leer en bloques de 1 MiB mantiene el consumo constante sin perder velocidad.

## Errores habituales

- Comparar hashes con mayúsculas y minúsculas mezcladas: normaliza con `.lower()`.
- Copiar el hash con espacios o saltos de línea: usa `.strip()`.
- Confundir MD5 con SHA-256: son algoritmos distintos y producen longitudes distintas.
- Verificar un archivo mientras se está descargando: espera a que termine.

## Límites

Un hash verifica integridad, no autenticidad. Si un atacante controla tanto el archivo como el hash publicado, la comparación no sirve. Para confiar en el origen necesitas firmas digitales o un canal seguro.
