---
title: "FindObjects-BOF: A Cobalt Strike Beacon Object File (BOF) project which uses direct system calls "
slug: "findobjects-bof"
summary: "A Cobalt Strike Beacon Object File (BOF) project which uses direct system calls to enumerate processes for specific modules or process handles."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es FindObjects-BOF

FindObjects-BOF es una herramienta de seguridad ofensiva / red team. A Cobalt Strike Beacon Object File (BOF) project which uses direct system calls to enumerate processes for specific modules or process handles.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/FindObjects-BOF](https://github.com/outflanknl/FindObjects-BOF)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de FindObjects-BOF es a cobalt strike beacon object file (bof) project which uses direct system calls to enumerate processes for specific modules or process handles.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/outflanknl/FindObjects-BOF
cd findobjects-bof
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/FindObjects-BOF
cd findobjects-bof

# Revisar ayuda
./findobjects-bof --help 2>/dev/null || python3 -m findobjects-bof --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa FindObjects-BOF únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/FindObjects-BOF
- Toolkit de origen: Red Teaming Toolkit
