---
title: "BloodHound: el mapa interno que guía al operador"
slug: "bloodhound"
summary: "BloodHound: conciencia situacional para entender el entorno comprometido."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BloodHound

**BloodHound** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: Six Degrees of Domain Admin

## Para qué sirve

BloodHound se utiliza en la fase de **conciencia situacional** (domain situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/BloodHoundAD/BloodHound
cd BloodHound
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./bloodhound --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** PowerShell
- **Última actualización del repositorio:** 2026-03-02
- **Estrellas en GitHub:** 10.623
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa BloodHound únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/BloodHoundAD/BloodHound
- Toolkit de origen: Red Teaming Toolkit
