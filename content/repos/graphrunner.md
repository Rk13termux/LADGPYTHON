---
title: "GraphRunner: A Post-exploitation Toolset for Interacting with the Microsoft Graph API"
slug: "graphrunner"
summary: "A Post-exploitation Toolset for Interacting with the Microsoft Graph API"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GraphRunner

GraphRunner es una herramienta de seguridad ofensiva / red team. A Post-exploitation Toolset for Interacting with the Microsoft Graph API

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/dafthack/GraphRunner/](https://github.com/dafthack/GraphRunner/)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de GraphRunner es a post-exploitation toolset for interacting with the microsoft graph api.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

As GraphRunner is a post-exploitation tool most of the modules rely on having authenticated access tokens. To assist with this there are multiple modules for obtaining and working with both user and application (service principal) tokens. 

A good starting place is to import the PowerShell script and run the Get-GraphTokens module.

```PowerShell
Import-Module .\GraphRunner.ps1
Get-GraphTokens
```
Next, check out the [wiki](https://github.com/dafthack/GraphRunner/wiki) for the full user guide and information about individual modules.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/dafthack/GraphRunner/
cd graphrunner

# Revisar ayuda
./graphrunner --help 2>/dev/null || python3 -m graphrunner --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa GraphRunner únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/dafthack/GraphRunner/
- Toolkit de origen: Red Teaming Toolkit
