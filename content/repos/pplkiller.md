---
title: "PPLKiller: Tool to bypass LSA Protection (aka Protected Process Light)"
slug: "pplkiller"
summary: "Tool to bypass LSA Protection (aka Protected Process Light)"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PPLKiller

PPLKiller es una herramienta de seguridad ofensiva / red team. Tool to bypass LSA Protection (aka Protected Process Light)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/RedCursorSecurityConsulting/PPLKiller](https://github.com/RedCursorSecurityConsulting/PPLKiller)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de PPLKiller es tool to bypass lsa protection (aka protected process light).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Open PPLKiller.sln with Visual Studio 2019 and build a Release binary which will be saved in PPLKiller\x64\Release\PPLKiller.exe
2. You'll always want to run `PPLKiller.exe /installDriver` first to install the driver
3. Run an attack like `PPLKiller.exe /disableLSAProtection` 
4. Cleanup with `PPLKiller.exe /uninstallDriver`

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/RedCursorSecurityConsulting/PPLKiller
cd pplkiller

# Revisar ayuda
./pplkiller --help 2>/dev/null || python3 -m pplkiller --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa PPLKiller únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/RedCursorSecurityConsulting/PPLKiller
- Toolkit de origen: Red Teaming Toolkit
