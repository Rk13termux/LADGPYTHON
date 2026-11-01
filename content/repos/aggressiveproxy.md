---
title: "AggressiveProxy: AggressiveProxy is a combination of a .NET 3.5 binary (LetMeOutSharp) and a Coba"
slug: "aggressiveproxy"
summary: "AggressiveProxy is a combination of a .NET 3.5 binary (LetMeOutSharp) and a Cobalt Strike aggressor script (AggressiveProxy.cna). Once LetMeOutSharp is executed on a workstation, it will try to enumerate all available proxy configurations and try to communicate with the Cobalt Strike server over HTTP(s) using the identified proxy configurations."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AggressiveProxy

AggressiveProxy es una herramienta de seguridad ofensiva / red team. AggressiveProxy is a combination of a .NET 3.5 binary (LetMeOutSharp) and a Cobalt Strike aggressor script (AggressiveProxy.cna). Once LetMeOutSharp is executed on a workstation, it will try to enumerate all available proxy configurations and try to communicate with the Cobalt Strike server over HTTP(s) using the identified proxy configurations.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/EncodeGroup/AggressiveProxy](https://github.com/EncodeGroup/AggressiveProxy)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de AggressiveProxy es aggressiveproxy is a combination of a .net 3.5 binary (letmeoutsharp) and a cobalt strike aggressor script (aggressiveproxy.cna). once letmeoutsharp is executed on a workstation, it will try to enumerate all available proxy configurations and try to communicate with the cobalt strike server over http(s) using the identified proxy configurations.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

* CobaltStrike 4.1
* Mono Framework

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/EncodeGroup/AggressiveProxy
cd aggressiveproxy

# Revisar ayuda
./aggressiveproxy --help 2>/dev/null || python3 -m aggressiveproxy --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa AggressiveProxy únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/EncodeGroup/AggressiveProxy
- Toolkit de origen: Red Teaming Toolkit
