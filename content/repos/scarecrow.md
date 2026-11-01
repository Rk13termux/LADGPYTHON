---
title: "ScareCrow: Payload creation framework designed around EDR bypass"
slug: "scarecrow"
summary: "Payload creation framework designed around EDR bypass."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ScareCrow

ScareCrow es una herramienta de seguridad ofensiva / red team. Payload creation framework designed around EDR bypass.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/optiv/ScareCrow](https://github.com/optiv/ScareCrow)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de ScareCrow es payload creation framework designed around edr bypass.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

ScareCrow now requires golang 1.19.1 or later to compile loaders. If you are running an older version, please use version 1.19.1 or later. 

See for new versions: https://golang.org/dl/.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/optiv/ScareCrow
cd scarecrow

# Revisar ayuda
./scarecrow --help 2>/dev/null || python3 -m scarecrow --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ScareCrow únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/optiv/ScareCrow
- Toolkit de origen: Red Teaming Toolkit
