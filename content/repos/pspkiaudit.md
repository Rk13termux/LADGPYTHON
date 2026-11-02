---
title: "PSPKIAudit: la radiografía del entorno comprometido"
slug: "pspkiaudit"
summary: "PSPKIAudit: conciencia situacional para entender el entorno comprometido."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PSPKIAudit

**PSPKIAudit** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: PowerShell toolkit for auditing Active Directory Certificate Services (AD CS).

## Para qué sirve

PSPKIAudit se utiliza en la fase de **conciencia situacional** (domain situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
cd PSPKIAudit
Get-ChildItem -Recurse | Unblock-File

Import-Module .\PSPKIAudit.psd1
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./pspkiaudit --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** PowerShell
- **Última actualización del repositorio:** 2024-02-28
- **Estrellas en GitHub:** 954
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PSPKIAudit únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/GhostPack/PSPKIAudit
- Toolkit de origen: Red Teaming Toolkit
