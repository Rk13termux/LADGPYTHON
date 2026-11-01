---
title: "Phant0m: Windows Event Log Killer"
slug: "phant0m"
summary: "Windows Event Log Killer"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Phant0m

Phant0m es una herramienta de seguridad ofensiva / red team. Windows Event Log Killer

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/hlldz/Phant0m](https://github.com/hlldz/Phant0m)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de Phant0m es windows event log killer.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/hlldz/Phant0m
cd phant0m
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/hlldz/Phant0m
cd phant0m

# Revisar ayuda
./phant0m --help 2>/dev/null || python3 -m phant0m --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Phant0m únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/hlldz/Phant0m
- Toolkit de origen: Red Teaming Toolkit
