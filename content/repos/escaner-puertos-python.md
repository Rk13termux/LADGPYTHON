---
title: "Escáner de puertos con Python y sockets"
slug: "escaner-puertos-python"
summary: "Un script educativo para entender cómo funciona un escaneo TCP, qué devuelve cada estado y por qué el reconocimiento es la primera fase de una auditoría."
category: "ciberseguridad"
difficulty: "Intermedio"
stack: ["Python 3", "Sockets", "TCP"]
tags: ["reconocimiento", "redes", "sockets", "auditoría"]
updated: "2026-10-24"
repo: "https://github.com/chmodxcode"
featured: true
order: 1
license: "MIT"
---

## Qué vas a construir

Un escáner TCP que recorre un rango de puertos y clasifica cada respuesta en **abierto**, **cerrado** o **filtrado**. No es una alternativa a Nmap: es una herramienta de estudio para ver, con tus propios ojos, qué ocurre en la capa de transporte.

> **Uso responsable:** ejecuta este script únicamente contra equipos propios o laboratorios con autorización explícita. Escanear redes ajenas sin permiso puede ser ilegal.

## Requisitos

- Python 3.10 o superior.
- Acceso a un laboratorio local (una máquina virtual o `localhost`).
- Conocimientos básicos de TCP y del modelo cliente-servidor.

## Estructura del proyecto

```tree
escaner-puertos/
├── scanner.py
├── requirements.txt
└── README.md
```

## Instalación

```bash
git clone https://github.com/chmodxcode/escaner-puertos.git
cd escaner-puertos
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

El proyecto solo usa la biblioteca estándar, así que `requirements.txt` puede quedar vacío.

## El código

```python
import socket
from concurrent.futures import ThreadPoolExecutor, as_completed

TIMEOUT = 0.8

def estado_puerto(host: str, puerto: int) -> str:
    """Devuelve abierto, cerrado o filtrado según la respuesta TCP."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(TIMEOUT)
        codigo = sock.connect_ex((host, puerto))
        if codigo == 0:
            return "abierto"
        if codigo in (111, 61):
            return "cerrado"
        return "filtrado"

def escanear(host: str, desde: int, hasta: int, workers: int = 100):
    resultados = []
    with ThreadPoolExecutor(max_workers=workers) as pool:
        tareas = {
            pool.submit(estado_puerto, host, puerto): puerto
            for puerto in range(desde, hasta + 1)
        }
        for tarea in as_completed(tareas):
            puerto = tareas[tarea]
            resultados.append((puerto, tarea.result()))
    return sorted(resultados)

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Escáner TCP educativo")
    parser.add_argument("host", help="IP o dominio autorizado")
    parser.add_argument("-p", "--puertos", default="1-1024")
    args = parser.parse_args()

    desde, hasta = (int(x) for x in args.puertos.split("-"))
    for puerto, estado in escanear(args.host, desde, hasta):
        if estado == "abierto":
            print(f"{puerto:>5}/tcp  {estado}")
```

## Cómo ejecutarlo

```bash
python3 scanner.py 127.0.0.1 -p 1-1024
```

Salida esperada en un equipo con SSH y un servidor web activos:

```output
   22/tcp  abierto
   80/tcp  abierto
```

## Cómo funciona

1. `socket.connect_ex()` intenta completar el saludo TCP de tres vías.
2. Si devuelve `0`, el puerto aceptó la conexión.
3. Si el sistema responde con `ECONNREFUSED`, el puerto está cerrado.
4. Si no hay respuesta dentro del tiempo límite, se marca como filtrado.
5. `ThreadPoolExecutor` lanza varias conexiones en paralelo para no tardar minutos en un rango grande.

## Límites del script

- No detecta servicios ni versiones: para eso necesitas Nmap u otras herramientas.
- Un firewall puede responder de formas que confundan la clasificación.
- El escaneo con muchos hilos puede saturar equipos pequeños. Baja `workers` si es necesario.
