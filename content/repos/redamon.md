---
title: "RedAmon: cómo romper un modelo de IA antes de que lo haga un atacante"
slug: "redamon"
summary: "RedAmon: pruebas de seguridad y red teaming sobre modelos de IA."
category: "python"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RedAmon

**RedAmon** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: An AI-powered agentic red team framework that automates offensive security operations, from reconnaissance to exploitation to post-exploitation, with zero human intervention.

## Para qué sirve

RedAmon se utiliza en la fase de **recursos y automatización** (offensive ai agent). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/samugit83/redamon.git
cd redamon

# Without GVM (lighter, faster startup):
./redamon.sh install

# With GVM / OpenVAS (full stack, ~30 min first run):
./redamon.sh install --gvm
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
[WARN] No admin user found. Let's create one.

  Admin name: Your Name
  Admin email: admin@example.com
  Admin password: ********
  Confirm password: ********
```

```bash
> ./redamon.sh create-admin
> 
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-11-01
- **Estrellas en GitHub:** 3.261
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa RedAmon únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/samugit83/redamon
- Toolkit de origen: Red Teaming Toolkit
