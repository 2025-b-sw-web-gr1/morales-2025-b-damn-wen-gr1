# Examen Web 002 - API RESTful con NestJS

API RESTful implementada con NestJS, TypeORM y SQLite para gestionar equipos y jugadores con relación 1 a muchos.

## 📋 Descripción

Esta API permite gestionar:
- **Teams (Equipos)**: id, name, country
- **Players (Jugadores)**: id, name, position, teamId

Relación: Un equipo puede tener muchos jugadores (1 a muchos).

## 🚀 Instalación

### 1. Clonar el repositorio e ir a la carpeta del proyecto

```bash
cd examen-web-002
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor en modo desarrollo

```bash
npm run start:dev
```

El servidor se ejecutará en `http://localhost:3000`

## 📚 Endpoints

### Teams (Equipos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/teams` | Obtener todos los equipos |
| GET | `/teams/:id` | Obtener un equipo por ID |
| POST | `/teams` | Crear un equipo |
| PUT | `/teams/:id` | Actualizar un equipo |
| DELETE | `/teams/:id` | Eliminar un equipo |
| GET | `/teams/:id/players` | Obtener jugadores de un equipo |

### Players (Jugadores)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/players` | Obtener todos los jugadores |
| GET | `/players/:id` | Obtener un jugador por ID |
| POST | `/players` | Crear un jugador |
| PUT | `/players/:id` | Actualizar un jugador |
| DELETE | `/players/:id` | Eliminar un jugador |

## 🧪 Ejemplos de uso con curl

### Teams

#### Crear un equipo
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Barcelona", "country": "España"}'
```

#### Obtener todos los equipos
```bash
curl http://localhost:3000/teams
```

#### Obtener un equipo por ID
```bash
curl http://localhost:3000/teams/1
```

#### Actualizar un equipo
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "FC Barcelona", "country": "España"}'
```

#### Eliminar un equipo
```bash
curl -X DELETE http://localhost:3000/teams/1
```

#### Obtener jugadores de un equipo
```bash
curl http://localhost:3000/teams/1/players
```

### Players

#### Crear un jugador
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Delantero", "teamId": 1}'
```

#### Obtener todos los jugadores
```bash
curl http://localhost:3000/players
```

#### Obtener un jugador por ID
```bash
curl http://localhost:3000/players/1
```

#### Actualizar un jugador
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Mediocampista", "teamId": 1}'
```

#### Eliminar un jugador
```bash
curl -X DELETE http://localhost:3000/players/1
```

## 🗂️ Estructura del Proyecto

```
src/
├── entities/
│   ├── team.entity.ts      # Entidad Team
│   ├── player.entity.ts    # Entidad Player
│   └── index.ts
├── teams/
│   ├── teams.module.ts     # Módulo de Teams
│   ├── teams.controller.ts # Controlador de Teams
│   └── teams.service.ts    # Servicio de Teams
├── players/
│   ├── players.module.ts   # Módulo de Players
│   ├── players.controller.ts # Controlador de Players
│   └── players.service.ts  # Servicio de Players
├── app.module.ts           # Módulo principal
├── app.controller.ts
├── app.service.ts
└── main.ts
```

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite** - Base de datos

## 👤 Autor

Estudiante - Examen de Desarrollo Web
