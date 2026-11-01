---
title: "SPAWN - Cobalt Strike BOF: Cobalt Strike BOF that spawns a sacrificial process, injects it with shellcode, "
slug: "spawn-cobalt-strike-bof"
summary: "Cobalt Strike BOF that spawns a sacrificial process, injects it with shellcode, and executes payload. Built to evade EDR/UserLand hooks by spawning sacrificial process with Arbitrary Code Guard (ACG), BlockDll, and PPID spoofing."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SPAWN - Cobalt Strike BOF

SPAWN - Cobalt Strike BOF es una herramienta de seguridad ofensiva / red team. Cobalt Strike BOF that spawns a sacrificial process, injects it with shellcode, and executes payload. Built to evade EDR/UserLand hooks by spawning sacrificial process with Arbitrary Code Guard (ACG), BlockDll, and PPID spoofing.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/boku7/spawn](https://github.com/boku7/spawn)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de SPAWN - Cobalt Strike BOF es cobalt strike bof that spawns a sacrificial process, injects it with shellcode, and executes payload. built to evade edr/userland hooks by spawning sacrificial process with arbitrary code guard (acg), blockdll, and ppid spoofing.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/boku7/spawn
cd spawn---cobalt-strike-bof
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/boku7/spawn
cd spawn-cobalt-strike-bof

# Revisar ayuda
./spawn---cobalt-strike-bof --help 2>/dev/null || python3 -m spawn_-_cobalt_strike_bof --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SPAWN - Cobalt Strike BOF únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/boku7/spawn
- Toolkit de origen: Red Teaming Toolkit
