---
title: "PEASS: Privilege Escalation Awesome Scripts SUITE (with colors)"
slug: "peass"
summary: "Privilege Escalation Awesome Scripts SUITE (with colors)"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['privilege-escalation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PEASS

PEASS es una herramienta de seguridad ofensiva / red team. Privilege Escalation Awesome Scripts SUITE (with colors)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/carlospolop/PEASS-ng](https://github.com/carlospolop/PEASS-ng)
- **Sección del toolkit:** Privilege Escalation 

## Objetivo y función

El objetivo principal de PEASS es privilege escalation awesome scripts suite (with colors).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/carlospolop/PEASS-ng
cd peass
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/carlospolop/PEASS-ng
cd peass

# Revisar ayuda
./peass --help 2>/dev/null || python3 -m peass --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa PEASS únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/carlospolop/PEASS-ng
- Toolkit de origen: Red Teaming Toolkit
