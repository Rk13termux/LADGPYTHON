---
title: "SharpEDRChecker: Checks running processes, process metadata, Dlls loaded into your current proces"
slug: "sharpedrchecker"
summary: "Checks running processes, process metadata, Dlls loaded into your current process and the each DLLs metadata, common install directories, installed services and each service binaries metadata, installed drivers and each drivers metadata, all for the presence of known defensive products such as AV's, EDR's and logging tools."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpEDRChecker

SharpEDRChecker es una herramienta de seguridad ofensiva / red team. Checks running processes, process metadata, Dlls loaded into your current process and the each DLLs metadata, common install directories, installed services and each service binaries metadata, installed drivers and each drivers metadata, all for the presence of known defensive products such as AV's, EDR's and logging tools.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/PwnDexter/SharpEDRChecker](https://github.com/PwnDexter/SharpEDRChecker)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de SharpEDRChecker es checks running processes, process metadata, dlls loaded into your current process and the each dlls metadata, common install directories, installed services and each service binaries metadata, installed drivers and each drivers metadata, all for the presence of known defensive products such as av's, edr's and logging tools.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Git clone the repo down and open the solution in Visual Studio then build the project or alternatively download the latest release from [here](https://github.com/PwnDexter/SharpEDRChecker/releases).

```
git clone https://github.com/PwnDexter/SharpEDRChecker.git
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/PwnDexter/SharpEDRChecker
cd sharpedrchecker

# Revisar ayuda
./sharpedrchecker --help 2>/dev/null || python3 -m sharpedrchecker --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpEDRChecker únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/PwnDexter/SharpEDRChecker
- Toolkit de origen: Red Teaming Toolkit
