---
title: "RedELK: Red Team's SIEM - tool for Red Teams used for tracking and alarming about Blue T"
slug: "redelk"
summary: "Red Team's SIEM - tool for Red Teams used for tracking and alarming about Blue Team activities as well as better usability in long term operations."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'log-aggregation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RedELK

RedELK es una herramienta de seguridad ofensiva / red team. Red Team's SIEM - tool for Red Teams used for tracking and alarming about Blue Team activities as well as better usability in long term operations.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/RedELK](https://github.com/outflanknl/RedELK)
- **Sección del toolkit:** Command and Control → Log Aggregation

## Objetivo y función

El objetivo principal de RedELK es red team's siem - tool for red teams used for tracking and alarming about blue team activities as well as better usability in long term operations.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Check the [wiki](https://github.com/outflanknl/RedELK/wiki) for manual installation manual. There are also Ansible playbooks maintained by others:

- [RedELK Server playbook](https://github.com/fastlorenzo/redelk-server) - maintained by one of RedELK's developers
- [RedELK Client playbook](https://github.com/fastlorenzo/redelk-client) - maintained by one of RedELK's developers
- [ansible-redelk](https://github.com/curi0usJack/ansible-redelk) - maintained by curi0usJack/TrustedSec

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/RedELK
cd redelk

# Revisar ayuda
./redelk --help 2>/dev/null || python3 -m redelk --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa RedELK únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/RedELK
- Toolkit de origen: Red Teaming Toolkit
