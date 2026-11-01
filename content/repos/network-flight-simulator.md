---
title: "Network Flight Simulator: flightsim is a lightweight utility used to generate malicious network traffic an"
slug: "network-flight-simulator"
summary: "flightsim is a lightweight utility used to generate malicious network traffic and help security teams to evaluate security controls and network visibility."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Network Flight Simulator

Network Flight Simulator es una herramienta de seguridad ofensiva / red team. flightsim is a lightweight utility used to generate malicious network traffic and help security teams to evaluate security controls and network visibility.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/alphasoc/flightsim](https://github.com/alphasoc/flightsim)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de Network Flight Simulator es flightsim is a lightweight utility used to generate malicious network traffic and help security teams to evaluate security controls and network visibility.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Download the latest flightsim binary for your OS from the [GitHub Releases](https://github.com/alphasoc/flightsim/releases) page. Alternatively, the utility can be built using [Golang](https://golang.org/doc/install) in any environment (e.g. Linux, MacOS, Windows), as follows:

```
go install github.com/alphasoc/flightsim/v2@latest
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/alphasoc/flightsim
cd network-flight-simulator

# Revisar ayuda
./network-flight-simulator --help 2>/dev/null || python3 -m network_flight_simulator --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Network Flight Simulator únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/alphasoc/flightsim
- Toolkit de origen: Red Teaming Toolkit
