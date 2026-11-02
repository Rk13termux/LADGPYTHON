---
title: "frp: el túnel que atraviesa NAT y firewalls sin pedir permiso"
slug: "frp"
summary: "frp: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es frp

**frp** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: frp is a fast reverse proxy that allows you to expose a local server located behind a NAT or firewall to the Internet.

## Para qué sirve

frp se utiliza en la fase de **movimiento lateral** (tunneling). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/fatedier/frp
cd frp
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
# frps.toml
bindPort = 7000
```

```bash
# frpc.toml
serverAddr = "x.x.x.x"
serverPort = 7000

[[proxies]]
name = "ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 6000
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-10-23
- **Estrellas en GitHub:** 110.375
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa frp únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/fatedier/frp
- Toolkit de origen: Red Teaming Toolkit
