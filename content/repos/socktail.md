---
title: "SockTail: SockTail is a small binary that joins a device to a Tailscale network and expose"
slug: "socktail"
summary: "SockTail is a small binary that joins a device to a Tailscale network and exposes a local SOCKS5 proxy on port 1080. It's meant for red team operations where you need network access into a target system without setting up wonky port forwards, persistent daemons, or noisy tunnels."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'tunneling', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SockTail

SockTail es una herramienta de seguridad ofensiva / red team. SockTail is a small binary that joins a device to a Tailscale network and exposes a local SOCKS5 proxy on port 1080. It's meant for red team operations where you need network access into a target system without setting up wonky port forwards, persistent daemons, or noisy tunnels.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Yeeb1/SockTail](https://github.com/Yeeb1/SockTail)
- **Sección del toolkit:** Lateral Movement → Tunneling

## Objetivo y función

El objetivo principal de SockTail es socktail is a small binary that joins a device to a tailscale network and exposes a local socks5 proxy on port 1080. it's meant for red team operations where you need network access into a target system without setting up wonky port forwards, persistent daemons, or noisy tunnels.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
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

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Yeeb1/SockTail
cd socktail

# Revisar ayuda
./socktail --help 2>/dev/null || python3 -m socktail --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SockTail únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Yeeb1/SockTail
- Toolkit de origen: Red Teaming Toolkit
