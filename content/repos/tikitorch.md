---
title: "TikiTorch: TikiTorch was named in homage to CACTUSTORCH by Vincent Yiu. The basic concept o"
slug: "tikitorch"
summary: "TikiTorch was named in homage to CACTUSTORCH by Vincent Yiu. The basic concept of CACTUSTORCH is that it spawns a new process, allocates a region of memory, then uses CreateRemoteThread to run the desired shellcode within that target process. Both the process and shellcode are specified by the user."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TikiTorch

TikiTorch es una herramienta de seguridad ofensiva / red team. TikiTorch was named in homage to CACTUSTORCH by Vincent Yiu. The basic concept of CACTUSTORCH is that it spawns a new process, allocates a region of memory, then uses CreateRemoteThread to run the desired shellcode within that target process. Both the process and shellcode are specified by the user.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/rasta-mouse/TikiTorch](https://github.com/rasta-mouse/TikiTorch)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de TikiTorch es tikitorch was named in homage to cactustorch by vincent yiu. the basic concept of cactustorch is that it spawns a new process, allocates a region of memory, then uses createremotethread to run the desired shellcode within that target process. both the process and shellcode are specified by the user.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```c#
using System.Diagnostics;
using TikiLoader;

var hollower = new Hollower
{
    BinaryPath = @"C:\Windows\System32\notepad.exe",
    WorkingDirectory = @"C:\Windows\System32",
    ParentId = Process.GetProcessesByName("explorer")[0].Id,
    BlockDlls = true
};
            
hollower.Hollow(Shellcode, true);
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/rasta-mouse/TikiTorch
cd tikitorch

# Revisar ayuda
./tikitorch --help 2>/dev/null || python3 -m tikitorch --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa TikiTorch únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/rasta-mouse/TikiTorch
- Toolkit de origen: Red Teaming Toolkit
