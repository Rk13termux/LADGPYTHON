---
title: "PurpleOps: documenta y mide cada operación como un profesional"
slug: "purpleops"
summary: "PurpleOps: herramienta de seguridad ofensiva para operaciones de red team."
category: "python"
level: "Intermedio"
reading: 7
tags: ["recursos-y-automatización", "red-team", "ciberseguridad"]
updated: "2026-11-01"
featured: false
order: 999
---

## Qué es PurpleOps

**PurpleOps** es una herramienta de código abierto orientada a operaciones de red team y adversary simulation. En un ejercicio de red team, esta herramienta aporta capacidad operativa en una fase concreta del ataque y ayuda a medir la madurez defensiva.

> Descripción oficial: An open-source self-hosted purple team management web application.

## Para qué sirve

PurpleOps se utiliza en la fase de **recursos y automatización** (reporting & tracking). Su función es automatizar o simplificar una tarea técnica que, hecha a mano, consumiría tiempo y aumentaría el riesgo de errores.

En la práctica, permite al operador centrarse en la estrategia y en la interpretación de los resultados, no en repetir comandos.

## Instalación

```bash
# Clone this repository
git clone https://github.com/CyberCX-STA/PurpleOps

# Go into the repository
cd PurpleOps

# Alter PurpleOps settings (if you want to customize anything but should work out the box)
nano .env

# Run the app with docker (add `-d` to run in background)
sudo docker compose up

# PurpleOps should now by available on http://localhost:5000, it is recommended to add a reverse proxy such as nginx or Apache in front of it if you want to expose this to the outside world.
```

> Revisa el README oficial para dependencias específicas, versiones y notas de compilación.

## Uso básico

```bash
server {
  listen 80;
  server_name purpleops.example.com;

  location / {
      proxy_pass http://localhost:5000;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
  }
}
```

```bash
sudo docker exec -it purpleops flask --app purpleops.py shell
from model import User; user = User.objects(email="userto@reset.here").first(); user.tf_totp_secret = None; user.save()
```

## Compatibilidad y requisitos

- **Lenguaje principal:** Python
- **Última actualización del repositorio:** 2026-09-16
- **Estrellas en GitHub:** 317
- **Termux:** sí, con matices

**Compatible con Termux (con matices).** Si el proyecto es Python, Go, Rust o Bash, puedes clonarlo en Termux e instalar sus dependencias. Algunas funciones que dependen de la red, del almacenamiento o de permisos del sistema pueden requerir un entorno Linux completo.

## Ética y alcance

Usa PurpleOps únicamente en sistemas propios o con autorización escrita. El uso no autorizado es ilegal. En laboratorio, aísla la red, documenta cada paso y respeta el alcance acordado.

## Referencias

- Repositorio oficial: https://github.com/CyberCX-STA/PurpleOps
- Toolkit de origen: Red Teaming Toolkit
