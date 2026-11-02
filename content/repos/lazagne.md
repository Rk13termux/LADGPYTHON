---
title: "LaZagne: cómo se roban credenciales en un entorno real"
slug: "lazagne"
summary: "LaZagne: extracción, spraying y reutilización de credenciales."
category: "python"
level: "Avanzado"
reading: 7
tags: ["volcado-de-credenciales", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LaZagne

**LaZagne** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. Las credenciales son el activo más valioso de una red. Obtenerlas permite pivotar, escalar y persistir sin explotar nuevas vulnerabilidades.

> Descripción oficial: The LaZagne project is an open source application used to retrieve lots of passwords stored on a local computer.

## Para qué sirve

LaZagne se utiliza en la fase de **volcado de credenciales**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
pip install -r requirements.txt
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
laZagne.exe all
```

```bash
laZagne.exe browsers
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2025-09-18
- **Estrellas en GitHub:** 11.062
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa LaZagne únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/AlessandroZ/LaZagne
- Toolkit de origen: Red Teaming Toolkit
