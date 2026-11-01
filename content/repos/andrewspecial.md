---
title: "AndrewSpecial: AndrewSpecial, dumping lsass' memory stealthily and bypassing "Cilence" since 20"
slug: "andrewspecial"
summary: "AndrewSpecial, dumping lsass' memory stealthily and bypassing "Cilence" since 2019."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AndrewSpecial

AndrewSpecial es una herramienta de seguridad ofensiva / red team. AndrewSpecial, dumping lsass' memory stealthily and bypassing "Cilence" since 2019.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/hoangprod/AndrewSpecial](https://github.com/hoangprod/AndrewSpecial)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de AndrewSpecial es andrewspecial, dumping lsass' memory stealthily and bypassing "cilence" since 2019.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Clona el repositorio y sigue las instrucciones del README oficial:

```bash
git clone https://github.com/hoangprod/AndrewSpecial
cd andrewspecial
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/hoangprod/AndrewSpecial
cd andrewspecial

# Revisar ayuda
./andrewspecial --help 2>/dev/null || python3 -m andrewspecial --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa AndrewSpecial únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/hoangprod/AndrewSpecial
- Toolkit de origen: Red Teaming Toolkit
