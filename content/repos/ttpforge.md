---
title: "TTPForge: The TTPForge is a Framework created to facilitate the development, automation, a"
slug: "ttpforge"
summary: "The TTPForge is a Framework created to facilitate the development, automation, and execution of Tactics, Techniques, and Procedures (TTPs)."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'adversary-emulation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es TTPForge

TTPForge es una herramienta de seguridad ofensiva / red team. The TTPForge is a Framework created to facilitate the development, automation, and execution of Tactics, Techniques, and Procedures (TTPs).

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/facebookincubator/TTPForge](https://github.com/facebookincubator/TTPForge)
- **Sección del toolkit:** Miscellaneous → Adversary Emulation

## Objetivo y función

El objetivo principal de TTPForge es the ttpforge is a framework created to facilitate the development, automation, and execution of tactics, techniques, and procedures (ttps).

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Get latest TTPForge release:

   ```bash
   curl \
   https://raw.githubusercontent.com/facebookincubator/TTPForge/main/dl-rl.sh \
   | bash
   ```

   At this point, the latest `ttpforge` release should be in
   `$HOME/.local/bin/ttpforge` and subsequently, the `$USER`'s `$PATH`.

   If running in a stripped down system, you can add TTPForge to your `$PATH`
   with the following command:

   ```bash
   export PATH=$HOME/.local/bin:$PATH
   ```

1. Initialize TTPForge configuration

   This command will place a configuration file at the default location
   `~/.ttpforge/config.yaml` and configure the `examples` and `forgearmory` TTP
   repositories:

   ```bash
   ttpforge init
   ```

1. List available TTP repositories (should show `examples` and `forgearmory`)

   ```bash
   ttpforge list repos
   ```

   The `examples` repository contains the TTPForge examples found in this
   repository. The
   [ForgeArmory](https://github.com/facebookincubator/ForgeArmory) repository
   contains our arsenal of attacker TTPs powered by TTPForge.

1. List available TTPs that you can run:

   ```bash
   ttpforge list ttps
   ```

1. Examine an example TTP:

   ```bash
   ttpforge show ttp examples//args/basic.yaml
   ```

1. Run the specified example:

   ```bash
   ttpforge run examples//args/basic.yaml \
     --arg str_to_print=hello \
     --arg run_second_step=true
   ```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/facebookincubator/TTPForge
cd ttpforge

# Revisar ayuda
./ttpforge --help 2>/dev/null || python3 -m ttpforge --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa TTPForge únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/facebookincubator/TTPForge
- Toolkit de origen: Red Teaming Toolkit
