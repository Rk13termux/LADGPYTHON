---
title: "SharPyShell: el mecanismo que nadie revisa y sigue activo"
slug: "sharpyshell"
summary: "SharPyShell: persistencia para sobrevivir a reinicios y limpiezas."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["persistencia", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SharPyShell

**SharPyShell** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La persistencia garantiza que el acceso sobreviva a reinicios, cierres de sesión y limpiezas parciales del equipo comprometido.

> Descripción oficial: tiny and obfuscated ASP.NET webshell for C# web applications

## Para qué sirve

SharPyShell se utiliza en la fase de **persistencia**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
pip3 install -r requirements.txt
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
python3 SharPyShell.py generate -p somepassword
python3 SharPyShell.py interact -u http://target.url/sharpyshell.aspx -p somepassword
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2023-11-26
- **Estrellas en GitHub:** 1.073
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SharPyShell únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/antonioCoco/SharPyShell
- Toolkit de origen: Red Teaming Toolkit
