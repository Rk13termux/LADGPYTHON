---
title: "SharpRDP: Remote Desktop Protocol Console Application for Authenticated Command Execution"
slug: "sharprdp"
summary: "Remote Desktop Protocol Console Application for Authenticated Command Execution"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpRDP

SharpRDP es una herramienta de seguridad ofensiva / red team. Remote Desktop Protocol Console Application for Authenticated Command Execution

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/0xthirteen/SharpRDP](https://github.com/0xthirteen/SharpRDP)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SharpRDP es remote desktop protocol console application for authenticated command execution.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
Regular RDP connection and execution
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe" username=domain\user password=password
```

```
Exec program as child process of cmd or powershell
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe" username=domain\user password=password exec=cmd
```

```
Use restricted admin mode
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe"
```

```
Connect first host drives
  SharpRDP.exe computername=domain.target command="\\tsclient\C\Temp\file.exe" username=domain\user password=password connectdrive=true
```

```
Execute command elevated through Run Dialog - CURRENTLY BUGGED
  SharpRDP.exe computername=domain.target command="C:\Temp\file.exe" username=domain\user password=password elevated=winr
```

```
Execute command elevated through task manager
  SharpRDP.exe computername=domain.target command="C:\Temp\file.exe\" username=domain\user password=password elevated=taskmgr
```

```
Add Network Level Authentication
  SharpRDP.exe computername=domain.target command="C:\Temp\file.exe\" username=domain\user password=password nla=true
```

```
Ask to take over logon session
  SharpRDP.exe computername=domain.target command="C:\Temp\file.exe\" username=domain\user password=password takeover=true
```

If restricted admin mode is enabled on the target do not specify any credentials and it will use the current user context. Can `PTH` or `make_token` in beacon or `runas /netonly` on a Windows syst
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/0xthirteen/SharpRDP
cd sharprdp

# Revisar ayuda
./sharprdp --help 2>/dev/null || python3 -m sharprdp --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpRDP únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/0xthirteen/SharpRDP
- Toolkit de origen: Red Teaming Toolkit
