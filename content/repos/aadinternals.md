---
title: "AADInternals: la puerta trasera que nadie revisa en la nube"
slug: "aadinternals"
summary: "AADInternals: enumeración y ataque de entornos cloud y Microsoft 365."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es AADInternals

**AADInternals** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: AADInternals PowerShell module for administering Azure AD and Office 365

## Para qué sirve

AADInternals se utiliza en la fase de **recursos y automatización** (cloud). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
Install-Module AADInternals
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Install-Module AADInternals
```

## Compatibilidad y requisitos

- **Lenguaje principal:** PowerShell
- **Última actualización del repositorio:** 2025-09-30
- **Estrellas en GitHub:** 1.704
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa AADInternals únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Gerenios/AADInternals
- Toolkit de origen: Red Teaming Toolkit
