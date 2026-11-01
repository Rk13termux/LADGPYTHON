---
title: "CredBandit: CredBandit is a proof of concept Beacon Object File (BOF) that uses static x64 s"
slug: "credbandit"
summary: "CredBandit is a proof of concept Beacon Object File (BOF) that uses static x64 syscalls to perform a complete in memory dump of a process and send that back through your already existing Beacon communication channel."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['credential-dumping', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es CredBandit

CredBandit es una herramienta de seguridad ofensiva / red team. CredBandit is a proof of concept Beacon Object File (BOF) that uses static x64 syscalls to perform a complete in memory dump of a process and send that back through your already existing Beacon communication channel.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/xforcered/CredBandit](https://github.com/xforcered/CredBandit)
- **Sección del toolkit:** Credential Dumping 

## Objetivo y función

El objetivo principal de CredBandit es credbandit is a proof of concept beacon object file (bof) that uses static x64 syscalls to perform a complete in memory dump of a process and send that back through your already existing beacon communication channel.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

1. Copy the credBandit folder with all of its contents and place it a directory just above your cobaltstrike folder on whatever system you plan to connect with via the GUI application.
2. Load in the MiniDumpWriteDump.cna Aggressor script
3. Run credBandit against target LSASS process (or other process)
4. Download the dump file from the Aggressor Downloads console
6. Use Mimikatz to extract the dump file

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/xforcered/CredBandit
cd credbandit

# Revisar ayuda
./credbandit --help 2>/dev/null || python3 -m credbandit --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa CredBandit únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/xforcered/CredBandit
- Toolkit de origen: Red Teaming Toolkit
