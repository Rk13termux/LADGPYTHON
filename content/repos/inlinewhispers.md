---
title: "InlineWhispers: Tool for working with Direct System Calls in Cobalt Strike's Beacon Object Files"
slug: "inlinewhispers"
summary: "Tool for working with Direct System Calls in Cobalt Strike's Beacon Object Files (BOF)"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es InlineWhispers

InlineWhispers es una herramienta de seguridad ofensiva / red team. Tool for working with Direct System Calls in Cobalt Strike's Beacon Object Files (BOF)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/InlineWhispers](https://github.com/outflanknl/InlineWhispers)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de InlineWhispers es tool for working with direct system calls in cobalt strike's beacon object files (bof).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/outflanknl/InlineWhispers
cd inlinewhispers
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/InlineWhispers
cd inlinewhispers

# Revisar ayuda
./inlinewhispers --help 2>/dev/null || python3 -m inlinewhispers --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa InlineWhispers únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/InlineWhispers
- Toolkit de origen: Red Teaming Toolkit
