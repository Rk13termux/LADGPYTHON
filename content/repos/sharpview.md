---
title: "SharpView: C# implementation of harmj0y's PowerView"
slug: "sharpview"
summary: "C# implementation of harmj0y's PowerView"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpView

SharpView es una herramienta de seguridad ofensiva / red team. C# implementation of harmj0y's PowerView

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/tevora-threat/SharpView](https://github.com/tevora-threat/SharpView)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de SharpView es c# implementation of harmj0y's powerview.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
C:\>SharpView.exe Get-DomainController -Domain test.local -Server dc.test.local -Credential admin@test.local/password  
```
```
C:\>SharpView.exe Get-DomainController -Help
Get-DomainController -Domain <String> -Server <String> -DomainController <String> -LDAP <Boolean> -Credential <NetworkCredential>
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/tevora-threat/SharpView
cd sharpview

# Revisar ayuda
./sharpview --help 2>/dev/null || python3 -m sharpview --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa SharpView únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/tevora-threat/SharpView
- Toolkit de origen: Red Teaming Toolkit
