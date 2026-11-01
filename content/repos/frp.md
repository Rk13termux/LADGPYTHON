---
title: "frp: frp is a fast reverse proxy that allows you to expose a local server located beh"
slug: "frp"
summary: "frp is a fast reverse proxy that allows you to expose a local server located behind a NAT or firewall to the Internet."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'tunneling', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es frp

frp es una herramienta de seguridad ofensiva / red team. frp is a fast reverse proxy that allows you to expose a local server located behind a NAT or firewall to the Internet.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/fatedier/frp](https://github.com/fatedier/frp)
- **Sección del toolkit:** Lateral Movement → Tunneling

## Objetivo y función

El objetivo principal de frp es frp is a fast reverse proxy that allows you to expose a local server located behind a nat or firewall to the internet.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

To begin, download the latest program for your operating system and architecture from the [Release](https://github.com/fatedier/frp/releases) page.

Next, place the `frps` binary and server configuration file on Server A, which has a public IP address.

Finally, place the `frpc` binary and client configuration file on Server B, which is located on a LAN that cannot be directly accessed from the public internet.

Some antiviruses improperly mark frpc as malware and delete it. This is due to frp being a networking tool capable of creating reverse proxies. Antiviruses sometimes flag reverse proxies due to their ability to bypass firewall port restrictions. If you are using antivirus, then you may need to whitelist/exclude frpc in your antivirus settings to avoid accidental quarantine/deletion. See [issue 3637](https://github.com/fatedier/frp/issues/3637) for more details.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/fatedier/frp
cd frp

# Revisar ayuda
./frp --help 2>/dev/null || python3 -m frp --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa frp únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/fatedier/frp
- Toolkit de origen: Red Teaming Toolkit
