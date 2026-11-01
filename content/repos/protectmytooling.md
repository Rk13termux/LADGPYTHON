---
title: "ProtectMyTooling: Multi-Packer wrapper letting us daisy-chain various packers, obfuscators and oth"
slug: "protectmytooling"
summary: "Multi-Packer wrapper letting us daisy-chain various packers, obfuscators and other Red Team oriented weaponry. Featured with artifacts watermarking, IOCs collection & PE Backdooring. You feed it with your implant, it does a lot of sneaky things and spits out obfuscated executable."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ProtectMyTooling

ProtectMyTooling es una herramienta de seguridad ofensiva / red team. Multi-Packer wrapper letting us daisy-chain various packers, obfuscators and other Red Team oriented weaponry. Featured with artifacts watermarking, IOCs collection & PE Backdooring. You feed it with your implant, it does a lot of sneaky things and spits out obfuscated executable.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/mgeeky/ProtectMyTooling](https://github.com/mgeeky/ProtectMyTooling)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de ProtectMyTooling es multi-packer wrapper letting us daisy-chain various packers, obfuscators and other red team oriented weaponry. featured with artifacts watermarking, iocs collection & pe backdooring. you feed it with your implant, it does a lot of sneaky things and spits out obfuscated executable.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

**This tool was designed to work on Windows, as most packers natively target that platform.**

Some features may work however on Linux just fine, nonetheless that support is not fully tested, please report bugs and issues.

1. First, **disable your AV** and add `contrib` directory to exclusions. That directory contains obfuscators, protectors which will get flagged by AV and removed.
2. Then clone this repository
```
PS C:\> git clone --recurse https://github.com/Binary-Offensive/ProtectMyTooling
```

3. Actual installation is straightforward:

  **Windows**
```
PS C:\ProtectMyTooling> .\install.ps1
```

  **Linux**
```
bash# ./install.sh
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/mgeeky/ProtectMyTooling
cd protectmytooling

# Revisar ayuda
./protectmytooling --help 2>/dev/null || python3 -m protectmytooling --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ProtectMyTooling únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/mgeeky/ProtectMyTooling
- Toolkit de origen: Red Teaming Toolkit
