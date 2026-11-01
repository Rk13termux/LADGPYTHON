---
title: "LinkedInt: LinkedIn Recon Tool"
slug: "linkedint"
summary: "LinkedIn Recon Tool"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LinkedInt

LinkedInt es una herramienta de seguridad ofensiva / red team. LinkedIn Recon Tool

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/vysecurity/LinkedInt](https://github.com/vysecurity/LinkedInt)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de LinkedInt es linkedin recon tool.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
git clone https://github.com/vysecurity/LinkedInt
cd LinkedInt
pip install -r requirements.txt
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/vysecurity/LinkedInt
cd linkedint

# Revisar ayuda
./linkedint --help 2>/dev/null || python3 -m linkedint --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa LinkedInt únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/vysecurity/LinkedInt
- Toolkit de origen: Red Teaming Toolkit
