---
title: "SharpRDPHijack: Sharp RDP Hijack is a proof-of-concept .NET/C# Remote Desktop Protocol (RDP) ses"
slug: "sharprdphijack"
summary: "Sharp RDP Hijack is a proof-of-concept .NET/C# Remote Desktop Protocol (RDP) session hijack utility for disconnected sessions"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpRDPHijack

SharpRDPHijack es una herramienta de seguridad ofensiva / red team. Sharp RDP Hijack is a proof-of-concept .NET/C# Remote Desktop Protocol (RDP) session hijack utility for disconnected sessions

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/bohops/SharpRDPHijack](https://github.com/bohops/SharpRDPHijack)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SharpRDPHijack es sharp rdp hijack is a proof-of-concept .net/c# remote desktop protocol (rdp) session hijack utility for disconnected sessions.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
[*] Parameters:
[*] A proof-of-concept Remote Desktop (RDP) session hijack utility
    - For session hijacking, this utility must be run in an elevated context to connect to another session
    - If a password is not specified, NT AUTHORITY\SYSTEM is impersonated
    - For session query, admin privileges or "Remote Desktop Users" group membership is required on the target machine

[*] Parameters:
    --tsquery=<host> : Query a host to identify RDP/TS session information (not required for other switches)
    --session=<ID> : Target session identifier
    --password=<User's Password> : Session password if known (otherwise optional - not required for disconnect switch)
    --console : Redirect session to console session instead of current (active) session
    --shadow : Shadow an active session (experimental)
    --disconnect : Disconnect an active (remote) session

[*] Example Usage 1: Impersonate NT AUTHORITY\SYSTEM to hijack session #6 and redirect to the current session
    SharpRDPHijack.exe --session=6

[*] Example Usage 2: Impersonate NT AUTHORITY\SYSTEM to hijack session #2 and redirect to the console session
    SharpRDPHijack.exe --session=2 --console

[*] Example Usage 3: Hijack Remote Desktop session #4 with knowledge of the logged-on user's password
    SharpRDPHijack.exe --session=4 --password=P@ssw0rd

[*] Example Usage 4: Disconnect active session #3
    SharpRDPHijack.exe --session=3 --disconnect

[*] Example Usage 5: Query the local host for RDP/TS session 
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/bohops/SharpRDPHijack
cd sharprdphijack

# Revisar ayuda
./sharprdphijack --help 2>/dev/null || python3 -m sharprdphijack --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpRDPHijack únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/bohops/SharpRDPHijack
- Toolkit de origen: Red Teaming Toolkit
