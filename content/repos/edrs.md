---
title: "EDRs: This repo contains information about EDRs that can be useful during red team exe"
slug: "edrs"
summary: "This repo contains information about EDRs that can be useful during red team exercise."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'red-team-scripts', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDRs

EDRs es una herramienta de seguridad ofensiva / red team. This repo contains information about EDRs that can be useful during red team exercise.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Mr-Un1k0d3r/EDRs](https://github.com/Mr-Un1k0d3r/EDRs)
- **Sección del toolkit:** Miscellaneous → Red Team Scripts

## Objetivo y función

El objetivo principal de EDRs es this repo contains information about edrs that can be useful during red team exercise.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Mr-Un1k0d3r/EDRs
cd edrs
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Mr-Un1k0d3r/EDRs
cd edrs

# Revisar ayuda
./edrs --help 2>/dev/null || python3 -m edrs --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa EDRs únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Mr-Un1k0d3r/EDRs
- Toolkit de origen: Red Teaming Toolkit
