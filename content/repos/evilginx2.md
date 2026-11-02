---
title: "Evilginx2: la estafa que roba sesiones y burla el doble factor"
slug: "evilginx2"
summary: "Evilginx2: phishing y robo de sesiones para evaluar la concienciación y el MFA."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["entrega", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Evilginx2

**Evilginx2** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La entrega es la fase en la que el payload llega a la víctima. Un vector mal elegido arruina una operación por muy bueno que sea el implante.

> Descripción oficial: Evilginx2 is a man-in-the-middle attack framework used for phishing credentials and session cookies of any web service.

## Para qué sirve

Evilginx2 se utiliza en la fase de **entrega** (phishing). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/kgretzky/evilginx2
cd evilginx2
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

Consulta la ayuda del proyecto tras la instalación:

```bash
./evilginx2 --help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-06-10
- **Estrellas en GitHub:** 15.817
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Evilginx2 únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/kgretzky/evilginx2
- Toolkit de origen: Red Teaming Toolkit
