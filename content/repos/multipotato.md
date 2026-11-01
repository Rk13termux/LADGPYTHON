---
title: "MultiPotato: Another Potato to get SYSTEM via SeImpersonate privileges"
slug: "multipotato"
summary: "Another Potato to get SYSTEM via SeImpersonate privileges"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['privilege-escalation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es MultiPotato

MultiPotato es una herramienta de seguridad ofensiva / red team. Another Potato to get SYSTEM via SeImpersonate privileges

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/S3cur3Th1sSh1t/MultiPotato](https://github.com/S3cur3Th1sSh1t/MultiPotato)
- **Sección del toolkit:** Privilege Escalation 

## Objetivo y función

El objetivo principal de MultiPotato es another potato to get system via seimpersonate privileges.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/S3cur3Th1sSh1t/MultiPotato
cd multipotato
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/S3cur3Th1sSh1t/MultiPotato
cd multipotato

# Revisar ayuda
./multipotato --help 2>/dev/null || python3 -m multipotato --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa MultiPotato únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/S3cur3Th1sSh1t/MultiPotato
- Toolkit de origen: Red Teaming Toolkit
