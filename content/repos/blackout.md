---
title: "Blackout: kill anti-malware protected processes (BYOVD)"
slug: "blackout"
summary: "kill anti-malware protected processes (BYOVD)"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Blackout

Blackout es una herramienta de seguridad ofensiva / red team. kill anti-malware protected processes (BYOVD)

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/ZeroMemoryEx/Blackout](https://github.com/ZeroMemoryEx/Blackout)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de Blackout es kill anti-malware protected processes (byovd).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

* Place the driver `Blackout.sys` in the same path as the executable
* The executable should be run in the context of an administrator
* Blackout.exe -p <process_id>
* for windows defender keep the program running to prevent the service from restarting it

  ![image](https://github.com/ZeroMemoryEx/Blackout/assets/60795188/3ea0f7ae-0102-4a38-b4b6-700e93f5d545)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/ZeroMemoryEx/Blackout
cd blackout

# Revisar ayuda
./blackout --help 2>/dev/null || python3 -m blackout --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Blackout únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/ZeroMemoryEx/Blackout
- Toolkit de origen: Red Teaming Toolkit
