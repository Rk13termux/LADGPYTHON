---
title: "Pupy: Pupy is an opensource, cross-platform (Windows, Linux, OSX, Android) remote admi"
slug: "pupy"
summary: "Pupy is an opensource, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool mainly written in python"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team', 'python']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Pupy

Pupy es una herramienta de seguridad ofensiva / red team. Pupy is an opensource, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool mainly written in python

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/n1nj4sec/pupy](https://github.com/n1nj4sec/pupy)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de Pupy es pupy is an opensource, cross-platform (windows, linux, osx, android) remote administration and post-exploitation tool mainly written in python.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
git clone https://github.com/n1nj4sec/pupy.git pupy
cd pupy
git submodule init
git submodule update
pip install -r pupy/requirements.txt
```
or [Refer to the wiki](https://github.com/n1nj4sec/pupy/wiki/Installation)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/n1nj4sec/pupy
cd pupy

# Revisar ayuda
./pupy --help 2>/dev/null || python3 -m pupy --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Pupy únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/n1nj4sec/pupy
- Toolkit de origen: Red Teaming Toolkit
