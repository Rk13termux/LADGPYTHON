---
title: "LatLoader: el salto silencioso entre equipos de una red"
slug: "latloader"
summary: "LatLoader: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es LatLoader

**LatLoader** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: PoC module to demonstrate automated lateral movement with the Havoc C2 framework.

## Para qué sirve

LatLoader se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/icyguider/LatLoader
cd LatLoader
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
LatLoader rupload dc1 /root/demon.x64.exe C:\Windows\Temp\test.exe
```

```bash
LatLoader exec dc1 "cmd.exe /c whoami > C:\poc.txt"
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C++
- **Última actualización del repositorio:** 2023-12-09
- **Estrellas en GitHub:** 315
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa LatLoader únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/icyguider/LatLoader
- Toolkit de origen: Red Teaming Toolkit
