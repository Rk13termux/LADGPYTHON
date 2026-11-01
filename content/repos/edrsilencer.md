---
title: "EDRSilencer: A tool uses Windows Filtering Platform (WFP) to block Endpoint Detection and Res"
slug: "edrsilencer"
summary: "A tool uses Windows Filtering Platform (WFP) to block Endpoint Detection and Response (EDR) agents from reporting security events to the server"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es EDRSilencer

EDRSilencer es una herramienta de seguridad ofensiva / red team. A tool uses Windows Filtering Platform (WFP) to block Endpoint Detection and Response (EDR) agents from reporting security events to the server

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/netero1010/EDRSilencer](https://github.com/netero1010/EDRSilencer)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de EDRSilencer es a tool uses windows filtering platform (wfp) to block endpoint detection and response (edr) agents from reporting security events to the server.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
Usage: EDRSilencer.exe <blockedr/block/unblockall/unblock>
- Add WFP filters to block the IPv4 and IPv6 outbound traffic of all detected EDR processes:
  EDRSilencer.exe blockedr

- Add WFP filters to block the IPv4 and IPv6 outbound traffic of a specific process (full path is required):
  EDRSilencer.exe block "C:\Windows\System32\curl.exe"

- Remove all WFP filters applied by this tool:
  EDRSilencer.exe unblockall

- Remove a specific WFP filter based on filter id:
  EDRSilencer.exe unblock <filter id>
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/netero1010/EDRSilencer
cd edrsilencer

# Revisar ayuda
./edrsilencer --help 2>/dev/null || python3 -m edrsilencer --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa EDRSilencer únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/netero1010/EDRSilencer
- Toolkit de origen: Red Teaming Toolkit
