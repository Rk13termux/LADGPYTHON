---
title: "Bootstrap de Termux para programar en Android"
slug: "termux-bootstrap"
summary: "Script de instalación que deja Termux listo para Python, Git y editores, con almacenamiento compartido y un entorno virtual reutilizable."
category: "termux"
difficulty: "Principiante"
stack: ["Termux", "Bash", "Python 3", "Git"]
tags: ["android", "entorno", "automatización", "setup"]
updated: "2026-10-21"
repo: "https://github.com/chmodxcode"
featured: true
order: 2
license: "MIT"
---

## Qué hace este script

Convierte una instalación limpia de Termux en un entorno de desarrollo funcional en menos de cinco minutos:

- Actualiza los paquetes base.
- Instala Python, Git, pip, `ripgrep` y `nano`.
- Habilita el acceso al almacenamiento compartido de Android.
- Crea un entorno virtual reutilizable en `~/venvs/base`.
- Deja un alias `py` para activarlo sin escribir la ruta completa.

## Antes de empezar

Instala **Termux desde F-Droid** o desde la versión oficial de GitHub. La build de Google Play está desactualizada y presenta problemas con `pkg`.

> **Nota:** algunos comandos requieren confirmar permisos de almacenamiento en Android. Acepta el diálogo cuando aparezca.

## El script

Guarda el siguiente contenido como `bootstrap.sh` dentro de Termux:

```bash
#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

echo "==> Actualizando paquetes base"
pkg update -y && pkg upgrade -y

echo "==> Instalando herramientas"
pkg install -y python git ripgrep nano openssh

echo "==> Habilitando almacenamiento compartido"
termux-setup-storage

echo "==> Creando entorno virtual base"
mkdir -p "$HOME/venvs"
python -m venv "$HOME/venvs/base"

echo "==> Configurando alias"
grep -q "alias py=" "$HOME/.bashrc" 2>/dev/null || \
  echo 'alias py="source $HOME/venvs/base/bin/activate"' >> "$HOME/.bashrc"

echo "==> Listo. Cierra y abre Termux, luego ejecuta: py"
```

## Ejecución

```bash
chmod +x bootstrap.sh
./bootstrap.sh
```

Al terminar, cierra la sesión y abre Termux de nuevo:

```bash
py
python --version
git --version
```

## Verificación rápida

```bash
python -c "import sys; print(sys.prefix)"
which git rg nano
ls ~/storage/shared
```

Si `sys.prefix` apunta a `~/venvs/base`, el entorno virtual está activo. Si `ls ~/storage/shared` muestra las carpetas de Android, el almacenamiento compartido quedó habilitado.

## Errores frecuentes

| Error | Causa | Solución |
|---|---|---|
| `pkg: command not found` | Termux de Google Play | Reinstalar desde F-Droid |
| `Permission denied` al ejecutar | Falta el bit de ejecución | `chmod +x bootstrap.sh` |
| `termux-setup-storage` no abre el diálogo | Permiso denegado antes | Revisar permisos de la app en Ajustes |
| `pip` intenta compilar C | Falta toolchain | `pkg install build-essential` |

## Personalización

Añade tus propias herramientas al bloque de instalación. Por ejemplo, para trabajar con datos:

```bash
pkg install -y python-numpy
pip install pandas matplotlib
```

Evita instalar paquetes globales con `pip` fuera del entorno virtual: Termux mezcla rutas de sistema y es fácil romper dependencias.
