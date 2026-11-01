---
title: "gitleaks: Gitleaks is a SAST tool for detecting hardcoded secrets like passwords, api keys"
slug: "gitleaks"
summary: "Gitleaks is a SAST tool for detecting hardcoded secrets like passwords, api keys, and tokens in git repos."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es gitleaks

gitleaks es una herramienta de seguridad ofensiva / red team. Gitleaks is a SAST tool for detecting hardcoded secrets like passwords, api keys, and tokens in git repos.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/zricethezav/gitleaks](https://github.com/zricethezav/gitleaks)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de gitleaks es gitleaks is a sast tool for detecting hardcoded secrets like passwords, api keys, and tokens in git repos.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Gitleaks can be installed using Homebrew, Docker, or Go. Gitleaks is also available in binary form for many popular platforms and OS types on the [releases page](https://github.com/gitleaks/gitleaks/releases). In addition, Gitleaks can be implemented as a pre-commit hook directly in your repo or as a GitHub action using [Gitleaks-Action](https://github.com/gitleaks/gitleaks-action).

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/zricethezav/gitleaks
cd gitleaks

# Revisar ayuda
./gitleaks --help 2>/dev/null || python3 -m gitleaks --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa gitleaks únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/zricethezav/gitleaks
- Toolkit de origen: Red Teaming Toolkit
