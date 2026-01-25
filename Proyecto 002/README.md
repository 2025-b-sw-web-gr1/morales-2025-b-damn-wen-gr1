# Proyecto 002 - API de Equipos y Jugadores con Swagger

## 📋 Descripción

API RESTful desarrollada con **NestJS**, **TypeORM** y **SQLite** que implementa una relación **1 a muchos** entre Equipos (Teams) y Jugadores (Players). La documentación está generada automáticamente con **Swagger (OpenAPI)**.

## 🚀 Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite** - Base de datos
- **Swagger** - Documentación de API

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## ▶️ Ejecutar el Servidor

```bash
# Modo desarrollo (con hot-reload)
npm run start:dev

# Modo producción
npm run start:prod
```

## 📚 Acceso a la Documentación Swagger

Una vez que el servidor esté corriendo, accede a:

**🔗 http://localhost:3000/api**

## 📌 Endpoints Documentados

### Teams (Equipos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/teams` | Obtener todos los equipos |
| GET | `/teams/:id` | Obtener un equipo por ID |
| POST | `/teams` | Crear un nuevo equipo |
| PUT | `/teams/:id` | Actualizar un equipo |
| DELETE | `/teams/:id` | Eliminar un equipo |
| GET | `/teams/:id/players` | Obtener jugadores de un equipo |

### Players (Jugadores)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/players` | Obtener todos los jugadores |
| GET | `/players/:id` | Obtener un jugador por ID |
| POST | `/players` | Crear un nuevo jugador |
| PUT | `/players/:id` | Actualizar un jugador |
| DELETE | `/players/:id` | Eliminar un jugador |

## 📝 Ejemplos de Uso

### Crear un Equipo

```json
POST /teams
{
  "name": "Barcelona FC",
  "country": "España"
}
```

### Crear un Jugador

```json
POST /players
{
  "name": "Lionel Messi",
  "position": "Delantero",
  "age": 36,
  "teamId": 1
}
```

## 🏗️ Estructura del Proyecto

```
src/
├── main.ts                 # Configuración de Swagger
├── app.module.ts           # Módulo principal con TypeORM
├── teams/
│   ├── dto/
│   │   ├── create-team.dto.ts
│   │   └── update-team.dto.ts
│   ├── entities/
│   │   └── team.entity.ts
│   ├── teams.controller.ts
│   ├── teams.service.ts
│   └── teams.module.ts
└── players/
    ├── dto/
    │   ├── create-player.dto.ts
    │   └── update-player.dto.ts
    ├── entities/
    │   └── player.entity.ts
    ├── players.controller.ts
    ├── players.service.ts
    └── players.module.ts
```

## 🔧 Decoradores de Swagger Utilizados

- `@ApiTags()` - Agrupa endpoints por categoría
- `@ApiOperation()` - Describe la operación del endpoint
- `@ApiResponse()` - Documenta las respuestas posibles
- `@ApiParam()` - Documenta parámetros de ruta
- `@ApiProperty()` - Documenta propiedades de DTOs

## 👤 Autor

Estudiante del curso de Desarrollo Web

## 📄 Licencia

Este proyecto es parte del curso de Desarrollo Web.