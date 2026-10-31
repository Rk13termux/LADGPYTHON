---
title: "API mínima con FastAPI en Termux"
slug: "api-fastapi-termux"
summary: "Levanta una API funcional desde el móvil con FastAPI y Uvicorn, expón un endpoint y pruébalo sin salir de Android."
category: "termux"
difficulty: "Intermedio"
stack: ["Termux", "FastAPI", "Uvicorn", "Python 3"]
tags: ["api", "android", "servidor", "fastapi"]
updated: "2026-10-12"
repo: "https://github.com/chmodxcode"
featured: false
order: 5
license: "MIT"
---

## Objetivo

Tener una API escuchando en `http://127.0.0.1:8000` desde Termux, con documentación automática y un endpoint que devuelva datos en JSON.

> **Nota:** el servidor queda accesible solo dentro del dispositivo. No expongas servicios a internet sin autenticación, TLS y un proxy inverso.

## Instalación

```bash
pkg update -y
pkg install -y python
python -m venv ~/venvs/api
source ~/venvs/api/bin/activate
pip install fastapi uvicorn
```

## El código

Crea `main.py`:

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="API CHMODX", version="0.1.0")

class Nota(BaseModel):
    titulo: str
    contenido: str

notas: list[Nota] = []

@app.get("/salud")
def salud() -> dict[str, str]:
    return {"estado": "ok"}

@app.get("/notas")
def listar() -> list[Nota]:
    return notas

@app.post("/notas", status_code=201)
def crear(nota: Nota) -> Nota:
    notas.append(nota)
    return nota
```

## Arrancar el servidor

```bash
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Abre `http://127.0.0.1:8000/docs` en el navegador del teléfono. FastAPI genera la documentación interactiva a partir del código.

## Probar los endpoints

En otra sesión de Termux:

```bash
curl http://127.0.0.1:8000/salud

curl -X POST http://127.0.0.1:8000/notas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Primera nota","contenido":"Funciona desde Android"}'

curl http://127.0.0.1:8000/notas
```

## Qué demuestra este ejemplo

- Termux puede ejecutar un servidor ASGI real, no solo scripts sueltos.
- FastAPI valida el cuerpo de la petición con Pydantic sin código extra.
- La documentación interactiva sirve como contrato vivo de la API.

## Limitaciones reales

- `--reload` consume recursos; úsalo solo mientras desarrollas.
- El almacenamiento en memoria se pierde al reiniciar el proceso.
- Sin base de datos ni autenticación, esto es un laboratorio, no producción.
- Android puede suspender el proceso en segundo plano. Para pruebas largas, mantén Termux en primer plano o usa un servicio de primer plano.
