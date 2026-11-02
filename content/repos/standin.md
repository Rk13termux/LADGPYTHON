---
title: "StandIn: la radiografía del entorno comprometido"
slug: "standin"
summary: "StandIn: conciencia situacional para entender el entorno comprometido."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es StandIn

**StandIn** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: StandIn is a small AD post-compromise toolkit. StandIn came about because recently at xforcered we needed a .NET native solution to perform resource based constrained delegation.

## Para qué sirve

StandIn se utiliza en la fase de **conciencia situacional** (domain situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
C:\> StandIn.exe --computer M-1337-b33f --make

[?] Using DC    : m-w16-dc01.main.redhook.local
    |_ Domain   : main.redhook.local
    |_ DN       : CN=M-1337-b33f,CN=Computers,DC=main,DC=redhook,DC=local
    |_ Password : MlCGkaacS5SRUOt

[+] Machine account added to AD..
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
C:\> StandIn.exe --sid user001

[?] Using DC : m-w16-dc01.main.redhook.local
[?] Object   : CN=user 001
    Path     : LDAP://CN=user 001,CN=Users,DC=redhook,DC=local

[+] User     : REDHOOK.LOCAL\user001
    SID      : S-1-5-21-315358687-3711474269-2098994107-1105

C:\> StandIn.exe --sid S-1-5-21-315358687-3711474269-2098994107-1105

[?] Using DC : m-w16-dc01.main.redhook.local
[?] Object   : CN=user 001
    Path     : LDAP://CN=user 001,CN=Users,DC=redhook,DC=local

[+] User     : REDHOOK.LOCAL\user001
    SID      : S-1-5-21-315358687-3711474269-2098994107-1105
```

```bash
C:\> StandIn.exe --asrep

[?] Using DC : m-w16-dc01.main.redhook.local

[?] Found 1 object(s) that do not require Kerberos preauthentication..

[*] SamAccountName           : user005
    DistinguishedName        : CN=User 005,OU=Users,OU=OCCULT,DC=main,DC=redhook,DC=local
    userAccountControl       : NORMAL_ACCOUNT, DONT_EXPIRE_PASSWD, DONT_REQUIRE_PREAUTH
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2023-12-02
- **Estrellas en GitHub:** 878
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa StandIn únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/FuzzySecurity/StandIn
- Toolkit de origen: Red Teaming Toolkit
