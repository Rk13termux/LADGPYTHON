---
title: "Red Team Infrastructure Wiki: la herramienta que cambia las reglas del juego"
slug: "red-team-infrastructure-wiki"
summary: "Red Team Infrastructure Wiki: herramienta de seguridad ofensiva para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Red Team Infrastructure Wiki

**Red Team Infrastructure Wiki** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: Wiki to collect Red Team infrastructure hardening resources

## Para qué sirve

Red Team Infrastructure Wiki se utiliza en la fase de **recursos y automatización** (red team infrastructure). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki
cd Red-Team-Infrastructure-Wiki
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
./evilginx2 -p ./phishlets -t ./redirectors -developer -debug
```

## Compatibilidad y requisitos

- **Lenguaje principal:** no especificado
- **Última actualización del repositorio:** 2025-10-01
- **Estrellas en GitHub:** 4.547
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Red Team Infrastructure Wiki únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/bluscreenofjeff/Red-Team-Infrastructure-Wiki
- Toolkit de origen: Red Teaming Toolkit
