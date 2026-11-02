---
title: "Responder/MultiRelay: el túnel que atraviesa NAT y firewalls"
slug: "responder-multirelay"
summary: "Responder/MultiRelay: movimiento lateral y ejecución remota en redes Windows."
category: "python"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Responder/MultiRelay

**Responder/MultiRelay** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: LLMNR/NBT-NS/mDNS Poisoner and NTLMv1/2 Relay.

## Para qué sirve

Responder/MultiRelay se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
sudo apt-get update
sudo apt-get install python3 python3-pip python3-netifaces
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
sudo python3 Responder.py --help
```

```bash
# Standard LLMNR/NBT-NS poisoning
sudo python3 Responder.py -I eth0 -v

# Analyze mode (passive monitoring)
sudo python3 Responder.py -I eth0 -A -v
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-06-10
- **Estrellas en GitHub:** 6.647
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Responder/MultiRelay únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/lgandx/Responder
- Toolkit de origen: Red Teaming Toolkit
