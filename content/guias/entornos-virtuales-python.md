---
title: "Entornos virtuales en Python: la guía que evita el caos de dependencias"
slug: "entornos-virtuales-python"
summary: "Cómo funcionan venv, pip y las dependencias, por qué los proyectos se rompen al cambiar de máquina y cómo fijar versiones sin dolor."
category: "python"
level: "Principiante"
reading: 8
tags: ["python", "venv", "pip", "dependencias"]
updated: "2026-10-22"
featured: true
order: 2
---

## El problema real

Un proyecto funciona en tu equipo y falla en el servidor. O deja de funcionar después de instalar otra librería. Casi siempre el culpable es el mismo: dependencias globales compartidas entre proyectos que necesitan versiones distintas.

La solución no es memorizar comandos. Es entender qué aísla un entorno virtual.

## Qué hace `venv`

`venv` crea una carpeta con:

- Un enlace o copia del intérprete de Python.
- Un directorio `site-packages` propio.
- Scripts de activación que cambian `PATH` y `sys.prefix`.

Cuando activas el entorno, `python` y `pip` apuntan a esa carpeta. El Python del sistema queda intacto.

## Crear y activar

```bash
cd mi-proyecto
python3 -m venv .venv
source .venv/bin/activate
```

En Windows:

```powershell
py -m venv .venv
.venv\Scripts\activate
```

Comprueba que estás dentro:

```bash
which python
python -c "import sys; print(sys.prefix)"
```

La ruta debe terminar en `.venv`.

## Instalar dependencias

```bash
pip install requests
pip freeze > requirements.txt
```

`requirements.txt` guarda las versiones exactas. Sin él, otra persona instala “la última” y puede recibir una versión incompatible.

Para reproducir el entorno:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## `requirements.txt` no siempre es suficiente

`pip freeze` incluye dependencias transitivas y fija todo. Es reproducible, pero difícil de mantener. Alternativas:

- `pyproject.toml` con dependencias directas y un rango de versiones.
- `pip-tools` para generar un archivo bloqueado desde un archivo fuente.
- `uv` o `poetry` si necesitas resolución rápida y lockfiles.

Para proyectos pequeños, `requirements.txt` es suficiente. Para bibliotecas publicadas, usa `pyproject.toml`.

## Errores que conviene evitar

1. **Crear el entorno dentro de una carpeta sincronizada con la nube.** Miles de archivos pequeños y conflictos garantizados.
2. **Versionar `.venv` en Git.** Añade `.venv/` a `.gitignore`.
3. **Instalar con `sudo pip`.** Mezcla paquetes del sistema y puede romper la distribución.
4. **Activar el entorno y olvidarlo.** Revisa `sys.prefix` cuando algo se comporte de forma extraña.
5. **No fijar la versión de Python.** Un proyecto escrito para 3.12 puede fallar en 3.8.

## Un flujo de trabajo limpio

```bash
# 1. Clonar
git clone https://github.com/usuario/proyecto.git
cd proyecto

# 2. Crear entorno
python3 -m venv .venv
source .venv/bin/activate

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Verificar
python -m pytest
```

Si el paso 4 falla, el problema está en el proyecto o en la versión de Python, no en tu máquina.

## Cuándo no usar un entorno virtual

Casi nunca. La excepción son contenedores donde el aislamiento ya existe, o scripts de un solo archivo sin dependencias externas. Incluso ahí, un entorno evita sorpresas.
