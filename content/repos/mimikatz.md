---
title: "Mimikatz: Mimikatz is an open-source application that allows users to view and save authen"
slug: "mimikatz"
summary: "Mimikatz is an open-source application that allows users to view and save authentication credentials like Kerberos tickets."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Mimikatz

Mimikatz es una herramienta de seguridad ofensiva / red team. Mimikatz is an open-source application that allows users to view and save authentication credentials like Kerberos tickets.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/gentilkiwi/mimikatz](https://github.com/gentilkiwi/mimikatz)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de Mimikatz es mimikatz is an open-source application that allows users to view and save authentication credentials like kerberos tickets.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
log
privilege::debug
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/gentilkiwi/mimikatz
cd mimikatz

# Revisar ayuda
./mimikatz --help 2>/dev/null || python3 -m mimikatz --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Mimikatz únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/gentilkiwi/mimikatz
- Toolkit de origen: Red Teaming Toolkit
