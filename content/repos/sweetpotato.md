---
title: "SweetPotato: la escalada que rompe el modelo de permisos"
slug: "sweetpotato"
summary: "SweetPotato: escalada de privilegios y abuso de configuraciones débiles."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["escalada-de-privilegios", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SweetPotato

**SweetPotato** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La escalada de privilegios convierte un acceso limitado en control administrativo, y con él en la capacidad de tocar casi cualquier sistema.

> Descripción oficial: A collection of various native Windows privilege escalation techniques from service accounts to SYSTEM

## Para qué sirve

SweetPotato se utiliza en la fase de **escalada de privilegios**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/CCob/SweetPotato
cd SweetPotato
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
SweetPotato by @_EthicalChaos_
  Orignal RottenPotato code and exploit by @foxglovesec
  Weaponized JuciyPotato by @decoder_it and @Guitro along with BITS WinRM discovery
  PrintSpoofer discovery and original exploit by @itm4n
  EfsRpc built on EfsPotato by @zcgonvh and PetitPotam by @topotam
  -c, --clsid=VALUE          CLSID (default BITS:
                               4991D34B-80A1-4291-83B6-3328366B9097)
  -m, --method=VALUE         Auto,User,Thread (default Auto)
  -p, --prog=VALUE           Program to launch (default cmd.exe)
  -a, --args=VALUE           Arguments for program (default null)
  -e, --exploit=VALUE        Exploit mode
                               [DCOM|WinRM|EfsRpc|PrintSpoofer(default)]
  -l, --listenPort=VALUE     COM server listen port (default 6666)
  -h, --help                 Display this help
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2024-09-04
- **Estrellas en GitHub:** 1.845
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SweetPotato únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/CCob/SweetPotato
- Toolkit de origen: Red Teaming Toolkit
