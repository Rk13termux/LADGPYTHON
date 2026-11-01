---
title: "DueDLLigence: Shellcode runner framework for application whitelisting bypasses and DLL side-lo"
slug: "duedlligence"
summary: "Shellcode runner framework for application whitelisting bypasses and DLL side-loading. The shellcode included in this project spawns calc.exe."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es DueDLLigence

DueDLLigence es una herramienta de seguridad ofensiva / red team. Shellcode runner framework for application whitelisting bypasses and DLL side-loading. The shellcode included in this project spawns calc.exe.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/fireeye/DueDLLigence](https://github.com/fireeye/DueDLLigence)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de DueDLLigence es shellcode runner framework for application whitelisting bypasses and dll side-loading. the shellcode included in this project spawns calc.exe.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/fireeye/DueDLLigence
cd duedlligence
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/fireeye/DueDLLigence
cd duedlligence

# Revisar ayuda
./duedlligence --help 2>/dev/null || python3 -m duedlligence --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa DueDLLigence únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/fireeye/DueDLLigence
- Toolkit de origen: Red Teaming Toolkit
