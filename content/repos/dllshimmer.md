---
title: "DllShimmer: Weaponize DLL hijacking easily. Backdoor any function in any DLL"
slug: "dllshimmer"
summary: "Weaponize DLL hijacking easily. Backdoor any function in any DLL."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es DllShimmer

DllShimmer es una herramienta de seguridad ofensiva / red team. Weaponize DLL hijacking easily. Backdoor any function in any DLL.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Print3M/DllShimmer](https://github.com/Print3M/DllShimmer)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de DllShimmer es weaponize dll hijacking easily. backdoor any function in any dll.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Compile Go source code or [download the compiled binary](https://github.com/Print3M/DllShimmer/releases).

**Dependencies**:

- `x86_64-w64-mingw32-g++`
- `x86_64-w64-mingw32-dlltool`

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Print3M/DllShimmer
cd dllshimmer

# Revisar ayuda
./dllshimmer --help 2>/dev/null || python3 -m dllshimmer --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa DllShimmer únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Print3M/DllShimmer
- Toolkit de origen: Red Teaming Toolkit
