---
title: "StandIn: StandIn is a small AD post-compromise toolkit. StandIn came about because recent"
slug: "standin"
summary: "StandIn is a small AD post-compromise toolkit. StandIn came about because recently at xforcered we needed a .NET native solution to perform resource based constrained delegation."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es StandIn

StandIn es una herramienta de seguridad ofensiva / red team. StandIn is a small AD post-compromise toolkit. StandIn came about because recently at xforcered we needed a .NET native solution to perform resource based constrained delegation.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/FuzzySecurity/StandIn](https://github.com/FuzzySecurity/StandIn)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de StandIn es standin is a small ad post-compromise toolkit. standin came about because recently at xforcered we needed a .net native solution to perform resource based constrained delegation.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

StandIn.exe --adcs --filter Kingsport --clientauth --add
StandIn.exe --adcs --filter Kingsport --clientauth --remove --domain redhook --user RFludd --pass Cl4vi$Alchemi4e

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/FuzzySecurity/StandIn
cd standin

# Revisar ayuda
./standin --help 2>/dev/null || python3 -m standin --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa StandIn únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/FuzzySecurity/StandIn
- Toolkit de origen: Red Teaming Toolkit
