---
title: "Evilginx2: Evilginx2 is a man-in-the-middle attack framework used for phishing credentials "
slug: "evilginx2"
summary: "Evilginx2 is a man-in-the-middle attack framework used for phishing credentials and session cookies of any web service."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['delivery', 'phishing', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Evilginx2

Evilginx2 es una herramienta de seguridad ofensiva / red team. Evilginx2 is a man-in-the-middle attack framework used for phishing credentials and session cookies of any web service.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/kgretzky/evilginx2](https://github.com/kgretzky/evilginx2)
- **Sección del toolkit:** Delivery → Phishing

## Objetivo y función

El objetivo principal de Evilginx2 es evilginx2 is a man-in-the-middle attack framework used for phishing credentials and session cookies of any web service.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/kgretzky/evilginx2
cd evilginx2
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/kgretzky/evilginx2
cd evilginx2

# Revisar ayuda
./evilginx2 --help 2>/dev/null || python3 -m evilginx2 --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Evilginx2 únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/kgretzky/evilginx2
- Toolkit de origen: Red Teaming Toolkit
