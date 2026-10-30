---
title: "Termux desde cero: convierte tu Android en un entorno de desarrollo"
slug: "termux-desde-cero"
summary: "Instalación, permisos, paquetes esenciales y primer proyecto en Python. Una puesta a punto completa sin depender de una computadora."
category: "termux"
level: "Principiante"
reading: 9
tags: ["android", "python", "entorno", "terminal"]
updated: "2026-10-23"
featured: true
order: 1
---

## Por qué Termux

Termux es un emulador de terminal para Android que ejecuta un sistema Linux sin necesidad de root. No es una app de juguete: permite instalar Python, Git, compiladores, servidores y herramientas de red.

Sirve para aprender, para automatizar tareas y para llevar un laboratorio portátil. No sustituye a un ordenador para proyectos grandes, pero cubre mucho más de lo que parece.

## Instalación correcta

Descarga Termux desde **F-Droid** o desde el repositorio oficial en GitHub. La versión de Google Play está abandonada y falla al actualizar paquetes.

Después de instalarlo, abre la app y actualiza la base:

```bash
pkg update -y && pkg upgrade -y
```

Si aparece un error de repositorio, revisa la fecha y la conexión antes de reinstalar. Termux firma sus paquetes y una build antigua no puede mezclarse con los repositorios actuales.

## Permisos de almacenamiento

Por defecto, Termux vive en su propio espacio aislado. Para acceder a Descargas, Documentos o imágenes necesitas habilitar el almacenamiento compartido:

```bash
termux-setup-storage
```

Android mostrará un diálogo de permisos. Al aceptarlo, aparece `~/storage/shared`, que apunta al almacenamiento común del teléfono.

> **Importante:** no muevas el directorio de Termux ni lo edites desde otras apps. Puedes corromper permisos y rutas internas.

## Paquetes esenciales

```bash
pkg install -y python git nano openssh ripgrep
```

- `python`: intérprete y `pip`.
- `git`: control de versiones.
- `nano`: editor sencillo para empezar.
- `openssh`: cliente SSH para conectarte a servidores.
- `ripgrep`: búsqueda rápida dentro de archivos.

## Tu primer proyecto

```bash
mkdir -p ~/proyectos/hola
cd ~/proyectos/hola
python -m venv .venv
source .venv/bin/activate
```

Crea `main.py`:

```python
from datetime import datetime

def saludo(nombre: str) -> str:
    hora = datetime.now().strftime("%H:%M")
    return f"Hola, {nombre}. Son las {hora} y esto corre en Android."

if __name__ == "__main__":
    print(saludo("programador"))
```

Ejecuta:

```bash
python main.py
```

## Entornos virtuales: por qué son obligatorios

Termux mezcla paquetes del sistema con paquetes de Python. Instalar todo con `pip` global puede romper dependencias del propio Termux. Un entorno virtual aísla cada proyecto y permite borrarlo sin consecuencias.

```bash
python -m venv .venv
source .venv/bin/activate
pip install requests
```

Cuando termines, `deactivate` vuelve al Python del sistema.

## Atajos que ahorran tiempo

Añade alias a `~/.bashrc`:

```bash
alias py="source ~/venvs/base/bin/activate"
alias ll="ls -lah"
alias gs="git status"
```

Recarga la configuración:

```bash
source ~/.bashrc
```

## Errores frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| `pkg: not found` | Build de Google Play | Instalar desde F-Droid |
| `Permission denied` | Falta `chmod +x` | `chmod +x script.sh` |
| `No space left on device` | Almacenamiento lleno | `pkg clean` y borrar entornos viejos |
| `pip` compila durante minutos | Falta toolchain | `pkg install build-essential` |
| El proceso muere en segundo plano | Gestión de batería de Android | Mantener Termux activo o usar servicio en primer plano |

## Qué puedes hacer después

- Automatizar copias de archivos.
- Ejecutar una API con FastAPI.
- Conectarte por SSH a un servidor.
- Programar tareas con `cron` o `termux-job-scheduler`.
- Practicar ciberseguridad en un laboratorio propio.

## Siguiente paso

Termux deja de ser un experimento cuando lo usas para construir algo real. Si quieres una ruta ordenada, con proyectos y corrección de errores, la Academia Python Pro cubre el entorno completo.
