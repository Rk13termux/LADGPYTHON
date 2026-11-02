---
title: "BeEF: entrega de payloads sin levantar sospechas"
slug: "beef"
summary: "BeEF: entrega de payloads y vectores de compromiso controlados."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["entrega", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BeEF

**BeEF** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La entrega es la fase en la que el payload llega a la víctima. Un vector mal elegido arruina una operación por muy bueno que sea el implante.

> Descripción oficial: BeEF is short for The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser

## Para qué sirve

BeEF se utiliza en la fase de **entrega** (watering hole attack). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/beefproject/beef
cd beef
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./beef --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2026-10-30
- **Estrellas en GitHub:** 11.079
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa BeEF únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/beefproject/beef
- Toolkit de origen: Red Teaming Toolkit
