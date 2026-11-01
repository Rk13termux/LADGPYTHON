---
title: "Nemesis: Nemesis is an offensive data enrichment pipeline and operator support system"
slug: "nemesis"
summary: "Nemesis is an offensive data enrichment pipeline and operator support system."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'devops', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Nemesis

Nemesis es una herramienta de seguridad ofensiva / red team. Nemesis is an offensive data enrichment pipeline and operator support system.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/SpecterOps/Nemesis](https://github.com/SpecterOps/Nemesis)
- **Sección del toolkit:** Miscellaneous → DevOps

## Objetivo y función

El objetivo principal de Nemesis es nemesis is an offensive data enrichment pipeline and operator support system.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Follow the [quickstart guide](https://docs.specterops.io/nemesis-docs/docs/quickstart).

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/SpecterOps/Nemesis
cd nemesis

# Revisar ayuda
./nemesis --help 2>/dev/null || python3 -m nemesis --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Nemesis únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/SpecterOps/Nemesis
- Toolkit de origen: Red Teaming Toolkit
