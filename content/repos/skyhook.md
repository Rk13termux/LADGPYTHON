---
title: "skyhook: C2: el cerebro invisible de una intrusión"
slug: "skyhook"
summary: "skyhook: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es skyhook

**skyhook** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: A round-trip obfuscated HTTP file transfer setup built to bypass IDS detections.

## Para qué sirve

skyhook se utiliza en la fase de **mando y control** (staging). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/blackhillsinfosec/skyhook
cd skyhook
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
flowchart

subgraph sg-cloudfront[Cloudfront CDN]
    cf-listener(443/tls)
end

subgraph sg-vps[VPS]
    subgraph sg-skyhook[Skyhook Servers]
        admin-listener(Admin Server<br>45000/tls)
        transfer-listener(Transfer Server<br>45001/tls)
    end

    config-file(Config File<br>/var/skyroot/config.yml)

    admin-listener -..->|Reads &<br>Manages| config-file

    webroot(Webroot<br>/var/skyhook/webroot)
    transfer-listener -..->|Serves From &<br>Writes Cleartext<br>Files To| webroot
end


    op-browser(Operator<br>Web Browser) -->|Administration<br>Traffic| admin-listener
    op-browser <-->|Obfuscated<br>Data| transfer-listener

subgraph sg-corp[Corporate Environment]
    subgraph sg-compromised[Beachhead Host]
        comp-browser(Web Browser) -->|Reads &<br>Writes| cleartext-file(Cleartext Files)
    end
end

comp-browser <-->|Obfuscated<br>Data| cf-listener <-->|Obfuscated<br>Data| transfer-listener
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2024-05-10
- **Estrellas en GitHub:** 291
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa skyhook únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/blackhillsinfosec/skyhook
- Toolkit de origen: Red Teaming Toolkit
