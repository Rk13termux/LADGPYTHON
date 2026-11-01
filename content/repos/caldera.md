---
title: "Caldera: An automated adversary emulation system that performs post-compromise adversaria"
slug: "caldera"
summary: "An automated adversary emulation system that performs post-compromise adversarial behavior within Windows Enterprise networks."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Caldera

Caldera es una herramienta de seguridad ofensiva / red team. An automated adversary emulation system that performs post-compromise adversarial behavior within Windows Enterprise networks.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/mitre/caldera](https://github.com/mitre/caldera)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de Caldera es an automated adversary emulation system that performs post-compromise adversarial behavior within windows enterprise networks.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

These requirements are for the computer running the core framework:

* Any Linux or MacOS
  * Python 3.10+ (with Pip3)
* Recommended hardware to run on is 8GB+ RAM and 2+ CPUs
* Recommended: [GoLang 1.24+](https://go.dev/doc/install) to dynamically compile GoLang-based agents.
* NodeJS (v16+ recommended for v5 VueJS UI)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/mitre/caldera
cd caldera

# Revisar ayuda
./caldera --help 2>/dev/null || python3 -m caldera --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Caldera únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/mitre/caldera
- Toolkit de origen: Red Teaming Toolkit
