---
title: "Rubeus: Rubeus is a C# toolset for raw Kerberos interaction and abuses. It is heavily ad"
slug: "rubeus"
summary: "Rubeus is a C# toolset for raw Kerberos interaction and abuses. It is heavily adapted from Benjamin Delpy's Kekeo project (CC BY-NC-SA 4.0 license) and Vincent LE TOUX's MakeMeEnterpriseAdmin project (GPL v3.0 license)."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Rubeus

Rubeus es una herramienta de seguridad ofensiva / red team. Rubeus is a C# toolset for raw Kerberos interaction and abuses. It is heavily adapted from Benjamin Delpy's Kekeo project (CC BY-NC-SA 4.0 license) and Vincent LE TOUX's MakeMeEnterpriseAdmin project (GPL v3.0 license).

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/GhostPack/Rubeus](https://github.com/GhostPack/Rubeus)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de Rubeus es rubeus is a c# toolset for raw kerberos interaction and abuses. it is heavily adapted from benjamin delpy's kekeo project (cc by-nc-sa 4.0 license) and vincent le toux's makemeenterpriseadmin project (gpl v3.0 license).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

______        _
      (_____ \      | |
       _____) )_   _| |__  _____ _   _  ___
      |  __  /| | | |  _ \| ___ | | | |/___)
      | |  \ \| |_| | |_) ) ____| |_| |___ |
      |_|   |_|____/|____/|_____)____/(___/

      v2.3.3


     Ticket requests and renewals:

        Retrieve a TGT based on a user password/hash, optionally saving to a file or applying to the current logon session or a specific LUID:
            Rubeus.exe asktgt /user:USER </password:PASSWORD [/enctype:DES|RC4|AES128|AES256] | /des:HASH | /rc4:HASH | /aes128:HASH | /aes256:HASH> [/domain:DOMAIN] [/dc:DOMAIN_CONTROLLER] [/outfile:FILENAME] [/ptt] [/luid] [/nowrap] [/opsec] [/nopac] [/proxyurl:https://KDC_PROXY/kdcproxy] [/suppenctype:DES|RC4|AES128|AES256]

        Retrieve a TGT based on a user password/hash, optionally saving to a file or applying to the current logon session or a specific LUID:
            Rubeus.exe asktgt /user:USER </password:PASSWORD [/enctype:DES|RC4|AES128|AES256] | /des:HASH | /rc4:HASH | /aes128:HASH | /aes256:HASH> [/domain:DOMAIN] [/dc:DOMAIN_CONTROLLER] [/outfile:FILENAME] [/ptt] [/luid] [/nowrap] [/opsec] [/nopac] [/proxyurl:https://KDC_PROXY/kdcproxy] [/suppenctype:DES|RC4|AES128|AES256]
    
        Retrieve a TGT based on a user password/hash, start a /netonly process, and to apply the ticket to the new process/logon session:
            Rubeus.exe asktgt /user:USER </password:PASSWORD [/enctype:DES|RC4|AES128|AES256] | /des:HASH | /rc4:HASH | /aes128:HASH | /aes256
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/GhostPack/Rubeus
cd rubeus

# Revisar ayuda
./rubeus --help 2>/dev/null || python3 -m rubeus --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Rubeus únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/GhostPack/Rubeus
- Toolkit de origen: Red Teaming Toolkit
