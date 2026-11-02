---
title: "EDR-Freeze: la técnica para operar sin que el EDR lo detecte"
slug: "edr-freeze"
summary: "EDR-Freeze: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["evasión-de-defensas", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDR-Freeze

**EDR-Freeze** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La evasión de defensas es una carrera constante: cada técnica busca reducir la telemetría, retrasar la detección o inutilizar controles.

> Descripción oficial: EDR-Freeze is a tool that puts a process of EDR, AntiMalware into a coma state.

## Para qué sirve

EDR-Freeze se utiliza en la fase de **evasión de defensas**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/TwoSevenOneT/EDR-Freeze
cd EDR-Freeze
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./edr-freeze --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C++
- **Última actualización del repositorio:** 2026-05-23
- **Estrellas en GitHub:** 878
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa EDR-Freeze únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/TwoSevenOneT/EDR-Freeze
- Toolkit de origen: Red Teaming Toolkit
