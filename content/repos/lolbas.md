---
title: "LOLBAS: The goal of the LOLBAS project is to document every binary, script, and library "
slug: "lolbas"
summary: "The goal of the LOLBAS project is to document every binary, script, and library that can be used for Living Off The Land techniques"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'living-off-the-living-off-the-land', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LOLBAS

LOLBAS es una herramienta de seguridad ofensiva / red team. The goal of the LOLBAS project is to document every binary, script, and library that can be used for Living Off The Land techniques

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://lolbas-project.github.io/](https://lolbas-project.github.io/)
- **Sección del toolkit:** Miscellaneous → Living Off the Living Off the Land

## Objetivo y función

El objetivo principal de LOLBAS es the goal of the lolbas project is to document every binary, script, and library that can be used for living off the land techniques.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://lolbas-project.github.io/
cd lolbas
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://lolbas-project.github.io/
cd lolbas

# Revisar ayuda
./lolbas --help 2>/dev/null || python3 -m lolbas --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa LOLBAS únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://lolbas-project.github.io/
- Toolkit de origen: Red Teaming Toolkit
