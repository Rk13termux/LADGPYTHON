---
title: "SpiderFoot: la información que convierte un objetivo en un mapa"
slug: "spiderfoot"
summary: "SpiderFoot: reconocimiento para descubrir activos, puertos y servicios expuestos."
category: "python"
level: "Intermedio"
reading: 7
tags: ["reconocimiento", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SpiderFoot

**SpiderFoot** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un red team, el reconocimiento define el resto del engagement: cuanto mejor sea el mapa inicial, menos ruido y más precisión en las fases siguientes.

> Descripción oficial: SpiderFoot is an open source intelligence (OSINT) automation tool. It integrates with just about every data source available and utilises a range of methods for data analysis, making that data easy to navigate.

## Para qué sirve

SpiderFoot se utiliza en la fase de **reconocimiento**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
wget https://github.com/smicallef/spiderfoot/archive/v4.0.tar.gz
tar zxvf v4.0.tar.gz
cd spiderfoot-4.0
pip3 install -r requirements.txt
python3 ./sf.py -l 127.0.0.1:5001
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./spiderfoot --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-04-13
- **Estrellas en GitHub:** 24.222
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa SpiderFoot únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/smicallef/spiderfoot
- Toolkit de origen: Red Teaming Toolkit
