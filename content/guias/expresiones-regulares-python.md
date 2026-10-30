---
title: "Expresiones regulares en Python sin memorizar símbolos"
slug: "expresiones-regulares-python"
summary: "Una ruta práctica por re, grupos, búsquedas y sustituciones con ejemplos que puedes ejecutar y modificar."
category: "python"
level: "Intermedio"
reading: 10
tags: ["python", "regex", "texto", "re"]
updated: "2026-10-17"
featured: false
order: 4
---

## Qué es una expresión regular

Un patrón que describe un conjunto de cadenas. Sirve para buscar, validar y transformar texto. La sintaxis parece críptica al principio porque comprime muchas reglas en pocos caracteres.

La buena noticia: el 90 % del trabajo diario usa un subconjunto pequeño.

## El módulo `re`

```python
import re

texto = "Servidor: 192.168.1.10, puerto: 8080"
patron = r"(\d{1,3}(?:\.\d{1,3}){3})"

resultado = re.search(patron, texto)
print(resultado.group(1) if resultado else "sin coincidencia")
```

Salida:

```output
192.168.1.10
```

## Las piezas que más vas a usar

| Símbolo | Significado | Ejemplo |
|---|---|---|
| `.` | Cualquier carácter salvo salto de línea | `a.c` |
| `\d` | Dígito | `\d{4}` |
| `\w` | Letra, dígito o guion bajo | `\w+` |
| `\s` | Espacio en blanco | `\s+` |
| `*` | Cero o más | `ab*` |
| `+` | Uno o más | `ab+` |
| `?` | Cero o uno | `ab?` |
| `{n,m}` | Entre n y m repeticiones | `\d{2,4}` |
| `^` | Inicio de cadena o línea | `^Error` |
| `$` | Final de cadena o línea | `\.txt$` |
| `[]` | Conjunto de caracteres | `[aeiou]` |
| `()` | Grupo de captura | `(ab)+` |
| `(?:)` | Grupo sin captura | `(?:ab)+` |
| `\|` | Alternancia | `gato\|perro` |

## Buscar, encontrar todo y sustituir

```python
import re

registro = "2026-10-17 ERROR fallo de conexión\n2026-10-18 INFO arranque correcto"

# Todas las fechas
fechas = re.findall(r"\d{4}-\d{2}-\d{2}", registro)
print(fechas)

# Nivel y mensaje
for nivel, mensaje in re.findall(r"^\S+\s+(\w+)\s+(.+)$", registro, re.MULTILINE):
    print(nivel, "->", mensaje)

# Normalizar espacios
limpio = re.sub(r"\s+", " ", registro)
print(limpio)
```

## Grupos con nombre

Los grupos con nombre hacen el código legible:

```python
patron = r"(?P<fecha>\d{4}-\d{2}-\d{2})\s+(?P<nivel>\w+)"
for match in re.finditer(patron, registro):
    print(match.group("fecha"), match.group("nivel"))
```

## Validar sin volverse loco

```python
def es_correo_valido(valor: str) -> bool:
    patron = r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
    return re.fullmatch(patron, valor) is not None

print(es_correo_valido("usuario@dominio.com"))  # True
print(es_correo_valido("usuario@dominio"))      # False
```

Esta validación es deliberadamente simple. Para reglas RFC completas, usa una librería especializada o valida con un correo de confirmación.

## Compilar patrones

Si el patrón se usa muchas veces, compílalo:

```python
import re

FECHA = re.compile(r"\d{4}-\d{2}-\d{2}")
print(FECHA.findall(registro))
```

`re` cachea patrones, pero compilar explícitamente deja clara la intención y evita búsquedas repetidas.

## Errores habituales

- Usar `re.match` esperando buscar en cualquier posición. `match` solo ancla al inicio; usa `search`.
- Olvidar `re.MULTILINE` al trabajar con `^` y `$` en varias líneas.
- Escapar de menos en rutas de Windows (`r"C:\ruta"`).
- Crear patrones con `.*` y confiar en que “funcionará”. Sé específico.
- Validar datos críticos solo con regex. La validación de negocio va aparte.

## Siguiente paso

Las regex son una herramienta de precisión. Combinarlas con una buena estructura de datos y pruebas automáticas es lo que convierte un script frágil en código mantenible.
