---
title: "FindFrontableDomains: Search for potential frontable domains"
slug: "findfrontabledomains"
summary: "Search for potential frontable domains"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es FindFrontableDomains

FindFrontableDomains es una herramienta de seguridad ofensiva / red team. Search for potential frontable domains

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/rvrsh3ll/FindFrontableDomains](https://github.com/rvrsh3ll/FindFrontableDomains)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de FindFrontableDomains es search for potential frontable domains.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
$ sudo ./setup.sh
```

Example Command: `python3 FindFrontableDomains.py --domain example.com --threads 20`

Example Command: `python3 FindFrontableDomains.py --check ajax.microsoft.com`

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/rvrsh3ll/FindFrontableDomains
cd findfrontabledomains

# Revisar ayuda
./findfrontabledomains --help 2>/dev/null || python3 -m findfrontabledomains --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa FindFrontableDomains únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/rvrsh3ll/FindFrontableDomains
- Toolkit de origen: Red Teaming Toolkit
