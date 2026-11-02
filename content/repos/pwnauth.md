---
title: "PwnAuth: la estafa que roba sesiones y burla el doble factor"
slug: "pwnauth"
summary: "PwnAuth: entrega de payloads y vectores de compromiso controlados."
category: "python"
level: "Intermedio"
reading: 7
tags: ["entrega", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PwnAuth

**PwnAuth** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La entrega es la fase en la que el payload llega a la víctima. Un vector mal elegido arruina una operación por muy bueno que sea el implante.

> Descripción oficial: PwnAuth a web application framework for launching and managing OAuth abuse campaigns.

## Para qué sirve

PwnAuth se utiliza en la fase de **entrega** (phishing). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/fireeye/PwnAuth
cd PwnAuth
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./pwnauth --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-08-09
- **Estrellas en GitHub:** 401
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa PwnAuth únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/fireeye/PwnAuth
- Toolkit de origen: Red Teaming Toolkit
