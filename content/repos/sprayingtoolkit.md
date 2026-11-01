---
title: "SprayingToolkit: Scripts to make password spraying attacks against Lync/S4B, OWA & O365 a lot qui"
slug: "sprayingtoolkit"
summary: "Scripts to make password spraying attacks against Lync/S4B, OWA & O365 a lot quicker, less painful and more efficient"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'brute-force', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SprayingToolkit

SprayingToolkit es una herramienta de seguridad ofensiva / red team. Scripts to make password spraying attacks against Lync/S4B, OWA & O365 a lot quicker, less painful and more efficient

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/byt3bl33d3r/SprayingToolkit](https://github.com/byt3bl33d3r/SprayingToolkit)
- **Sección del toolkit:** Initial Access → Brute Force

## Objetivo y función

El objetivo principal de SprayingToolkit es scripts to make password spraying attacks against lync/s4b, owa & o365 a lot quicker, less painful and more efficient.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Install the pre-requisites with `pip3` as follows:

```bash
sudo -H pip3 install -r requirements.txt
```

Or use a Python virtual environment if you don't want to install the packages globally.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/byt3bl33d3r/SprayingToolkit
cd sprayingtoolkit

# Revisar ayuda
./sprayingtoolkit --help 2>/dev/null || python3 -m sprayingtoolkit --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SprayingToolkit únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/byt3bl33d3r/SprayingToolkit
- Toolkit de origen: Red Teaming Toolkit
