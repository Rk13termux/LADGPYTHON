---
title: "Garak: LLM vulnerability scanner designed to probe for weaknesses, jailbreaks, and unsa"
slug: "garak"
summary: "LLM vulnerability scanner designed to probe for weaknesses, jailbreaks, and unsafe behaviors in language models."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'ai-red-teaming', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Garak

Garak es una herramienta de seguridad ofensiva / red team. LLM vulnerability scanner designed to probe for weaknesses, jailbreaks, and unsafe behaviors in language models.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/NVIDIA/garak](https://github.com/NVIDIA/garak)
- **Sección del toolkit:** Miscellaneous → AI Red Teaming

## Objetivo y función

El objetivo principal de Garak es llm vulnerability scanner designed to probe for weaknesses, jailbreaks, and unsafe behaviors in language models.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

`garak` is a command-line tool. It's developed in Linux and OSX.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/NVIDIA/garak
cd garak

# Revisar ayuda
./garak --help 2>/dev/null || python3 -m garak --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Garak únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/NVIDIA/garak
- Toolkit de origen: Red Teaming Toolkit
