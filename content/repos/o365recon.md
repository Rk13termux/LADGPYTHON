---
title: "o365recon: Retrieve information via O365 with a valid cred"
slug: "o365recon"
summary: "Retrieve information via O365 with a valid cred"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'brute-force', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es o365recon

o365recon es una herramienta de seguridad ofensiva / red team. Retrieve information via O365 with a valid cred

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/nyxgeek/o365recon](https://github.com/nyxgeek/o365recon)
- **Sección del toolkit:** Initial Access → Brute Force

## Objetivo y función

El objetivo principal de o365recon es retrieve information via o365 with a valid cred.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Install these two modules
```
Install-Module MSOnline
Install-Module AzureAD
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/nyxgeek/o365recon
cd o365recon

# Revisar ayuda
./o365recon --help 2>/dev/null || python3 -m o365recon --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa o365recon únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/nyxgeek/o365recon
- Toolkit de origen: Red Teaming Toolkit
