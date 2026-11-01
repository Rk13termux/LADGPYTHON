---
title: "SharpAppLocker: C# port of the Get-AppLockerPolicy PowerShell cmdlet with extended features. Inc"
slug: "sharpapplocker"
summary: "C# port of the Get-AppLockerPolicy PowerShell cmdlet with extended features. Includes the ability to filter and search for a specific type of rules and actions."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpAppLocker

SharpAppLocker es una herramienta de seguridad ofensiva / red team. C# port of the Get-AppLockerPolicy PowerShell cmdlet with extended features. Includes the ability to filter and search for a specific type of rules and actions.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/SharpAppLocker/](https://github.com/Flangvik/SharpAppLocker/)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de SharpAppLocker es c# port of the get-applockerpolicy powershell cmdlet with extended features. includes the ability to filter and search for a specific type of rules and actions.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Flangvik/SharpAppLocker/
cd sharpapplocker
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/SharpAppLocker/
cd sharpapplocker

# Revisar ayuda
./sharpapplocker --help 2>/dev/null || python3 -m sharpapplocker --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpAppLocker únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/SharpAppLocker/
- Toolkit de origen: Red Teaming Toolkit
