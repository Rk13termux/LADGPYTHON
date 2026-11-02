---
title: "PEzor: entrar sin ruido y sin quemar la operación"
slug: "pezor"
summary: "PEzor: técnicas de acceso inicial para operaciones de red team."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["acceso-inicial", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PEzor

**PEzor** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El acceso inicial es el momento más delicado de una intrusión: hay que conseguir una entrada sin activar las alertas y sin quemar infraestructura.

> Descripción oficial: Open-Source PE Packer

## Para qué sirve

PEzor se utiliza en la fase de **acceso inicial** (payload development). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/phra/PEzor.git
cd PEzor
sudo bash install.sh
bash PEzor.sh -h
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
 ________________
< PEzor!! v3.3.0 >
 ----------------
      \                    / \  //\
       \    |\___/|      /   \//  \\
            /0  0  \__  /    //  | \ \
           /     /  \/_/    //   |  \  \
           @_^_@'/   \/_   //    |   \   \
           //_^_/     \/_ //     |    \    \
        ( //) |        \///      |     \     \
      ( / /) _|_ /   )  //       |      \     _\
    ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  (( / / )) ,-{        _      `-.|.-~-.           .~         `.
 (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
 (( /// ))      `.   {            }                   /      \  \
  (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
             ///.----..>        \             _ -~             `.  ^-`  ^-_
               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
                                                                  /.-~
---------------------------------------------------------------------------
```

```bash
USAGE
PEzor help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C
- **Última actualización del repositorio:** 2024-02-03
- **Estrellas en GitHub:** 2.143
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa PEzor únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/phra/PEzor
- Toolkit de origen: Red Teaming Toolkit
