---
title: "BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files: BOF.NET is a small native BOF object combined with the BOF.NET managed runtime t"
slug: "bof-net-a-net-runtime-for-cobalt-strike-s-beacon-object-files"
summary: "BOF.NET is a small native BOF object combined with the BOF.NET managed runtime that enables the development of Cobalt Strike BOFs directly in .NET. BOF.NET removes the complexity of native compilation along with the headaches of manually importing native API."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files

BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files es una herramienta de seguridad ofensiva / red team. BOF.NET is a small native BOF object combined with the BOF.NET managed runtime that enables the development of Cobalt Strike BOFs directly in .NET. BOF.NET removes the complexity of native compilation along with the headaches of manually importing native API.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/CCob/BOF.NET](https://github.com/CCob/BOF.NET)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files es bof.net is a small native bof object combined with the bof.net managed runtime that enables the development of cobalt strike bofs directly in .net. bof.net removes the complexity of native compilation along with the headaches of manually importing native api.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

Implementing you first BOF.NET class is simple.  Add a reference to the BOF.NET runtime DLL from the [BOFNET NuGet](https://www.nuget.org/packages/BOFNET) package and create a class that inherits from `BeaconObject`.  A mandatory constructor with a  `BeaconApi` object as the only parameter is needed.  This should be passed along to the `BeaconObject` base constructor.

Finally override the `Go` function.  Arguments will be pre-processed for you exactly how a `Main` function behaves inside a normal .NET assembly. 

```C#
namespace BOFNET.Bofs {
    public class HelloWorld : BeaconObject {
        public HelloWorld(BeaconApi api) : base(api) { }
        public override void Go(string[] args) {
            BeaconConsole.WriteLine($"[+] Welcome to BOF.NET { (args.Length > 0 ? args[0] : "anonymous" )}");
        }
    }
}
```

Once you have compiled your BOF.NET assembly, download the .nupkg from the releases page or nuget.org.  Open the package in your favorite zip application and extract the contents of the lib folder.  Move the BOFNET.DLL from your preferred target framework folder into the same folder as the .cna and BOF obj files.  The final structre should look like this.

```
.
+--
|  +-- BOFNET.dll
|  +-- bofnet.cna
|  +-- bofnet_execute.cpp.x86.obj
|  +-- bofnet_execute.cpp.x64.obj 
```

Load the bofnet.cna aggresor script into Cobalt Strike and being using your BOF.NET class.

Before any BOF.NET class can be used, the BOF.NET runtime needs to be initialised within the be
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/CCob/BOF.NET
cd bof-net-a-net-runtime-for-cobalt-strike-s-beacon-object-files

# Revisar ayuda
./bof.net---a-.net-runtime-for-cobalt-strike's-beacon-object-files --help 2>/dev/null || python3 -m bof.net_-_a_.net_runtime_for_cobalt_strike's_beacon_object_files --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Esta herramienta está pensada para Windows, .NET o entornos de Active Directory. No se instala de forma nativa en Termux; úsala desde una máquina virtual, un contenedor o un laboratorio con Windows/Linux completo.

## Buenas prácticas y ética

Usa BOF.NET - A .NET Runtime for Cobalt Strike's Beacon Object Files únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/CCob/BOF.NET
- Toolkit de origen: Red Teaming Toolkit
