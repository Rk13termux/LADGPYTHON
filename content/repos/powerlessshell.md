---
title: "PowerLessShell: PowerLessShell rely on MSBuild.exe to remotely execute PowerShell scripts and co"
slug: "powerlessshell"
summary: "PowerLessShell rely on MSBuild.exe to remotely execute PowerShell scripts and commands without spawning powershell.exe. You can also execute raw shellcode using the same approach."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PowerLessShell

PowerLessShell es una herramienta de seguridad ofensiva / red team. PowerLessShell rely on MSBuild.exe to remotely execute PowerShell scripts and commands without spawning powershell.exe. You can also execute raw shellcode using the same approach.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Mr-Un1k0d3r/PowerLessShell](https://github.com/Mr-Un1k0d3r/PowerLessShell)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de PowerLessShell es powerlessshell rely on msbuild.exe to remotely execute powershell scripts and commands without spawning powershell.exe. you can also execute raw shellcode using the same approach.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

PowerLessShell use commandline argument to generate the final file.

```
$ uv run PowerLessShell.py -h
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

Generating a powershell payload
```
$ uv run PowerLessShell.py -type powershell -source script.ps1 -output malicious.csproj
PowerLessShell Less is More
Mr.Un1k0d3r RingZer0 Team (python3 port by @whokilleddb)
-----------------------------------------------------------
Generating the msbuild file using include/template-powershell.csproj as the template
File 'malicious.csproj' created
Process completed
```

Generating a shellcode payload
```
$ uv run PowerLessShell.py -source shellcode.raw -output malicious.csproj
PowerLessShell Less is More
Mr.Un1k0d3r RingZer0 Team (python3 po
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Mr-Un1k0d3r/PowerLessShell
cd powerlessshell

# Revisar ayuda
./powerlessshell --help 2>/dev/null || python3 -m powerlessshell --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa PowerLessShell únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Mr-Un1k0d3r/PowerLessShell
- Toolkit de origen: Red Teaming Toolkit
