---
title: "Nmap sin mitos: qué hace, qué no hace y cómo usarlo con responsabilidad"
slug: "nmap-uso-responsable"
summary: "Descubrimiento de hosts, escaneo de servicios y lectura de resultados. Una introducción práctica con límites legales claros."
category: "ciberseguridad"
level: "Principiante"
reading: 9
tags: ["nmap", "reconocimiento", "redes", "ética"]
updated: "2026-10-14"
featured: false
order: 5
---

## Qué es Nmap

Nmap es un escáner de red. Envía paquetes y analiza las respuestas para descubrir hosts, puertos abiertos, servicios y, con scripts, posibles vulnerabilidades conocidas.

No es una herramienta de ataque. Es una herramienta de **observación**. La diferencia entre un diagnóstico y un delito está en el permiso.

> **Límite legal:** escanea solo equipos propios o redes sobre las que tengas autorización escrita. Escanear infraestructura ajena puede violar leyes de acceso no autorizado, incluso si no explotas nada.

## Instalación

```bash
sudo apt update
sudo apt install -y nmap
nmap --version
```

En Termux:

```bash
pkg install -y nmap
```

## Descubrir hosts en tu red local

```bash
ip route
nmap -sn 192.168.1.0/24
```

`-sn` hace un ping scan: no escanea puertos, solo comprueba qué direcciones responden. Es útil para inventariar tu propia red.

## Escaneo básico de puertos

```bash
nmap -sT -p 1-1000 192.168.1.10
```

- `-sT` usa conexión TCP completa. Funciona sin privilegios, pero es más lento y ruidoso.
- `-p` limita el rango de puertos.
- Sin `-sS`, no necesitas `sudo`.

## Detectar servicios y versiones

```bash
nmap -sV -p 22,80,443 192.168.1.10
```

La salida indica el servicio probable y su versión. Esa información es el punto de partida para comprobar si hay actualizaciones pendientes.

## Guardar resultados

```bash
nmap -sV -oN escaneo.txt 192.168.1.10
nmap -sV -oX escaneo.xml 192.168.1.10
```

Guardar evidencia importa. Un hallazgo sin fecha, alcance y salida reproducible no sirve en una auditoría.

## Cómo leer la salida

| Estado | Significado |
|---|---|
| `open` | Un servicio acepta conexiones |
| `closed` | El puerto responde, pero no hay servicio |
| `filtered` | Un firewall o filtro impide saber el estado |
| `unfiltered` | El puerto es accesible, pero no se pudo determinar el estado |
| `open|filtered` | Nmap no distingue entre abierto y filtrado |

No confundas “sin respuesta” con “seguro”. Un firewall puede ocultar un servicio vulnerable.

## Errores frecuentes

- Escanear rangos enormes “para ver qué sale”. Es lento, ruidoso e innecesario.
- Interpretar una versión como vulnerable sin comprobar el parche real.
- Usar `-T4` o `-T5` en redes frágiles y saturarlas.
- Ejecutar scripts `--script vuln` sin entender qué hacen.
- Olvidar documentar la autorización.

## Un flujo de trabajo sensato

1. Define el alcance por escrito.
2. Inventaria hosts con `-sn`.
3. Escanea solo los puertos necesarios.
4. Identifica servicios con `-sV`.
5. Contrasta versiones con fuentes oficiales.
6. Documenta hallazgos y limitaciones.
7. Propón remediación, no solo el hallazgo.

## Siguiente paso

Saber lanzar un escaneo es el nivel más bajo de la competencia. Lo valioso es interpretar el contexto, priorizar riesgos y comunicar decisiones. Ese criterio se entrena con método y práctica guiada.
