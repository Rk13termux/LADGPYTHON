---
title: "Kraken: vuelve a entrar aunque limpien el equipo"
slug: "kraken"
summary: "Kraken: persistencia para sobrevivir a reinicios y limpiezas."
category: "python"
level: "Intermedio"
reading: 7
tags: ["persistencia", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Kraken

**Kraken** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La persistencia garantiza que el acceso sobreviva a reinicios, cierres de sesión y limpiezas parciales del equipo comprometido.

> Descripción oficial: Kraken, a modular multi-language webshell coded by @secu_x11.

## Para qué sirve

Kraken se utiliza en la fase de **persistencia**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/kraken-ng/Kraken
cd Kraken
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./kraken --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2024-02-10
- **Estrellas en GitHub:** 553
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Kraken únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/kraken-ng/Kraken
- Toolkit de origen: Red Teaming Toolkit
