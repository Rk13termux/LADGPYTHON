---
title: "GodPotato: el fallo de configuración que entrega SYSTEM"
slug: "godpotato"
summary: "GodPotato: escalada de privilegios y abuso de configuraciones débiles."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["escalada-de-privilegios", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es GodPotato

**GodPotato** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La escalada de privilegios convierte un acceso limitado en control administrativo, y con él en la capacidad de tocar casi cualquier sistema.

> Descripción oficial: As Long as You Have the ImpersonatePrivilege Permission, Then You are the SYSTEM!

## Para qué sirve

GodPotato se utiliza en la fase de **escalada de privilegios**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/BeichenDream/GodPotato
cd GodPotato
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
GodPotato -cmd "cmd /c whoami"
```

```bash
GodPotato -cmd "cmd /c whoami"
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2023-11-24
- **Estrellas en GitHub:** 2.376
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa GodPotato únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/BeichenDream/GodPotato
- Toolkit de origen: Red Teaming Toolkit
