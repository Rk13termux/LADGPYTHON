---
title: "TrickDump: Dump lsass using only NTAPIS running 3 programs to create 3 JSON and 1 ZIP file"
slug: "trickdump"
summary: "Dump lsass using only NTAPIS running 3 programs to create 3 JSON and 1 ZIP file... and generate the Minidump later!"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TrickDump

TrickDump es una herramienta de seguridad ofensiva / red team. Dump lsass using only NTAPIS running 3 programs to create 3 JSON and 1 ZIP file... and generate the Minidump later!

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/ricardojoserf/TrickDump](https://github.com/ricardojoserf/TrickDump)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de TrickDump es dump lsass using only ntapis running 3 programs to create 3 json and 1 zip file... and generate the minidump later!.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

The programs are executed in the victim system, creating three JSON files (with memory regions information) and one zip file (with each memory region dump).

```
Lock.exe [disk/knowndlls/debugproc]
```

```
Shock.exe [disk/knowndlls/debugproc]
```

```
Barrel.exe [disk/knowndlls/debugproc]
```
You can execute the programs directly without overwriting the ntdll.dll library:

![img1](https://raw.githubusercontent.com/ricardojoserf/ricardojoserf.github.io/master/images/trickdump/Screenshot_1.png)

Or use one of the three different overwrite techniques:

![img2](https://raw.githubusercontent.com/ricardojoserf/ricardojoserf.github.io/master/images/trickdump/Screenshot_2.png)

Then the Minidump file is generated:

![img3](https://raw.githubusercontent.com/ricardojoserf/ricardojoserf.github.io/master/images/trickdump/Screenshot_3.png)

-------------------------

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/ricardojoserf/TrickDump
cd trickdump

# Revisar ayuda
./trickdump --help 2>/dev/null || python3 -m trickdump --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa TrickDump únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/ricardojoserf/TrickDump
- Toolkit de origen: Red Teaming Toolkit
