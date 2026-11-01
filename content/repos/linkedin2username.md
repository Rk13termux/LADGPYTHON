---
title: "linkedin2username: OSINT Tool: Generate username lists for companies on LinkedIn"
slug: "linkedin2username"
summary: "OSINT Tool: Generate username lists for companies on LinkedIn"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es linkedin2username

linkedin2username es una herramienta de seguridad ofensiva / red team. OSINT Tool: Generate username lists for companies on LinkedIn

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/initstring/linkedin2username](https://github.com/initstring/linkedin2username)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de linkedin2username es osint tool: generate username lists for companies on linkedin.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
usage: linkedin2username.py [-h] -c COMPANY [-n DOMAIN] [-d DEPTH]
  [-s SLEEP] [-x PROXY] [-k KEYWORDS] [-g] [-o OUTPUT]

OSINT tool to generate lists of probable usernames from a given company's LinkedIn page.
This tool may break when LinkedIn changes their site.
Please open issues on GitHub to report any inconsistencies.

optional arguments:
  -h, --help            show this help message and exit
  -c COMPANY, --company COMPANY
                        Company name exactly as typed in the company linkedin profile page URL.
  -n DOMAIN, --domain DOMAIN
                        Append a domain name to username output.
                        [example: "-n targetco.com" would output jschmoe@targetco.com]
  -d DEPTH, --depth DEPTH
                        Search depth (how many loops of 25). If unset, will try to grab them
                        all.
  -s SLEEP, --sleep SLEEP
                        Seconds to sleep between search loops. Defaults to 0.
  -x PROXY, --proxy PROXY
                        Proxy server to use. WARNING: WILL DISABLE SSL VERIFICATION.
                        [example: "-p https://localhost:8080"]
  -k KEYWORDS, --keywords KEYWORDS
                        Filter results by a a list of command separated keywords.
                        Will do a separate loop for each keyword,
                        potentially bypassing the 1,000 record limit. 
                        [example: "-k 'sales,human resources,information technology']
  -g, --geoblast  
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/initstring/linkedin2username
cd linkedin2username

# Revisar ayuda
./linkedin2username --help 2>/dev/null || python3 -m linkedin2username --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa linkedin2username únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/initstring/linkedin2username
- Toolkit de origen: Red Teaming Toolkit
