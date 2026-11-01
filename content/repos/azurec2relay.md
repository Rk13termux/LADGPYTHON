---
title: "AzureC2Relay: AzureC2Relay is an Azure Function that validates and relays Cobalt Strike beacon"
slug: "azurec2relay"
summary: "AzureC2Relay is an Azure Function that validates and relays Cobalt Strike beacon traffic by verifying the incoming requests based on a Cobalt Strike Malleable C2 profile."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AzureC2Relay

AzureC2Relay es una herramienta de seguridad ofensiva / red team. AzureC2Relay is an Azure Function that validates and relays Cobalt Strike beacon traffic by verifying the incoming requests based on a Cobalt Strike Malleable C2 profile.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/AzureC2Relay](https://github.com/Flangvik/AzureC2Relay)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de AzureC2Relay es azurec2relay is an azure function that validates and relays cobalt strike beacon traffic by verifying the incoming requests based on a cobalt strike malleable c2 profile.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Flangvik/AzureC2Relay
cd azurec2relay
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/AzureC2Relay
cd azurec2relay

# Revisar ayuda
./azurec2relay --help 2>/dev/null || python3 -m azurec2relay --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa AzureC2Relay únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/AzureC2Relay
- Toolkit de origen: Red Teaming Toolkit
