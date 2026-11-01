---
title: "SharpUnhooker: C# Based Universal API Unhooker - Automatically Unhook API Hives (ntdll.dll,kern"
slug: "sharpunhooker"
summary: "C# Based Universal API Unhooker - Automatically Unhook API Hives (ntdll.dll,kernel32.dll,user32.dll,advapi32.dll,and kernelbase.dll)."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpUnhooker

SharpUnhooker es una herramienta de seguridad ofensiva / red team. C# Based Universal API Unhooker - Automatically Unhook API Hives (ntdll.dll,kernel32.dll,user32.dll,advapi32.dll,and kernelbase.dll).

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GetRektBoy724/SharpUnhooker](https://github.com/GetRektBoy724/SharpUnhooker)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de SharpUnhooker es c# based universal api unhooker - automatically unhook api hives (ntdll.dll,kernel32.dll,user32.dll,advapi32.dll,and kernelbase.dll).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Simply load the pre-compiled DLL or add the code function and call the Main function from the SharpUnhooker class.
You can load the pre-compiled DLL on Powershell with `Reflection.Assembly` too!
This code uses C# 5,so it can be compiled with the built-in CSC from Windows 10.
The `JMPUnhooker` function is used to unhook JMP/Hot-patch/Inline hooks, the `EATUnhooker` function is used to unhook EAT hooks, and the `IATUnhooker` function is used to unhook IAT hooks. For now, the `IATUnhooker` and `EATUnhooker` cant unhook function import/export that uses ordinals instead of name. The `Main` function is basically "wrapper" of all of the functionality of SharpUnhooker.
If you want to test the capability of SharpUnhooker, you can use the `UsageExample` function from `SUUsageExample` class. Its just a simple local shellcode injector.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GetRektBoy724/SharpUnhooker
cd sharpunhooker

# Revisar ayuda
./sharpunhooker --help 2>/dev/null || python3 -m sharpunhooker --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpUnhooker únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GetRektBoy724/SharpUnhooker
- Toolkit de origen: Red Teaming Toolkit
