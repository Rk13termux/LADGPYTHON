---
title: "cloud_enum: Multi-cloud OSINT tool. Enumerate public resources in AWS, Azure, and Google Clo"
slug: "cloud-enum"
summary: "Multi-cloud OSINT tool. Enumerate public resources in AWS, Azure, and Google Cloud."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es cloud_enum

cloud_enum es una herramienta de seguridad ofensiva / red team. Multi-cloud OSINT tool. Enumerate public resources in AWS, Azure, and Google Cloud.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/initstring/cloud_enum](https://github.com/initstring/cloud_enum)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de cloud_enum es multi-cloud osint tool. enumerate public resources in aws, azure, and google cloud.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/initstring/cloud_enum
cd cloud_enum
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/initstring/cloud_enum
cd cloud-enum

# Revisar ayuda
./cloud_enum --help 2>/dev/null || python3 -m cloud_enum --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa cloud_enum únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/initstring/cloud_enum
- Toolkit de origen: Red Teaming Toolkit
