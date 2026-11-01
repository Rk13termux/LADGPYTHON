---
title: "darkarmour: Windows AV Evasion"
slug: "darkarmour"
summary: "Windows AV Evasion"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es darkarmour

darkarmour es una herramienta de seguridad ofensiva / red team. Windows AV Evasion

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/bats3c/darkarmour](https://github.com/bats3c/darkarmour)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de darkarmour es windows av evasion.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```

          _,.
        ,` -.)
       ( _/-\-._
      /,|`--._,-^|           ,¡
      \_| |`-._/||          / /
        |  `-, / |         /  /
        |     || |        /  /  ______           _     ___
         `r-._||/   __   /  /   |  _  \         | |   / _ \
     __,-<_     )`-/  `./  /    | | | |__ _ _ __| | _/ /_\ \_ __ _ __ ___   ___  _   _ _ __
    '  \   `---'     \ /  /     | | | / _` | '__| |/ /  _  | '__| '_ ` _ \ / _ \| | | | '__|
        |           |./  /      | |/ / (_| | |  |   <| | | | |  | | | | | | (_) | |_| | |
        /            /  /       |___/ \__,_|_|  |_|\_\_| |_/_|  |_| |_| |_|\___/ \__,_|_|
    \_/' \       |  /  /
     |    |   _,^-'/  /
     |    , `` (\ /  /_                    By Dylan Halls     |     Version 0.3
    \,.->._     \X-=/^
      (  /   `-._//^`
       `Y-.____(__}
        |     {__)
               ()



usage: darkarmour.py [-h] [-f FILE] -e ENCRYPT [-S SHELLCODE] [-b] [-d] [-u]
                     [-j] [-r] [-s] [-k KEY] [-l LOOP] [-o OUTFILE]

optional arguments:
  -h, --help            show this help message and exit
  -f FILE, --file FILE  file to crypt, assumed as binary if not told otherwise
  -e ENCRYPT, --encrypt ENCRYPT
                        encryption algorithm to use (xor)
  -S SHELLCODE, --shellcode SHELLCODE
                        file contating the shellcode, needs to be in the
                        'msfvenom -f raw' style format
  -b, --binary          provide if file is a binary exe
  -d, --dll           
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/bats3c/darkarmour
cd darkarmour

# Revisar ayuda
./darkarmour --help 2>/dev/null || python3 -m darkarmour --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa darkarmour únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/bats3c/darkarmour
- Toolkit de origen: Red Teaming Toolkit
