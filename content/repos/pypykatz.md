---
title: "pypykatz: Mimikatz implementation in pure Python. At least a part of it :)"
slug: "pypykatz"
summary: "Mimikatz implementation in pure Python. At least a part of it :)"
category: "python"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team', 'python']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es pypykatz

pypykatz es una herramienta de seguridad ofensiva / red team. Mimikatz implementation in pure Python. At least a part of it :)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/skelsec/pypykatz](https://github.com/skelsec/pypykatz)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de pypykatz es mimikatz implementation in pure python. at least a part of it :).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Install it via pip or by cloning it from github.  
The installer will create a pypykatz executable in the python's Script directory. You can run it from there, should be in your PATH.  
Take care, that the github master version might fail because I'm layz to do a proper branch for the new versions. I'll try to create a branch of stable version tho.

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/skelsec/pypykatz
cd pypykatz

# Revisar ayuda
./pypykatz --help 2>/dev/null || python3 -m pypykatz --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa pypykatz únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/skelsec/pypykatz
- Toolkit de origen: Red Teaming Toolkit
