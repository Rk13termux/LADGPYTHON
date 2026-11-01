---
title: "Atomic Red Team: Small and highly portable detection tests mapped to the Mitre ATT&CK Framework"
slug: "atomic-red-team"
summary: "Small and highly portable detection tests mapped to the Mitre ATT&CK Framework."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Atomic Red Team

Atomic Red Team es una herramienta de seguridad ofensiva / red team. Small and highly portable detection tests mapped to the Mitre ATT&CK Framework.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/redcanaryco/atomic-red-team](https://github.com/redcanaryco/atomic-red-team)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de Atomic Red Team es small and highly portable detection tests mapped to the mitre att&ck framework.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/redcanaryco/atomic-red-team
cd atomic-red-team
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/redcanaryco/atomic-red-team
cd atomic-red-team

# Revisar ayuda
./atomic-red-team --help 2>/dev/null || python3 -m atomic_red_team --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Atomic Red Team únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/redcanaryco/atomic-red-team
- Toolkit de origen: Red Teaming Toolkit
