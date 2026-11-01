---
title: "AttackSurfaceMapper: AttackSurfaceMapper is a tool that aims to automate the reconnaissance process"
slug: "attacksurfacemapper"
summary: "AttackSurfaceMapper is a tool that aims to automate the reconnaissance process."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AttackSurfaceMapper

AttackSurfaceMapper es una herramienta de seguridad ofensiva / red team. AttackSurfaceMapper is a tool that aims to automate the reconnaissance process.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/superhedgy/AttackSurfaceMapper](https://github.com/superhedgy/AttackSurfaceMapper)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de AttackSurfaceMapper es attacksurfacemapper is a tool that aims to automate the reconnaissance process.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

As this is a Python based tool, it should theoretically run on Linux, ChromeOS ([Developer Mode](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/generic)), macOS and Windows.

1. Download AttackSurfaceMapper

```sh
git clone https://github.com/superhedgy/AttackSurfaceMapper
cd AttackSurfaceMapper
```

2. Install Python3 dependencies

```sh
python3 -m pip install --no-cache-dir -r requirements.txt
```

3. Add optional API keys to enhance data gathering & analysis

Register and obtain an API key from:

- [VirusTotal](https://www.virustotal.com/gui/join-us)
- [Shodan.io](https://account.shodan.io/register)
- [Hunter.io](https://hunter.io/users/sign_up)
- ~~[WeLeakInfo](https://weleakinfo.com/register)~~
- [LinkedIn](https://www.linkedin.com/start/join)
- [GrayHatWarfare](https://buckets.grayhatwarfare.com/register)
- [Censys.io](https://search.censys.io/account)

Edit and enter the keys in keylist file

```sh
nano keylist.asm
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/superhedgy/AttackSurfaceMapper
cd attacksurfacemapper

# Revisar ayuda
./attacksurfacemapper --help 2>/dev/null || python3 -m attacksurfacemapper --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa AttackSurfaceMapper únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/superhedgy/AttackSurfaceMapper
- Toolkit de origen: Red Teaming Toolkit
