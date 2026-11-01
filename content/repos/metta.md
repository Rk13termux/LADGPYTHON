---
title: "Metta: A security preparedness tool to do adversarial simulation"
slug: "metta"
summary: "A security preparedness tool to do adversarial simulation."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Metta

Metta es una herramienta de seguridad ofensiva / red team. A security preparedness tool to do adversarial simulation.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/uber-common/metta](https://github.com/uber-common/metta)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de Metta es a security preparedness tool to do adversarial simulation.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

[see setup.md](setup.md)

There is also a [wiki](https://github.com/uber-common/metta/wiki)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/uber-common/metta
cd metta

# Revisar ayuda
./metta --help 2>/dev/null || python3 -m metta --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Metta únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/uber-common/metta
- Toolkit de origen: Red Teaming Toolkit
