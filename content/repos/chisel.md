---
title: "Chisel: el túnel que atraviesa NAT y firewalls sin pedir permiso"
slug: "chisel"
summary: "Chisel: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Chisel

**Chisel** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: Chisel is a fast TCP/UDP tunnel, transported over HTTP, secured via SSH. Single executable including both client and server.

## Para qué sirve

Chisel se utiliza en la fase de **movimiento lateral** (tunneling). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```sh
docker run --rm -it jpillora/chisel --help
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```sh
chisel server --port $PORT --backend http://example.com
# listens on $PORT, proxies normal web requests to http://example.com
```

```sh
chisel client https://<your-app>.fly.dev 3000
# connects to your chisel server,
# tunnels your localhost:3000 to the server's localhost:3000
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-10-11
- **Estrellas en GitHub:** 16.719
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Chisel únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/jpillora/chisel
- Toolkit de origen: Red Teaming Toolkit
