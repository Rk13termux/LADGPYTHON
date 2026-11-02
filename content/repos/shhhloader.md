---
title: "Shhhloader: la técnica para operar sin que el EDR lo detecte"
slug: "shhhloader"
summary: "Shhhloader: evasión de EDR, antivirus y telemetría defensiva."
category: "python"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Shhhloader

**Shhhloader** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Shhhloader is a work in progress shellcode loader. It takes raw shellcode as input and compiles a C++ stub that does a bunch of different things to try and bypass AV/EDR

## Para qué sirve

Shhhloader se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/icyguider/Shhhloader
cd Shhhloader
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./shhhloader --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2024-05-08
- **Estrellas en GitHub:** 1.292
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Shhhloader únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/icyguider/Shhhloader
- Toolkit de origen: Red Teaming Toolkit
