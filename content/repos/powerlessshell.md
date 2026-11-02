---
title: "PowerLessShell: de un equipo comprometido a todo el dominio"
slug: "powerlessshell"
summary: "PowerLessShell: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PowerLessShell

**PowerLessShell** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: PowerLessShell rely on MSBuild.exe to remotely execute PowerShell scripts and commands without spawning powershell.exe. You can also execute raw shellcode using the same approach.

## Para qué sirve

PowerLessShell se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
https://docs.microsoft.com/en-us/visualstudio/msbuild/property-functions
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
uv run PowerLessShell.py -h
PowerLessShell Less is More
Mr.Un1k0d3r RingZer0 Team (python3 port by @whokilleddb)
-----------------------------------------------------------
usage: PowerLessShell.py [-h] [-type TYPE] -source SOURCE -output OUTPUT
                         [-arch ARCH] [-condition CONDITION]

optional arguments:
  -h, --help            show this help message and exit
  -type TYPE            Payload type (shellcode/powershell) default to:
                        shellcode
  -source SOURCE        Path to the source file (raw shellcode or powershell
                        script)
  -output OUTPUT        MSBuild output filename
  -arch ARCH            Shellcode architecture (32/64) default to: 32
  -condition CONDITION  XML Compiling condition default (Check for USERDOMAIN)
                        default is: none
```

```bash
uv run PowerLessShell.py -type powershell -source script.ps1 -output malicious.csproj
PowerLessShell Less is More
Mr.Un1k0d3r RingZer0 Team (python3 port by @whokilleddb)
-----------------------------------------------------------
Generating the msbuild file using include/template-powershell.csproj as the template
File 'malicious.csproj' created
Process completed
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-04-09
- **Estrellas en GitHub:** 1.560
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PowerLessShell únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Mr-Un1k0d3r/PowerLessShell
- Toolkit de origen: Red Teaming Toolkit
