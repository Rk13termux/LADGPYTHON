---
title: "CrossC2: Generate CobaltStrike's cross-platform payload"
slug: "crossc2"
summary: "Generate CobaltStrike's cross-platform payload"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CrossC2

CrossC2 es una herramienta de seguridad ofensiva / red team. Generate CobaltStrike's cross-platform payload

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/gloxec/CrossC2](https://github.com/gloxec/CrossC2)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de CrossC2 es generate cobaltstrike's cross-platform payload.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

> Download:

* **CrossC2.cna**
* **genCrossC2** `(If it is a Windows system, download genCrossC2.Win.exe)`

1. choose `Script Manager`，add `CrossC2.cna` (If successfully installed, the menu bar will have an additional item `CrossC2`)
2. Modify the `genCC2` path in the` CrossC2.cna` script to the **real path**

```
77:    $genCC2 = "/xxx/xx/xx/genCrossC2.MacOS";  # <-------- fix
```

> Create listener and copy key:

For some reasons, only HTTPS beacon is currently supported.

**Copy `.cobaltstrike.beacon_keys` from the cs directory on the server to the local directory.**

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/gloxec/CrossC2
cd crossc2

# Revisar ayuda
./crossc2 --help 2>/dev/null || python3 -m crossc2 --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa CrossC2 únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/gloxec/CrossC2
- Toolkit de origen: Red Teaming Toolkit
