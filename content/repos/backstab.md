---
title: "Backstab: A tool to kill antimalware protected processes"
slug: "backstab"
summary: "A tool to kill antimalware protected processes"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Backstab

Backstab es una herramienta de seguridad ofensiva / red team. A tool to kill antimalware protected processes

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Yaxser/Backstab](https://github.com/Yaxser/Backstab)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de Backstab es a tool to kill antimalware protected processes.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Yaxser/Backstab
cd backstab
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Yaxser/Backstab
cd backstab

# Revisar ayuda
./backstab --help 2>/dev/null || python3 -m backstab --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Backstab únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Yaxser/Backstab
- Toolkit de origen: Red Teaming Toolkit
