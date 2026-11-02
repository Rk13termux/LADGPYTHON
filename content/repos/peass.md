---
title: "PEASS: de usuario limitado a administrador del sistema"
slug: "peass"
summary: "PEASS: escalada de privilegios y abuso de configuraciones débiles."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["escalada-de-privilegios", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PEASS

**PEASS** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La escalada de privilegios convierte un acceso limitado en control administrativo, y con él en la capacidad de tocar casi cualquier sistema.

> Descripción oficial: Privilege Escalation Awesome Scripts SUITE (with colors)

## Para qué sirve

PEASS se utiliza en la fase de **escalada de privilegios**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/carlospolop/PEASS-ng
cd PEASS-ng
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./peass-ng --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-11-01
- **Estrellas en GitHub:** 20.746
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PEASS únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/carlospolop/PEASS-ng
- Toolkit de origen: Red Teaming Toolkit
