---
title: "RustScan: The Modern Port Scanner. Find ports quickly (3 seconds at its fastest). Run scri"
slug: "rustscan"
summary: "The Modern Port Scanner. Find ports quickly (3 seconds at its fastest). Run scripts through our scripting engine (Python, Lua, Shell supported)."
category: "python"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team', 'python']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RustScan

RustScan es una herramienta de seguridad ofensiva / red team. The Modern Port Scanner. Find ports quickly (3 seconds at its fastest). Run scripts through our scripting engine (Python, Lua, Shell supported).

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/RustScan/RustScan](https://github.com/RustScan/RustScan)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de RustScan es the modern port scanner. find ports quickly (3 seconds at its fastest). run scripts through our scripting engine (python, lua, shell supported).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

You can install RustScan's binary from our [releases page](https://github.com/RustScan/RustScan/releases).

We would prefer you to install with a package manager so it is tested and works for your system.

RustScan is in many repositories already. Install it with whatever tools you wish:

[![Packaging status](https://repology.org/badge/vertical-allrepos/rustscan.svg)](https://repology.org/project/rustscan/versions)

RustScan only officially supports Cargo installations, if you want to use that please install Rust and then `cargo install rustscan`

Example installations include:

MacOS:

```
  brew install rustscan
```

Arch:

```
  pacman -S rustscan
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/RustScan/RustScan
cd rustscan

# Revisar ayuda
./rustscan --help 2>/dev/null || python3 -m rustscan --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa RustScan únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/RustScan/RustScan
- Toolkit de origen: Red Teaming Toolkit
