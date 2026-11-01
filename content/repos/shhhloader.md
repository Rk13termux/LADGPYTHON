---
title: "Shhhloader: Shhhloader is a work in progress shellcode loader. It takes raw shellcode as inp"
slug: "shhhloader"
summary: "Shhhloader is a work in progress shellcode loader. It takes raw shellcode as input and compiles a C++ stub that does a bunch of different things to try and bypass AV/EDR"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['initial-access', 'payload-development', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Shhhloader

Shhhloader es una herramienta de seguridad ofensiva / red team. Shhhloader is a work in progress shellcode loader. It takes raw shellcode as input and compiles a C++ stub that does a bunch of different things to try and bypass AV/EDR

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/icyguider/Shhhloader](https://github.com/icyguider/Shhhloader)
- **Sección del toolkit:** Initial Access → Payload Development

## Objetivo y función

El objetivo principal de Shhhloader es shhhloader is a work in progress shellcode loader. it takes raw shellcode as input and compiles a c++ stub that does a bunch of different things to try and bypass av/edr.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

cd ..
git clone https://github.com/tpoechtrager/wclang.git
cd wclang/
cmake -DCMAKE_INSTALL_PREFIX=_prefix_ .
make
make install
export wclang_path=$(pwd)/_prefix_/bin
echo "export PATH=$wclang_path:$PATH" >> ~/.bashrc
export PATH=$wclang_path:$PATH

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/icyguider/Shhhloader
cd shhhloader

# Revisar ayuda
./shhhloader --help 2>/dev/null || python3 -m shhhloader --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa Shhhloader únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/icyguider/Shhhloader
- Toolkit de origen: Red Teaming Toolkit
