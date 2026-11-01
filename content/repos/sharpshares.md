---
title: "SharpShares: Multithreaded C# .NET Assembly to enumerate accessible network shares in a domai"
slug: "sharpshares"
summary: "Multithreaded C# .NET Assembly to enumerate accessible network shares in a domain"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpShares

SharpShares es una herramienta de seguridad ofensiva / red team. Multithreaded C# .NET Assembly to enumerate accessible network shares in a domain

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/mitchmoser/SharpShares](https://github.com/mitchmoser/SharpShares)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de SharpShares es multithreaded c# .net assembly to enumerate accessible network shares in a domain.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/mitchmoser/SharpShares
cd sharpshares
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/mitchmoser/SharpShares
cd sharpshares

# Revisar ayuda
./sharpshares --help 2>/dev/null || python3 -m sharpshares --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpShares únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/mitchmoser/SharpShares
- Toolkit de origen: Red Teaming Toolkit
