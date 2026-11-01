---
title: "ImproHound: Identify the attack paths in BloodHound breaking your AD tiering"
slug: "improhound"
summary: "Identify the attack paths in BloodHound breaking your AD tiering"
category: "ciberseguridad"
level: "Intermedio"
reading: 6
tags: ['situational-awareness', 'domain-situational-awareness', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es ImproHound

ImproHound es una herramienta de seguridad ofensiva / red team. Identify the attack paths in BloodHound breaking your AD tiering

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/improsec/ImproHound](https://github.com/improsec/ImproHound)
- **Sección del toolkit:** Situational Awareness → Domain Situational Awareness

## Objetivo y función

El objetivo principal de ImproHound es identify the attack paths in bloodhound breaking your ad tiering.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

**1. Set up your BloodHound database**
1. [Install BloodHound](https://bloodhound.readthedocs.io/en/latest/#install)

1. Collect BloodHound data with [SharpHound](https://bloodhound.readthedocs.io/en/latest/data-collection/sharphound.html) in your AD
 	> Note this will generate noise in your AV, SIEM, etc.
 	
	Example: Run [SharpHound.exe](https://github.com/BloodHoundAD/BloodHound/blob/master/Collectors/SharpHound.exe) from cmd, collect all (yes, GPOLocalGroup is not included in All):

	```
	SharpHound.exe --CollectionMethods All,GPOLocalGroup
	```
	
	> Tip 1: Use the ```Domain``` parameter to collect data from other domains in the forest.
	
	> Tip 2: To get even more data use [The Session Loop Collection Method](https://bloodhound.readthedocs.io/en/latest/data-collection/sharphound.html#the-session-loop-collection-method) 

1. Upload your BloodHound data in the [BloodHound GUI](https://bloodhound.readthedocs.io/en/latest/#import-and-explore-the-data)
	> There is a bug in BloodHound that sometimes cause the domain json file to be skipped when uploading a BloodHound data zip. Check the DB stats in BloodHound after data upload and make sure the domain objects exist.  
 	
**2. Install APOC Neo4j plugin**
(enables awesome graph operations we need) 
1. Download the [APOC](https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases) version matching your Neo4j version (apoc-x.x.x.x-all.jar).

	Find the APOC version matching your Neo4j version in the [version compatibility matr
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/improsec/ImproHound
cd improhound

# Revisar ayuda
./improhound --help 2>/dev/null || python3 -m improhound --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa ImproHound únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/improsec/ImproHound
- Toolkit de origen: Red Teaming Toolkit
