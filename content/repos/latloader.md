---
title: "LatLoader: PoC module to demonstrate automated lateral movement with the Havoc C2 framework"
slug: "latloader"
summary: "PoC module to demonstrate automated lateral movement with the Havoc C2 framework."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LatLoader

LatLoader es una herramienta de seguridad ofensiva / red team. PoC module to demonstrate automated lateral movement with the Havoc C2 framework.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/icyguider/LatLoader](https://github.com/icyguider/LatLoader)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de LatLoader es poc module to demonstrate automated lateral movement with the havoc c2 framework.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

This module was designed to work on Linux systems with `mingw-w64` installed. Additionally, you must have [osslsigncode](https://github.com/mtrojnar/osslsigncode) installed to provide cert signing for the DLL utilized by the `sideload` subcommand. Once all dependencies are installed, simply type `make` and then load the module into Havoc using the script manager. To view help in Havoc, run `help LatLoader`. To view help for subcommands, run `help LatLoader [subcommand]`.

![help](https://github.com/icyguider/LatLoader/assets/79864975/340d7cf5-2307-48ef-9e7c-fcd8f7cb103b)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/icyguider/LatLoader
cd latloader

# Revisar ayuda
./latloader --help 2>/dev/null || python3 -m latloader --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa LatLoader únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/icyguider/LatLoader
- Toolkit de origen: Red Teaming Toolkit
