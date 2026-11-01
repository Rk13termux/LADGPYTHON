---
title: "Living Off The Land Drivers: Living Off The Land Drivers is a curated list of Windows drivers used by adversa"
slug: "living-off-the-land-drivers"
summary: "Living Off The Land Drivers is a curated list of Windows drivers used by adversaries to bypass security controls and carry out attacks"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'living-off-the-living-off-the-land', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Living Off The Land Drivers

Living Off The Land Drivers es una herramienta de seguridad ofensiva / red team. Living Off The Land Drivers is a curated list of Windows drivers used by adversaries to bypass security controls and carry out attacks

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://www.loldrivers.io/](https://www.loldrivers.io/)
- **Sección del toolkit:** Miscellaneous → Living Off the Living Off the Land

## Objetivo y función

El objetivo principal de Living Off The Land Drivers es living off the land drivers is a curated list of windows drivers used by adversaries to bypass security controls and carry out attacks.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://www.loldrivers.io/
cd living-off-the-land-drivers
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://www.loldrivers.io/
cd living-off-the-land-drivers

# Revisar ayuda
./living-off-the-land-drivers --help 2>/dev/null || python3 -m living_off_the_land_drivers --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Living Off The Land Drivers únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://www.loldrivers.io/
- Toolkit de origen: Red Teaming Toolkit
