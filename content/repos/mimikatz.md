---
title: "Mimikatz: el ticket que abre todo un dominio"
slug: "mimikatz"
summary: "Mimikatz: abuso de Kerberos y tickets para comprometer Active Directory."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["volcado-de-credenciales", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Mimikatz

**Mimikatz** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. Las credenciales son el activo más valioso de una red. Obtenerlas permite pivotar, escalar y persistir sin explotar nuevas vulnerabilidades.

> Descripción oficial: Mimikatz is an open-source application that allows users to view and save authentication credentials like Kerberos tickets.

## Para qué sirve

Mimikatz se utiliza en la fase de **volcado de credenciales**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/gentilkiwi/mimikatz
cd mimikatz
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
log
privilege::debug
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2026-10-30
- **Estrellas en GitHub:** 21.942
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa Mimikatz únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/gentilkiwi/mimikatz
- Toolkit de origen: Red Teaming Toolkit
