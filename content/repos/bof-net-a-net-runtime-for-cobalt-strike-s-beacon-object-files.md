---
title: "BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files: operar sin que el EDR lo detecte"
slug: "bof-net-a-net-runtime-for-cobalt-strike-s-beacon-object-files"
summary: "BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files: evasión de defensas, EDR y telemetría de seguridad."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["evasión-de-defensas", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files

**BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La evasión de defensas es una carrera constante: cada técnica busca reducir la telemetría, retrasar la detección o inutilizar controles.

> Descripción oficial: BOF.NET is a small native BOF object combined with the BOF.NET managed runtime that enables the development of Cobalt Strike BOFs directly in .NET. BOF.NET removes the complexity of native compilation along with the headaches of manually importing native API.

## Para qué sirve

BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files se utiliza en la fase de **evasión de defensas**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
Once you have compiled your BOF.NET assembly, download the .nupkg from the releases page or nuget.org.  Open the package in your favorite zip application and extract the contents of the lib folder.  Move the BOFNET.DLL from your preferred target framework folder into the same folder as the .cna and BOF obj files.  The final structre should look like this.
```

```bash
Load the bofnet.cna aggresor script into Cobalt Strike and being using your BOF.NET class.

Before any BOF.NET class can be used, the BOF.NET runtime needs to be initialised within the beacon instance.
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Once you have compiled your BOF.NET assembly, download the .nupkg from the releases page or nuget.org.  Open the package in your favorite zip application and extract the contents of the lib folder.  Move the BOFNET.DLL from your preferred target framework folder into the same folder as the .cna and BOF obj files.  The final structre should look like this.
```

```bash
Load the bofnet.cna aggresor script into Cobalt Strike and being using your BOF.NET class.

Before any BOF.NET class can be used, the BOF.NET runtime needs to be initialised within the beacon instance.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-09-04
- **Estrellas en GitHub:** 792
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/CCob/BOF.NET
- Toolkit de origen: Red Teaming Toolkit
