---
title: "forkatz: credential dump using forshaw technique using SeTrustedCredmanAccessPrivilege"
slug: "forkatz"
summary: "credential dump using forshaw technique using SeTrustedCredmanAccessPrivilege"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es forkatz

forkatz es una herramienta de seguridad ofensiva / red team. credential dump using forshaw technique using SeTrustedCredmanAccessPrivilege

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Barbarisch/forkatz](https://github.com/Barbarisch/forkatz)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de forkatz es credential dump using forshaw technique using setrustedcredmanaccessprivilege.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Barbarisch/forkatz
cd forkatz
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Barbarisch/forkatz
cd forkatz

# Revisar ayuda
./forkatz --help 2>/dev/null || python3 -m forkatz --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa forkatz únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Barbarisch/forkatz
- Toolkit de origen: Red Teaming Toolkit
