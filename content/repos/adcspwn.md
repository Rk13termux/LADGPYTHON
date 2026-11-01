---
title: "ADCSPwn: A tool to escalate privileges in an active directory network by coercing authent"
slug: "adcspwn"
summary: "A tool to escalate privileges in an active directory network by coercing authenticate from machine accounts (Petitpotam) and relaying to the certificate service."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ADCSPwn

ADCSPwn es una herramienta de seguridad ofensiva / red team. A tool to escalate privileges in an active directory network by coercing authenticate from machine accounts (Petitpotam) and relaying to the certificate service.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/bats3c/ADCSPwn](https://github.com/bats3c/ADCSPwn)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de ADCSPwn es a tool to escalate privileges in an active directory network by coercing authenticate from machine accounts (petitpotam) and relaying to the certificate service.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Run `ADCSPwn` on your target network.

```
Author: @_batsec_ - MDSec ActiveBreach
Contributor: @Flangvik -  TrustedSec
Contributor: @424f424f -  Black Hills Information Security

adcspwn.exe --adcs <cs server> --port [local port] --remote [computer]

Required arguments:
adcs            -       This is the address of the AD CS server which authentication will be relayed to.

Optional arguments:
secure          -       Use HTTPS with the certificate service.
port            -       The port ADCSPwn will listen on.
remote          -       Remote machine to trigger authentication from.
username        -       Username for non-domain context.
password        -       Password for non-domain context.
dc              -       Domain controller to query for Certificate Templates (LDAP).
unc             -       Set custom UNC callback path for EfsRpcOpenFileRaw (Petitpotam) .
output          -       Output path to store base64 generated crt.

Example usage:
adcspwn.exe --adcs cs.pwnlab.local
adcspwn.exe --adcs cs.pwnlab.local --secure
adcspwn.exe --adcs cs.pwnlab.local --port 9001
adcspwn.exe --adcs cs.pwnlab.local --remote dc.pwnlab.local
adcspwn.exe --adcs cs.pwnlab.local --remote dc.pwnlab.local --port 9001
adcspwn.exe --adcs cs.pwnlab.local --remote dc.pwnlab.local --output C:\Temp\cert_b64.txt
adcspwn.exe --adcs cs.pwnlab.local --remote dc.pwnlab.local --username pwnlab.local\mranderson --password The0nly0ne! --dc dc.pwnlab.local
adcspwn.exe --adcs cs.pwnlab.local --remote dc.pwnla
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/bats3c/ADCSPwn
cd adcspwn

# Revisar ayuda
./adcspwn --help 2>/dev/null || python3 -m adcspwn --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ADCSPwn únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/bats3c/ADCSPwn
- Toolkit de origen: Red Teaming Toolkit
