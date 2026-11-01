---
title: "AdaptixC2: Adaptix is an extensible post-exploitation and adversarial emulation framework m"
slug: "adaptixc2"
summary: "Adaptix is an extensible post-exploitation and adversarial emulation framework made for penetration testers. The Adaptix server is written in Golang and to allow operator flexibility."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AdaptixC2

AdaptixC2 es una herramienta de seguridad ofensiva / red team. Adaptix is an extensible post-exploitation and adversarial emulation framework made for penetration testers. The Adaptix server is written in Golang and to allow operator flexibility.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Adaptix-Framework/AdaptixC2](https://github.com/Adaptix-Framework/AdaptixC2)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de AdaptixC2 es adaptix is an extensible post-exploitation and adversarial emulation framework made for penetration testers. the adaptix server is written in golang and to allow operator flexibility.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Please checkout the [wiki](https://adaptix-framework.gitbook.io/adaptix-framework/adaptix-c2/getting-starting/installation).

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Adaptix-Framework/AdaptixC2
cd adaptixc2

# Revisar ayuda
./adaptixc2 --help 2>/dev/null || python3 -m adaptixc2 --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa AdaptixC2 únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Adaptix-Framework/AdaptixC2
- Toolkit de origen: Red Teaming Toolkit
