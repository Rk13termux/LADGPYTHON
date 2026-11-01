---
title: "ADRecon: ADRecon is a tool which gathers information about the Active Directory and gener"
slug: "adrecon"
summary: "ADRecon is a tool which gathers information about the Active Directory and generates a report which can provide a holistic picture of the current state of the target AD environment."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ADRecon

ADRecon es una herramienta de seguridad ofensiva / red team. ADRecon is a tool which gathers information about the Active Directory and generates a report which can provide a holistic picture of the current state of the target AD environment.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/adrecon/ADRecon](https://github.com/adrecon/ADRecon)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de ADRecon es adrecon is a tool which gathers information about the active directory and generates a report which can provide a holistic picture of the current state of the target ad environment.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

These instructions will get you a copy of the tool up and running on your local machine.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/adrecon/ADRecon
cd adrecon

# Revisar ayuda
./adrecon --help 2>/dev/null || python3 -m adrecon --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ADRecon únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/adrecon/ADRecon
- Toolkit de origen: Red Teaming Toolkit
