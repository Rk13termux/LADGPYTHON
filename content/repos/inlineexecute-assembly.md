---
title: "InlineExecute-Assembly: InlineExecute-Assembly is a proof of concept Beacon Object File (BOF) that allow"
slug: "inlineexecute-assembly"
summary: "InlineExecute-Assembly is a proof of concept Beacon Object File (BOF) that allows security professionals to perform in process .NET assembly execution as an alternative to Cobalt Strikes traditional fork and run execute-assembly module"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es InlineExecute-Assembly

InlineExecute-Assembly es una herramienta de seguridad ofensiva / red team. InlineExecute-Assembly is a proof of concept Beacon Object File (BOF) that allows security professionals to perform in process .NET assembly execution as an alternative to Cobalt Strikes traditional fork and run execute-assembly module

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/xforcered/InlineExecute-Assembly](https://github.com/xforcered/InlineExecute-Assembly)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de InlineExecute-Assembly es inlineexecute-assembly is a proof of concept beacon object file (bof) that allows security professionals to perform in process .net assembly execution as an alternative to cobalt strikes traditional fork and run execute-assembly module.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Copy the inlineExecute-Assembly folder with all of its contents to a system you plan to connect with via the Cobalt Strike GUI application.
2. Load in the inlineExecute-Assembly.cna Aggressor script
3. Run inlineExecute-Assembly --dotnetassembly /path/to/assembly.exe for most basic execution (see use cases below for specific flag examples)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/xforcered/InlineExecute-Assembly
cd inlineexecute-assembly

# Revisar ayuda
./inlineexecute-assembly --help 2>/dev/null || python3 -m inlineexecute-assembly --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa InlineExecute-Assembly únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/xforcered/InlineExecute-Assembly
- Toolkit de origen: Red Teaming Toolkit
