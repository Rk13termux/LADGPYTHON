---
title: "Brute Ratel C4: control remoto persistente con tráfico camuflado"
slug: "brute-ratel-c4"
summary: "Brute Ratel C4: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Brute Ratel C4

**Brute Ratel C4** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: Brute Ratel is the most advanced Red Team & Adversary Simulation Software in the current C2 Market.

## Para qué sirve

Brute Ratel C4 se utiliza en la fase de **mando y control** (remote access tools (rat)). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://bruteratel.com/
cd bruteratel.com
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./bruteratel.com --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** no especificado
- **Última actualización del repositorio:** —
- **Estrellas en GitHub:** —
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Brute Ratel C4 únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://bruteratel.com/
- Toolkit de origen: Red Teaming Toolkit
