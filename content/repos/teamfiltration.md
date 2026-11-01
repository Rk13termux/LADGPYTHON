---
title: "TeamFiltration: TeamFiltration is a cross-platform framework for enumerating, spraying, exfiltra"
slug: "teamfiltration"
summary: "TeamFiltration is a cross-platform framework for enumerating, spraying, exfiltrating, and backdooring O365 AAD accounts."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TeamFiltration

TeamFiltration es una herramienta de seguridad ofensiva / red team. TeamFiltration is a cross-platform framework for enumerating, spraying, exfiltrating, and backdooring O365 AAD accounts.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/TeamFiltration](https://github.com/Flangvik/TeamFiltration)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de TeamFiltration es teamfiltration is a cross-platform framework for enumerating, spraying, exfiltrating, and backdooring o365 aad accounts.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```

  ╔╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╗
 ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬┤                              ╠╬╬╝╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬╣                              │      ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬╣                              ││      ╚╬╬╝╚ └╚╝╬╬╬╬╬╬
╬╬╬╬╣         ╔╦╦╬╬╬╬╬╬╦╦╗         ││       │        ╬╬╬╬╬
╬╬╬╬╣     ╔╬╬╬╝╝┘      ╚╝╝╬╬╬┐     ││       ││       └╬╬╬╬
╬╬╬╬┤    ╬╬╝╚╩╬╗╔          ╚╬╬╬    ││       ││        ╬╬╬╬
╬╬╬╬┤   ╬╝      ╚╬╬╗╗ ╔      ╚╬╗   ││      ├││        ╬╬╬╬
╬╬╬╬┤  ╬╬     ╔╗   ╚╬╬╬╬╬╬╦    ╬╬  │┌    ╔╬┤││       ╔╬╬╬╬
╬╬╬╬┤ ╔╬┤     ╬╬╬   ╬╬╬╬╬╬╬╬╝╝╝╬╬╗ ╠╬╬╬╬╬╬╬╬╬╗      ┌╬╬╬╬╬
╬╬╬╬┤ ╬╬┤     ╚╩┘   ╚╬╬╬╬╬╩    ╠╬╬ ╚╝╝╝╝╝╝╝╝╝╬╬╗╗╗╦╬╬╬╬╬╬╬
╬╬╬╬┤ ╬╬┤                      ╠╬╬ ││         ╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬┤  ╬╬   ╦╗            ╗╗   ╬╬  ││         │       ╬╬╬╬
╬╬╬╬┤  └╬┐   ╚╬╗╗      ╔╬╬╝   ╔╬┘  ││         │       ╬╬╬╬
╬╬╬╬┤   └╬╗    ╚╩╩╬╬╬╩╩╝╝   ╔╬╬    ││         │       ╬╬╬╬
╬╬╬╬┤    ╚╬╬╬╗           ┌╗╬╬╝┘    ││         │       ╬╬╬╬
╬╬╬╬┤       ╚╩╬╬╬╦╦╦╦╦╦╬╬╬╝╝       ││         │       ╬╬╬╬
╬╬╬╬┤            ╚╚╝╝╝╝            ││         │       ╬╬╬╬
╬╬╬╬┤                              ││         │    ╔╗╬╬╬╬╬
╬╬╬╬┤                              ││         ╬╦╦╬╬╬╬╬╬╬╬╬
╬╬╬╬┤                              ││     ╔╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬┤                              ╬╬╬╗╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
 └╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╝
   ╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝╝
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/TeamFiltration
cd teamfiltration

# Revisar ayuda
./teamfiltration --help 2>/dev/null || python3 -m teamfiltration --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa TeamFiltration únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/TeamFiltration
- Toolkit de origen: Red Teaming Toolkit
