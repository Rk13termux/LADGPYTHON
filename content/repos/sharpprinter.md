---
title: "SharpPrinter: Printer is a modified and console version of ListNetworks"
slug: "sharpprinter"
summary: "Printer is a modified and console version of ListNetworks"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpPrinter

SharpPrinter es una herramienta de seguridad ofensiva / red team. Printer is a modified and console version of ListNetworks

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/rvrsh3ll/SharpPrinter](https://github.com/rvrsh3ll/SharpPrinter)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de SharpPrinter es printer is a modified and console version of listnetworks.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

beacon>execute-assembly /root/SharpPrinter/SharpPrinter.exe


![Example](https://raw.githubusercontent.com/rvrsh3ll/SharpPrinter/master/example/SharpPrinter_Example.png)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/rvrsh3ll/SharpPrinter
cd sharpprinter

# Revisar ayuda
./sharpprinter --help 2>/dev/null || python3 -m sharpprinter --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpPrinter únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/rvrsh3ll/SharpPrinter
- Toolkit de origen: Red Teaming Toolkit
