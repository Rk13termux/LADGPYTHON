---
title: "Gophish: Gophish is an open-source phishing toolkit designed for businesses and penetrati"
slug: "gophish"
summary: "Gophish is an open-source phishing toolkit designed for businesses and penetration testers. It provides the ability to quickly and easily setup and execute phishing engagements and security awareness training."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['delivery', 'phishing', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Gophish

Gophish es una herramienta de seguridad ofensiva / red team. Gophish is an open-source phishing toolkit designed for businesses and penetration testers. It provides the ability to quickly and easily setup and execute phishing engagements and security awareness training.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/gophish/gophish](https://github.com/gophish/gophish)
- **Sección del toolkit:** Delivery → Phishing

## Objetivo y función

El objetivo principal de Gophish es gophish is an open-source phishing toolkit designed for businesses and penetration testers. it provides the ability to quickly and easily setup and execute phishing engagements and security awareness training.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Installation of Gophish is dead-simple - just download and extract the zip containing the [release for your system](https://github.com/gophish/gophish/releases/), and run the binary. Gophish has binary releases for Windows, Mac, and Linux platforms.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/gophish/gophish
cd gophish

# Revisar ayuda
./gophish --help 2>/dev/null || python3 -m gophish --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Gophish únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/gophish/gophish
- Toolkit de origen: Red Teaming Toolkit
