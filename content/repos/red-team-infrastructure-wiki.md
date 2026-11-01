---
title: "Red Team Infrastructure Wiki: Wiki to collect Red Team infrastructure hardening resources"
slug: "red-team-infrastructure-wiki"
summary: "Wiki to collect Red Team infrastructure hardening resources"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'red-team-infrastructure', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Red Team Infrastructure Wiki

Red Team Infrastructure Wiki es una herramienta de seguridad ofensiva / red team. Wiki to collect Red Team infrastructure hardening resources

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki](https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki)
- **Sección del toolkit:** Miscellaneous → Red Team Infrastructure

## Objetivo y función

El objetivo principal de Red Team Infrastructure Wiki es wiki to collect red team infrastructure hardening resources.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki
cd red-team-infrastructure-wiki
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki
cd red-team-infrastructure-wiki

# Revisar ayuda
./red-team-infrastructure-wiki --help 2>/dev/null || python3 -m red_team_infrastructure_wiki --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Red Team Infrastructure Wiki únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki
- Toolkit de origen: Red Teaming Toolkit
