---
title: "SharpDPAPI: SharpDPAPI is a C# port of some DPAPI functionality from @gentilkiwi's Mimikatz "
slug: "sharpdpapi"
summary: "SharpDPAPI is a C# port of some DPAPI functionality from @gentilkiwi's Mimikatz project."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpDPAPI

SharpDPAPI es una herramienta de seguridad ofensiva / red team. SharpDPAPI is a C# port of some DPAPI functionality from @gentilkiwi's Mimikatz project.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GhostPack/SharpDPAPI](https://github.com/GhostPack/SharpDPAPI)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de SharpDPAPI es sharpdpapi is a c# port of some dpapi functionality from @gentilkiwi's mimikatz project.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

__                 _   _       _ ___
     (_  |_   _. ._ ._  | \ |_) /\  |_) |
     __) | | (_| |  |_) |_/ |  /--\ |  _|_
                    |
      v1.20.0

    Retrieve a domain controller's DPAPI backup key, optionally specifying a DC and output file:

      SharpDPAPI backupkey [/nowrap] [/server:SERVER.domain] [/file:key.pvk]


    The *search* comand will search for potential DPAPI blobs in the registry, files, folders, and base64 blobs:

        search /type:registry [/path:HKLM\path\to\key] [/showErrors]
        search /type:folder /path:C:\path\to\folder [/maxBytes:<numOfBytes>] [/showErrors]
        search /type:file /path:C:\path\to\file [/maxBytes:<numOfBytes>]
        search /type:base64 [/base:<base64 string>]


    Machine/SYSTEM Triage:

        machinemasterkeys       -   triage all reachable machine masterkey files (elevates to SYSTEM to retrieve the DPAPI_SYSTEM LSA secret)
        machinecredentials      -   use 'machinemasterkeys' and then triage machine Credential files
        machinevaults           -   use 'machinemasterkeys' and then triage machine Vaults
        machinetriage           -   run the 'machinecredentials' and 'machinevaults' commands


    User Triage:

        Arguments for the 'masterkeys' command:

            /target:FILE/folder     -   triage a specific masterkey, or a folder full of masterkeys (otherwise triage local masterkeys)
            /pvk:BASE64...          -   use a base64'ed DPAPI domain private key file to first decrypt
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GhostPack/SharpDPAPI
cd sharpdpapi

# Revisar ayuda
./sharpdpapi --help 2>/dev/null || python3 -m sharpdpapi --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpDPAPI únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GhostPack/SharpDPAPI
- Toolkit de origen: Red Teaming Toolkit
