---
title: "SauronEye: SauronEye is a search tool built to aid red teams in finding files containing sp"
slug: "sauroneye"
summary: "SauronEye is a search tool built to aid red teams in finding files containing specific keywords."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'host-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SauronEye

SauronEye es una herramienta de seguridad ofensiva / red team. SauronEye is a search tool built to aid red teams in finding files containing specific keywords.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/vivami/SauronEye](https://github.com/vivami/SauronEye)
- **Sección del toolkit:** Situational Awareness → Host Situational Awareness

## Objetivo y función

El objetivo principal de SauronEye es sauroneye is a search tool built to aid red teams in finding files containing specific keywords.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

```
C:\>SauronEye.exe -d C:\Users\vincent\Desktop\ --filetypes .txt .doc .docx .xls --contents --keywords password pass* -v`

         === SauronEye ===

Directories to search: C:\Users\vincent\Desktop\
For file types: .txt, .doc, .docx, .xls
Containing: wacht, pass
Search contents: True
Search Office 2003 files for VBA: True
Max file size: 1000 KB
Search Program Files directories: False
Searching in parallel: C:\Users\vincent\Desktop\
[+] C:\Users\vincent\Desktop\test\wachtwoord - Copy (2).txt
[+] C:\Users\vincent\Desktop\test\wachtwoord - Copy (3).txt
[+] C:\Users\vincent\Desktop\test\wachtwoord - Copy.txt
[+] C:\Users\vincent\Desktop\test\wachtwoord.txt
[+] C:\Users\vincent\Desktop\pass.txt
[*] Done searching file system, now searching contents
[+] C:\Users\vincent\Desktop\pass.txt
         ...the admin password=admin123...

[+] C:\Users\vincent\Desktop\test.docx:
         ...this is a testPassword = "welkom12...


 Done. Time elapsed = 00:00:01.6656911
```

Search multiple directories, including network drives:

`SauronEye.exe --directories C:\ \\SOMENETWORKDRIVE\C$ --filetypes .txt .bat .docx .conf --contents --keywords password pass*` 

Search paths and shares containing spaces:

`SauronEye.exe -d "C:\Users\user\Path with a space" -d "\\SOME NETWORK DRIVE\C$" --filetypes .txt --keywords password pass*`

```
C:\>SauronEye.exe --help

         === SauronEye ===

Usage: SauronEye.exe [OPTIONS]+ argument
Search directories for files containing specific keywords.

Options:
 
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/vivami/SauronEye
cd sauroneye

# Revisar ayuda
./sauroneye --help 2>/dev/null || python3 -m sauroneye --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa SauronEye únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/vivami/SauronEye
- Toolkit de origen: Red Teaming Toolkit
