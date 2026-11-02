---
title: "TrickDump: cómo se extraen credenciales de la memoria de Windows"
slug: "trickdump"
summary: "TrickDump: extracción y abuso de credenciales en entornos Windows y AD."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["volcado-de-credenciales", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TrickDump

**TrickDump** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. Las credenciales son el activo más valioso de una red. Obtenerlas permite pivotar, escalar y persistir sin explotar nuevas vulnerabilidades.

> Descripción oficial: Dump lsass using only NTAPIS running 3 programs to create 3 JSON and 1 ZIP file... and generate the Minidump later!

## Para qué sirve

TrickDump se utiliza en la fase de **volcado de credenciales**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/ricardojoserf/TrickDump
cd TrickDump
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Lock.exe [disk/knowndlls/debugproc]
```

```bash
Shock.exe [disk/knowndlls/debugproc]
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-08-17
- **Estrellas en GitHub:** 611
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa TrickDump únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/ricardojoserf/TrickDump
- Toolkit de origen: Red Teaming Toolkit
