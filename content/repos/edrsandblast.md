---
title: "EDRSandBlast: la técnica para operar sin que el EDR lo detecte"
slug: "edrsandblast"
summary: "EDRSandBlast: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["evasión-de-defensas", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDRSandBlast

**EDRSandBlast** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La evasión de defensas es una carrera constante: cada técnica busca reducir la telemetría, retrasar la detección o inutilizar controles.

> Descripción oficial: EDRSandBlast is a tool written in C that weaponize a vulnerable signed driver to bypass EDR detections (Kernel callbacks and ETW TI provider) and LSASS protections.

## Para qué sirve

EDRSandBlast se utiliza en la fase de **evasión de defensas**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
# Installation of Python dependencies
pip.exe install -m .\requirements.txt

# Script usage
ExtractOffsets.py [-h] -i INPUT [-o OUTPUT] [-d] mode

positional arguments:
  mode                  ntoskrnl or wdigest. Mode to download and extract offsets for either ntoskrnl or wdigest

optional arguments:
  -h, --help            show this help message and exit
  -i INPUT, --input INPUT
                        Single file or directory containing ntoskrnl.exe / wdigest.dll to extract offsets from.
                        If in download mode, the PE downloaded from MS symbols servers will be placed in this folder.
  -o OUTPUT, --output OUTPUT
                        CSV file to write offsets to. If the specified file already exists, only new ntoskrnl versions will be
                        downloaded / analyzed.
                        Defaults to NtoskrnlOffsets.csv / WdigestOffsets.csv in the current folder.
  -d, --download         Flag to download the PE from Microsoft servers using list of versions from winbindex.m417z.com.
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Usage: EDRSandblast.exe [-h | --help] [-v | --verbose] <audit | dump | cmd | credguard | firewall | load_unsigned_driver>
[--usermode] [--unhook-method <N>] [--direct-syscalls] [--add-dll <dll name or path>]*
[--kernelmode] [--dont-unload-driver] [--no-restore]
    [--nt-offsets <NtoskrnlOffsets.csv>] [--fltmgr-offsets <FltmgrOffsets.csv>] [--wdigest-offsets <WdigestOffsets.csv>] [--ci-offsets <CiOffsets.csv>] [--internet]
    [--vuln-driver <RTCore64.sys>] [--vuln-service <SERVICE_NAME>]
    [--unsigned-driver <evil.sys>] [--unsigned-service <SERVICE_NAME>]
    [--no-kdp]
[-o | --dump-output <DUMP_FILE>]
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-08-30
- **Estrellas en GitHub:** 1.857
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa EDRSandBlast únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/wavestone-cdt/EDRSandblast
- Toolkit de origen: Red Teaming Toolkit
