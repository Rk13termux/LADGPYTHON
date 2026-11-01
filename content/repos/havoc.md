---
title: "Havoc: Havoc is a modern and malleable post-exploitation command and control framework,"
slug: "havoc"
summary: "Havoc is a modern and malleable post-exploitation command and control framework, created by @C5pider."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'remote-access-tools-rat', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Havoc

Havoc es una herramienta de seguridad ofensiva / red team. Havoc is a modern and malleable post-exploitation command and control framework, created by @C5pider.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/HavocFramework/Havoc](https://github.com/HavocFramework/Havoc)
- **Sección del toolkit:** Command and Control → Remote Access Tools (RAT)

## Objetivo y función

El objetivo principal de Havoc es havoc is a modern and malleable post-exploitation command and control framework, created by @c5pider.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/HavocFramework/Havoc
cd havoc
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/HavocFramework/Havoc
cd havoc

# Revisar ayuda
./havoc --help 2>/dev/null || python3 -m havoc --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Havoc únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/HavocFramework/Havoc
- Toolkit de origen: Red Teaming Toolkit
