---
title: "Network Flight Simulator: simula al adversario para medir tus defensas"
slug: "network-flight-simulator"
summary: "Network Flight Simulator: herramienta de seguridad ofensiva para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Network Flight Simulator

**Network Flight Simulator** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: flightsim is a lightweight utility used to generate malicious network traffic and help security teams to evaluate security controls and network visibility.

## Para qué sirve

Network Flight Simulator se utiliza en la fase de **recursos y automatización** (adversary emulation). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
go install github.com/alphasoc/flightsim/v2@latest
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
flightsim --help

AlphaSOC Network Flight Simulator™ (https://github.com/alphasoc/flightsim)

flightsim is an application which generates malicious network traffic for security
teams to evaluate security controls (e.g. firewalls) and ensure that monitoring tools
are able to detect malicious traffic.

Usage:
    flightsim <command> [arguments]

Available commands:
    get         Get a list of elements (ie. families) of a certain category (ie. c2)
    run         Run all modules, or a particular module
    version     Prints the version number

Cheatsheet:
    flightsim run                   Run all the modules
    flightsim run c2                Simulate C2 traffic
    flightsim run c2:trickbot       Simulate C2 traffic for the TrickBot family
    flightsim run ssh-transfer:1GB  Simulate a 1GB SSH/SFTP file transfer

    flightsim get families:c2       Get a list of all c2 families
```

```bash
flightsim run --help
usage: flightsim run [flags] [modules]

To run all available modules, call:

    flightsim run

 To run a specific module:

    flightsim run c2

Available modules:

        c2, dga, imposter, miner, scan, sink, spambot, ssh-exfil, ssh-transfer, tunnel-dns, tunnel-icmp

Available flags:
  -dry
        print actions without performing any network activity
  -fast
        reduce sleep intervals between simulation events
  -iface string
        network interface or local IP address to use
  -size int
        number of hosts generated for each simulator

flightsim run dga

AlphaSOC Network Flight Simulator™  (https://github.com/alphasoc/flightsim)
The address of the network interface for IP traffic is 192.168.220.38
The address of the network interface for DNS queries is 192.168.220.38
The current time is 26-Oct-21 17:28:51

17:28:51 [dga] Generating a list of DGA domains
17:28:51 [dga] Resolving 6kauziij.com
17:28:52 [dga] Resolving paxeo0jk.biz
17:28:53 [dga] Resolving iuuub8al.biz
17:28:54 [dga] Resolving bxsei3nj.com
17:28:55 [dga] Resolving zbwltf1h.space
17:28:56 [dga] Resolving yoze7avi.com
17:28:57 [dga] Resolving ijax8aqw.space
17:28:58 [dga] Resolving wwrjyj4l.space
17:28:59 [dga] Resolving uioc5hky.com
17:29:00 [dga] Resolving lcwdji5t.biz
17:29:01 [dga] Resolving zluwcb4h.biz
17:29:02 [dga] Resolving 8jodcvhj.space
17:29:03 [dga] Resolving ju5haxur.com
17:29:04 [dga] Resolving ivthu2dl.biz
17:29:05 [dga] Resolving ha0bsxft.com
17:29:05 [dga] Done (15/15)

All done! Check your SIEM for alerts using the timestamps and details above.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2024-04-04
- **Estrellas en GitHub:** 1.366
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Network Flight Simulator únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/alphasoc/flightsim
- Toolkit de origen: Red Teaming Toolkit
