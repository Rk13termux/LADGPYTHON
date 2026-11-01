---
title: "Freeze: Freeze is a payload toolkit for bypassing EDRs using suspended processes, direct"
slug: "freeze"
summary: "Freeze is a payload toolkit for bypassing EDRs using suspended processes, direct syscalls, and alternative execution methods"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Freeze

Freeze es una herramienta de seguridad ofensiva / red team. Freeze is a payload toolkit for bypassing EDRs using suspended processes, direct syscalls, and alternative execution methods

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/optiv/Freeze](https://github.com/optiv/Freeze)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de Freeze es freeze is a payload toolkit for bypassing edrs using suspended processes, direct syscalls, and alternative execution methods.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

To install Freeze, run the following commands, or use the compiled binary:
```
go build Freeze.go
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/optiv/Freeze
cd freeze

# Revisar ayuda
./freeze --help 2>/dev/null || python3 -m freeze --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Freeze únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/optiv/Freeze
- Toolkit de origen: Red Teaming Toolkit
