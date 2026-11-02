---
title: "ThreatCheck: acceso inicial con precisión quirúrgica"
slug: "threatcheck"
summary: "ThreatCheck: técnicas de acceso inicial para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ThreatCheck

**ThreatCheck** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Identifies the bytes that Microsoft Defender / AMSI Consumer flags on.

## Para qué sirve

ThreatCheck se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/rasta-mouse/ThreatCheck
cd ThreatCheck
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```text
C:\>ThreatCheck.exe --help
  -e, --engine    (Default: Defender) Scanning engine. Options: Defender, AMSI
  -f, --file      Analyze a file on disk
  -u, --url       Analyze a file from a URL
  -t, --type      File type to scan. Options: Bin, Script
  --help          Display this help screen.
  --version       Display version information.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-03-17
- **Estrellas en GitHub:** 1.635
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa ThreatCheck únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/rasta-mouse/ThreatCheck
- Toolkit de origen: Red Teaming Toolkit
