---
title: "DllShimmer: cómo se abre el primer acceso en un entorno real"
slug: "dllshimmer"
summary: "DllShimmer: técnicas de acceso inicial para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es DllShimmer

**DllShimmer** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Weaponize DLL hijacking easily. Backdoor any function in any DLL.

## Para qué sirve

DllShimmer se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/Print3M/DllShimmer
cd DllShimmer
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
# Backdoor version.dll (proxy to absolute path)
./DllShimmer -i version.dll -o project/ -x "C:/Windows/System32/version.dll" -m

# Backdoor random chat.dll (proxy to relative path)
./DllShimmer -i chat.dll -o project/ -x "lib/chat2.dll" -m

# Backdoor random app.dll (static linking to the original DLL)
./DllShimmer -i app.dll -o project/ -x "app2.dll" -m --static
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2025-08-26
- **Estrellas en GitHub:** 763
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa DllShimmer únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Print3M/DllShimmer
- Toolkit de origen: Red Teaming Toolkit
