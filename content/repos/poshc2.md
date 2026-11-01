---
title: "PoshC2: PoshC2 is a proxy aware C2 framework used to aid penetration testers with red te"
slug: "poshc2"
summary: "PoshC2 is a proxy aware C2 framework used to aid penetration testers with red teaming, post-exploitation and lateral movement."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PoshC2

PoshC2 es una herramienta de seguridad ofensiva / red team. PoshC2 is a proxy aware C2 framework used to aid penetration testers with red teaming, post-exploitation and lateral movement.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/nettitude/PoshC2](https://github.com/nettitude/PoshC2)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de PoshC2 es poshc2 is a proxy aware c2 framework used to aid penetration testers with red teaming, post-exploitation and lateral movement.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

You can install PoshC2 directly or use the Docker images, instructions for both are below.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/nettitude/PoshC2
cd poshc2

# Revisar ayuda
./poshc2 --help 2>/dev/null || python3 -m poshc2 --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa PoshC2 únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/nettitude/PoshC2
- Toolkit de origen: Red Teaming Toolkit
