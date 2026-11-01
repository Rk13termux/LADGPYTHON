---
title: "orpheus: Bypassing Kerberoast Detections with Modified KDC Options and Encryption Types"
slug: "orpheus"
summary: "Bypassing Kerberoast Detections with Modified KDC Options and Encryption Types"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es orpheus

orpheus es una herramienta de seguridad ofensiva / red team. Bypassing Kerberoast Detections with Modified KDC Options and Encryption Types

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/trustedsec/orpheus](https://github.com/trustedsec/orpheus)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de orpheus es bypassing kerberoast detections with modified kdc options and encryption types.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

You will need to install the latest version of [Impacket](https://github.com/SecureAuthCorp/impacket). This was tested on the [0.10.0 release](https://github.com/SecureAuthCorp/impacket/releases/tag/impacket_0_10_0). Then

```
git clone https://github.com/trustedsec/orpheus.git
cd orpheus
python3 orpheus.py
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/trustedsec/orpheus
cd orpheus

# Revisar ayuda
./orpheus --help 2>/dev/null || python3 -m orpheus --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa orpheus únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/trustedsec/orpheus
- Toolkit de origen: Red Teaming Toolkit
