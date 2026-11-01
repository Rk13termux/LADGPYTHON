---
title: "Inline-Execute-PE: Execute unmanaged Windows executables in CobaltStrike Beacons"
slug: "inline-execute-pe"
summary: "Execute unmanaged Windows executables in CobaltStrike Beacons"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Inline-Execute-PE

Inline-Execute-PE es una herramienta de seguridad ofensiva / red team. Execute unmanaged Windows executables in CobaltStrike Beacons

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Octoberfest7/Inline-Execute-PE](https://github.com/Octoberfest7/Inline-Execute-PE)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de Inline-Execute-PE es execute unmanaged windows executables in cobaltstrike beacons.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clone the repository and optionally run make in order to recompile the BOF's.

Load Inline-Execute-PE.cna into the CobaltStrike client.  Ensure the directory that CobaltStrike is running from is writable by your user; Inline-Execute-PE creates a text file there (petable.txt) in order to ensure availability of the data required by Inline-Execute-PE to function.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Octoberfest7/Inline-Execute-PE
cd inline-execute-pe

# Revisar ayuda
./inline-execute-pe --help 2>/dev/null || python3 -m inline-execute-pe --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Inline-Execute-PE únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Octoberfest7/Inline-Execute-PE
- Toolkit de origen: Red Teaming Toolkit
