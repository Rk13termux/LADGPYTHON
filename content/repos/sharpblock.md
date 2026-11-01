---
title: "SharpBlock: A method of bypassing EDR's active projection DLL's by preventing entry point ex"
slug: "sharpblock"
summary: "A method of bypassing EDR's active projection DLL's by preventing entry point execution."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpBlock

SharpBlock es una herramienta de seguridad ofensiva / red team. A method of bypassing EDR's active projection DLL's by preventing entry point execution.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/CCob/SharpBlock](https://github.com/CCob/SharpBlock)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de SharpBlock es a method of bypassing edr's active projection dll's by preventing entry point execution.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/CCob/SharpBlock
cd sharpblock
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/CCob/SharpBlock
cd sharpblock

# Revisar ayuda
./sharpblock --help 2>/dev/null || python3 -m sharpblock --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpBlock únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/CCob/SharpBlock
- Toolkit de origen: Red Teaming Toolkit
