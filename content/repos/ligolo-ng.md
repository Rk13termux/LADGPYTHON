---
title: "ligolo-ng: An advanced, yet simple, tunneling tool that uses a TUN interface"
slug: "ligolo-ng"
summary: "An advanced, yet simple, tunneling tool that uses a TUN interface."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'tunneling', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ligolo-ng

ligolo-ng es una herramienta de seguridad ofensiva / red team. An advanced, yet simple, tunneling tool that uses a TUN interface.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/nicocha30/ligolo-ng](https://github.com/nicocha30/ligolo-ng)
- **Sección del toolkit:** Lateral Movement → Tunneling

## Objetivo y función

El objetivo principal de ligolo-ng es an advanced, yet simple, tunneling tool that uses a tun interface.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/nicocha30/ligolo-ng
cd ligolo-ng
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/nicocha30/ligolo-ng
cd ligolo-ng

# Revisar ayuda
./ligolo-ng --help 2>/dev/null || python3 -m ligolo-ng --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ligolo-ng únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/nicocha30/ligolo-ng
- Toolkit de origen: Red Teaming Toolkit
