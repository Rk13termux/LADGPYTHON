---
title: "PentAGI: Fully autonomous AI Agents system capable of performing complex penetration test"
slug: "pentagi"
summary: "Fully autonomous AI Agents system capable of performing complex penetration testing tasks."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'offensive-ai-agent', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PentAGI

PentAGI es una herramienta de seguridad ofensiva / red team. Fully autonomous AI Agents system capable of performing complex penetration testing tasks.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/vxcontrol/pentagi](https://github.com/vxcontrol/pentagi)
- **Sección del toolkit:** Miscellaneous → Offensive AI Agent

## Objetivo y función

El objetivo principal de PentAGI es fully autonomous ai agents system capable of performing complex penetration testing tasks.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

- Docker and Docker Compose (or Podman - see [Podman configuration](#running-pentagi-with-podman))
- Minimum 2 vCPU
- Minimum 4GB RAM
- 20GB free disk space
- Internet access for downloading images and updates

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/vxcontrol/pentagi
cd pentagi

# Revisar ayuda
./pentagi --help 2>/dev/null || python3 -m pentagi --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa PentAGI únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/vxcontrol/pentagi
- Toolkit de origen: Red Teaming Toolkit
