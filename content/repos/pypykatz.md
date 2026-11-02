---
title: "pypykatz: los secretos que Windows guarda en memoria"
slug: "pypykatz"
summary: "pypykatz: extracción y abuso de credenciales en entornos Windows y AD."
category: "python"
level: "Avanzado"
reading: 7
tags: ["volcado-de-credenciales", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es pypykatz

**pypykatz** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. Las credenciales son el activo más valioso de una red. Obtenerlas permite pivotar, escalar y persistir sin explotar nuevas vulnerabilidades.

> Descripción oficial: Mimikatz implementation in pure Python. At least a part of it :)

## Para qué sirve

pypykatz se utiliza en la fase de **volcado de credenciales**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
pip3 install pypykatz
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
pypykatz.py rekall <momeory_dump_file> -t 0
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-04-09
- **Estrellas en GitHub:** 3.375
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa pypykatz únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/skelsec/pypykatz
- Toolkit de origen: Red Teaming Toolkit
