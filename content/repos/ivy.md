---
title: "Ivy: Ivy is a payload creation framework for the execution of arbitrary VBA (macro) s"
slug: "ivy"
summary: "Ivy is a payload creation framework for the execution of arbitrary VBA (macro) source code directly in memory."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Ivy

Ivy es una herramienta de seguridad ofensiva / red team. Ivy is a payload creation framework for the execution of arbitrary VBA (macro) source code directly in memory.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/optiv/Ivy](https://github.com/optiv/Ivy)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de Ivy es ivy is a payload creation framework for the execution of arbitrary vba (macro) source code directly in memory.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Ivy was developed with go.


The first step as always is to clone the repo. Before you compile Ivy, you'll need to install the dependencies. 
To install them, run following commands:
```
go get github.com/fatih/color
go get github.com/KyleBanks/XOREncryption/Go
```
Then build it

```
go build Ivy.go
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/optiv/Ivy
cd ivy

# Revisar ayuda
./ivy --help 2>/dev/null || python3 -m ivy --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Ivy únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/optiv/Ivy
- Toolkit de origen: Red Teaming Toolkit
