---
title: "TokenTactics: Azure JWT Token Manipulation Toolset"
slug: "tokentactics"
summary: "Azure JWT Token Manipulation Toolset"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TokenTactics

TokenTactics es una herramienta de seguridad ofensiva / red team. Azure JWT Token Manipulation Toolset

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/rvrsh3ll/TokenTactics](https://github.com/rvrsh3ll/TokenTactics)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de TokenTactics es azure jwt token manipulation toolset.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```Import-Module .\TokenTactics.psd1```

```Get-Help Get-AzureToken```

```Invoke-RefreshToSubstrateToken```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/rvrsh3ll/TokenTactics
cd tokentactics

# Revisar ayuda
./tokentactics --help 2>/dev/null || python3 -m tokentactics --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa TokenTactics únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/rvrsh3ll/TokenTactics
- Toolkit de origen: Red Teaming Toolkit
