---
title: "S3Scanner: Scan for open S3 buckets and dump the contents"
slug: "s3scanner"
summary: "Scan for open S3 buckets and dump the contents"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['reconnaissance', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es S3Scanner

S3Scanner es una herramienta de seguridad ofensiva / red team. Scan for open S3 buckets and dump the contents

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/sa7mon/S3Scanner](https://github.com/sa7mon/S3Scanner)
- **Sección del toolkit:** Reconnaissance 

## Objetivo y función

El objetivo principal de S3Scanner es scan for open s3 buckets and dump the contents.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
INPUT: (1 required)
  -bucket        string  Name of bucket to check.
  -bucket-file   string  File of bucket names to check.
  -mq                    Connect to RabbitMQ to get buckets. Requires config file key "mq". Default: "false"

OUTPUT:
  -db       Save results to a Postgres database. Requires config file key "db.uri". Default: "false"
  -json     Print logs to stdout in JSON format instead of human-readable. Default: "false"

OPTIONS:
  -enumerate           Enumerate bucket objects (can be time-consuming). Default: "false"
  -provider    string  Object storage provider: aws, custom, digitalocean, dreamhost, gcp, linode, scaleway - custom requires config file. Default: "aws"
  -threads     int     Number of threads to scan with. Default: "4"

DEBUG:
  -verbose     Enable verbose logging. Default: "false"
  -version     Print version Default: "false"

If config file is required these locations will be searched for config.yml: "." "/etc/s3scanner/" "$HOME/.s3scanner/"
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/sa7mon/S3Scanner
cd s3scanner

# Revisar ayuda
./s3scanner --help 2>/dev/null || python3 -m s3scanner --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa S3Scanner únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/sa7mon/S3Scanner
- Toolkit de origen: Red Teaming Toolkit
