---
title: "Mythic: A cross-platform, post-exploit, red teaming framework built with python3, docker"
slug: "mythic"
summary: "A cross-platform, post-exploit, red teaming framework built with python3, docker, docker-compose, and a web browser UI."
category: "python"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team', 'python']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Mythic

Mythic es una herramienta de seguridad ofensiva / red team. A cross-platform, post-exploit, red teaming framework built with python3, docker, docker-compose, and a web browser UI.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/its-a-feature/Mythic](https://github.com/its-a-feature/Mythic)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de Mythic es a cross-platform, post-exploit, red teaming framework built with python3, docker, docker-compose, and a web browser ui.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

The Mythic repository itself does not host any Payload Types or any C2 Profiles. Instead, Mythic provides a command, `./mythic-cli install github <url> [-b branch name] [-f]`, that can be used to install agents into a current Mythic instance.

Payload Types and C2 Profiles can be found on the [overview](https://mythicmeta.github.io/overview) page.

To install an agent, simply run the script and provide an argument of the path to the agent on GitHub:
```bash
sudo ./mythic-cli install github https://github.com/MythicAgents/apfell
```

The same is true for installing C2 Profiles:
```bash
sudo ./mythic-cli install github https://github.com/MythicC2Profiles/http
```

This allows the agents and c2 profiles to be updated at a much more regular pace and separates out the Mythic Core components from the rest of Mythic.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/its-a-feature/Mythic
cd mythic

# Revisar ayuda
./mythic --help 2>/dev/null || python3 -m mythic --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Mythic únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/its-a-feature/Mythic
- Toolkit de origen: Red Teaming Toolkit
