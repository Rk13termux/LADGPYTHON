---
title: "Grouper: A PowerShell script for helping to find vulnerable settings in AD Group Policy. "
slug: "grouper"
summary: "A PowerShell script for helping to find vulnerable settings in AD Group Policy. (deprecated, use Grouper2 instead!)"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Grouper

Grouper es una herramienta de seguridad ofensiva / red team. A PowerShell script for helping to find vulnerable settings in AD Group Policy. (deprecated, use Grouper2 instead!)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/l0ss/Grouper](https://github.com/l0ss/Grouper)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de Grouper es a powershell script for helping to find vulnerable settings in ad group policy. (deprecated, use grouper2 instead!).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Generate a GPO Report on a Windows machine with the Group Policy cmdlets installed.
These are installed on Domain Controllers by default, can be installed on Windows clients using RSAT, or can be enabled through the "Add Feature" wizard on Windows servers.

```
Get-GPOReport -All -ReportType xml -Path C:\temp\gporeport.xml
```

Import the Grouper module.

```
Import-Module .\grouper.psm1
```

Run Grouper.

```
Invoke-AuditGPOReport -Path C:\temp\gporeport.xml
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/l0ss/Grouper
cd grouper

# Revisar ayuda
./grouper --help 2>/dev/null || python3 -m grouper --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Grouper únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/l0ss/Grouper
- Toolkit de origen: Red Teaming Toolkit
