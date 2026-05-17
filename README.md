# dosfront — Entorno Dockerizado (frontend + utilidades)

Este repositorio contiene una carpeta llamada `Backends_dockerized/` con un entorno basado en **Docker Compose** para levantar servicios relacionados con el proyecto (incluye un frontend y recursos de prueba).

## Contenido principal
En `Backends_dockerized/` se encuentran:
- `docker-compose.yml`: orquesta contenedores/servicios.
- `dobble-frontend/`: código del frontend (carpeta del proyecto).
- `postman_collection.json`: colección para probar endpoints (si aplica).
- `.env`: variables de entorno (idealmente no versionar; usar `.env.example`).

## Cómo usar (general)
1. Entra a la carpeta:

```bash
cd Backends_dockerized
```

2. Levanta los servicios:

```bash
docker compose up --build
```

3. Para detener:

```bash
docker compose down
```

## Notas de seguridad
Si hay credenciales o llaves en `.env`, se recomienda:
- excluir `.env` del repositorio
- subir un `.env.example` con placeholders
