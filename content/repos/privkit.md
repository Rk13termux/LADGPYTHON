---
title: "PrivKit: el fallo de configuración que entrega SYSTEM"
slug: "privkit"
summary: "PrivKit: escalada de privilegios y abuso de configuraciones débiles."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["escalada-de-privilegios", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PrivKit

**PrivKit** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La escalada de privilegios convierte un acceso limitado en control administrativo, y con él en la capacidad de tocar casi cualquier sistema.

> Descripción oficial: PrivKit is a simple beacon object file that detects privilege escalation vulnerabilities caused by misconfigurations on Windows OS.

## Para qué sirve

PrivKit se utiliza en la fase de **escalada de privilegios**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
sudo apt update && sudo apt install mingw-w64 -y
```

```bash
brew install mingw-w64
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
cd PrivKit
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2026-01-20
- **Estrellas en GitHub:** 631
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PrivKit únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/mertdas/PrivKit
- Toolkit de origen: Red Teaming Toolkit
