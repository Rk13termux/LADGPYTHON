---
title: "Recon-ng: Open Source Intelligence gathering tool aimed at reducing the time spent harvest"
slug: "recon-ng"
summary: "Open Source Intelligence gathering tool aimed at reducing the time spent harvesting information from open sources."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Recon-ng

Recon-ng es una herramienta de seguridad ofensiva / red team. Open Source Intelligence gathering tool aimed at reducing the time spent harvesting information from open sources.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/lanmaster53/recon-ng](https://github.com/lanmaster53/recon-ng)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de Recon-ng es open source intelligence gathering tool aimed at reducing the time spent harvesting information from open sources.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/lanmaster53/recon-ng
cd recon-ng
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/lanmaster53/recon-ng
cd recon-ng

# Revisar ayuda
./recon-ng --help 2>/dev/null || python3 -m recon-ng --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Recon-ng únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/lanmaster53/recon-ng
- Toolkit de origen: Red Teaming Toolkit
