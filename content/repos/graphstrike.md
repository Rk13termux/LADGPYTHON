---
title: "GraphStrike: C2: el cerebro invisible de una intrusión"
slug: "graphstrike"
summary: "GraphStrike: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GraphStrike

**GraphStrike** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: Cobalt Strike HTTPS beaconing over Microsoft Graph API

## Para qué sirve

GraphStrike se utiliza en la fase de **mando y control** (staging). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/RedSiege/GraphStrike
cd GraphStrike
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
# Cleanup

### On the machine that is running the TS + GraphStrike Server:
1. Stop the GraphStrike server
2. Change back to the setup directory and run 
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-06-25
- **Estrellas en GitHub:** 638
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa GraphStrike únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/RedSiege/GraphStrike
- Toolkit de origen: Red Teaming Toolkit
