---
title: "SharpEventPersist: Persistence by writing/reading shellcode from Event Log"
slug: "sharpeventpersist"
summary: "Persistence by writing/reading shellcode from Event Log"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['persistence', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpEventPersist

SharpEventPersist es una herramienta de seguridad ofensiva / red team. Persistence by writing/reading shellcode from Event Log

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/improsec/SharpEventPersist](https://github.com/improsec/SharpEventPersist)
- **Sección del toolkit:** Persistence 

## Objetivo y función

El objetivo principal de SharpEventPersist es persistence by writing/reading shellcode from event log.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

The SharpEventPersist tool takes 4 case-sensitive parameters:  
* -file "C:\path\to\shellcode.bin"
* -instanceid 1337
* -source Persistence
* -eventlog "Key Management Service".  

The shellcode is converted to hex and written to the "Key Management Service", event level is set to "Information" and source is "Persistence".  
Run the SharpEventLoader tool to fetch shellcode from event log and execute it. Ideally this should be converted to a DLL and sideloaded on program start/boot.  
Remember to change the Event Log name and instanceId in the loader, if not running with default values.  

Default values will leave the following artifact:  
* A new key will be written to HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Key Management Service named "Persistance".
* This new "Persistance" key will not have a provider GUID or TypesSupported which the default key "KmsRequests" have. This can be used to build detections.  

![image info](./demo.png)

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/improsec/SharpEventPersist
cd sharpeventpersist

# Revisar ayuda
./sharpeventpersist --help 2>/dev/null || python3 -m sharpeventpersist --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SharpEventPersist únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/improsec/SharpEventPersist
- Toolkit de origen: Red Teaming Toolkit
