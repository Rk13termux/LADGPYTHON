---
title: "dnscan: el radar que encuentra lo que otros pasan por alto"
slug: "dnscan"
summary: "dnscan: reconocimiento para descubrir activos, puertos y servicios expuestos."
category: "python"
level: "Intermedio"
reading: 7
tags: ["reconocimiento", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es dnscan

**dnscan** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un red team, el reconocimiento define el resto del engagement: cuanto mejor sea el mapa inicial, menos ruido y más precisión en las fases siguientes.

> Descripción oficial: dnscan is a python wordlist-based DNS subdomain scanner.

## Para qué sirve

dnscan se utiliza en la fase de **reconocimiento**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/rbsec/dnscan
cd dnscan
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
dnscan.py -d dev-%%.example.org
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2024-12-17
- **Estrellas en GitHub:** 1.282
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa dnscan únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/rbsec/dnscan
- Toolkit de origen: Red Teaming Toolkit
