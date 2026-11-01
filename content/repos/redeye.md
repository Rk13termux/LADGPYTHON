---
title: "RedEye: RedEye is a visual analytic tool supporting Red & Blue Team operations"
slug: "redeye"
summary: "RedEye is a visual analytic tool supporting Red & Blue Team operations"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'log-aggregation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RedEye

RedEye es una herramienta de seguridad ofensiva / red team. RedEye is a visual analytic tool supporting Red & Blue Team operations

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/cisagov/RedEye](https://github.com/cisagov/RedEye)
- **Sección del toolkit:** Command and Control → Log Aggregation

## Objetivo y función

El objetivo principal de RedEye es redeye is a visual analytic tool supporting red & blue team operations.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Install [Node.js](https://nodejs.org/en/) >= v16
Install [yarn](https://yarnpkg.com/) globally via [npm](https://www.npmjs.com/package/yarn)

```
npm install -g yarn
```

Install package dependencies

```
yarn install
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/cisagov/RedEye
cd redeye

# Revisar ayuda
./redeye --help 2>/dev/null || python3 -m redeye --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa RedEye únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/cisagov/RedEye
- Toolkit de origen: Red Teaming Toolkit
