---
title: "ROADtools: The Azure AD exploration framework"
slug: "roadtools"
summary: "The Azure AD exploration framework."
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['miscellaneous', 'cloud', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ROADtools

ROADtools es una herramienta de seguridad ofensiva / red team. The Azure AD exploration framework.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/dirkjanm/ROADtools](https://github.com/dirkjanm/ROADtools)
- **Sección del toolkit:** Miscellaneous → Cloud

## Objetivo y función

El objetivo principal de ROADtools es the azure ad exploration framework.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

There are multiple ways to install ROADrecon:

**Using a published version on PyPi**  
Stable versions can be installed with `pip install roadrecon`. This will automatically add the `roadrecon` command to your PATH.

**Using a version from GitHub**  
Every commit to master is automatically built into a release version with Azure Pipelines. This ensures that you can install the latest version of the GUI without having to install `npm` and all it's dependencies. You can download the `roadlib` and `roadrecon` build files from the [Azure Pipelines artifacts](https://dev.azure.com/dirkjanm/ROADtools/_build/latest?definitionId=19&branchName=master) (click on the button "1 Published". The build output files are stored in `ROADtools.zip`. You can either install the `.whl` or `.tar.gz` files directly using pip or unzip both and install the folders in the correct order (`roadlib` first):

```
pip install roadlib/
pip install roadrecon/
```

You can also install them in development mode with `pip install -e roadlib/`.

**Developing the front-end**  
If you want to make changes to the Angular front-end, you will need to have `node` and `npm` installed. Then install the components from git:
```
git clone https://github.com/dirkjanm/roadtools.git
pip install -e roadlib/
pip install -e roadrecon/
cd roadrecon/frontend/
npm install
```

You can run the Angular frontend with `npm start` or `ng serve` using the Angular CLI from the `roadrecon/frontend/` directory. To build the JavaScript files
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/dirkjanm/ROADtools
cd roadtools

# Revisar ayuda
./roadtools --help 2>/dev/null || python3 -m roadtools --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ROADtools únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/dirkjanm/ROADtools
- Toolkit de origen: Red Teaming Toolkit
