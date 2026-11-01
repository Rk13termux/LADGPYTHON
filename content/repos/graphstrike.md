---
title: "GraphStrike: Cobalt Strike HTTPS beaconing over Microsoft Graph API"
slug: "graphstrike"
summary: "Cobalt Strike HTTPS beaconing over Microsoft Graph API"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GraphStrike

GraphStrike es una herramienta de seguridad ofensiva / red team. Cobalt Strike HTTPS beaconing over Microsoft Graph API

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/RedSiege/GraphStrike](https://github.com/RedSiege/GraphStrike)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de GraphStrike es cobalt strike https beaconing over microsoft graph api.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

GraphStrike requires the following before you get started:  
1. A Microsoft Azure tenant with a SharePoint/O365 license assigned + site created. The default site is fine.
2. An Azure account with Global Administrator permissions in that tenant.  
3. Python 3.8-3.11<sup>[Note #4](#notes)</sup> (and additional dependencies that will be installed during the setup process)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/RedSiege/GraphStrike
cd graphstrike

# Revisar ayuda
./graphstrike --help 2>/dev/null || python3 -m graphstrike --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa GraphStrike únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/RedSiege/GraphStrike
- Toolkit de origen: Red Teaming Toolkit
