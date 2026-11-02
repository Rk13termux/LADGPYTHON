---
title: "SharpStay: el ancla que mantiene el acceso tras el reinicio"
slug: "sharpstay"
summary: "SharpStay: persistencia para sobrevivir a reinicios y limpiezas."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["persistencia", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpStay

**SharpStay** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La persistencia garantiza que el acceso sobreviva a reinicios, cierres de sesión y limpiezas parciales del equipo comprometido.

> Descripción oficial: .NET project for installing Persistence

## Para qué sirve

SharpStay se utiliza en la fase de **persistencia**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/0xthirteen/SharpStay
cd SharpStay
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Sharpstay.exe action=ElevatedRegistryKey keyname=Debug keypath=HKCU:Software\Microsoft\Windows\CurrentVersion\Run command="C:\Windows\temp\fun.exe"
```

```bash
Sharpstay.exe action=UserRegistryKey keyname=Debug keypath=HKCU:Software\Microsoft\Windows\CurrentVersion\Run command="C:\Windows\temp\fun.exe"
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2024-06-26
- **Estrellas en GitHub:** 500
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpStay únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/0xthirteen/SharpStay
- Toolkit de origen: Red Teaming Toolkit
