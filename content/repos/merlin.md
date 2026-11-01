---
title: "merlin: Merlin is a cross-platform post-exploitation Command & Control server and agent "
slug: "merlin"
summary: "Merlin is a cross-platform post-exploitation Command & Control server and agent written in Go."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es merlin

merlin es una herramienta de seguridad ofensiva / red team. Merlin is a cross-platform post-exploitation Command & Control server and agent written in Go.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Ne0nd0g/merlin](https://github.com/Ne0nd0g/merlin)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de merlin es merlin is a cross-platform post-exploitation command & control server and agent written in go.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Ne0nd0g/merlin
cd merlin
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Ne0nd0g/merlin
cd merlin

# Revisar ayuda
./merlin --help 2>/dev/null || python3 -m merlin --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa merlin únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Ne0nd0g/merlin
- Toolkit de origen: Red Teaming Toolkit
