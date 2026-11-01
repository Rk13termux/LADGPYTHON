---
title: "Stratus Red Team: Stratus Red Team is "Atomic Red Team™" for the cloud, allowing to emulate offens"
slug: "stratus-red-team"
summary: "Stratus Red Team is "Atomic Red Team™" for the cloud, allowing to emulate offensive attack techniques in a granular and self-contained manner."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Stratus Red Team

Stratus Red Team es una herramienta de seguridad ofensiva / red team. Stratus Red Team is "Atomic Red Team™" for the cloud, allowing to emulate offensive attack techniques in a granular and self-contained manner.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/DataDog/stratus-red-team](https://github.com/DataDog/stratus-red-team)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de Stratus Red Team es stratus red team is "atomic red team™" for the cloud, allowing to emulate offensive attack techniques in a granular and self-contained manner.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Stratus Red Team is a self-contained Go binary.

See the documentation at **[stratus-red-team.cloud](https://stratus-red-team.cloud/)**:
- [Stratus Red Team Concepts](https://stratus-red-team.cloud/user-guide/getting-started/#concepts)
- [Installing Stratus Red Team](https://stratus-red-team.cloud/user-guide/getting-started/#installation) - Homebrew formula, Docker image, and pre-built binaries available
- [Available Attack Techniques](https://stratus-red-team.cloud/attack-techniques/list/), mapped to MITRE ATT&CK

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/DataDog/stratus-red-team
cd stratus-red-team

# Revisar ayuda
./stratus-red-team --help 2>/dev/null || python3 -m stratus_red_team --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Stratus Red Team únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/DataDog/stratus-red-team
- Toolkit de origen: Red Teaming Toolkit
