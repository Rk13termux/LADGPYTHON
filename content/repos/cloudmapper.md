---
title: "CloudMapper: CloudMapper helps you analyze your Amazon Web Services (AWS) environments"
slug: "cloudmapper"
summary: "CloudMapper helps you analyze your Amazon Web Services (AWS) environments."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CloudMapper

CloudMapper es una herramienta de seguridad ofensiva / red team. CloudMapper helps you analyze your Amazon Web Services (AWS) environments.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/duo-labs/cloudmapper](https://github.com/duo-labs/cloudmapper)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de CloudMapper es cloudmapper helps you analyze your amazon web services (aws) environments.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Requirements:
- python 3 (3.7.0rc1 is known to work), `pip`, and `virtualenv`
- You will also need `jq` (https://stedolan.github.io/jq/) and the library `pyjq` (https://github.com/doloopwhile/pyjq), which require some additional tools installed that will be shown.

On macOS:

```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/duo-labs/cloudmapper
cd cloudmapper

# Revisar ayuda
./cloudmapper --help 2>/dev/null || python3 -m cloudmapper --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa CloudMapper únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/duo-labs/cloudmapper
- Toolkit de origen: Red Teaming Toolkit
