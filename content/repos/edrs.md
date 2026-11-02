---
title: "EDRs: la técnica para operar sin que el EDR lo detecte"
slug: "edrs"
summary: "EDRs: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDRs

**EDRs** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: This repo contains information about EDRs that can be useful during red team exercise.

## Para qué sirve

EDRs se utiliza en la fase de **recursos y automatización** (red team scripts). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/Mr-Un1k0d3r/EDRs
cd EDRs
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./edrs --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2026-04-03
- **Estrellas en GitHub:** 2.211
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa EDRs únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Mr-Un1k0d3r/EDRs
- Toolkit de origen: Red Teaming Toolkit
