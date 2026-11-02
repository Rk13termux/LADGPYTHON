---
title: "SharpView: el mapa interno que guía al operador"
slug: "sharpview"
summary: "SharpView: conciencia situacional para entender el entorno comprometido."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpView

**SharpView** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: C# implementation of harmj0y's PowerView

## Para qué sirve

SharpView se utiliza en la fase de **conciencia situacional** (domain situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/tevora-threat/SharpView
cd SharpView
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
C:\>SharpView.exe Get-DomainController -Domain test.local -Server dc.test.local -Credential admin@test.local/password  
```

```bash
C:\>SharpView.exe Get-DomainController -Help
Get-DomainController -Domain <String> -Server <String> -DomainController <String> -LDAP <Boolean> -Credential <NetworkCredential>
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2024-03-22
- **Estrellas en GitHub:** 1.108
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpView únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/tevora-threat/SharpView
- Toolkit de origen: Red Teaming Toolkit
