---
title: "GadgetToJScript: A tool for generating .NET serialized gadgets that can trigger .NET assembly loa"
slug: "gadgettojscript"
summary: "A tool for generating .NET serialized gadgets that can trigger .NET assembly load/execution when deserialized using BinaryFormatter from JS/VBS/VBA scripts."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GadgetToJScript

GadgetToJScript es una herramienta de seguridad ofensiva / red team. A tool for generating .NET serialized gadgets that can trigger .NET assembly load/execution when deserialized using BinaryFormatter from JS/VBS/VBA scripts.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/med0x2e/GadgetToJScript](https://github.com/med0x2e/GadgetToJScript)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de GadgetToJScript es a tool for generating .net serialized gadgets that can trigger .net assembly load/execution when deserialized using binaryformatter from js/vbs/vba scripts.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

You can either use the binaries located in the Release folder or use VS2017 and retarget your project to .NET version 3.5 or 4.x in order to build G2JS from source.
* Use the .NET 3.5 version of G2JS to:
	* Generate WSH scripts targeted to run in environments where .NET Framework 4.x is not available or less than 4.8. (3.5 is the minimal required .NET Framework version), This requires to build your C# payload or .NET Assembly with .NET framework <= 3.5.
* Use the .NET 4.x version of G2JS to:
	* Generate WSH scripts meant to run in environments where .NET Framework 4.x is available. (Includes 4.8+)
	* Generate WSH scripts for environments with .NET 4.8+ using <b>“--bypass”</b> option to bypass type checking.
  
* C# source code payload should be placed within the default public constructor of your class. (Example of running Mimikatz from jscript; https://gist.github.com/med0x2e/cc10d42b1f581507013e801da2651c74)
* Tests were conducted on the latest windows 10 Enterprise 1909 release and Windows 7 with different .NET framework versions installed.
* Make sure Windows Defender is turned off when using GadgetToJScript.exe to generate WSH scripts, can
be turned back on once scripts are generated.

|||
|----|----|
| ``-w, --scriptType=js`` |  ``Set to js, vbs, vba or hta`` |
|``-a, --assembly=TestAssembly.dll`` | ``.NET Assembly, example: -a C:\Users\userX\Desktop\shellcode_loader.dll/exe, alternatively you can specify a c# source file instead using -c cmdline switch.`` |
|``-c, --cs
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/med0x2e/GadgetToJScript
cd gadgettojscript

# Revisar ayuda
./gadgettojscript --help 2>/dev/null || python3 -m gadgettojscript --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa GadgetToJScript únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/med0x2e/GadgetToJScript
- Toolkit de origen: Red Teaming Toolkit
