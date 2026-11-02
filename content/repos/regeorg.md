---
title: "reGeorg: cómo sobrevivir a un reinicio sin ser detectado"
slug: "regeorg"
summary: "reGeorg: persistencia para sobrevivir a reinicios y limpiezas."
category: "python"
level: "Intermedio"
reading: 7
tags: ["persistencia", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es reGeorg

**reGeorg** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La persistencia garantiza que el acceso sobreviva a reinicios, cierres de sesión y limpiezas parciales del equipo comprometido.

> Descripción oficial: The successor to reDuh, pwn a bastion webserver and create SOCKS proxies through the DMZ. Pivot and pwn.

## Para qué sirve

reGeorg se utiliza en la fase de **persistencia**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/sensepost/reGeorg
cd reGeorg
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
willem@sensepost.com / [@\_w\_m\_\_]

sam@sensepost.com / [@trowalts]

etienne@sensepost.com / [@kamp_staaldraad]


Version
----

1.0

Dependencies
-----------

reGeorg requires Python 2.7 and the following modules:

* [urllib3] - HTTP library with thread-safe connection pooling, file post, and more.


Usage
--------------
```

```bash
* **Step 1.**
Upload tunnel.(aspx|ashx|jsp|php) to a webserver (How you do that is up to
you)

* **Step 2.**
Configure you tools to use a socks proxy, use the ip address and port you
specified when
you started the reGeorgSocksProxy.py

** Note, if you tools, such as NMap doesn't support socks proxies, use
[proxychains] (see wiki) 

* **Step 3.** Hack the planet :)


Example
---------
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2025-03-06
- **Estrellas en GitHub:** 3.181
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa reGeorg únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/sensepost/reGeorg
- Toolkit de origen: Red Teaming Toolkit
