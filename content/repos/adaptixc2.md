---
title: "AdaptixC2: mando y control para operaciones de larga duración"
slug: "adaptixc2"
summary: "AdaptixC2: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AdaptixC2

**AdaptixC2** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: Adaptix is an extensible post-exploitation and adversarial emulation framework made for penetration testers. The Adaptix server is written in Golang and to allow operator flexibility.

## Para qué sirve

AdaptixC2 se utiliza en la fase de **mando y control** (remote access tools (rat)). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/Adaptix-Framework/AdaptixC2
cd AdaptixC2
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./adaptixc2 --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C++
- **Última actualización del repositorio:** 2026-11-01
- **Estrellas en GitHub:** 3.815
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa AdaptixC2 únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Adaptix-Framework/AdaptixC2
- Toolkit de origen: Red Teaming Toolkit
