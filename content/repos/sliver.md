---
title: "Sliver: Sliver is a general purpose cross-platform implant framework that supports C2 ov"
slug: "sliver"
summary: "Sliver is a general purpose cross-platform implant framework that supports C2 over Mutual-TLS, HTTP(S), and DNS."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Sliver

Sliver es una herramienta de seguridad ofensiva / red team. Sliver is a general purpose cross-platform implant framework that supports C2 over Mutual-TLS, HTTP(S), and DNS.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/BishopFox/sliver](https://github.com/BishopFox/sliver)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de Sliver es sliver is a general purpose cross-platform implant framework that supports c2 over mutual-tls, http(s), and dns.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Download the latest [release](https://github.com/BishopFox/sliver/releases) and see the Sliver [wiki](https://sliver.sh/docs?name=Getting+Started) for a quick tutorial on basic setup and usage. To get the very latest and greatest compile from source.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/BishopFox/sliver
cd sliver

# Revisar ayuda
./sliver --help 2>/dev/null || python3 -m sliver --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Sliver únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/BishopFox/sliver
- Toolkit de origen: Red Teaming Toolkit
