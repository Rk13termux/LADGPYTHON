---
title: "APTSimulator: A Windows Batch script that uses a set of tools and output files to make a syste"
slug: "aptsimulator"
summary: "A Windows Batch script that uses a set of tools and output files to make a system look as if it was compromised."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es APTSimulator

APTSimulator es una herramienta de seguridad ofensiva / red team. A Windows Batch script that uses a set of tools and output files to make a system look as if it was compromised.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/NextronSystems/APTSimulator](https://github.com/NextronSystems/APTSimulator)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de APTSimulator es a windows batch script that uses a set of tools and output files to make a system look as if it was compromised.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Download the latest release from the "release" section
2. Extract the package on a demo system (Password: apt)
3. Start a cmd.exe as Administrator
4. Navigate to the extracted program folder and run APTSimulator.bat

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/NextronSystems/APTSimulator
cd aptsimulator

# Revisar ayuda
./aptsimulator --help 2>/dev/null || python3 -m aptsimulator --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa APTSimulator únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/NextronSystems/APTSimulator
- Toolkit de origen: Red Teaming Toolkit
