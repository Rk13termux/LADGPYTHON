---
title: "raptor: cómo romper un modelo de IA antes de que lo haga un atacante"
slug: "raptor"
summary: "raptor: pruebas de seguridad y red teaming sobre modelos de IA."
category: "python"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es raptor

**raptor** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: Raptor turns Claude Code into a general-purpose AI offensive/defensive security agent.

## Para qué sirve

raptor se utiliza en la fase de **recursos y automatización** (offensive ai agent). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
# Clone the repo
git clone https://github.com/gadievron/raptor.git
cd raptor

# Install Python dependencies
uv sync --locked
source .venv/bin/activate

# Install Claude Code (if you don't already have it)
npm install -g @anthropic-ai/claude-code

# Install Semgrep (required for scanning)
uv tool install semgrep

# Add the launcher to your PATH -- put this in your shell profile to make it
# permanent. Append rather than prepend, so system directories stay ahead of
# the repo. (Alternatively, symlink bin/raptor into a directory already on PATH.)
export PATH="$PATH:$PWD/bin"

# Launch RAPTOR
raptor
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
docker pull danielcuthbert/raptor:latest
```

```bash
cd /path/to/raptor
code .
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-11-02
- **Estrellas en GitHub:** 3.965
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa raptor únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/gadievron/raptor
- Toolkit de origen: Red Teaming Toolkit
