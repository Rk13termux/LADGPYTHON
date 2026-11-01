---
title: "SharpChromium: .NET 4.0 CLR Project to retrieve Chromium data, such as cookies, history and sav"
slug: "sharpchromium"
summary: ".NET 4.0 CLR Project to retrieve Chromium data, such as cookies, history and saved logins."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpChromium

SharpChromium es una herramienta de seguridad ofensiva / red team. .NET 4.0 CLR Project to retrieve Chromium data, such as cookies, history and saved logins.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/djhohnstein/SharpChromium](https://github.com/djhohnstein/SharpChromium)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de SharpChromium es .net 4.0 clr project to retrieve chromium data, such as cookies, history and saved logins.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
Usage:
    .\SharpChromium.exe arg0 [arg1 arg2 ...]

Arguments:
    all       - Retrieve all Chromium Cookies, History and Logins.
    full      - The same as 'all'
    logins    - Retrieve all saved credentials that have non-empty passwords.
    history   - Retrieve user's history with a count of each time the URL was
                visited, along with cookies matching those items.
    cookies [domain1.com domain2.com] - Retrieve the user's cookies in JSON format.
                                        If domains are passed, then return only
                                        cookies matching those domains. Otherwise,
                                        all cookies are saved into a temp file of
                                        the format ""%TEMP%\$browser-cookies.json""
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/djhohnstein/SharpChromium
cd sharpchromium

# Revisar ayuda
./sharpchromium --help 2>/dev/null || python3 -m sharpchromium --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpChromium únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/djhohnstein/SharpChromium
- Toolkit de origen: Red Teaming Toolkit
