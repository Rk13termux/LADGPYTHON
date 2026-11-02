---
title: "SockTail: el túnel que atraviesa NAT y firewalls sin pedir permiso"
slug: "socktail"
summary: "SockTail: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SockTail

**SockTail** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: SockTail is a small binary that joins a device to a Tailscale network and exposes a local SOCKS5 proxy on port 1080. It's meant for red team operations where you need network access into a target system without setting up wonky port forwards, persistent daemons, or noisy tunnels.

## Para qué sirve

SockTail se utiliza en la fase de **movimiento lateral** (tunneling). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/Yeeb1/SockTail
cd SockTail
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Usage: ./SockTail [hostname] [authkey] [control-url]

  hostname:    Optional. Auto-generated if not specified
  authkey:     Optional. Uses embedded key if not specified
  control-url: Optional. Uses Tailscale default or build-time URL if not specified
  port:        Fixed at 1080

Examples:
  ./SockTail
    - Auto hostname, embedded key, default control server

  ./SockTail vpn-srv-01
    - Custom hostname, embedded key, default control server

  ./SockTail shellbox-7 tskey-auth-1fXXXXXXXXXXXXXXXXXXXXXXXXXX
    - Custom hostname and runtime auth key, default control server

  ./SockTail my-proxy tskey-auth-1fXXXXXXXXXXXXXXXXXXXXXXXXXX https://headscale.example.com
    - All custom: hostname, auth key, and control server (e.g., Headscale)
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2025-10-03
- **Estrellas en GitHub:** 576
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa SockTail únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Yeeb1/SockTail
- Toolkit de origen: Red Teaming Toolkit
