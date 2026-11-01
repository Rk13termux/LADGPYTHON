---
title: "Recon-AD: An AD recon tool based on ADSI and reflective DLL’s"
slug: "recon-ad"
summary: "An AD recon tool based on ADSI and reflective DLL’s"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Recon-AD

Recon-AD es una herramienta de seguridad ofensiva / red team. An AD recon tool based on ADSI and reflective DLL’s

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/Recon-AD](https://github.com/outflanknl/Recon-AD)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de Recon-AD es an ad recon tool based on adsi and reflective dll’s.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
Download the Outflank-Recon-AD folder and load the Recon-AD.cna script within the Cobalt Strike Script Manager.
Use the Beacon help command to display syntax information.
```

```
This project is written in C/C++
You can use Visual Studio to compile the reflective dll's from source.
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/Recon-AD
cd recon-ad

# Revisar ayuda
./recon-ad --help 2>/dev/null || python3 -m recon-ad --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Recon-AD únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/Recon-AD
- Toolkit de origen: Red Teaming Toolkit
