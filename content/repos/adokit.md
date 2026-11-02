---
title: "ADOKit: la puerta trasera que nadie revisa en la nube"
slug: "adokit"
summary: "ADOKit: enumeración y ataque de entornos cloud y Microsoft 365."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ADOKit

**ADOKit** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: ADOKit is a toolkit that can be used to attack Azure DevOps Services by taking advantage of the available REST API

## Para qué sirve

ADOKit se utiliza en la fase de **recursos y automatización** (cloud). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
git clone https://github.com/xforcered/ADOKit
cd ADOKit
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
### Whoami

#### Use Case

> *Get the current user and the user's group memberhips*

#### Syntax

Provide the `whoami` module, along with any relevant authentication information and URL. This will output the current user and all of its group memberhips.

`ADOKit.exe whoami /credential:apiKey /url:https://dev.azure.com/organizationName`

`ADOKit.exe whoami /credential:"UserAuthentication=ABC123" /url:https://dev.azure.com/organizationName`

#### Example Output
```

```bash
### List Orgs

#### Use Case

> *Retrieve organizations using a given access token.*


#### Syntax

Provide the `listorgs` module with the required authentication information. By default, this command lists only the organizations accessible with the provided access token. 

- Use **`/mode:aad`** to enumerate **all** DevOps organizations within the Azure AD tenant, regardless of direct access.
- Use **`/endpoint:ENDPOINT_NAME`** to specify a custom AEX endpoint.  
  - Additional endpoints can be identified by inspecting the `"X-VSS-DeploymentAffinity"` cookie from `aex.dev.azure.com`.

`ADOKit.exe listorgs /credential:"eyj0..." [/mode:aad] [/endpoint:ENDPOINT_NAME]`

`ADOKit.exe listorgs /credential:"eyj0..." /mode:aad /endpoint:aexprodeus21`

#### Example Output
```

## Compatibilidad y requisitos

- **Lenguaje principal:** C#
- **Última actualización del repositorio:** 2025-03-15
- **Estrellas en GitHub:** 318
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa ADOKit únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/xforcered/ADOKit
- Toolkit de origen: Red Teaming Toolkit
