---
title: "SourcePoint: SourcePoint is a C2 profile generator for Cobalt Strike command and control serv"
slug: "sourcepoint"
summary: "SourcePoint is a C2 profile generator for Cobalt Strike command and control servers designed to ensure evasion."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SourcePoint

SourcePoint es una herramienta de seguridad ofensiva / red team. SourcePoint is a C2 profile generator for Cobalt Strike command and control servers designed to ensure evasion.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Tylous/SourcePoint](https://github.com/Tylous/SourcePoint)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de SourcePoint es sourcepoint is a c2 profile generator for cobalt strike command and control servers designed to ensure evasion.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
$go get gopkg.in/yaml.v2

$go build SourcePoint.go
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Tylous/SourcePoint
cd sourcepoint

# Revisar ayuda
./sourcepoint --help 2>/dev/null || python3 -m sourcepoint --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SourcePoint únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Tylous/SourcePoint
- Toolkit de origen: Red Teaming Toolkit
