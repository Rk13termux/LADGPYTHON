---
title: "SharpUp: SharpUp is a C# port of various PowerUp functionality. Currently, only the most "
slug: "sharpup"
summary: "SharpUp is a C# port of various PowerUp functionality. Currently, only the most common checks have been ported; no weaponization functions have yet been implemented."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['privilege-escalation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpUp

SharpUp es una herramienta de seguridad ofensiva / red team. SharpUp is a C# port of various PowerUp functionality. Currently, only the most common checks have been ported; no weaponization functions have yet been implemented.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GhostPack/SharpUp](https://github.com/GhostPack/SharpUp)
- **Sección del toolkit:** Privilege Escalation 

## Objetivo y función

El objetivo principal de SharpUp es sharpup is a c# port of various powerup functionality. currently, only the most common checks have been ported; no weaponization functions have yet been implemented.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
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

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GhostPack/SharpUp
cd sharpup

# Revisar ayuda
./sharpup --help 2>/dev/null || python3 -m sharpup --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpUp únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GhostPack/SharpUp
- Toolkit de origen: Red Teaming Toolkit
