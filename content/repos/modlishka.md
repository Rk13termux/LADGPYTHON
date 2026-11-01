---
title: "Modlishka: Modlishka is a flexible and powerful reverse proxy, that will take your ethical "
slug: "modlishka"
summary: "Modlishka is a flexible and powerful reverse proxy, that will take your ethical phishing campaigns to the next level."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['delivery', 'phishing', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Modlishka

Modlishka es una herramienta de seguridad ofensiva / red team. Modlishka is a flexible and powerful reverse proxy, that will take your ethical phishing campaigns to the next level.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/drk1wi/Modlishka](https://github.com/drk1wi/Modlishka)
- **Sección del toolkit:** Delivery → Phishing

## Objetivo y función

El objetivo principal de Modlishka es modlishka is a flexible and powerful reverse proxy, that will take your ethical phishing campaigns to the next level.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Latest source code: [zip](https://github.com/drk1wi/modlishka/zipball/master) | [tar](https://github.com/drk1wi/modlishka/tarball/master)

**Using go install:**
```bash
go install github.com/drk1wi/Modlishka@latest
```

**Manual build:**
```bash
git clone https://github.com/drk1wi/Modlishka.git
cd Modlishka
make
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/drk1wi/Modlishka
cd modlishka

# Revisar ayuda
./modlishka --help 2>/dev/null || python3 -m modlishka --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Modlishka únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/drk1wi/Modlishka
- Toolkit de origen: Red Teaming Toolkit
