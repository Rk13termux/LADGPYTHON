---
title: "NetLoader: Loads any C# binary from filepath or url, patching AMSI and bypassing Windows De"
slug: "netloader"
summary: "Loads any C# binary from filepath or url, patching AMSI and bypassing Windows Defender on runtime"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es NetLoader

NetLoader es una herramienta de seguridad ofensiva / red team. Loads any C# binary from filepath or url, patching AMSI and bypassing Windows Defender on runtime

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/NetLoader](https://github.com/Flangvik/NetLoader)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de NetLoader es loads any c# binary from filepath or url, patching amsi and bypassing windows defender on runtime.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/Flangvik/NetLoader
cd netloader
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/NetLoader
cd netloader

# Revisar ayuda
./netloader --help 2>/dev/null || python3 -m netloader --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa NetLoader únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/NetLoader
- Toolkit de origen: Red Teaming Toolkit
