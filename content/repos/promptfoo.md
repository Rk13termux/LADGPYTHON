---
title: "promptfoo: cómo romper un modelo de IA antes de que lo haga un atacante"
slug: "promptfoo"
summary: "promptfoo: pruebas de seguridad y red teaming sobre modelos de IA."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es promptfoo

**promptfoo** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: CLI and framework for evaluating, testing, and red-teaming LLM applications and prompts.

## Para qué sirve

promptfoo se utiliza en la fase de **recursos y automatización** (ai red teaming). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```sh
npm install -g promptfoo
promptfoo init --example getting-started
```

```sh
export OPENAI_API_KEY=sk-abc123
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```sh
npm install -g promptfoo
promptfoo init --example getting-started
```

```sh
export OPENAI_API_KEY=sk-abc123
```

## Compatibilidad y requisitos

- **Lenguaje principal:** TypeScript
- **Última actualización del repositorio:** 2026-11-01
- **Estrellas en GitHub:** 26.704
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa promptfoo únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/promptfoo/promptfoo
- Toolkit de origen: Red Teaming Toolkit
