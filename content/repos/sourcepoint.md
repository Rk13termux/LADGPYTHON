---
title: "SourcePoint: control remoto persistente con tráfico camuflado"
slug: "sourcepoint"
summary: "SourcePoint: framework de mando y control para mantener el acceso."
category: "ciberseguridad"
level: "Avanzado"
reading: 7
tags: ["mando-y-control", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es SourcePoint

**SourcePoint** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. El C2 es el sistema nervioso de la operación: permite enviar tareas, recibir resultados y mantener el control aunque cambie la red.

> Descripción oficial: SourcePoint is a C2 profile generator for Cobalt Strike command and control servers designed to ensure evasion.

## Para qué sirve

SourcePoint se utiliza en la fase de **mando y control** (staging). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, se integra en cadenas de ataque sobre Windows y Active Directory, donde el operador necesita ejecución fiable y controlada.

## Instalación

```bash
go get gopkg.in/yaml.v2

go build SourcePoint.go
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
#./SourcePoint -h

	   _____                            ____        _       __
	  / ___/____  __  _______________  / __ \____  (_)___  / /_
	  \__ \/ __ \/ / / / ___/ ___/ _ \/ /_/ / __ \/ / __ \/ __/
	 ___/ / /_/ / /_/ / /  / /__/  __/ ____/ /_/ / / / / / /_
	/____/\____/\__,_/_/   \___/\___/_/    \____/_/_/ /_/\__/
  							(@Tyl0us)


Usage of ./SourcePoint:
  -Allocation string
        Minimum amount of memory to request for injected content (must be higher than 4096)
  -BeaconGate string
        Specify beacon gate options (All, Comms, Core, Cleanup) or specific APIs
  -CDN string
        CDN cookie name (typically used for AzureEdge profiles)
  -CDN-Value string
        CDN cookie value (typically used for AzureEdge profiles)
  -Customuri string
        The base URI for custom HTTP GET/POST profile - Cannot be used with CustomuriGET or CustomuriPOST
  -CustomuriGET string
        The base URI for custom HTTP GET profile - Must be used with CustomuriPOST
  -CustomuriPOST string
        The base URI for custom HTTP POST profile - Must be used with CustomuriGET
  -Datajitter string
        Appends a value to HTTP-Get and HTTP-Post server output (default "50")
  -Forwarder
        Enabled the X-forwarded-For header (Good for when your C2 is behind a redirector)
  -Host string
        Team server domain name
  -Httplib string
        Select the default HTTP Beacon library:
        [*] wininet
        [*] winhttp' (default "winhttp")
  -Injector string
        Select the preferred method to allocate memory in the remote process:
        [*] VirtualAllocEx (Great for cross architecture i.e x86 -> x64 and x64->x86)
        [*] NtMapViewOfSection (A more stealthly option, however fails over to VirtualAllocEx, generating more events when it does)
  -Jitter string
        Jitter percentage for beacon call home
  -Keylogger string
        Select the preferred method the beacon will use to log keystrokes: 
        [*] GetAsyncKeyState (Uses GetAsyncKeyState API (Separate DLL for x86/x64 process))
        [*] SetWindowsHookEx (Uses SetWindowsHookEx API)
  -Keystore string
        SSL keystore name
  -Metadata string
        Specifies how to transform and embed metadata into the HTTP request:
        [*] base64
        [*] base64url
        [*] netbios
        [*] netbiosu (default "base64url")
  -Outfile string
        Name of output file
  -PE_Clone string
        PE file beacon will mimic (Use the number):
        [1] ActivationManager.dll
        [2] audioeng.dll
        [3] AzureSettingSyncProvider.dll
        [4] BingMaps.dll
        [5] DIAGCPL.dll
        [6] EDGEHTML.dll
        [7] FILEMGMT.dll
        [8] FIREWALLCONTROLPANEL.dll
        [9] GPSVC.dll
        [10] gpupvdev.dll
        [11] libcrypto.dll
        [12] srvcli.dll
        [13] srvsvc.dll
        [14] Windows.Storage.Search.dll
        [15] Windows.System.Diagnostics.dll
        [16] Windows.System.Launcher.dll
        [17] Windows.System.SystemManagement.dll
        [18] Windows.UI.BioFeedback.dll
        [19] Windows.UI.BlockedShutdown.dll
        [20] Windows.UI.Core.TextInput.DLL
        [21] winsqlite3.dll
        [22] WMNetMgr.DLL
        [23] wwanapi.dll
        [24] WWANSVC.DLL
        [25] wow64win.dll
        [26] wow64.dll
        [27] ctiuser.dll (Carbon Black's DLL)
        [28] InProcessClient.dll (SentinelOne's DLL)
        [29] umppc.dll (CrowdStrike's DLL)
        [30] CyMemDef64.dll (Cylance's DLL)
  -Password string
        SSL certificate password
  -PostEX_Name string
        File Post-Ex activities will spawn and inject into (Use the number):
        [1] WerFault.exe
        [2] WWAHost.exe
        [3] choice.exe
        [4] bootcfg.exe
        [5] w32tm.exe
        [6] expand.exe
        [7] fsutil.exe
        [8] gpupdate.exe
        [9] gpresult.exe
        [10] logman.exe
        [11] mcbuilder.exe
        [12] mtstocom.exe
        [13] pcaui.exe
        [14] powercfg.exe
        [15] svchost.exe
  -Profile string
        HTTP GET/POST profile (Use the number):
        [1] Windowsupdate
        [2] Slack
        [3] Gotomeeting
        [4] Outlook.Live
        [5] Safebrowsing [Cloudfront Compatible]
        [6] AzureEdge [AzureEdge Compatible]
        [7] Field-Keyword [Cloudfront Compatible]
        [8] Custom (Used with ProfilePath)
  -ProfilePath string
        Path of custom HTTP GET/POST profile...
  -Sleep string
        Initial beacon sleep time
  -Stage string
        Disable host staging (Default: False) (default "false")
  -Syscall string
        Defines the ability to use direct/indirect system calls instead of the standard Windows API functions calls:
        [*] None
        [*] Direct
        [*] Indirect (default "None")
  -TasksDnsProxyMaxSize string
        The maximum size (in bytes) of proxy data to transfer via the DNS communication channel at a check in
  -TasksMaxSize string
        The maximum size (in bytes) of task(s) and proxy data that can be transferred through a communication channel at a check in
  -TasksProxyMaxSize string
        The maximum size (in bytes) of proxy data to transfer via the communication channel at a check in
  -ThreadSpoof
        Sets post-ex DLLs to spawn threads with a spoofed start address. These are generated randomly (default true)
  -RdllUseDriploading
        Enable driploading for RDLL stage (gradually loads beacon in smaller chunks to evade memory scanners) (default true)
  -RdllDriploadDelay string
        Delay in milliseconds between loading chunks for RDLL driploading (default: random 100-200ms)
  -UseDriploading
        Enable driploading for process injection (gradually writes payload in smaller chunks to evade EDR) (default true)
  -DriploadDelay string
        Delay in milliseconds between writing chunks for process injection driploading (default: random 100-200ms)
  -CopyPEHeader
        Copy PE Header to match cloned DLL characteristics (default false)
  -EafBypass
        Enable Export Address Filtering (EAF) bypass (default false)
  -RdllLoader string
        Rdll Loader Options:
        [*] PrependLoader (default)
        [*] StompLoader (Older method)
  -RdllUseSyscalls
        Use Syscalls for Rdll operations (default false)
  -SmartInject
        Enable Smart Inject - uses embedded function pointer hints to bootstrap without walking kernel32 EAT (default false)
  -SleepMask
        Enable Sleep Mask - obfuscates beacon in memory while sleeping (default true)
  -TransformObfuscate string
        Transform obfuscate options (comma-separated list):
        [*] lznt1
        [*] rc4 "64"
        [*] xor "32"
        [*] base64
        Example: "lznt1,rc4 \"64\",xor \"32\",base64"
  -CheckinDelay string
        Delay in milliseconds before Beacon's initial check-in (CS 4.13+ - breaks event correlation on reflective load)
  -ClientMaxPostPostSize string
        Maximum size in bytes of POST body (CS 4.13+ - bypass DLP solutions)
  -ClientMaxPostGetSize string
        Maximum size in bytes of chunked data when posting via a GET header (CS 4.13+ - bypass DLP solutions)
  -Uri string
        The number URIs a profile for beacons to choose from
  -Useragent string
        UserAgent string for the beacon to use (Leave blank to randomly select one):
        [*] Win10Chrome
        [*] Win10Edge
        [*] Win10IE
        [*] Win10Firefox
        [*] Win10
        [*] Win6.3
        [*] Linux
        [*] Mac
  -Yaml string
        Path to the Yaml config file
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-09-29
- **Estrellas en GitHub:** 1.227
- **Termux:** no

**Requiere Windows o un entorno Windows.** Esta herramienta está diseñada para Windows, .NET, Active Directory o Cobalt Strike. No se ejecuta de forma nativa en Termux; úsala en una máquina virtual, un laboratorio aislado o un equipo de pruebas con Windows.

## Ética y alcance

Usa SourcePoint únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/Tylous/SourcePoint
- Toolkit de origen: Red Teaming Toolkit
