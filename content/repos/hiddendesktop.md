---
title: "HiddenDesktop: HVNC for Cobalt Strike"
slug: "hiddendesktop"
summary: "HVNC for Cobalt Strike"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es HiddenDesktop

HiddenDesktop es una herramienta de seguridad ofensiva / red team. HVNC for Cobalt Strike

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/WKL-Sec/HiddenDesktop](https://github.com/WKL-Sec/HiddenDesktop)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de HiddenDesktop es hvnc for cobalt strike.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Download the [latest release](https://github.com/WKL-Sec/HiddenDesktop/releases) or compile yourself using `make`. Start the HVNC server on a Windows machine accessible from the teamserver. You can then execute the client with:

```
HiddenDesktop <server> <port>
```

You should see a new blank window on the server machine. The BOF does not execute any applications by default. You can use the application launcher BOFs to execute common programs on the new desktop:

```
hd-launch-edge
hd-launch-explorer
hd-launch-run
hd-launch-cmd
hd-launch-chrome
```

You can also launch programs through File Explorer using the mouse and keyboard. Other applications can be executed using the following command:

```
hd-launch <command> [args]
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/WKL-Sec/HiddenDesktop
cd hiddendesktop

# Revisar ayuda
./hiddendesktop --help 2>/dev/null || python3 -m hiddendesktop --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa HiddenDesktop únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/WKL-Sec/HiddenDesktop
- Toolkit de origen: Red Teaming Toolkit
