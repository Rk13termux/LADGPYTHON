---
title: "cloud_enum: la puerta trasera que nadie revisa en la nube"
slug: "cloud-enum"
summary: "cloud_enum: enumeración y ataque de entornos cloud y Microsoft 365."
category: "python"
level: "Intermedio"
reading: 7
tags: ["reconocimiento", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es cloud_enum

**cloud_enum** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un red team, el reconocimiento define el resto del engagement: cuanto mejor sea el mapa inicial, menos ruido y más precisión en las fases siguientes.

> Descripción oficial: Multi-cloud OSINT tool. Enumerate public resources in AWS, Azure, and Google Cloud.

## Para qué sirve

cloud_enum se utiliza en la fase de **reconocimiento**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```sh
uv tool install git+https://github.com/initstring/cloud_enum
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```sh
uv run cloud_enum -k somecompany -k somecompany.io -k blockchaindoohickey
```

```sh
uv run cloud_enum -k keyword -t 10
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-10-04
- **Estrellas en GitHub:** 2.158
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa cloud_enum únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/initstring/cloud_enum
- Toolkit de origen: Red Teaming Toolkit
