---
title: "deepdarkCTI: Collection of Cyber Threat Intelligence sources from the deep and dark web"
slug: "deepdarkcti"
summary: "Collection of Cyber Threat Intelligence sources from the deep and dark web"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'threat-intelligence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es deepdarkCTI

deepdarkCTI es una herramienta de seguridad ofensiva / red team. Collection of Cyber Threat Intelligence sources from the deep and dark web

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/fastfire/deepdarkCTI](https://github.com/fastfire/deepdarkCTI)
- **Sección del toolkit:** Miscellaneous → Threat Intelligence

## Objetivo y función

El objetivo principal de deepdarkCTI es collection of cyber threat intelligence sources from the deep and dark web.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/fastfire/deepdarkCTI
cd deepdarkcti
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/fastfire/deepdarkCTI
cd deepdarkcti

# Revisar ayuda
./deepdarkcti --help 2>/dev/null || python3 -m deepdarkcti --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa deepdarkCTI únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/fastfire/deepdarkCTI
- Toolkit de origen: Red Teaming Toolkit
