---
title: "WitnessMe: Web Inventory tool, takes screenshots of webpages using Pyppeteer (headless Chro"
slug: "witnessme"
summary: "Web Inventory tool, takes screenshots of webpages using Pyppeteer (headless Chrome/Chromium) and provides some extra bells & whistles to make life easier."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es WitnessMe

WitnessMe es una herramienta de seguridad ofensiva / red team. Web Inventory tool, takes screenshots of webpages using Pyppeteer (headless Chrome/Chromium) and provides some extra bells & whistles to make life easier.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/byt3bl33d3r/WitnessMe](https://github.com/byt3bl33d3r/WitnessMe)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de WitnessMe es web inventory tool, takes screenshots of webpages using pyppeteer (headless chrome/chromium) and provides some extra bells & whistles to make life easier.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/byt3bl33d3r/WitnessMe
cd witnessme
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/byt3bl33d3r/WitnessMe
cd witnessme

# Revisar ayuda
./witnessme --help 2>/dev/null || python3 -m witnessme --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa WitnessMe únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/byt3bl33d3r/WitnessMe
- Toolkit de origen: Red Teaming Toolkit
