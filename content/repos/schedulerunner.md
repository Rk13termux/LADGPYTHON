---
title: "ScheduleRunner: el ancla que mantiene el acceso tras el reinicio"
slug: "schedulerunner"
summary: "ScheduleRunner: persistencia para sobrevivir a reinicios y limpiezas."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["persistencia", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ScheduleRunner

**ScheduleRunner** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La persistencia garantiza que el acceso sobreviva a reinicios, cierres de sesión y limpiezas parciales del equipo comprometido.

> Descripción oficial: A C# tool with more flexibility to customize scheduled task for both persistence and lateral movement in red team operation

## Para qué sirve

ScheduleRunner se utiliza en la fase de **persistencia**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/netero1010/ScheduleRunner
cd ScheduleRunner
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./schedulerunner --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2025-01-22
- **Estrellas en GitHub:** 348
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa ScheduleRunner únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/netero1010/ScheduleRunner
- Toolkit de origen: Red Teaming Toolkit
