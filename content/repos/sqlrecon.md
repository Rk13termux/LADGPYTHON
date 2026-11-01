---
title: "SQLRecon: A C# MS SQL toolkit designed for offensive reconnaissance and post-exploitation"
slug: "sqlrecon"
summary: "A C# MS SQL toolkit designed for offensive reconnaissance and post-exploitation."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SQLRecon

SQLRecon es una herramienta de seguridad ofensiva / red team. A C# MS SQL toolkit designed for offensive reconnaissance and post-exploitation.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/skahwah/SQLRecon](https://github.com/skahwah/SQLRecon)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SQLRecon es a c# ms sql toolkit designed for offensive reconnaissance and post-exploitation.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/skahwah/SQLRecon
cd sqlrecon
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/skahwah/SQLRecon
cd sqlrecon

# Revisar ayuda
./sqlrecon --help 2>/dev/null || python3 -m sqlrecon --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SQLRecon únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/skahwah/SQLRecon
- Toolkit de origen: Red Teaming Toolkit
