---
title: "RefleXXion: RefleXXion is a utility designed to aid in bypassing user-mode hooks utilised by"
slug: "reflexxion"
summary: "RefleXXion is a utility designed to aid in bypassing user-mode hooks utilised by AV/EPP/EDR etc."
category: "ciberseguridad"
level: "Avanzado"
reading: 6
tags: ['defense-evasion', 'red-team']
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es RefleXXion

RefleXXion es una herramienta de seguridad ofensiva / red team. RefleXXion is a utility designed to aid in bypassing user-mode hooks utilised by AV/EPP/EDR etc.

Forma parte del ecosistema de herramientas de adversary simulation y es útil para comprender cómo operan los atacantes y cómo detectar sus técnicas.

- **Repositorio oficial:** [https://github.com/hlldz/RefleXXion](https://github.com/hlldz/RefleXXion)
- **Sección del toolkit:** Defense Evasion 

## Objetivo y función

El objetivo principal de RefleXXion es reflexxion is a utility designed to aid in bypassing user-mode hooks utilised by av/epp/edr etc.

En un engagement de red team, esta herramienta se usa para automatizar o simplificar una fase concreta del ataque (reconocimiento, acceso inicial, movimiento lateral, evasión, etc.), reduciendo el tiempo manual y aumentando la cobertura.

## Instalación

* RefleXXion currently is only supports for x64 architecture.
* RefleXXion only unhooks NTDLL functions, you may need to unhook other DLLs (kernel32.dll, advapi32.dll etc.) as well. For this, you can easily edit the necessary places in the project. 
* The RefleXXion only uses the RWX memory region when overwriting the .TEXT section process starts. For this process a new memory reginon is not created, the existing memory region (the TEXT section of the NTDLL that is already loaded) is RWXed and then converted to RX.

  ```cpp
  ULONG oldProtection;
  ntStatus = NtProtectVirtualMemory(NtCurrentProcess(), &lpBaseAddress, &uSize, PAGE_EXECUTE_READWRITE, &oldProtection);
  memcpy()...
  ntStatus = NtProtectVirtualMemory(NtCurrentProcess(), &lpBaseAddress, &uSize, oldProtection, &oldProtection);
  ```

  *P.S. The RefleXXion invokes the NtProtectVirtualMemory API over the cleanly installed NTDLL. It uses the CustomGetProcAddress function for this because the clean NTDLL is not in the InLoadOrderModuleList even though it is loaded into memory. So a solution like here (https://stackoverflow.com/questions/6734095/how-to-get-module-handle-from-func-ptr-in-win32) will not work. That's why the custom GetProcAddress function exists and is used.*
* You can load RefleXXion DLL from disk to target process. You may not prefer a run like this for sensitive work such as a Red Team operation. Therefore, you can convert the RefleXXion DLL to shellcode using the sRDI project or integrate the Refle
...


## Uso básico

Consulta el README oficial para la sintaxis exacta. Un flujo típico:

```bash
# Clonar
git clone https://github.com/hlldz/RefleXXion
cd reflexxion

# Revisar ayuda
./reflexxion --help 2>/dev/null || python3 -m reflexxion --help 2>/dev/null || true
```

> Adapta los comandos a tu entorno. Muchas de estas herramientas requieren privilegios elevados o sistemas Windows/Active Directory.

## ¿Se puede usar en Termux?

Este repositorio puede instalarse en Termux si el dispositivo cumple los requisitos (Python/Go/Rust y dependencias). En Android, ejecuta los comandos dentro de Termux y verifica permisos de red/almacenamiento.

## Buenas prácticas y ética

Usa RefleXXion únicamente en entornos que poseas o para los que tengas autorización escrita. El uso no autorizado es ilegal. En laboratorios, monta una VM aislada y una red de pruebas.

## Referencias

- Repositorio: https://github.com/hlldz/RefleXXion
- Toolkit de origen: Red Teaming Toolkit
