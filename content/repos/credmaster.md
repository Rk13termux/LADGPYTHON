---
title: "CredMaster: cómo se roban credenciales en un entorno real"
slug: "credmaster"
summary: "CredMaster: extracción, spraying y reutilización de credenciales."
category: "python"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CredMaster

**CredMaster** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Refactored & improved CredKing password spraying tool, uses FireProx APIs to rotate IP addresses, stay anonymous, and beat throttling

## Para qué sirve

CredMaster se utiliza en la fase de **acceso inicial** (brute force). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/knavesec/CredMaster
cd CredMaster
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
python3 credmaster.py --plugin {pluginname} --access_key {key} --secret_access_key {key} -u userfile -p passwordfile -a useragentfile {otherargs}
```

```bash
python3 credmaster.py --config config.json
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2025-03-19
- **Estrellas en GitHub:** 1.301
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa CredMaster únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/knavesec/CredMaster
- Toolkit de origen: Red Teaming Toolkit
