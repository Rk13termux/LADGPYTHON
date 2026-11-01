---
title: "SharpAllowedToAct: A C# implementation of a computer object takeover through Resource-Based Constra"
slug: "sharpallowedtoact"
summary: "A C# implementation of a computer object takeover through Resource-Based Constrained Delegation (msDS-AllowedToActOnBehalfOfOtherIdentity) based on the research by @elad_shamir."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['lateral-movement', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpAllowedToAct

SharpAllowedToAct es una herramienta de seguridad ofensiva / red team. A C# implementation of a computer object takeover through Resource-Based Constrained Delegation (msDS-AllowedToActOnBehalfOfOtherIdentity) based on the research by @elad_shamir.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/pkb1s/SharpAllowedToAct](https://github.com/pkb1s/SharpAllowedToAct)
- **Sección del toolkit:** Lateral Movement 

## Objetivo y función

El objetivo principal de SharpAllowedToAct es a c# implementation of a computer object takeover through resource-based constrained delegation (msds-allowedtoactonbehalfofotheridentity) based on the research by @elad_shamir.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/pkb1s/SharpAllowedToAct
cd sharpallowedtoact
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/pkb1s/SharpAllowedToAct
cd sharpallowedtoact

# Revisar ayuda
./sharpallowedtoact --help 2>/dev/null || python3 -m sharpallowedtoact --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpAllowedToAct únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/pkb1s/SharpAllowedToAct
- Toolkit de origen: Red Teaming Toolkit
