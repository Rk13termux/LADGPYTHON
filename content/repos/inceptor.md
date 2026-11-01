---
title: "inceptor: Template-Driven AV/EDR Evasion Framework"
slug: "inceptor"
summary: "Template-Driven AV/EDR Evasion Framework"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es inceptor

inceptor es una herramienta de seguridad ofensiva / red team. Template-Driven AV/EDR Evasion Framework

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/klezVirus/inceptor](https://github.com/klezVirus/inceptor)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de inceptor es template-driven av/edr evasion framework.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Inceptor has been designed to work on Windows. The `update-config.py` utility can locate the required Microsoft binaries
and update the configuration accordingly. It might be required to install Microsoft Build Tools, the Windows SDK,
and Visual Studio, `update-config.py` will guide the user on how to install the required dependencies.

```
git clone --recursive https://github.com/klezVirus/inceptor.git
cd inceptor
virtualenv venv
venv\Scripts\activate.bat
pip install -r requirements.txt
cd inceptor
python update-config.py
```
<!-- installstop -->

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/klezVirus/inceptor
cd inceptor

# Revisar ayuda
./inceptor --help 2>/dev/null || python3 -m inceptor --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa inceptor únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/klezVirus/inceptor
- Toolkit de origen: Red Teaming Toolkit
