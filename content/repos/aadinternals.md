---
title: "AADInternals: AADInternals PowerShell module for administering Azure AD and Office 365"
slug: "aadinternals"
summary: "AADInternals PowerShell module for administering Azure AD and Office 365"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AADInternals

AADInternals es una herramienta de seguridad ofensiva / red team. AADInternals PowerShell module for administering Azure AD and Office 365

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/Gerenios/AADInternals](https://github.com/Gerenios/AADInternals)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de AADInternals es aadinternals powershell module for administering azure ad and office 365.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Run the following PowerShell command to install
```
Install-Module AADInternals
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/Gerenios/AADInternals
cd aadinternals

# Revisar ayuda
./aadinternals --help 2>/dev/null || python3 -m aadinternals --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa AADInternals únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/Gerenios/AADInternals
- Toolkit de origen: Red Teaming Toolkit
