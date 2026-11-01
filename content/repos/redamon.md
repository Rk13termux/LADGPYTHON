---
title: "RedAmon: An AI-powered agentic red team framework that automates offensive security opera"
slug: "redamon"
summary: "An AI-powered agentic red team framework that automates offensive security operations, from reconnaissance to exploitation to post-exploitation, with zero human intervention."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'offensive-ai-agent', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RedAmon

RedAmon es una herramienta de seguridad ofensiva / red team. An AI-powered agentic red team framework that automates offensive security operations, from reconnaissance to exploitation to post-exploitation, with zero human intervention.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/samugit83/redamon](https://github.com/samugit83/redamon)
- **Sección del toolkit:** Miscellaneous → Offensive AI Agent

## Objetivo y función

El objetivo principal de RedAmon es an ai-powered agentic red team framework that automates offensive security operations, from reconnaissance to exploitation to post-exploitation, with zero human intervention.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

| Resource | Without OpenVAS | With OpenVAS (full stack) |
|----------|----------------|--------------------------|
| **CPU** | 2 cores | 4 cores |
| **RAM** | 7 GB | 10 GB (16 GB recommended) |
| **Disk** | 80 GB free | 110 GB free |

> **RAM is checked at start.** `./redamon.sh` refuses to start when the memory Docker can use does not cover the minimum of every service the profile runs (the memory allocator's per-service floors, see [README.MEMORY_GOVERNOR.md](docs/readmes/README.MEMORY_GOVERNOR.md)). With the default reserves that is about 6.5 GB for the core stack and about 9.6 GB with OpenVAS. `REDAMON_SKIP_RAM_GATE=1` skips the check.

> **Without OpenVAS** runs 9 containers: webapp, postgres, neo4j, agent, kali-sandbox, recon-orchestrator, docker-broker (a filtering Docker-socket proxy that the recon orchestrator's spawned scan containers go through, so they can only launch the known tool images), and the plugin platform's plugin-runner and plugin-gateway.
> **With OpenVAS** adds 4 more runtime containers (gvmd, ospd-openvas, gvm-postgres, gvm-redis) plus ~8 one-shot data-init containers for vulnerability feeds (~170K+ NVTs). First launch takes ~30 minutes for GVM feed synchronization.
> Dynamic recon and scan containers are spawned on-demand during operations and require additional resources.

> **Disk sizing for a real deployment.** The figures above are bare minimums to build and run the stack (fixed platform footprint: ~70 GB without OpenVAS, ~95 GB with - measured
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/samugit83/redamon
cd redamon

# Revisar ayuda
./redamon --help 2>/dev/null || python3 -m redamon --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa RedAmon únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/samugit83/redamon
- Toolkit de origen: Red Teaming Toolkit
