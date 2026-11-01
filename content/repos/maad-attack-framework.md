---
title: "MAAD Attack Framework: An attack tool for simple, fast & effective security testing of M365 & Azure AD"
slug: "maad-attack-framework"
summary: "An attack tool for simple, fast & effective security testing of M365 & Azure AD."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es MAAD Attack Framework

MAAD Attack Framework es una herramienta de seguridad ofensiva / red team. An attack tool for simple, fast & effective security testing of M365 & Azure AD.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/vectra-ai-research/MAAD-AF](https://github.com/vectra-ai-research/MAAD-AF)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de MAAD Attack Framework es an attack tool for simple, fast & effective security testing of m365 & azure ad.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Clone or download MAAD-AF from GitHub
2. Start PowerShell as Admin and navigate to MAAD-AF directory
```
> git clone https://github.com/vectra-ai-research/MAAD-AF.git
> cd /MAAD-AF
```
3. Launch MAAD-AF
```
> MAAD_Attack.ps1

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/vectra-ai-research/MAAD-AF
cd maad-attack-framework

# Revisar ayuda
./maad-attack-framework --help 2>/dev/null || python3 -m maad_attack_framework --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa MAAD Attack Framework únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/vectra-ai-research/MAAD-AF
- Toolkit de origen: Red Teaming Toolkit
