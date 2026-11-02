---
title: "Gophish: la estafa que roba sesiones y burla el doble factor"
slug: "gophish"
summary: "Gophish: phishing y robo de sesiones para evaluar la concienciación y el MFA."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["entrega", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Gophish

**Gophish** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La entrega es la fase en la que el payload llega a la víctima. Un vector mal elegido arruina una operación por muy bueno que sea el implante.

> Descripción oficial: Gophish is an open-source phishing toolkit designed for businesses and penetration testers. It provides the ability to quickly and easily setup and execute phishing engagements and security awareness training.

## Para qué sirve

Gophish se utiliza en la fase de **entrega** (phishing). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
git clone https://github.com/gophish/gophish
cd gophish
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
Gophish - Open-Source Phishing Framework

The MIT License (MIT)

Copyright (c) 2013 - 2020 Jordan Wright

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software ("Gophish Community Edition") and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2024-09-23
- **Estrellas en GitHub:** 14.369
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Gophish únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/gophish/gophish
- Toolkit de origen: Red Teaming Toolkit
