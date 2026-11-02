---
title: "nanodump: las llaves del reino, a un comando de distancia"
slug: "nanodump"
summary: "nanodump: extracción y abuso de credenciales en entornos Windows y AD."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["volcado-de-credenciales", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es nanodump

**nanodump** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. Las credenciales son el activo más valioso de una red. Obtenerlas permite pivotar, escalar y persistir sin explotar nuevas vulnerabilidades.

> Descripción oficial: A Beacon Object File that creates a minidump of the LSASS process.

## Para qué sirve

nanodump se utiliza en la fase de **volcado de credenciales**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/fortra/nanodump.git
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
beacon> nanodump_ssp -v -w C:\Windows\Temp\lsass.dmp
```

```bash
beacon> nanodump_ssp -v -w C:\Windows\Temp\lsass.dmp --load-dll C:\Windows\Temp\ssp.dll
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-09-17
- **Estrellas en GitHub:** 2.143
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa nanodump únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/helpsystems/nanodump
- Toolkit de origen: Red Teaming Toolkit
