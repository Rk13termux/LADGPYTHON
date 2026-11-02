---
title: "Cobalt Strike Malleable C2 Design and Reference Guide: el panel que coordina agentes sin levantar sospechas"
slug: "cobalt-strike-malleable-c2-design-and-reference-guide"
summary: "Cobalt Strike Malleable C2 Design and Reference Guide: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Cobalt Strike Malleable C2 Design and Reference Guide

**Cobalt Strike Malleable C2 Design and Reference Guide** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: Cobalt Strike Malleable C2 Design and Reference Guide

## Para qué sirve

Cobalt Strike Malleable C2 Design and Reference Guide se utiliza en la fase de **mando y control** (staging). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/threatexpress/malleable-c2/
cd malleable-c2
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./malleable-c2 --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** no especificado
- **Última actualización del repositorio:** 2023-12-13
- **Estrellas en GitHub:** 1.766
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa Cobalt Strike Malleable C2 Design and Reference Guide únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/threatexpress/malleable-c2/
- Toolkit de origen: Red Teaming Toolkit
