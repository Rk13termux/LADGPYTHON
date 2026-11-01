---
title: "KrbRelayUp: a universal no-fix local privilege escalation in windows domain environments whe"
slug: "krbrelayup"
summary: "a universal no-fix local privilege escalation in windows domain environments where LDAP signing is not enforced (the default settings)."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['privilege-escalation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es KrbRelayUp

KrbRelayUp es una herramienta de seguridad ofensiva / red team. a universal no-fix local privilege escalation in windows domain environments where LDAP signing is not enforced (the default settings).

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Dec0ne/KrbRelayUp](https://github.com/Dec0ne/KrbRelayUp)
- **Sección del toolkit:** Privilege Escalation 

## Objetivo y función

El objetivo principal de KrbRelayUp es a universal no-fix local privilege escalation in windows domain environments where ldap signing is not enforced (the default settings).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
KrbRelayUp - Relaying you to SYSTEM

FULL: Perform full attack chain. Options are identical to RELAY. Tool must be on disk.

RELAY: First phase of the attack. Will Coerce Kerberos auth from local machine account, relay it to LDAP and create a control primitive over the local machine using RBCD or SHADOWCRED.
Usage: KrbRelayUp.exe relay -d FQDN -cn COMPUTERNAME [-c] [-cp PASSWORD | -ch NTHASH]

    -m   (--Method)                   Abuse method to use in after a successful relay to LDAP <rbcd/shadowcred> (default=rbcd)
    -p   (--Port)                     Port for Com Server (default=12345)
    -cls (--Clsid)                    CLSID to use for coercing Kerberos auth from local machine account (default=90f18417-f0f1-484e-9d3c-59dceee5dbd8)

    # RBCD Method:
    -c   (--CreateNewComputerAccount) Create new computer account for RBCD. Will use the current authenticated user.
    -cn  (--ComputerName)             Name of attacker owned computer account for RBCD. (default=KRBRELAYUP$)
    -cp  (--ComputerPassword)         Password of computer account for RBCD. (default=RANDOM [if -c is enabled])

    # SHADOWCRED Method:
    -f   (--ForceShadowCred)          Clear the msDS-KeyCredentialLink attribute of the attacked computer account before adding our new shadow credentials. (Optional)

    # ADCS Method:
    -ca  (--CAEndpoint)               CA endpoint FQDN (default = same as DC)
    -https                            Connect to CA endpoint over secure HTTPS instead of HTTP)
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Dec0ne/KrbRelayUp
cd krbrelayup

# Revisar ayuda
./krbrelayup --help 2>/dev/null || python3 -m krbrelayup --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa KrbRelayUp únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Dec0ne/KrbRelayUp
- Toolkit de origen: Red Teaming Toolkit
