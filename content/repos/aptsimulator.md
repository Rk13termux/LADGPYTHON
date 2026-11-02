---
title: "APTSimulator: simula al adversario para medir tus defensas"
slug: "aptsimulator"
summary: "APTSimulator: herramienta de seguridad ofensiva para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es APTSimulator

**APTSimulator** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: A Windows Batch script that uses a set of tools and output files to make a system look as if it was compromised.

## Para qué sirve

APTSimulator se utiliza en la fase de **recursos y automatización** (adversary emulation). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/NextronSystems/APTSimulator
cd APTSimulator
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```batch
APTSimulator.bat -b
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Batchfile
- **Última actualización del repositorio:** 2025-09-23
- **Estrellas en GitHub:** 2.786
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa APTSimulator únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/NextronSystems/APTSimulator
- Toolkit de origen: Red Teaming Toolkit
