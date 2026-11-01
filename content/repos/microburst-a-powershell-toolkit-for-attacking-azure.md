---
title: "MicroBurst: A PowerShell Toolkit for Attacking Azure: A collection of scripts for assessing Microsoft Azure security"
slug: "microburst-a-powershell-toolkit-for-attacking-azure"
summary: "A collection of scripts for assessing Microsoft Azure security"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es MicroBurst: A PowerShell Toolkit for Attacking Azure

MicroBurst: A PowerShell Toolkit for Attacking Azure es una herramienta de seguridad ofensiva / red team. A collection of scripts for assessing Microsoft Azure security

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/NetSPI/MicroBurst](https://github.com/NetSPI/MicroBurst)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de MicroBurst: A PowerShell Toolkit for Attacking Azure es a collection of scripts for assessing microsoft azure security.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

PS C:> Import-Module .\MicroBurst.psm1
This will import all applicable functions based off of the currently installed modules in your environment. The scripts can then be invoked using their names like
```
PS C:> Get-AzDomainInfo
```

If you want to simplify the trusting of the code files, use the following "Unblock-File" command to recursively trust each of the downloaded files:

	PS C:> dir -Recurse .\MicroBurst-master | Unblock-File

Recommended Modules to install:
* <a href="https://docs.microsoft.com/en-us/powershell/azure/new-azureps-module-az?view=azps-3.6.1">Az</a>
* <a href="https://docs.microsoft.com/en-us/powershell/module/azuread/?view=azureadps-2.0">AzureAd</a>
* <a href="https://docs.microsoft.com/en-us/powershell/module/msonline/?view=azureadps-1.0">MSOnline</a>

Here's how a module can be installed in Powershell
```
PS C:> Install-Module <module-name>
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/NetSPI/MicroBurst
cd microburst-a-powershell-toolkit-for-attacking-azure

# Revisar ayuda
./microburst:-a-powershell-toolkit-for-attacking-azure --help 2>/dev/null || python3 -m microburst:_a_powershell_toolkit_for_attacking_azure --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa MicroBurst: A PowerShell Toolkit for Attacking Azure únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/NetSPI/MicroBurst
- Toolkit de origen: Red Teaming Toolkit
