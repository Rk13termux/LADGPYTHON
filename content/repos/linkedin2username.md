---
title: "linkedin2username: reconocimiento profundo sin disparar alarmas"
slug: "linkedin2username"
summary: "linkedin2username: reconocimiento para descubrir activos, puertos y servicios expuestos."
category: "python"
level: "Intermedio"
reading: 7
tags: ["reconocimiento", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es linkedin2username

**linkedin2username** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un red team, el reconocimiento define el resto del engagement: cuanto mejor sea el mapa inicial, menos ruido y más precisión en las fases siguientes.

> Descripción oficial: OSINT Tool: Generate username lists for companies on LinkedIn

## Para qué sirve

linkedin2username se utiliza en la fase de **reconocimiento**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/initstring/linkedin2username
cd linkedin2username
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
usage: linkedin2username.py [-h] -c COMPANY [-n DOMAIN] [-d DEPTH]
  [-s SLEEP] [-x PROXY] [-k KEYWORDS] [-g] [-o OUTPUT]

OSINT tool to generate lists of probable usernames from a given company's LinkedIn page.
This tool may break when LinkedIn changes their site.
Please open issues on GitHub to report any inconsistencies.

optional arguments:
  -h, --help            show this help message and exit
  -c COMPANY, --company COMPANY
                        Company name exactly as typed in the company linkedin profile page URL.
  -n DOMAIN, --domain DOMAIN
                        Append a domain name to username output.
                        [example: "-n targetco.com" would output jschmoe@targetco.com]
  -d DEPTH, --depth DEPTH
                        Search depth (how many loops of 25). If unset, will try to grab them
                        all.
  -s SLEEP, --sleep SLEEP
                        Seconds to sleep between search loops. Defaults to 0.
  -x PROXY, --proxy PROXY
                        Proxy server to use. WARNING: WILL DISABLE SSL VERIFICATION.
                        [example: "-p https://localhost:8080"]
  -k KEYWORDS, --keywords KEYWORDS
                        Filter results by a a list of command separated keywords.
                        Will do a separate loop for each keyword,
                        potentially bypassing the 1,000 record limit. 
                        [example: "-k 'sales,human resources,information technology']
  -g, --geoblast        Attempts to bypass the 1,000 record search limit by running
                        multiple searches split across geographic regions.
  -o OUTPUT, --output OUTPUT
                        Output Directory, defaults to li2u-output
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-05-20
- **Estrellas en GitHub:** 1.888
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa linkedin2username únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/initstring/linkedin2username
- Toolkit de origen: Red Teaming Toolkit
