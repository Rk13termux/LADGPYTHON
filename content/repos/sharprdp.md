---
title: "SharpRDP: de un equipo comprometido a todo el dominio"
slug: "sharprdp"
summary: "SharpRDP: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharpRDP

**SharpRDP** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: Remote Desktop Protocol Console Application for Authenticated Command Execution

## Para qué sirve

SharpRDP se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
Exec program as child process of cmd or powershell
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe" username=domain\user password=password exec=cmd
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Regular RDP connection and execution
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe" username=domain\user password=password
```

```bash
Exec program as child process of cmd or powershell
  SharpRDP.exe computername=target.domain command="C:\Temp\file.exe" username=domain\user password=password exec=cmd
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-08-03
- **Estrellas en GitHub:** 1.176
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharpRDP únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/0xthirteen/SharpRDP
- Toolkit de origen: Red Teaming Toolkit
