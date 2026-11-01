---
title: "Amass: In-depth Attack Surface Mapping and Asset Discovery"
slug: "amass"
summary: "In-depth Attack Surface Mapping and Asset Discovery"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Amass

Amass es una herramienta de seguridad ofensiva / red team. In-depth Attack Surface Mapping and Asset Discovery

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/OWASP/Amass](https://github.com/OWASP/Amass)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de Amass es in-depth attack surface mapping and asset discovery.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

> You can find additional installation instructions and documentation in the [Amass Docs](https://owasp-amass.github.io/docs) repo.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/OWASP/Amass
cd amass

# Revisar ayuda
./amass --help 2>/dev/null || python3 -m amass --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Amass únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/OWASP/Amass
- Toolkit de origen: Red Teaming Toolkit
