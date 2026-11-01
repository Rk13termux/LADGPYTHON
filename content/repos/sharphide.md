---
title: "SharpHide: Tool to create hidden registry keys"
slug: "sharphide"
summary: "Tool to create hidden registry keys."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpHide

SharpHide es una herramienta de seguridad ofensiva / red team. Tool to create hidden registry keys.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/outflanknl/SharpHide](https://github.com/outflanknl/SharpHide)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de SharpHide es tool to create hidden registry keys.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

To Create hidden registry (Run) key:

```
SharpHide.exe action=create keyvalue="C:\Windows\Temp\Bla.exe" 
```

To Create a hidden registry (Run) key with parameters:

```
SharpHide.exe action=create keyvalue="C:\Windows\Temp\Bla.exe" arguments="arg1 arg2"
```

Delete hidden registry (Run) key:

```
SharpHide.exe action=delete
```

This tool also works with Cobalt Strike's execute-assembly.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/outflanknl/SharpHide
cd sharphide

# Revisar ayuda
./sharphide --help 2>/dev/null || python3 -m sharphide --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpHide únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/outflanknl/SharpHide
- Toolkit de origen: Red Teaming Toolkit
