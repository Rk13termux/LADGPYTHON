---
title: "pwndrop: Self-deployable file hosting service for red teamers, allowing to easily upload "
slug: "pwndrop"
summary: "Self-deployable file hosting service for red teamers, allowing to easily upload and share payloads over HTTP and WebDAV."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es pwndrop

pwndrop es una herramienta de seguridad ofensiva / red team. Self-deployable file hosting service for red teamers, allowing to easily upload and share payloads over HTTP and WebDAV.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/kgretzky/pwndrop](https://github.com/kgretzky/pwndrop)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de pwndrop es self-deployable file hosting service for red teamers, allowing to easily upload and share payloads over http and webdav.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Make sure there aren't any DNS or HTTP(S) servers running before you attempt to install **pwndrop**.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/kgretzky/pwndrop
cd pwndrop

# Revisar ayuda
./pwndrop --help 2>/dev/null || python3 -m pwndrop --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa pwndrop únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/kgretzky/pwndrop
- Toolkit de origen: Red Teaming Toolkit
