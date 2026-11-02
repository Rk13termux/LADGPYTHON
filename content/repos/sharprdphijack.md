---
title: "SharpRDPHijack: el salto silencioso entre equipos de una red"
slug: "sharprdphijack"
summary: "SharpRDPHijack: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpRDPHijack

**SharpRDPHijack** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: Sharp RDP Hijack is a proof-of-concept .NET/C# Remote Desktop Protocol (RDP) session hijack utility for disconnected sessions

## Para qué sirve

SharpRDPHijack se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/bohops/SharpRDPHijack
cd SharpRDPHijack
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
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

[*] Example Usage 5: Query the local host for RDP/TS session information
    SharpRDPHijack.exe --tsquery=localhost

[*] Example Usage 6: Shadow active session #3
    SharpRDPHijack.exe --session=3 --shadow

[*] Example Usage 7: Shadow inactive session #2 by redirecting the session to the console
    SharpRDPHijack.exe --session=2 --shadow --console
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2024-11-28
- **Estrellas en GitHub:** 504
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpRDPHijack únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/bohops/SharpRDPHijack
- Toolkit de origen: Red Teaming Toolkit
