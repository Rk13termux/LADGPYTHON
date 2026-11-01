---
title: "pacu: The AWS exploitation framework, designed for testing the security of Amazon Web "
slug: "pacu"
summary: "The AWS exploitation framework, designed for testing the security of Amazon Web Services environments."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es pacu

pacu es una herramienta de seguridad ofensiva / red team. The AWS exploitation framework, designed for testing the security of Amazon Web Services environments.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/RhinoSecurityLabs/pacu](https://github.com/RhinoSecurityLabs/pacu)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de pacu es the aws exploitation framework, designed for testing the security of amazon web services environments.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Pacu is a fairly lightweight program, as it requires only [Python3.7+](https://www.python.org/downloads/) and pip3 to install a handful of Python libraries.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/RhinoSecurityLabs/pacu
cd pacu

# Revisar ayuda
./pacu --help 2>/dev/null || python3 -m pacu --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa pacu únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/RhinoSecurityLabs/pacu
- Toolkit de origen: Red Teaming Toolkit
