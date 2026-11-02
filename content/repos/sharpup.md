---
title: "SharpUp: cómo convertir un acceso menor en control total"
slug: "sharpup"
summary: "SharpUp: escalada de privilegios y abuso de configuraciones débiles."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["escalada-de-privilegios", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpUp

**SharpUp** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La escalada de privilegios convierte un acceso limitado en control administrativo, y con él en la capacidad de tocar casi cualquier sistema.

> Descripción oficial: SharpUp is a C# port of various PowerUp functionality. Currently, only the most common checks have been ported; no weaponization functions have yet been implemented.

## Para qué sirve

SharpUp se utiliza en la fase de **escalada de privilegios**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/GhostPack/SharpUp
cd SharpUp
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
SharpUp.exe [audit] [check1] [check2]...

    audit   - Specifies whether or not to enable audit mode. If enabled, SharpUp will run vulenrability checks
              regardless if the process is in high integrity or the user is in the local administrator's group.
              If no checks are specified, audit will run all checks. Otherwise, each check following audit will
              be ran.

    check*  - The individual vulnerability check to be ran. Must be one of the following:

              - AlwaysInstallElevated
              - CachedGPPPassword
              - DomainGPPPassword
              - HijackablePaths
              - McAfeeSitelistFiles
              - ModifiableScheduledTask
              - ModifiableServiceBinaries
              - ModifiableServiceRegistryKeys
              - ModifiableServices
              - ProcessDLLHijack
              - RegistryAutoLogons
              - RegistryAutoruns
              - TokenPrivileges
              - UnattendedInstallFiles
              - UnquotedServicePath


    Examples:
        SharpUp.exe audit
            -> Runs all vulnerability checks regardless of integrity level or group membership.

        SharpUp.exe HijackablePaths
            -> Check only if there are modifiable paths in the user's %PATH% variable.

        SharpUp.exe audit HijackablePaths
            -> Check only for modifiable paths in the user's %PATH% regardless of integrity level or group membership. 
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2024-02-14
- **Estrellas en GitHub:** 1.549
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpUp únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/GhostPack/SharpUp
- Toolkit de origen: Red Teaming Toolkit
