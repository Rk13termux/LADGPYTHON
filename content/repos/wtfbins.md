---
title: "WTFBins: el binario legítimo que se convierte en arma"
slug: "wtfbins"
summary: "WTFBins: herramienta de seguridad ofensiva para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es WTFBins

**WTFBins** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: WTFBin(n): a binary that behaves exactly like malware, except, somehow, it's not? This project aims to catalogue benign applications that exhibit suspicious behavior. These binaries can emit noise and false positives in threat hunting and automated detections.

## Para qué sirve

WTFBins se utiliza en la fase de **recursos y automatización** (living off the living off the land). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://wtfbins.wtf/
cd wtfbins.wtf
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./wtfbins.wtf --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** no especificado
- **Última actualización del repositorio:** —
- **Estrellas en GitHub:** —
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa WTFBins únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://wtfbins.wtf/
- Toolkit de origen: Red Teaming Toolkit
