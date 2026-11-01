---
title: "promptfoo: CLI and framework for evaluating, testing, and red-teaming LLM applications and "
slug: "promptfoo"
summary: "CLI and framework for evaluating, testing, and red-teaming LLM applications and prompts."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'ai-red-teaming', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es promptfoo

promptfoo es una herramienta de seguridad ofensiva / red team. CLI and framework for evaluating, testing, and red-teaming LLM applications and prompts.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)
- **Sección del toolkit:** Miscellaneous → AI Red Teaming

## Objetivo y función

El objetivo principal de promptfoo es cli and framework for evaluating, testing, and red-teaming llm applications and prompts.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/promptfoo/promptfoo
cd promptfoo
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/promptfoo/promptfoo
cd promptfoo

# Revisar ayuda
./promptfoo --help 2>/dev/null || python3 -m promptfoo --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa promptfoo únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/promptfoo/promptfoo
- Toolkit de origen: Red Teaming Toolkit
