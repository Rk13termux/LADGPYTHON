---
title: "goexec: GoExec is a new take on some of the methods used to gain remote execution on Win"
slug: "goexec"
summary: "GoExec is a new take on some of the methods used to gain remote execution on Windows devices. GoExec implements a number of largely unrealized execution methods and provides significant OPSEC improvements overall."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es goexec

goexec es una herramienta de seguridad ofensiva / red team. GoExec is a new take on some of the methods used to gain remote execution on Windows devices. GoExec implements a number of largely unrealized execution methods and provides significant OPSEC improvements overall.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/FalconOpsLLC/goexec](https://github.com/FalconOpsLLC/goexec)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de goexec es goexec is a new take on some of the methods used to gain remote execution on windows devices. goexec implements a number of largely unrealized execution methods and provides significant opsec improvements overall.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/FalconOpsLLC/goexec
cd goexec
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/FalconOpsLLC/goexec
cd goexec

# Revisar ayuda
./goexec --help 2>/dev/null || python3 -m goexec --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa goexec únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/FalconOpsLLC/goexec
- Toolkit de origen: Red Teaming Toolkit
