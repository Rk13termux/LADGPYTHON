---
title: "kerbrute: A tool to quickly bruteforce and enumerate valid Active Directory accounts throu"
slug: "kerbrute"
summary: "A tool to quickly bruteforce and enumerate valid Active Directory accounts through Kerberos Pre-Authentication"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es kerbrute

kerbrute es una herramienta de seguridad ofensiva / red team. A tool to quickly bruteforce and enumerate valid Active Directory accounts through Kerberos Pre-Authentication

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/ropnop/kerbrute](https://github.com/ropnop/kerbrute)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de kerbrute es a tool to quickly bruteforce and enumerate valid active directory accounts through kerberos pre-authentication.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Kerbrute has three main commands:
 * **bruteuser** - Bruteforce a single user's password from a wordlist
 * **bruteforce** - Read username:password combos from a file or stdin and test them
 * **passwordspray** - Test a single password against a list of users
 * **userenum** - Enumerate valid domain usernames via Kerberos

A domain (`-d`) or a domain controller (`--dc`) must be specified. If a Domain Controller is not given the KDC will be looked up via DNS.

By default, Kerbrute is multithreaded and uses 10 threads. This can be changed with the `-t` option.

Output is logged to stdout, but a log file can be specified with `-o`.

By default, failures are not logged, but that can be changed with `-v`.

Lastly, Kerbrute has a `--safe` option. When this option is enabled, if an account comes back as locked out, it will abort all threads to stop locking out any other accounts.

The `help` command can be used for more information

```
$ ./kerbrute -h

    __             __               __
   / /_____  _____/ /_  _______  __/ /____
  / //_/ _ \/ ___/ __ \/ ___/ / / / __/ _ \
 / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/
/_/|_|\___/_/  /_.___/_/   \__,_/\__/\___/

Version: dev (bc1d606) - 11/15/20 - Ronnie Flathers @ropnop

This tool is designed to assist in quickly bruteforcing valid Active Directory accounts through Kerberos Pre-Authentication.
It is designed to be used on an internal Windows domain with access to one of the Domain Controllers.
Warning: failed Kerberos Pre-Auth cou
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/ropnop/kerbrute
cd kerbrute

# Revisar ayuda
./kerbrute --help 2>/dev/null || python3 -m kerbrute --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa kerbrute únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/ropnop/kerbrute
- Toolkit de origen: Red Teaming Toolkit
