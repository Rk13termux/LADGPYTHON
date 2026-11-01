---
title: "BBOT: Recursive internet scanner inspired by Spiderfoot, but designed to be faster, mo"
slug: "bbot"
summary: "Recursive internet scanner inspired by Spiderfoot, but designed to be faster, more reliable, and friendlier to pentesters, bug bounty hunters, and developers."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BBOT

BBOT es una herramienta de seguridad ofensiva / red team. Recursive internet scanner inspired by Spiderfoot, but designed to be faster, more reliable, and friendlier to pentesters, bug bounty hunters, and developers.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/blacklanternsecurity/bbot](https://github.com/blacklanternsecurity/bbot)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de BBOT es recursive internet scanner inspired by spiderfoot, but designed to be faster, more reliable, and friendlier to pentesters, bug bounty hunters, and developers.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```bash

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/blacklanternsecurity/bbot
cd bbot

# Revisar ayuda
./bbot --help 2>/dev/null || python3 -m bbot --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa BBOT únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/blacklanternsecurity/bbot
- Toolkit de origen: Red Teaming Toolkit
