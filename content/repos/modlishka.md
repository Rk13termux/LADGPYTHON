---
title: "Modlishka: la estafa que roba sesiones y burla el doble factor"
slug: "modlishka"
summary: "Modlishka: phishing y robo de sesiones para evaluar la concienciación y el MFA."
category: "ciberseguridad"
level: "Intermedio"
reading: 7
tags: ["entrega", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es Modlishka

**Modlishka** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. La entrega es la fase en la que el payload llega a la víctima. Un vector mal elegido arruina una operación por muy bueno que sea el implante.

> Descripción oficial: Modlishka is a flexible and powerful reverse proxy, that will take your ethical phishing campaigns to the next level.

## Para qué sirve

Modlishka se utiliza en la fase de **entrega** (phishing). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
go install github.com/drk1wi/Modlishka@latest
```

```bash
git clone https://github.com/drk1wi/Modlishka.git
cd Modlishka
make
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
./dist/proxy -h

Usage of ./dist/proxy:

  -cert string
      base64 encoded TLS certificate
  -certKey string
      base64 encoded TLS certificate key
  -certPool string
      base64 encoded Certification Authority certificate
  -config string
      JSON configuration file. Convenient instead of using command line switches.
  -controlCreds string
      Username and password to protect the credentials page. user:pass format
  -controlURL string
      URL to view captured credentials and settings. (default "SayHello2Modlishka")
  -credParams string
      Credential regexp with matching groups. e.g.: base64(username_regex),base64(password_regex)
  -debug
      Print debug information
  -disableSecurity
      Disable proxy security features like anti-SSRF. Disable at your own risk.
  -disableDynamicSubdomains
      Translate URL domain names to be the proxy domain
  -dynamicMode
      Enable dynamic mode for 'Client Domain Hooking'
  -forceHTTP
      Strip all TLS from the traffic and proxy through HTTP only
  -forceHTTPS
      Strip all clear-text from the traffic and proxy through HTTPS only
  -allowSecureCookies
      Allow secure cookies to be set. Useful when using HTTPS and cookies have SameSite=None
  -ignoreTranslateDomains string
      Comma separated list of domains to never translate and proxy
  -jsRules string
      Comma separated list of URL patterns and JS base64 encoded payloads that will be injected
      e.g.: target.tld:base64(alert(1))
  -listeningAddress string
      Listening address (default "127.0.0.1")
  -listeningPortHTTP int
      Listening port for HTTP requests (default 80)
  -listeningPortHTTPS int
      Listening port for HTTPS requests (default 443)
  -log string
      Local file to which fetched requests will be written (appended)
  -pathHostRules string
      Comma separated list of URL path patterns and target domains
      e.g.: /path/:example.com,/path2:www.example.com
  -plugins string
      Comma separated list of enabled plugin names (default "all")
  -postOnly
      Log only HTTP POST requests
  -proxyAddress string
      Proxy that should be used (socks/https/http) e.g.: http://127.0.0.1:8080
  -proxyDomain string
      Proxy domain name that will be used e.g.: proxy.tld
  -rules string
      Comma separated list of string patterns and their replacements
      e.g.: base64(old):base64(new),base64(older):base64(newer)
  -staticLocations string
      Comma separated list of FQDNs in location headers that should be preserved
  -target string
      Target domain name e.g.: target.tld
  -targetRes string
      Comma separated list of domains that were not translated automatically
      e.g.: static.target.tld
  -terminateTriggers string
      Comma separated list of URLs from target's origin which will trigger session termination
  -terminateUrl string
      URL to which a client will be redirected after session termination
  -trackingCookie string
      Name of the HTTP cookie used to track the client (default "id")
  -trackingParam string
      Name of the HTTP parameter used to track the client (default "id")
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Go
- **Última actualización del repositorio:** 2026-08-14
- **Estrellas en GitHub:** 5.434
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa Modlishka únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/drk1wi/Modlishka
- Toolkit de origen: Red Teaming Toolkit
