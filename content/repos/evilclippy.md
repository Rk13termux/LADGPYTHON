---
title: "EvilClippy: A cross-platform assistant for creating malicious MS Office documents. Can hide "
slug: "evilclippy"
summary: "A cross-platform assistant for creating malicious MS Office documents. Can hide VBA macros, stomp VBA code (via P-Code) and confuse macro analysis tools. Runs on Linux, OSX and Windows."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EvilClippy

EvilClippy es una herramienta de seguridad ofensiva / red team. A cross-platform assistant for creating malicious MS Office documents. Can hide VBA macros, stomp VBA code (via P-Code) and confuse macro analysis tools. Runs on Linux, OSX and Windows.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/EvilClippy](https://github.com/outflanknl/EvilClippy)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de EvilClippy es a cross-platform assistant for creating malicious ms office documents. can hide vba macros, stomp vba code (via p-code) and confuse macro analysis tools. runs on linux, osx and windows.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

**Print help**

`EvilClippy.exe -h`

**Hide/Unhide macros from GUI**

Hide all macro modules (except the default "ThisDocument" module) from the VBA GUI editor. This is achieved by removing module lines from the project stream [MS-OVBA 2.3.1].

`EvilClippy.exe -g macrofile.doc`

Undo the changes done by the hide option (-g) so that we can debug the macro in the VBA IDE.

`EvilClippy.exe -gg macrofile.doc`

**Stomp VBA (abuse P-code)**

Put fake VBA code from text file *fakecode.vba* in all modules, while leaving P-code intact. This abuses an undocumented feature of module streams [MS-OVBA 2.3.4.3]. Note that the VBA project version must match the host program in order for the P-code to be executed (see next example for version matching).

`EvilClippy.exe -s fakecode.vba macrofile.doc`

Note: VBA Stomping does not work for files saved in the Excel 97-2003 Workbook (.xls) format

**Set target Office version for VBA stomping**

Same as the above, but now explicitly targeting Word 2016 on x86. This means that Word 2016 on x86 will execute the P-code, while other versions of Word wil execute the code from *fakecode.vba* instead. Achieved by setting the appropriate version bytes in the _VBA_PROJECT stream [MS-OVBA 2.3.4.1].

`EvilClippy.exe -s fakecode.vba -t 2016x86 macrofile.doc`

**Set/reset random module names (fool analyst tools)**

Set random ASCII module names in the dir stream [MS-OVBA 2.3.4.2]. This abuses ambiguity in the MODULESTREAMNAME records [MS-OVBA 2.3.4.2.3.2.3] -
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/EvilClippy
cd evilclippy

# Revisar ayuda
./evilclippy --help 2>/dev/null || python3 -m evilclippy --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa EvilClippy únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/EvilClippy
- Toolkit de origen: Red Teaming Toolkit
