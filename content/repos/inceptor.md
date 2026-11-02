---
title: "inceptor: la técnica para operar sin que el EDR lo detecte"
slug: "inceptor"
summary: "inceptor: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es inceptor

**inceptor** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Template-Driven AV/EDR Evasion Framework

## Para qué sirve

inceptor se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone --recursive https://github.com/klezVirus/inceptor.git
cd inceptor
virtualenv venv
venv\Scripts\activate.bat
pip install -r requirements.txt
cd inceptor
python update-config.py
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
usage: inceptor.py [-h] [-hh] [-Z] {native,dotnet,powershell} ...

inceptor: A Windows-based PE Packing framework designed to help 
          Red Team Operators to bypass common AV and EDR solutions

positional arguments:
  {native,dotnet,powershell}
    native              Native Binaries Generator
    dotnet              .NET Binaries Generator
    powershell          PowerShell Wrapper Scripts Generator

optional arguments:
  -h, --help            show this help message and exit
  -hh                   Show functional table
  -Z, --check           Check file against ThreatCheck
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Assembly
- **Última actualización del repositorio:** 2023-11-03
- **Estrellas en GitHub:** 1.836
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa inceptor únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/klezVirus/inceptor
- Toolkit de origen: Red Teaming Toolkit
