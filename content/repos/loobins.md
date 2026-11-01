---
title: "LOOBins: Living Off the Orchard: macOS Binaries (LOOBins) is designed to provide detailed"
slug: "loobins"
summary: "Living Off the Orchard: macOS Binaries (LOOBins) is designed to provide detailed information on various built-in macOS binaries and how they can be used by threat actors for malicious purposes."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'living-off-the-living-off-the-land', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LOOBins

LOOBins es una herramienta de seguridad ofensiva / red team. Living Off the Orchard: macOS Binaries (LOOBins) is designed to provide detailed information on various built-in macOS binaries and how they can be used by threat actors for malicious purposes.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://www.loobins.io/](https://www.loobins.io/)
- **Sección del toolkit:** Miscellaneous → Living Off the Living Off the Land

## Objetivo y función

El objetivo principal de LOOBins es living off the orchard: macos binaries (loobins) is designed to provide detailed information on various built-in macos binaries and how they can be used by threat actors for malicious purposes.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://www.loobins.io/
cd loobins
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://www.loobins.io/
cd loobins

# Revisar ayuda
./loobins --help 2>/dev/null || python3 -m loobins --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa LOOBins únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://www.loobins.io/
- Toolkit de origen: Red Teaming Toolkit
