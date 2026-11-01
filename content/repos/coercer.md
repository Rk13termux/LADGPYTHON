---
title: "Coercer: A python script to automatically coerce a Windows server to authenticate on an a"
slug: "coercer"
summary: "A python script to automatically coerce a Windows server to authenticate on an arbitrary machine through 9 methods."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team', 'python']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Coercer

Coercer es una herramienta de seguridad ofensiva / red team. A python script to automatically coerce a Windows server to authenticate on an arbitrary machine through 9 methods.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/p0dalirius/Coercer](https://github.com/p0dalirius/Coercer)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de Coercer es a python script to automatically coerce a windows server to authenticate on an arbitrary machine through 9 methods.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

You can now install it from pypi (latest version is <img alt="PyPI" src="https://img.shields.io/pypi/v/coercer">) with this command:

```
sudo python3 -m pip install coercer
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/p0dalirius/Coercer
cd coercer

# Revisar ayuda
./coercer --help 2>/dev/null || python3 -m coercer --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Coercer únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/p0dalirius/Coercer
- Toolkit de origen: Red Teaming Toolkit
