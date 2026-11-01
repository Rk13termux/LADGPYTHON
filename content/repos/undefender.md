---
title: "unDefender: Killing your preferred antimalware by abusing native symbolic links and NT paths"
slug: "undefender"
summary: "Killing your preferred antimalware by abusing native symbolic links and NT paths."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es unDefender

unDefender es una herramienta de seguridad ofensiva / red team. Killing your preferred antimalware by abusing native symbolic links and NT paths.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/APTortellini/unDefender](https://github.com/APTortellini/unDefender)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de unDefender es killing your preferred antimalware by abusing native symbolic links and nt paths.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/APTortellini/unDefender
cd undefender
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/APTortellini/unDefender
cd undefender

# Revisar ayuda
./undefender --help 2>/dev/null || python3 -m undefender --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa unDefender únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/APTortellini/unDefender
- Toolkit de origen: Red Teaming Toolkit
