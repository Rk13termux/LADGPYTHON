---
title: "SharpLAPS: Retrieve LAPS password from LDAP"
slug: "sharplaps"
summary: "Retrieve LAPS password from LDAP"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpLAPS

SharpLAPS es una herramienta de seguridad ofensiva / red team. Retrieve LAPS password from LDAP

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/swisskyrepo/SharpLAPS](https://github.com/swisskyrepo/SharpLAPS)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de SharpLAPS es retrieve laps password from ldap.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
  _____ __                     __    ___    ____  _____
  / ___// /_  ____ __________  / /   /   |  / __ \/ ___/
  \__ \/ __ \/ __ `/ ___/ __ \/ /   / /| | / /_/ /\__ \
 ___/ / / / / /_/ / /  / /_/ / /___/ ___ |/ ____/___/ /
/____/_/ /_/\__,_/_/  / .___/_____/_/  |_/_/    /____/
                     /_/
Required
/host:<1.1.1.1>  LDAP host to target, most likely the DC

Optional
/user:<username> Username of the account
/pass:<password> Password of the account
/out:<file>      Outputting credentials to file
/ssl             Enable SSL (LDAPS://)

Usage: SharpLAPS.exe /user:DOMAIN\User /pass:MyP@ssw0rd123! /host:192.168.1.1
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/swisskyrepo/SharpLAPS
cd sharplaps

# Revisar ayuda
./sharplaps --help 2>/dev/null || python3 -m sharplaps --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpLAPS únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/swisskyrepo/SharpLAPS
- Toolkit de origen: Red Teaming Toolkit
