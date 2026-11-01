---
title: "A Black Path Toward The Sun: (TCP tunneling over HTTP for web application servers)"
slug: "a-black-path-toward-the-sun"
summary: "(TCP tunneling over HTTP for web application servers)"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es A Black Path Toward The Sun

A Black Path Toward The Sun es una herramienta de seguridad ofensiva / red team. (TCP tunneling over HTTP for web application servers)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/nccgroup/ABPTTS](https://github.com/nccgroup/ABPTTS)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de A Black Path Toward The Sun es (tcp tunneling over http for web application servers).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/nccgroup/ABPTTS
cd a-black-path-toward-the-sun
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/nccgroup/ABPTTS
cd a-black-path-toward-the-sun

# Revisar ayuda
./a-black-path-toward-the-sun --help 2>/dev/null || python3 -m a_black_path_toward_the_sun --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa A Black Path Toward The Sun únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/nccgroup/ABPTTS
- Toolkit de origen: Red Teaming Toolkit
