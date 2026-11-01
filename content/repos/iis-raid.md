---
title: "IIS-Raid: A native backdoor module for Microsoft IIS (Internet Information Services)"
slug: "iis-raid"
summary: "A native backdoor module for Microsoft IIS (Internet Information Services)"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es IIS-Raid

IIS-Raid es una herramienta de seguridad ofensiva / red team. A native backdoor module for Microsoft IIS (Internet Information Services)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/0x09AL/IIS-Raid](https://github.com/0x09AL/IIS-Raid)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de IIS-Raid es a native backdoor module for microsoft iis (internet information services).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/0x09AL/IIS-Raid
cd iis-raid
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/0x09AL/IIS-Raid
cd iis-raid

# Revisar ayuda
./iis-raid --help 2>/dev/null || python3 -m iis-raid --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa IIS-Raid únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/0x09AL/IIS-Raid
- Toolkit de origen: Red Teaming Toolkit
