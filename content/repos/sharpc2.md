---
title: "SharpC2: SharpC2 is a Command & Control (C2) framework written in C#. It consists of an A"
slug: "sharpc2"
summary: "SharpC2 is a Command & Control (C2) framework written in C#. It consists of an ASP.NET Core Team Server, a .NET Framework implant, and a .NET MAUI client."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpC2

SharpC2 es una herramienta de seguridad ofensiva / red team. SharpC2 is a Command & Control (C2) framework written in C#. It consists of an ASP.NET Core Team Server, a .NET Framework implant, and a .NET MAUI client.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/rasta-mouse/SharpC2](https://github.com/rasta-mouse/SharpC2)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de SharpC2 es sharpc2 is a command & control (c2) framework written in c#. it consists of an asp.net core team server, a .net framework implant, and a .net maui client.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/rasta-mouse/SharpC2
cd sharpc2
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/rasta-mouse/SharpC2
cd sharpc2

# Revisar ayuda
./sharpc2 --help 2>/dev/null || python3 -m sharpc2 --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpC2 únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/rasta-mouse/SharpC2
- Toolkit de origen: Red Teaming Toolkit
