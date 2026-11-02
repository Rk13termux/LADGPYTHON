---
title: "C2concealer: control remoto persistente con tráfico camuflado"
slug: "c2concealer"
summary: "C2concealer: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es C2concealer

**C2concealer** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: A command line tool that generates randomized C2 malleable profiles for use in Cobalt Strike.

## Para qué sirve

C2concealer se utiliza en la fase de **mando y control** (staging). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/RedSiege/C2concealer.git
cd C2concealer
python3 -m venv .venv
source .venv/bin/activate
pip3 install -e .
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Usage:
C2concealer --hostname google.com --variant 3

Flags:

	(optional)
	--hostname 
		The hostname used in HTTP client and server side settings. Default is None.
	--variant 
		An integer defining the number of HTTP client/server variants to generate. 
		Recommend between 1 and 5. Max 10.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-04-13
- **Estrellas en GitHub:** 1.126
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa C2concealer únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/FortyNorthSecurity/C2concealer
- Toolkit de origen: Red Teaming Toolkit
