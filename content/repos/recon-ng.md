---
title: "Recon-ng: inteligencia de fuentes abiertas para decidir mejor"
slug: "recon-ng"
summary: "Recon-ng: reconocimiento para descubrir activos, puertos y servicios expuestos."
category: "python"
level: "Intermedio"
reading: 7
tags: ["reconocimiento", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Recon-ng

**Recon-ng** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un red team, el reconocimiento define el resto del engagement: cuanto mejor sea el mapa inicial, menos ruido y más precisión en las fases siguientes.

> Descripción oficial: Open Source Intelligence gathering tool aimed at reducing the time spent harvesting information from open sources.

## Para qué sirve

Recon-ng se utiliza en la fase de **reconocimiento**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/lanmaster53/recon-ng
cd recon-ng
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./recon-ng --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-10-05
- **Estrellas en GitHub:** 6.024
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Recon-ng únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/lanmaster53/recon-ng
- Toolkit de origen: Red Teaming Toolkit
