---
title: "reGeorg: The successor to reDuh, pwn a bastion webserver and create SOCKS proxies through"
slug: "regeorg"
summary: "The successor to reDuh, pwn a bastion webserver and create SOCKS proxies through the DMZ. Pivot and pwn."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es reGeorg

reGeorg es una herramienta de seguridad ofensiva / red team. The successor to reDuh, pwn a bastion webserver and create SOCKS proxies through the DMZ. Pivot and pwn.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/sensepost/reGeorg](https://github.com/sensepost/reGeorg)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de reGeorg es the successor to reduh, pwn a bastion webserver and create socks proxies through the dmz. pivot and pwn.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/sensepost/reGeorg
cd regeorg
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/sensepost/reGeorg
cd regeorg

# Revisar ayuda
./regeorg --help 2>/dev/null || python3 -m regeorg --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa reGeorg únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/sensepost/reGeorg
- Toolkit de origen: Red Teaming Toolkit
