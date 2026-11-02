---
title: "TokenTactics: la puerta trasera que nadie revisa en la nube"
slug: "tokentactics"
summary: "TokenTactics: enumeración y ataque de entornos cloud y Microsoft 365."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TokenTactics

**TokenTactics** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: Azure JWT Token Manipulation Toolset

## Para qué sirve

TokenTactics se utiliza en la fase de **recursos y automatización** (cloud). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/rvrsh3ll/TokenTactics
cd TokenTactics
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
### Refresh a PRT

Once a PRT has been captured, auth with roadrecon to obtain your access_token and refresh_token. When refreshing with TokenTactics, use ClientID 1b730954-1685-4b74-9bfd-dac224a7b894.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** PowerShell
- **Última actualización del repositorio:** 2024-12-06
- **Estrellas en GitHub:** 737
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa TokenTactics únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/rvrsh3ll/TokenTactics
- Toolkit de origen: Red Teaming Toolkit
