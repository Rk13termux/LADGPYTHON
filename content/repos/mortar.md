---
title: "mortar: la técnica para operar sin que el EDR lo detecte"
slug: "mortar"
summary: "mortar: evasión de EDR, antivirus y telemetría defensiva."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es mortar

**mortar** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: evasion technique to defeat and divert detection and prevention of security products (AV/EDR/XDR)

## Para qué sirve

mortar se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
#Debian & Ubuntu 

apt install fpc 
apt install lazarus-ide 
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
1. inject Mortar DLL into remote process( DLL injection, Hijacking, sideloading).
2. connect into the named pipe to supply your URL 
   echo {BASE64 URL} > \\.\pipe\moj_ML_ntsvcs 
3. payload will be executed once valid value has been recieved. 
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Pascal
- **Última actualización del repositorio:** 2023-12-21
- **Estrellas en GitHub:** 1.514
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa mortar únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/0xsp-SRD/mortar
- Toolkit de origen: Red Teaming Toolkit
