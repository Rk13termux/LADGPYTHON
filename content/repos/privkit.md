---
title: "PrivKit: PrivKit is a simple beacon object file that detects privilege escalation vulnera"
slug: "privkit"
summary: "PrivKit is a simple beacon object file that detects privilege escalation vulnerabilities caused by misconfigurations on Windows OS."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['privilege-escalation', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PrivKit

PrivKit es una herramienta de seguridad ofensiva / red team. PrivKit is a simple beacon object file that detects privilege escalation vulnerabilities caused by misconfigurations on Windows OS.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/mertdas/PrivKit](https://github.com/mertdas/PrivKit)
- **Sección del toolkit:** Privilege Escalation 

## Objetivo y función

El objetivo principal de PrivKit es privkit is a simple beacon object file that detects privilege escalation vulnerabilities caused by misconfigurations on windows os.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

⚠️ Please ensure that MinGW-w64 is installed on your system.

ℹ️ For Linux platforms (Ubuntu/Debian) install the following package:
```
sudo apt update && sudo apt install mingw-w64 -y
```

ℹ️ For MacOS platforms install the following package:
```
brew install mingw-w64
```

1) Clone the repository by executing the following command:
```
git clone https://github.com/mertdas/PrivKit.git
```

2) Once the repository is cloned, navigate into the PrivKit directory:
```
cd PrivKit
```

3) Use the `make_all.sh` script compiles all BOFs for both x64 and x86 architectures:
```
./make_all.sh
```

4) Load the aggressor script in Cobalt Strike:
```
Cobalt Strike -> Script Manager -> Load -> PrivCheck.cna
```

5) Verify installation in beacon:
```
beacon> help
```

## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/mertdas/PrivKit
cd privkit

# Revisar ayuda
./privkit --help 2>/dev/null || python3 -m privkit --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa PrivKit únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/mertdas/PrivKit
- Toolkit de origen: Red Teaming Toolkit
