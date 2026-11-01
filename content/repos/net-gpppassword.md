---
title: "Net-GPPPassword: .NET implementation of Get-GPPPassword. Retrieves the plaintext password and oth"
slug: "net-gpppassword"
summary: ".NET implementation of Get-GPPPassword. Retrieves the plaintext password and other information for accounts pushed through Group Policy Preferences."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Net-GPPPassword

Net-GPPPassword es una herramienta de seguridad ofensiva / red team. .NET implementation of Get-GPPPassword. Retrieves the plaintext password and other information for accounts pushed through Group Policy Preferences.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/Net-GPPPassword](https://github.com/outflanknl/Net-GPPPassword)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de Net-GPPPassword es .net implementation of get-gpppassword. retrieves the plaintext password and other information for accounts pushed through group policy preferences.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Net-GPPPassword.exe [ADdomain (optional)]

Also works with Cobalt Strike's execute-assembly.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/Net-GPPPassword
cd net-gpppassword

# Revisar ayuda
./net-gpppassword --help 2>/dev/null || python3 -m net-gpppassword --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Net-GPPPassword únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/Net-GPPPassword
- Toolkit de origen: Red Teaming Toolkit
