---
title: "CloudMapper: la puerta trasera que nadie revisa en la nube"
slug: "cloudmapper"
summary: "CloudMapper: enumeración y ataque de entornos cloud y Microsoft 365."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CloudMapper

**CloudMapper** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: CloudMapper helps you analyze your Amazon Web Services (AWS) environments.

## Para qué sirve

CloudMapper se utiliza en la fase de **recursos y automatización** (cloud). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
# clone the repo
git clone https://github.com/duo-labs/cloudmapper.git
# Install pre-reqs for pyjq
brew install autoconf automake awscli freetype jq libtool python3
cd cloudmapper/
python3 -m venv ./venv && source venv/bin/activate
pip install --prefer-binary -r requirements.txt
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
# Generate the data for the network map
python cloudmapper.py prepare --config config.json.demo --account demo
# Generate a report
python cloudmapper.py report --config config.json.demo --account demo
python cloudmapper.py webserver
```

```bash
python cloudmapper.py collect --account my_account
```

## Compatibilidad y requisitos

- **Lenguaje principal:** JavaScript
- **Última actualización del repositorio:** 2024-07-15
- **Estrellas en GitHub:** 6.289
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa CloudMapper únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/duo-labs/cloudmapper
- Toolkit de origen: Red Teaming Toolkit
