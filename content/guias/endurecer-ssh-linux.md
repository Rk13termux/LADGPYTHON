---
title: "Endurecer SSH en Linux: de la configuración por defecto a un acceso defendible"
slug: "endurecer-ssh-linux"
summary: "Claves, usuarios, fail2ban y ajustes de sshd para reducir la superficie de ataque de un servidor expuesto a internet."
category: "ciberseguridad"
level: "Intermedio"
reading: 11
tags: ["ssh", "linux", "hardening", "servidores"]
updated: "2026-10-20"
featured: true
order: 3
---

## Antes de tocar nada

Vas a modificar el servicio que te permite entrar al servidor. Un error puede dejarte fuera. Antes de empezar:

- Ten acceso físico o por consola del proveedor.
- Abre una segunda sesión SSH y no la cierres hasta validar los cambios.
- Anota los comandos que vas a ejecutar.
- Comprueba que el cortafuegos permite el puerto antes de reiniciar `sshd`.

> **Alcance:** esta guía asume un servidor Linux propio o un laboratorio autorizado. No apliques cambios a sistemas de terceros.

## 1. Comprobar la configuración actual

```bash
sudo sshd -T | grep -Ei 'port|permitrootlogin|passwordauthentication|pubkeyauthentication'
```

Guarda una copia del archivo antes de editar:

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```

## 2. Usar claves en lugar de contraseñas

En tu equipo local:

```bash
ssh-keygen -t ed25519 -a 100 -C "tu-correo@ejemplo.com"
ssh-copy-id usuario@servidor
```

Verifica que puedes entrar sin contraseña **antes** de desactivar el acceso por contraseña:

```bash
ssh -o PreferredAuthentications=publickey usuario@servidor
```

## 3. Ajustes mínimos de `sshd_config`

Edita el archivo con cuidado:

```bash
sudo nano /etc/ssh/sshd_config
```

Aplica estos valores:

```ini
PermitRootLogin no
PasswordAuthentication no
KbdInteractiveAuthentication no
PubkeyAuthentication yes
MaxAuthTries 4
LoginGraceTime 20
X11Forwarding no
AllowUsers usuario
```

Valida la sintaxis antes de reiniciar:

```bash
sudo sshd -t
```

Si no devuelve nada, la sintaxis es correcta. Reinicia el servicio:

```bash
sudo systemctl restart ssh
```

## 4. Cortafuegos coherente

En Ubuntu con UFW:

```bash
sudo ufw allow OpenSSH
sudo ufw enable
sudo ufw status verbose
```

Si cambiaste el puerto, abre el nuevo antes de cerrar el anterior. Nunca ejecutes `ufw enable` sin haber permitido SSH.

## 5. Limitar intentos con fail2ban

```bash
sudo apt install fail2ban
sudo systemctl enable --now fail2ban
```

Una configuración mínima en `/etc/fail2ban/jail.local`:

```ini
[sshd]
enabled = true
port = ssh
maxretry = 5
findtime = 10m
bantime = 1h
```

Comprueba el estado:

```bash
sudo fail2ban-client status sshd
```

## 6. Verificación final

Desde una sesión nueva:

```bash
ssh -v usuario@servidor
```

Revisa que:

- La autenticación por clave funciona.
- La contraseña ya no se acepta.
- `root` no puede entrar directamente.
- Los logs registran los intentos fallidos.

```bash
sudo journalctl -u ssh --since "10 minutes ago"
```

## Errores que dejan servidores inseguros

- Desactivar contraseñas antes de probar la clave.
- Permitir `root` “solo un momento”.
- Abrir el puerto SSH a todo internet sin necesidad.
- Copiar configuraciones de internet sin entender cada directiva.
- No monitorizar los logs después del cambio.

## Siguiente paso

Endurecer SSH es una capa. La seguridad de un servidor se construye con inventario, actualizaciones, mínimos privilegios y revisión continua. Aprender ese método completo es lo que marca la diferencia.
