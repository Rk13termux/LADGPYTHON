---
title: "Koh: Koh is a C# and Beacon Object File (BOF) toolset that allows for the capture of "
slug: "koh"
summary: "Koh is a C# and Beacon Object File (BOF) toolset that allows for the capture of user credential material via purposeful token/logon session leakage."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Koh

Koh es una herramienta de seguridad ofensiva / red team. Koh is a C# and Beacon Object File (BOF) toolset that allows for the capture of user credential material via purposeful token/logon session leakage.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GhostPack/Koh](https://github.com/GhostPack/Koh)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de Koh es koh is a c# and beacon object file (bof) toolset that allows for the capture of user credential material via purposeful token/logon session leakage.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

`Koh.exe Koh.exe <list | monitor | capture> [GroupSID... GroupSID2 ...]`

* **list** - lists (non-network) logon sessions
* **monitor** - monitors for new/unique (non-network) logon sessions
* **capture** - captures one unique token per SID found for new (non-network) logon sessions

Group SIDs can be supplied command line as well, causing Koh to monitor/capture only logon sessions that contain the specified group SIDs in their negotiated token information.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GhostPack/Koh
cd koh

# Revisar ayuda
./koh --help 2>/dev/null || python3 -m koh --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Koh únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GhostPack/Koh
- Toolkit de origen: Red Teaming Toolkit
