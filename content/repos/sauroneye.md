---
title: "SauronEye: entiende el host antes de moverte"
slug: "sauroneye"
summary: "SauronEye: conciencia situacional para entender el entorno comprometido."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["conciencia-situacional", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SauronEye

**SauronEye** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La conciencia situacional permite al operador entender el entorno antes de moverse: procesos, defensas, usuarios, shares y configuraciones.

> Descripción oficial: SauronEye is a search tool built to aid red teams in finding files containing specific keywords.

## Para qué sirve

SauronEye se utiliza en la fase de **conciencia situacional** (host situational awareness). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/vivami/SauronEye
cd SauronEye
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
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

```bash
C:\>SauronEye.exe --help

         === SauronEye ===

Usage: SauronEye.exe [OPTIONS]+ argument
Search directories for files containing specific keywords.

Options:
  -d, --directories=VALUE    Directories to search
  -f, --filetypes=VALUE      Filetypes to search for/in
  -k, --keywords=VALUE       Keywords to search for
  -c, --contents             Search file contents
  -m, --maxfilesize=VALUE    Max file size to search contents in, in kilobytes
  -b, --beforedate=VALUE     Filter files last modified before this date,
                                format: yyyy-MM-dd
  -a, --afterdate=VALUE      Filter files last modified after this date,
                                format: yyyy-MM-dd
  -s, --systemdirs           Search in filesystem directories %APPDATA% and %
                               WINDOWS%
  -v, --vbamacrocheck        Check if 2003 Office files (*.doc and *.xls)
                               contain a VBA macro
  -h, --help                 Show help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2026-05-19
- **Estrellas en GitHub:** 767
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SauronEye únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/vivami/SauronEye
- Toolkit de origen: Red Teaming Toolkit
