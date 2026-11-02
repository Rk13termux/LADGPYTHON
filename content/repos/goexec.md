---
title: "goexec: de una sesión a todo el bosque de Active Directory"
slug: "goexec"
summary: "goexec: movimiento lateral y ejecución remota en redes Windows."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["movimiento-lateral", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es goexec

**goexec** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El movimiento lateral permite pasar de un host a otro usando credenciales, servicios y confianza interna, hasta alcanzar los objetivos.

> Descripción oficial: GoExec is a new take on some of the methods used to gain remote execution on Windows devices. GoExec implements a number of largely unrealized execution methods and provides significant OPSEC improvements overall.

## Para qué sirve

goexec se utiliza en la fase de **movimiento lateral**. Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```shell
# Install goexec (release)
go install -ldflags="-s -w" -trimpath "github.com/FalconOpsLLC/goexec@latest"
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```text
Usage:
  goexec wmi [command] [flags]

Available Commands:
  proc        Start a Windows process
  call        Execute specified WMI method

... [inherited flags] ...

Network:
  -x, --proxy URI           Proxy URI
  -F, --epm-filter string   String binding to filter endpoints returned by the RPC endpoint mapper (EPM)
      --endpoint string     Explicit RPC endpoint definition
      --epm                 Use EPM to discover available bindings
      --no-sign             Disable signing on DCERPC messages
      --no-seal             Disable packet stub encryption on DCERPC message
```

```text
Usage:
  goexec wmi proc [target] [flags]

Execution:
  -e, --exec string         Remote Windows executable to invoke
  -a, --args string         Process command line arguments
  -c, --command string      Windows process command line (executable &
                            arguments)
  -o, --out string          Fetch execution output to file or "-" for
                            standard output
  -m, --out-method string   Method to fetch execution output (default "smb")
      --no-delete-out       Preserve output file on remote filesystem
  -d, --directory string    Working directory (default "C:\\")

... [inherited flags] ...
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-03-25
- **Estrellas en GitHub:** 815
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa goexec únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/FalconOpsLLC/goexec
- Toolkit de origen: Red Teaming Toolkit
