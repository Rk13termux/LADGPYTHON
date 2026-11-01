---
title: "SharpSpray: SharpSpray a simple code set to perform a password spraying attack against all u"
slug: "sharpspray"
summary: "SharpSpray a simple code set to perform a password spraying attack against all users of a domain using LDAP and is compatible with Cobalt Strike."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpSpray

SharpSpray es una herramienta de seguridad ofensiva / red team. SharpSpray a simple code set to perform a password spraying attack against all users of a domain using LDAP and is compatible with Cobalt Strike.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/jnqpblc/SharpSpray](https://github.com/jnqpblc/SharpSpray)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SharpSpray es sharpspray a simple code set to perform a password spraying attack against all users of a domain using ldap and is compatible with cobalt strike.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/jnqpblc/SharpSpray
cd sharpspray
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/jnqpblc/SharpSpray
cd sharpspray

# Revisar ayuda
./sharpspray --help 2>/dev/null || python3 -m sharpspray --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpSpray únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/jnqpblc/SharpSpray
- Toolkit de origen: Red Teaming Toolkit
