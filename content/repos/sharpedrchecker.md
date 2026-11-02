---
title: "SharpEDRChecker: la técnica para operar sin que el EDR lo detecte"
slug: "sharpedrchecker"
summary: "SharpEDRChecker: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpEDRChecker

**SharpEDRChecker** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: Checks running processes, process metadata, Dlls loaded into your current process and the each DLLs metadata, common install directories, installed services and each service binaries metadata, installed drivers and each drivers metadata, all for the presence of known defensive products such as AV's, EDR's and logging tools.

## Para qué sirve

SharpEDRChecker se utiliza en la fase de **conciencia situacional** (host situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/PwnDexter/SharpEDRChecker.git
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
.\SharpEDRChecker.exe
run-exe SharpEDRChecker.Program SharpEDRChecker
```

```bash
sharpedrchecker
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-02-24
- **Estrellas en GitHub:** 761
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpEDRChecker únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/PwnDexter/SharpEDRChecker
- Toolkit de origen: Red Teaming Toolkit
