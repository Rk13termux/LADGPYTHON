---
title: "Domain Hunter: Checks expired domains for categorization/reputation and Archive.org history to "
slug: "domain-hunter"
summary: "Checks expired domains for categorization/reputation and Archive.org history to determine good candidates for phishing and C2 domain names"
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['command-and-control', 'staging', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Domain Hunter

Domain Hunter es una herramienta de seguridad ofensiva / red team. Checks expired domains for categorization/reputation and Archive.org history to determine good candidates for phishing and C2 domain names

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/threatexpress/domainhunter](https://github.com/threatexpress/domainhunter)
- **Sección del toolkit:** Command and Control → Staging

## Objetivo y función

El objetivo principal de Domain Hunter es checks expired domains for categorization/reputation and archive.org history to determine good candidates for phishing and c2 domain names.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/threatexpress/domainhunter
cd domain-hunter
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/threatexpress/domainhunter
cd domain-hunter

# Revisar ayuda
./domain-hunter --help 2>/dev/null || python3 -m domain_hunter --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Domain Hunter únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/threatexpress/domainhunter
- Toolkit de origen: Red Teaming Toolkit
