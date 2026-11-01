---
title: "Manual de comandos de Termux: 260 comandos para convertir Android en un laboratorio"
slug: "manual-comandos-termux"
summary: "Más de 250 comandos organizados en 10 capítulos: fundamentos, interfaz de Android, hardware, comunicación, procesos, texto, scripting, archivos, redes y diagnóstico. Con explicaciones, ejemplos y combinaciones listas para usar."
category: "termux"
level: "Intermedio"
reading: 40
tags: ["termux", "android", "linux", "terminal", "comandos", "bash", "scripting"]
updated: "2026-10-31"
featured: true
order: 3
---

## Introducción

Termux es un emulador de terminal para Android que ejecuta un sistema Linux real sin necesidad de root. No es una app de juguete: permite instalar Python, Git, compiladores, servidores web, herramientas de red y utilidades del ecosistema GNU. Con él, un teléfono se convierte en un laboratorio portátil.

Este manual reúne más de 300 comandos organizados en 10 capítulos, desde la instalación de paquetes hasta el diagnóstico del sistema. Cada entrada explica qué hace el comando y, cuando tiene sentido, cómo se combina con otros.

### Convenciones usadas

- `<paquete>`, `<archivo>`, `<URL>` y similares son marcadores: sustitúyelos por el valor real.
- Los comandos se ejecutan dentro de Termux, salvo que se indique lo contrario.
- Muchos comandos de la API de Android requieren el paquete `termux-api` y su app complementaria instalada.
- Un comando que termina en `&` se ejecuta en segundo plano; sin él, el terminal queda bloqueado hasta que termine.

### Antes de empezar

```bash
pkg update -y && pkg upgrade -y
pkg install termux-api
termux-setup-storage
```

La primera línea actualiza los repositorios y los paquetes. La segunda instala la API que habla con Android. La tercera pide permiso para acceder al almacenamiento compartido y crea `~/storage/shared`.

> Descarga Termux desde **F-Droid** o desde el repositorio oficial en GitHub. La versión de Google Play está abandonada y falla al actualizar paquetes.

## Índice

1. [La base de Termux](#1-la-base-de-termux)
2. [Interacción con la interfaz de Android](#2-interacción-con-la-interfaz-de-android)
3. [Acceso al hardware del dispositivo](#3-acceso-al-hardware-del-dispositivo)
4. [Comunicación y conectividad](#4-comunicación-y-conectividad)
5. [Procesos, trabajos y sesiones](#5-procesos-trabajos-y-sesiones)
6. [Manipulación avanzada de archivos y texto](#6-manipulación-avanzada-de-archivos-y-texto)
7. [Scripting y automatización](#7-scripting-y-automatización)
8. [Almacenamiento y archivos comprimidos](#8-almacenamiento-y-archivos-comprimidos)
9. [Redes y conexiones seguras](#9-redes-y-conexiones-seguras)
10. [Internos del sistema y diagnóstico](#10-internos-del-sistema-y-diagnóstico)

## 1. La base de Termux

Todo empieza aquí. Estos comandos gestionan el entorno, instalan herramientas y permiten navegar por el sistema de archivos. Dominarlos es el primer paso.

| Comando | Explicación |
|---|---|
| `pkg update` | Actualiza la lista de paquetes disponibles en los repositorios suscritos. |
| `pkg upgrade` | Actualiza todos los paquetes instalados a su versión más reciente. |
| `pkg install <paquete>` | Instala un paquete concreto, por ejemplo `termux-api`. |
| `pkg uninstall <paquete>` | Elimina un paquete del sistema. |
| `pkg reinstall <paquete>` | Reinstala un paquete; útil para reparar instalaciones rotas. |
| `pkg list-installed` | Muestra todos los paquetes instalados. |
| `pkg search <consulta>` | Busca paquetes disponibles. |
| `pkg show <paquete>` | Muestra información detallada de un paquete. |
| `pkg files <paquete>` | Lista todos los archivos que instaló un paquete. |
| `termux-setup-storage` | Solicita permiso para acceder al almacenamiento compartido del dispositivo. |
| `pwd` | Muestra la ruta completa del directorio actual. |
| `ls` | Lista los archivos y carpetas del directorio actual. |
| `cd` | Cambia de directorio (`cd ..` sube un nivel, `cd ~` va a home). |
| `clear` | Limpia la pantalla del terminal. |
| `exit` | Cierra la sesión actual de Termux. |
| `mkdir <nombre>` | Crea un directorio nuevo. |
| `touch <archivo>` | Crea un archivo vacío. |
| `rm <archivo>` | Elimina un archivo. Usa `rm -r <directorio>` para borrar un directorio. |
| `cp <origen> <destino>` | Copia un archivo o directorio. |
| `mv <origen> <destino>` | Mueve o renombra un archivo o directorio. |
| `whoami` | Muestra el nombre de usuario actual (por ejemplo, `u0_a123`). |
| `uname -o` | Muestra el sistema operativo (Android). |
| `df -h` | Muestra el uso de disco en formato legible. |
| `top` | Muestra una vista en vivo de los procesos y el uso de recursos. |
| `ping <host>` | Comprueba la conectividad de red con un servidor (por ejemplo, `ping google.com`). |
| `ifconfig` | Muestra la información de las interfaces de red y la dirección IP. |

> **Tip:** antes de instalar nada, ejecuta `pkg update`. Un repositorio desactualizado es la causa más frecuente de errores al instalar paquetes.

## 2. Interacción con la interfaz de Android

Estos comandos, sobre todo los de `termux-api`, sacan los scripts del terminal y los conectan con la interfaz gráfica de Android. Crean el puente entre la línea de comandos y el entorno visual.

| Comando | Explicación |
|---|---|
| `termux-toast "mensaje"` | Muestra una notificación pequeña y temporal (un "toast"). |
| `termux-dialog` | Crea un cuadro de diálogo para pedir texto al usuario. |
| `termux-dialog checkbox -v "Op1,Op2"` | Crea un diálogo con casillas de selección. |
| `termux-dialog confirm -t "¿Pregunta?"` | Crea un diálogo con botones "Sí" y "No". |
| `termux-dialog counter -r "1,10,5"` | Crea un diálogo para elegir un número en un rango (mín, máx, inicio). |
| `termux-dialog date` | Crea un diálogo con selector de fecha. |
| `termux-dialog radio -v "Opción1,Opción2"` | Crea un diálogo con opciones de radio (solo una seleccionable). |
| `termux-dialog sheet -v "Elemento1,Elemento2"` | Crea una hoja inferior con elementos seleccionables. |
| `termux-dialog spinner -v "Valor1,Valor2"` | Crea un diálogo con menú desplegable. |
| `termux-dialog speech -t "Di algo"` | Abre un diálogo para entrada de voz. |
| `termux-dialog time` | Crea un diálogo con selector de hora. |
| `termux-notification --title "Alerta"` | Publica una notificación en el panel de Android. |
| `termux-notification-remove <id>` | Elimina una notificación creada por Termux. |
| `termux-clipboard-get` | Imprime el contenido actual del portapapeles. |
| `termux-clipboard-set "texto"` | Coloca texto en el portapapeles del sistema. |
| `termux-open <URL>` | Abre una URL en el navegador por defecto. |
| `termux-open <archivo>` | Abre un archivo con su aplicación de Android por defecto. |
| `termux-share <archivo>` | Abre el diálogo de compartir de Android para un archivo. |
| `termux-wallpaper -f <imagen>` | Establece el fondo de pantalla desde un archivo local. |
| `termux-wallpaper -u <URL>` | Establece el fondo de pantalla desde una URL. |
| `termux-get-prop <propiedad>` | Obtiene el valor de una propiedad del sistema Android. |
| `termux-vibrate` | Vibra el dispositivo un breve periodo. |
| `termux-vibrate -d <milisegundos>` | Vibra el dispositivo durante un tiempo determinado. |
| `termux-vibrate -f` | Fuerza la vibración aunque el dispositivo esté en silencio. |
| `termux-job-scheduler` | Programa un script para que se ejecute más tarde, aunque Termux esté cerrado. |
| `logcat -d` | Vuelca el registro del sistema Android en la consola y sale. |

> **Tip:** combina `termux-dialog` con `jq` para parsear la respuesta JSON en tus scripts. Es la base de cualquier interfaz de texto para Android.

## 3. Acceso al hardware del dispositivo

Ve más allá del software y controla los componentes físicos. La API de Termux da acceso directo a la cámara, el flash, los sensores y más, convirtiendo el teléfono en una herramienta programable del mundo real.

| Comando | Explicación |
|---|---|
| `termux-battery-status` | Devuelve un objeto JSON con nivel de batería, temperatura y salud. |
| `termux-camera-info` | Devuelve datos JSON sobre las cámaras disponibles. |
| `termux-camera-photo -c 0 imagen.jpg` | Toma una foto con la cámara indicada (por ejemplo, la 0) y la guarda. |
| `termux-torch on` | Enciende la linterna. |
| `termux-torch off` | Apaga la linterna. |
| `termux-sensor` | Lista todos los sensores disponibles y sus nombres. |
| `termux-sensor -s "accelerometer"` | Empieza a transmitir datos en vivo de un sensor concreto. |
| `termux-sensor -n 1 -d 500` | Obtiene una sola lectura de todos los sensores con retardo. |
| `termux-sensor -c` | Limpia (detiene) todos los listeners de sensores activos. |
| `termux-tts-engines` | Lista los motores de texto a voz (TTS) disponibles. |
| `termux-tts-speak "Hola desde Termux"` | Usa el motor TTS por defecto para hablar en voz alta. |
| `termux-tts-speak -e <motor> "Texto"` | Habla usando un motor TTS específico. |
| `termux-tts-speak -p <tono>` | Habla con un tono vocal concreto (por ejemplo, `1.5` para más agudo). |
| `termux-tts-speak -r <velocidad>` | Habla a una velocidad concreta (por ejemplo, `0.5` para más lento). |
| `termux-microphone-record` | Empieza a grabar audio desde el micrófono. |
| `termux-microphone-record -f rec.wav -l 5` | Graba 5 segundos y guarda en un archivo. |
| `termux-microphone-record -q` | Detiene la grabación actual. |
| `termux-media-player play <archivo>` | Reproduce un archivo multimedia (audio o vídeo). |
| `termux-media-player pause` | Pausa la reproducción actual. |
| `termux-media-player stop` | Detiene la reproducción actual. |
| `termux-media-player info` | Muestra información del medio en reproducción. |
| `termux-volume` | Lista todos los flujos de audio y sus niveles de volumen. |
| `termux-volume <flujo> <nivel>` | Ajusta el volumen de un flujo concreto (por ejemplo, `termux-volume music 10`). |
| `termux-fingerprint` | Pide autenticación por huella y devuelve éxito o fallo. |
| `termux-infrared-frequencies` | Obtiene las frecuencias portadoras de infrarrojos disponibles (en dispositivos compatibles). |
| `termux-infrared-transmit -f <freq> <patrón>` | Transmite un patrón de infrarrojos. |

> **Tip:** `termux-battery-status` combinado con un bucle `while` y `sleep` permite monitorizar la batería y enviar una notificación cuando baja de un umbral.

## 4. Comunicación y conectividad

Automatiza y gestiona las funciones de comunicación del dispositivo. Estos comandos de la API permiten enviar SMS, iniciar llamadas, consultar contactos y controlar las conexiones Wi-Fi, todo desde tus scripts.

| Comando | Explicación |
|---|---|
| `termux-telephony-call <número>` | Inicia una llamada al número indicado. |
| `termux-telephony-cellinfo` | Devuelve datos JSON sobre las torres de telefonía cercanas. |
| `termux-telephony-deviceinfo` | Devuelve datos JSON sobre las capacidades de telefonía del dispositivo. |
| `termux-contact-list` | Devuelve una lista JSON de todos los contactos del dispositivo. |
| `termux-sms-list` | Devuelve una lista JSON de los SMS recientes. |
| `termux-sms-list -l 50` | Lista los últimos 50 SMS. |
| `termux-sms-send -n <número> "Msg"` | Envía un SMS a un número concreto. |
| `termux-sms-send -n <n1,n2> "Hola"` | Envía un SMS a varios números a la vez. |
| `termux-wifi-connectioninfo` | Devuelve datos JSON de la conexión Wi-Fi actual (SSID, IP, etc.). |
| `termux-wifi-scaninfo` | Devuelve una lista JSON de las redes Wi-Fi cercanas. |
| `termux-wifi-enable true` | Enciende el Wi-Fi. |
| `termux-wifi-enable false` | Apaga el Wi-Fi. |
| `termux-location` | Devuelve datos JSON con la última ubicación GPS conocida. |
| `termux-location -p <proveedor>` | Obtiene la ubicación de un proveedor concreto (`gps`, `network` o `passive`). |
| `termux-location -r <tipo>` | Especifica una actualización única (`once`) o continua (`last`). |
| `termux-download <URL>` | Descarga un archivo usando el gestor de descargas de Android. |
| `termux-download -t "Título" <URL>` | Descarga un archivo con un título personalizado en la notificación. |
| `netstat` | Muestra conexiones de red, tablas de enrutamiento y estadísticas de interfaces. |
| `ip addr` | Comando moderno para mostrar direcciones IP e información de interfaces. |
| `ip route` | Muestra la tabla de enrutamiento IP actual. |
| `ss` | Utilidad para investigar sockets (sustituto moderno de `netstat`). |
| `proot` | Emula `chroot`, permitiendo ejecutar programas con un directorio raíz distinto. |
| `proot-distro install <alias>` | Instala una distribución Linux completa (por ejemplo, Ubuntu) dentro de Termux. |
| `proot-distro login <alias>` | Abre una shell dentro de la distribución instalada. |
| `proot-distro list` | Muestra las distribuciones disponibles e instaladas. |
| `wget <URL>` | Herramienta no interactiva para descargar archivos de la web. |

> **Aviso:** `termux-sms-send` y `termux-telephony-call` requieren permisos de SMS y teléfono. Revócalos cuando no los necesites.

## 5. Procesos, trabajos y sesiones

Pasa de usuario casual a usuario avanzado. Aprende a gestionar tareas en ejecución, mantener scripts vivos en segundo plano y personalizar la sesión de shell para máxima eficiencia.

| Comando | Explicación |
|---|---|
| `ps aux` | Lista todos los procesos del usuario con detalles. |
| `kill <PID>` | Termina un proceso de forma ordenada usando su PID. |
| `kill -9 <PID>` | Mata de forma forzada un proceso bloqueado o congelado. |
| `pkill <nombre>` | Mata un proceso por su nombre en lugar de por PID. |
| `pgrep <nombre>` | Busca un proceso por nombre e imprime su PID. |
| `jobs` | Muestra las tareas en segundo plano de la sesión actual. |
| `Ctrl+Z` | Suspende el proceso en primer plano y lo mueve al segundo plano. |
| `bg` | Reanuda un trabajo suspendido y lo mantiene en segundo plano. |
| `fg %<número>` | Trae un trabajo del segundo plano al primer plano. |
| `comando &` | Añadir `&` a cualquier comando lo inicia directamente en segundo plano. |
| `disown` | Desvincula un trabajo del segundo plano de la sesión para que no se mate al salir. |
| `termux-wake-lock` | Evita que el dispositivo entre en suspensión profunda; esencial para servidores. |
| `termux-wake-unlock` | Libera el bloqueo de suspensión y permite que el dispositivo duerma. |
| `termux-reload-settings` | Aplica los cambios de `~/.termux/termux.properties` sin reiniciar. |
| `termux-info` | Muestra información de diagnóstico de la instalación de Termux. |
| `env` | Imprime todas las variables de entorno. |
| `export VAR="valor"` | Define una variable de entorno para la sesión actual. |
| `unset VAR` | Elimina una variable de entorno. |
| `alias atajo='comando largo'` | Crea un atajo de comando personalizado. |
| `unalias atajo` | Elimina un alias creado previamente. |
| `source <archivo>` | Ejecuta los comandos de un archivo en la shell actual. |
| `history` | Muestra la lista de comandos usados recientemente. |
| `uptime` | Muestra el tiempo de actividad del sistema y las cargas medias. |
| `dmesg` | Imprime mensajes del búfer del kernel, para diagnóstico de hardware. |
| `nohup <comando> &` | Ejecuta un comando que ignora la señal de cierre y sobrevive al salir. |
| `htop` | Vista interactiva de procesos y uso de recursos (`pkg install htop`). |

> **Tip:** cualquier proceso que deba sobrevivir al cerrar Termux necesita `termux-wake-lock` y, si es posible, `disown` o `nohup`.

## 6. Manipulación avanzada de archivos y texto

Aquí está el verdadero poder de la shell. Estas utilidades nativas son la piedra angular de la línea de comandos: permiten buscar, filtrar y transformar texto y archivos con precisión y velocidad.

| Comando | Explicación |
|---|---|
| `grep <"patrón"> <archivo>` | Busca un patrón de texto concreto dentro de un archivo. |
| `grep -r <"patrón"> <directorio>` | Busca un patrón de forma recursiva en todos los archivos de un directorio. |
| `grep -i <"patrón"> <archivo>` | Búsqueda sin distinguir mayúsculas y minúsculas. |
| `find <dir> -name "<archivo>"` | Busca archivos por nombre dentro de una jerarquía de directorios. |
| `find . -type f -mtime -1` | Encuentra archivos (`-type f`) en el directorio actual (`.`) modificados en el último día. |
| `sed 's/viejo/nuevo/g' <archivo>` | Editor de flujo que busca y reemplaza texto. |
| `awk '{print $1}' <archivo>` | Lenguaje de escaneo de patrones. Este ejemplo imprime la primera palabra de cada línea. |
| `cut -c 1-10 <archivo>` | Recorta e imprime los primeros 10 caracteres de cada línea. |
| `cut -d',' -f2 <archivo.csv>` | Extrae el segundo campo (`-f2`) de un CSV usando coma como delimitador. |
| `tr 'a-z' 'A-Z' < <archivo>` | Traduce caracteres. Este ejemplo convierte el contenido a mayúsculas. |
| `sort <archivo>` | Ordena las líneas de un archivo de texto alfabéticamente. |
| `sort -n <archivo>` | Ordena las líneas numéricamente. |
| `uniq <archivo>` | Descarta todas menos una de las líneas idénticas consecutivas (usar después de `sort`). |
| `wc <archivo>` | Cuenta líneas, palabras y caracteres de un archivo. |
| `diff <archivo1> <archivo2>` | Compara dos archivos línea por línea y muestra las diferencias. |
| `head -n 20 <archivo>` | Muestra las primeras 20 líneas de un archivo. |
| `tail -n 20 <archivo>` | Muestra las últimas 20 líneas de un archivo. |
| `tail -f <archivo.log>` | "Sigue" un archivo, mostrando las líneas nuevas a medida que se añaden. |
| `tee <archivo>` | Lee la entrada y la escribe a la vez en pantalla y en un archivo. |
| `ln -s <objetivo> <enlace>` | Crea un enlace simbólico (acceso directo) a un archivo o directorio. |
| `stat <archivo>` | Muestra información detallada de un archivo (tamaño, permisos, etc.). |
| `file <archivo>` | Determina e imprime el tipo de un archivo (texto ASCII, imagen JPEG, etc.). |
| `strings <binario>` | Imprime las secuencias de caracteres legibles de un archivo binario. |
| `hexdump -C <archivo>` | Muestra el contenido del archivo en hexadecimal y ASCII. |
| `base64 <archivo>` | Codifica un archivo a texto Base64. |
| `base64 -d <archivo.b64>` | Decodifica un archivo Base64 a su forma binaria original. |

> **Tip:** la combinación `grep ... | sort | uniq -c | sort -rn` es el patrón clásico para contar ocurrencias y ordenarlas de mayor a menor.

## 7. Scripting y automatización

Combina comandos individuales en scripts potentes para automatizar tareas repetitivas. Este capítulo cubre los bloques esenciales de la programación en shell: entrada del usuario, lógica y control del flujo de ejecución.

| Comando | Explicación |
|---|---|
| `read variable` | Pausa un script para esperar entrada del usuario y la guarda en una variable. |
| `echo "mensaje"` | Imprime texto en el terminal; esencial para la retroalimentación en scripts. |
| `printf "formato" "texto"` | Forma más potente de imprimir texto con formato. |
| `sleep <segundos>` | Pausa la ejecución de un script durante un número de segundos. |
| `[ -f "archivo.txt" ]` | Expresión `test` para comprobar condiciones; base de las sentencias `if`. |
| `xargs` | Construye y ejecuta comandos a partir de la entrada estándar. |
| `$(comando)` | Sustitución de comando. Ejecuta un comando y sustituye su salida. |
| `>` (redirección) | Redirige la salida de un comando a un archivo, sobrescribiéndolo. |
| `>>` (añadir) | Redirige la salida y la añade al final de un archivo. |
| `<` (entrada) | Usa un archivo como entrada para un comando. |
| `2>` (error) | Redirige solo los mensajes de error (stderr) a un archivo. |
| `&>` (todo) | Redirige la salida estándar y el error al mismo archivo. |
| `&&` (AND) | Ejecuta el segundo comando solo si el primero tiene éxito. |
| `;` (separador) | Ejecuta los comandos en secuencia, sin importar éxito o fracaso. |
| `basename /ruta/al/archivo.txt` | Elimina la ruta del directorio y deja solo el nombre del archivo (`archivo.txt`). |
| `dirname /ruta/al/archivo.txt` | Elimina el nombre del archivo y deja solo la ruta del directorio (`/ruta/al`). |
| `getopt` | Analiza opciones de línea de comandos en scripts. |
| `termux-job-scheduler -s <script>` | Programa un script para que se ejecute periódicamente, aunque Termux esté inactivo. |
| `termux-dialog \| jq '.text'` | Patrón de scripting para obtener y parsear entrada del usuario. |
| `true` | Comando que no hace nada y siempre tiene éxito (código de salida 0). |
| `false` | Comando que no hace nada y siempre falla (código de salida 1). |
| `sh <script.sh>` | Ejecuta un script de shell. |
| `chmod +x <script.sh>` | Hace ejecutable un script, para poder lanzarlo directamente con `./script.sh`. |
| `seq <inicio> <fin>` | Imprime una secuencia de números; útil en bucles `for`. |
| `\|` (tubería) | Conecta la salida de un comando con la entrada de otro. |
| `\|\|` (OR) | Ejecuta el segundo comando solo si el primero falla. |

> **Tip:** en scripts, usa siempre `set -e` para que el script se detenga ante el primer error. Es la mejor red de seguridad que puedes añadir.

## 8. Almacenamiento y archivos comprimidos

Gestiona archivos, archivos comprimidos y permisos de forma efectiva. Este capítulo cubre las herramientas esenciales para comprimir y descomprimir datos, entender el uso de disco y controlar el acceso a los archivos.

| Comando | Explicación |
|---|---|
| `chmod <permisos> <archivo>` | Cambia los permisos de acceso de un archivo (lectura, escritura, ejecución). |
| `chmod 755 <archivo>` | Conjunto común para ejecutables (propietario: rwx, grupo/otros: r-x). |
| `chown <usuario>:<grupo> <archivo>` | Cambia el propietario y el grupo de un archivo (útil en entornos proot). |
| `du -h` | Muestra el uso de disco de archivos y directorios en formato legible. |
| `du -sh <directorio>` | Muestra el tamaño total de un solo directorio (`-s` para resumen). |
| `tar -czvf <archivo.tar.gz> <dir>` | Crea un archivo comprimido (c: crear, z: gzip, v: detallado, f: archivo). |
| `tar -xzvf <archivo.tar.gz>` | Extrae un archivo comprimido (x: extraer). |
| `tar -tvf <archivo.tar.gz>` | Lista el contenido de un archivo sin extraerlo (t: listar). |
| `gzip <archivo>` | Comprime un archivo, sustituyéndolo por su versión `.gz`. |
| `gunzip <archivo.gz>` | Descomprime un archivo `.gz`. |
| `zip <archivo.zip> <archivos>` | Crea un archivo `.zip`. |
| `unzip <archivo.zip>` | Extrae archivos de un archivo `.zip`. |
| `bzip2 <archivo>` | Comprime un archivo con el algoritmo bzip2. |
| `bunzip2 <archivo.bz2>` | Descomprime un archivo `.bz2`. |
| `xz <archivo>` | Comprime un archivo con el algoritmo xz (alta compresión). |
| `unxz <archivo.xz>` | Descomprime un archivo `.xz`. |
| `termux-storage-get <archivo>` | Usa el selector de archivos del sistema para copiar un archivo al directorio actual. |
| `ls -l` | Listado largo: muestra permisos, propietario, tamaño y fecha. |
| `ls -a` | Lista todos los archivos, incluidos los ocultos (que empiezan por punto). |
| `ls -lh` | Combina listado largo con tamaños legibles. |
| `df -hT` | Muestra el espacio en disco por sistema de archivos, incluyendo su tipo (`-T`). |
| `mount` | Muestra todos los sistemas de archivos montados. |
| `readlink -f <archivo>` | Sigue un enlace simbólico hasta encontrar la ruta real del archivo original. |
| `dd if=/dev/zero of=dummy bs=1M` | Comando de bajo nivel para crear un archivo de tamaño concreto para pruebas. |
| `shred <archivo>` | Elimina de forma segura un archivo sobrescribiéndolo varias veces. |
| `pwd -L` | Imprime el directorio de trabajo lógico (respetando los enlaces simbólicos). |

> **Tip:** `tar -czvf` y `tar -xzvf` son los dos comandos que usarás el 90 % de las veces. Memoriza la `c` (crear) y la `x` (extraer); el resto es siempre igual.

## 9. Redes y conexiones seguras

Ve más allá de `ping`. Este capítulo cubre las herramientas para acceso remoto seguro, transferencia robusta de archivos y diagnóstico de red en profundidad, convirtiendo Termux en un cliente completo de administración de redes.

| Comando | Explicación |
|---|---|
| `ssh <usuario@host>` | Cliente Secure Shell para iniciar sesión en un servidor remoto de forma segura. |
| `sshd` | El demonio del servidor OpenSSH; ejecútalo para poder hacer `ssh` a tu dispositivo Termux. |
| `ssh-keygen` | Genera un par de claves criptográficas para acceso SSH sin contraseña. |
| `ssh-copy-id <usuario@host>` | Copia tu clave pública a un servidor para habilitar el acceso sin contraseña. |
| `scp <usuario@host:remoto/archivo> <local>` | Copia archivos de forma segura a través de SSH. |
| `sftp <usuario@host>` | Programa interactivo de transferencia segura de archivos sobre SSH. |
| `rsync -avh <origen> <destino>` | Herramienta potente para sincronizar archivos y directorios de forma eficiente. |
| `curl <URL>` | Herramienta versátil para transferir datos desde o hacia un servidor (descargar, probar APIs). |
| `curl -L <URL>` | Indica a curl que siga las redirecciones HTTP. |
| `curl -o <archivo> <URL>` | Guarda la salida en un archivo concreto. |
| `wget <URL>` | Utilidad sencilla y no interactiva para descargar archivos de la web. |
| `wget -c <URL>` | Continúa la descarga de un archivo parcial. |
| `wget -r <URL>` | Descarga un sitio web de forma recursiva. |
| `telnet <host> <puerto>` | Herramienta sin cifrado para comprobar si un puerto de red está abierto. |
| `hostname` | Muestra el nombre de host de red del dispositivo. |
| `ip -s link` | Muestra estadísticas detalladas de las interfaces de red (bytes, errores). |
| `arp` | Muestra la caché ARP (Protocolo de Resolución de Direcciones) del sistema. |
| `termux-contact-list \| jq` | Patrón de API para obtener y parsear datos (por ejemplo, búsquedas de contactos). |
| `termux-wifi-scaninfo \| jq` | Patrón de API para obtener y parsear información de redes Wi-Fi cercanas. |
| `ping -c 5 google.com` | Hace ping a un host 5 veces (`-c 5`) y luego se detiene. |
| `whois <dominio.com>` | Obtiene información de registro de un nombre de dominio. |
| `dig <dominio.com>` | Utilidad potente de consulta DNS. |
| `nslookup <dominio.com>` | Otra herramienta para consultar servidores DNS. |
| `netstat -r` | Muestra la tabla de enrutamiento del kernel. |
| `netstat -i` | Muestra una tabla de todas las interfaces de red. |
| `lsof -i` | Lista los procesos que están usando la red. |

> **Tip:** la combinación `ssh-keygen` + `ssh-copy-id` es el primer paso para automatizar tareas en servidores remotos sin escribir la contraseña cada vez.

## 10. Internos del sistema y diagnóstico

Para el usuario experto. Estos comandos permiten mirar bajo el capó del entorno Termux y del sistema Android subyacente, con herramientas potentes para depuración, inspección y configuración avanzada.

| Comando | Explicación |
|---|---|
| `termux-chroot` | Configura un entorno chroot tradicional de estilo Linux. |
| `login` | Comando que proporciona una shell de login limpia; se usa a menudo después de `termux-chroot`. |
| `id` | Muestra información de usuario y grupo. |
| `getprop` | Muestra una lista enorme de propiedades del sistema Android. |
| `getprop \| grep model` | Ejemplo práctico: filtrar propiedades para encontrar el modelo del dispositivo. |
| `logcat` | Vuelca un registro de los mensajes del sistema Android; invaluable para depurar. |
| `logcat -s "TAG"` | Filtra la salida de logcat para mostrar solo mensajes con una etiqueta concreta. |
| `ldd <binario>` | Imprime las dependencias de bibliotecas compartidas de un programa. |
| `strace <comando>` | Traza las llamadas al sistema y las señales, mostrando lo que hace un programa. |
| `uname -a` | Imprime toda la información del sistema (kernel, arquitectura, etc.). |
| `arch` | Imprime la arquitectura de la máquina (por ejemplo, `aarch64`). |
| `free -h` | Muestra la memoria RAM libre y usada en formato legible. |
| `vmstat` | Informa sobre procesos, memoria, paginación y actividad de la CPU. |
| `termux-api-start` | Script para asegurar que el proceso en segundo plano de `termux-api` esté en ejecución. |
| `termux-notification-list` | Recupera una lista JSON de todas las notificaciones activas publicadas por Termux. |
| `pkg policy` | Muestra información sobre versiones de paquetes y prioridades de repositorios. |
| `pkg clean` | Limpia la caché de archivos de paquetes descargados (`.deb`). |
| `pkg autoclean` | Elimina los archivos de paquetes antiguos que ya no se pueden descargar. |
| `TERM=xterm-256color` | Define la variable `TERM` para habilitar el soporte completo de color en programas de consola. |
| `reset` | Restablece el terminal a su estado por defecto, corrigiendo una pantalla corrupta. |
| `stty -a` | Muestra todas las configuraciones del terminal actual. |
| `set -x` | Activa el modo de depuración en un script de shell, imprimiendo cada comando. |
| `set +x` | Desactiva el modo de depuración. |
| `hash` | Muestra una lista de ubicaciones de comandos en caché para la sesión actual de shell. |
| `type <comando>` | Indica cómo se interpretaría un comando (alias, integrado, archivo). |
| `bind -p` | Lista todas las combinaciones de teclas y macros disponibles en la shell. |

## Combinaciones útiles

Estos patrones aparecen una y otra vez en la práctica. Memorizarlos ahorra horas.

```bash
# Monitorizar la batería y avisar cuando baja del 20 %
while true; do
  level=$(termux-battery-status | jq -r '.percentage')
  if [ "$level" -lt 20 ]; then
    termux-notification --title "Batería baja" --content "Nivel: ${level}%"
  fi
  sleep 300
done
```

```bash
# Copia de seguridad rápida del directorio home a shared storage
tar -czvf ~/storage/shared/backup-$(date +%F).tar.gz ~ --exclude='*/.cache'
```

```bash
# Servidor SSH para entrar al teléfono desde el ordenador
pkg install openssh
sshd
# En el ordenador: ssh -p 8022 u0_a123@<ip-del-telefono>
```

```bash
# Convertir un texto a mayúsculas y guardarlo
tr 'a-z' 'A-Z' < entrada.txt > salida.txt
```

```bash
# Buscar un patrón en todos los archivos .py del proyecto
grep -rn "TODO" --include="*.py" .
```

```bash
# Contar cuántas veces aparece cada palabra en un archivo
tr ' ' '\n' < archivo.txt | sort | uniq -c | sort -rn | head
```

```bash
# Enviar un SMS a todos los contactos de un grupo (ejemplo simplificado)
for num in $(termux-contact-list | jq -r '.[].number'); do
  termux-sms-send -n "$num" "Mensaje automático"
done
```

```bash
# Mantener un script vivo aunque cierres Termux
termux-wake-lock
nohup ./mi_servidor.sh > servidor.log 2>&1 &
disown
```

## Cierre

Termux no es un terminal de juguete: es un sistema Linux completo en el bolsillo. Los 260 comandos de este manual cubren el 95 % de lo que necesitarás en el día a día, desde instalar un paquete hasta montar un servidor SSH, automatizar envíos de SMS o diagnosticar el kernel.

El resto es práctica: abre Termux, prueba un comando nuevo cada día y escribe tus propios scripts. La mejor forma de aprender la shell es romper cosas en un entorno donde no hay nada que perder.

> **Siguiente paso:** si quieres ir más allá de los comandos sueltos y montar un entorno de desarrollo completo con Python, Git y proyectos reales, puedes ver el temario en [Curso de Python 3 de 0 a Master](/academia/?utm_source=contenido&utm_medium=cierre&utm_campaign=manual-comandos-termux&utm_content=plantilla-maestra).
