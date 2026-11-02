---
title: "EDRSilencer: la técnica para operar sin que el EDR lo detecte"
slug: "edrsilencer"
summary: "EDRSilencer: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["evasión-de-defensas", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDRSilencer

**EDRSilencer** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La evasión de defensas es una carrera constante: cada técnica busca reducir la telemetría, retrasar la detección o inutilizar controles.

> Descripción oficial: A tool uses Windows Filtering Platform (WFP) to block Endpoint Detection and Response (EDR) agents from reporting security events to the server

## Para qué sirve

EDRSilencer se utiliza en la fase de **evasión de defensas**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
x86_64-w64-mingw32-gcc EDRSilencer.c utils.c -o EDRSilencer.exe -lfwpuclnt
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Usage: EDRSilencer.exe <blockedr/block/unblockall/unblock>
- Add WFP filters to block the IPv4 and IPv6 outbound traffic of all detected EDR processes:
  EDRSilencer.exe blockedr

- Add WFP filters to block the IPv4 and IPv6 outbound traffic of a specific process (full path is required):
  EDRSilencer.exe block "C:\Windows\System32\curl.exe"

- Remove all WFP filters applied by this tool:
  EDRSilencer.exe unblockall

- Remove a specific WFP filter based on filter id:
  EDRSilencer.exe unblock <filter id>
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-11-03
- **Estrellas en GitHub:** 1.913
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa EDRSilencer únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/netero1010/EDRSilencer
- Toolkit de origen: Red Teaming Toolkit
