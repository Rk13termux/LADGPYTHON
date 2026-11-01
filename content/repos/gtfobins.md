---
title: "GTFOBins: GTFOBins is a curated list of Unix binaries that can be used to bypass local sec"
slug: "gtfobins"
summary: "GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured systems"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'living-off-the-living-off-the-land', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GTFOBins

GTFOBins es una herramienta de seguridad ofensiva / red team. GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured systems

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://gtfobins.github.io](https://gtfobins.github.io)
- **Sección del toolkit:** Miscellaneous → Living Off the Living Off the Land

## Objetivo y función

El objetivo principal de GTFOBins es gtfobins is a curated list of unix binaries that can be used to bypass local security restrictions in misconfigured systems.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://gtfobins.github.io
cd gtfobins
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://gtfobins.github.io
cd gtfobins

# Revisar ayuda
./gtfobins --help 2>/dev/null || python3 -m gtfobins --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa GTFOBins únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://gtfobins.github.io
- Toolkit de origen: Red Teaming Toolkit
