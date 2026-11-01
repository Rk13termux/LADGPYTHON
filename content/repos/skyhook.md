---
title: "skyhook: A round-trip obfuscated HTTP file transfer setup built to bypass IDS detections"
slug: "skyhook"
summary: "A round-trip obfuscated HTTP file transfer setup built to bypass IDS detections."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es skyhook

skyhook es una herramienta de seguridad ofensiva / red team. A round-trip obfuscated HTTP file transfer setup built to bypass IDS detections.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/blackhillsinfosec/skyhook](https://github.com/blackhillsinfosec/skyhook)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de skyhook es a round-trip obfuscated http file transfer setup built to bypass ids detections.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/blackhillsinfosec/skyhook
cd skyhook
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/blackhillsinfosec/skyhook
cd skyhook

# Revisar ayuda
./skyhook --help 2>/dev/null || python3 -m skyhook --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa skyhook únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/blackhillsinfosec/skyhook
- Toolkit de origen: Red Teaming Toolkit
