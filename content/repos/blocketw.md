---
title: "BlockETW: .Net 3.5 / 4.5 Assembly to block ETW telemetry in a process"
slug: "blocketw"
summary: ".Net 3.5 / 4.5 Assembly to block ETW telemetry in a process"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BlockETW

BlockETW es una herramienta de seguridad ofensiva / red team. .Net 3.5 / 4.5 Assembly to block ETW telemetry in a process

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Soledge/BlockEtw](https://github.com/Soledge/BlockEtw)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de BlockETW es .net 3.5 / 4.5 assembly to block etw telemetry in a process.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Soledge/BlockEtw
cd blocketw
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Soledge/BlockEtw
cd blocketw

# Revisar ayuda
./blocketw --help 2>/dev/null || python3 -m blocketw --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa BlockETW únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Soledge/BlockEtw
- Toolkit de origen: Red Teaming Toolkit
