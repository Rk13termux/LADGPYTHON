---
title: "SharpSploit: SharpSploit is a .NET post-exploitation library written in C#"
slug: "sharpsploit"
summary: "SharpSploit is a .NET post-exploitation library written in C#"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpSploit

SharpSploit es una herramienta de seguridad ofensiva / red team. SharpSploit is a .NET post-exploitation library written in C#

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/cobbr/SharpSploit](https://github.com/cobbr/SharpSploit)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de SharpSploit es sharpsploit is a .net post-exploitation library written in c#.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/cobbr/SharpSploit
cd sharpsploit
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/cobbr/SharpSploit
cd sharpsploit

# Revisar ayuda
./sharpsploit --help 2>/dev/null || python3 -m sharpsploit --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpSploit únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/cobbr/SharpSploit
- Toolkit de origen: Red Teaming Toolkit
