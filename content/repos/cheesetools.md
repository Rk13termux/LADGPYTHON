---
title: "CheeseTools: This repository has been made basing onto the already existing MiscTool, so big "
slug: "cheesetools"
summary: "This repository has been made basing onto the already existing MiscTool, so big shout-out to rasta-mouse for releasing them and for giving me the right motivation to work on them."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CheeseTools

CheeseTools es una herramienta de seguridad ofensiva / red team. This repository has been made basing onto the already existing MiscTool, so big shout-out to rasta-mouse for releasing them and for giving me the right motivation to work on them.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/klezVirus/CheeseTools](https://github.com/klezVirus/CheeseTools)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de CheeseTools es this repository has been made basing onto the already existing misctool, so big shout-out to rasta-mouse for releasing them and for giving me the right motivation to work on them.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/klezVirus/CheeseTools
cd cheesetools
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/klezVirus/CheeseTools
cd cheesetools

# Revisar ayuda
./cheesetools --help 2>/dev/null || python3 -m cheesetools --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa CheeseTools únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/klezVirus/CheeseTools
- Toolkit de origen: Red Teaming Toolkit
