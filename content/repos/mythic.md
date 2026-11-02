---
title: "Mythic: mando y control para operaciones de larga duración"
slug: "mythic"
summary: "Mythic: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Mythic

**Mythic** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: A cross-platform, post-exploit, red teaming framework built with python3, docker, docker-compose, and a web browser UI.

## Para qué sirve

Mythic se utiliza en la fase de **mando y control** (remote access tools (rat)). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
sudo ./mythic-cli install github https://github.com/MythicAgents/apfell
```

```bash
sudo ./mythic-cli install github https://github.com/MythicC2Profiles/http
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./mythic --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2026-10-17
- **Estrellas en GitHub:** 4.880
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Mythic únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/its-a-feature/Mythic
- Toolkit de origen: Red Teaming Toolkit
