---
title: "CobaltBus: Cobalt Strike External C2 Integration With Azure Servicebus, C2 traffic via Azur"
slug: "cobaltbus"
summary: "Cobalt Strike External C2 Integration With Azure Servicebus, C2 traffic via Azure Servicebus"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CobaltBus

CobaltBus es una herramienta de seguridad ofensiva / red team. Cobalt Strike External C2 Integration With Azure Servicebus, C2 traffic via Azure Servicebus

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/CobaltBus](https://github.com/Flangvik/CobaltBus)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de CobaltBus es cobalt strike external c2 integration with azure servicebus, c2 traffic via azure servicebus.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Create an Azure Service Bus 
2. Create a Shared access policy (Connection string) that can only Send and Listen
3. Edit the static connectionString variable in Beacon C# projects to match the "Primary Connection String" value for the Shared access policy created in step 2. 
4. The same variables need to be updated for the CobaltBus project, but the "Primary Connection String" for the "RootManageSharedAccessKey" Shared access policy must be used. (Needs the "manage" permission)
5. Setup Cobalt and start en External C2 listener on port 4444, 127.0.0.1 (can be changed by editing the ExternalC2Port ExternalC2Ip vars in the C# project)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/CobaltBus
cd cobaltbus

# Revisar ayuda
./cobaltbus --help 2>/dev/null || python3 -m cobaltbus --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa CobaltBus únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/CobaltBus
- Toolkit de origen: Red Teaming Toolkit
