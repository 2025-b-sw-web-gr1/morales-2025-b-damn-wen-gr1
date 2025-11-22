# Proyecto 001 - API RESTful de Equipos y Jugadores de Fútbol

## Descripción del Proyecto

Este proyecto documenta el diseño de una **API RESTful** que gestiona equipos de fútbol y sus jugadores, implementando una relación **1 a muchos** (un equipo tiene muchos jugadores).

## Objetivo

Diseñar y documentar una API RESTful completa utilizando:
- **Swagger/OpenAPI** para la especificación de la API
- **Bruno** para las pruebas de endpoints

## Arquitectura

### Relación 1 a Muchos

```
┌─────────────┐
│   EQUIPO    │ 1
│             │───┐
│ - id        │   │
│ - name      │   │
│ - country   │   │
│ - founded   │   │
│ - stadium   │   │
└─────────────┘   │
                  │ tiene
                  │
                  │ N
                ┌─▼──────────┐
                │  JUGADOR   │
                │            │
                │ - id       │
                │ - name     │
                │ - position │
                │ - number   │
                │ - age      │
                │ - teamId   │
                └────────────┘
```

**Un equipo** puede tener **muchos jugadores**, pero **cada jugador** pertenece a **un solo equipo**.

## Estructura del Proyecto

```
Proyecto 001/
│
├── football-api.yaml          # Especificación OpenAPI/Swagger
├── bruno.json                 # Configuración de Bruno
├── README.md                  # Este archivo
│
├── Endpoints de Equipos:
├── get-all-teams.bru          # GET /teams
├── get-team-by-id.bru         # GET /teams/{id}
├── create-team.bru            # POST /teams
├── update-team.bru            # PUT /teams/{id}
├── delete-team.bru            # DELETE /teams/{id}
│
└── Endpoints de Jugadores:
    ├── get-all-players.bru         # GET /players
    ├── get-player-by-id.bru        # GET /players/{id}
    ├── create-player.bru           # POST /players
    ├── update-player.bru           # PUT /players/{id}
    ├── delete-player.bru           # DELETE /players/{id}
    └── get-players-by-team.bru     # GET /teams/{id}/players
```

## Endpoints de la API

### Equipos (`/teams`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/teams` | Obtener todos los equipos |
| GET | `/teams/{id}` | Obtener equipo por ID |
| POST | `/teams` | Crear nuevo equipo |
| PUT | `/teams/{id}` | Actualizar equipo completo |
| DELETE | `/teams/{id}` | Eliminar equipo |

### Jugadores (`/players`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/players` | Obtener todos los jugadores |
| GET | `/players/{id}` | Obtener jugador por ID |
| POST | `/players` | Crear nuevo jugador |
| PUT | `/players/{id}` | Actualizar jugador completo |
| DELETE | `/players/{id}` | Eliminar jugador |
| GET | `/teams/{id}/players` | Obtener jugadores de un equipo |

> El endpoint `/teams/{id}/players` es clave para demostrar la relación 1:N

## Modelos de Datos

### Team (Equipo)

```json
{
  "id": 1,
  "name": "Barcelona FC",
  "country": "España",
  "founded": 1899,
  "stadium": "Camp Nou"
}
```

**Campos:**
- `id` (integer): Identificador único
- `name` (string): Nombre del equipo *(requerido)*
- `country` (string): País del equipo *(requerido)*
- `founded` (integer): Año de fundación
- `stadium` (string): Nombre del estadio

### Player (Jugador)

```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Delantero",
  "number": 10,
  "age": 36,
  "teamId": 1
}
```

**Campos:**
- `id` (integer): Identificador único
- `name` (string): Nombre del jugador *(requerido)*
- `position` (string): Posición en el campo *(requerido)*
  - Valores: `Portero`, `Defensa`, `Mediocampista`, `Delantero`
- `number` (integer): Número de camiseta (1-99)
- `age` (integer): Edad del jugador (16-45)
- `teamId` (integer): ID del equipo *(requerido)* - **Clave foránea**

## Cómo Usar

### 1. Visualizar la Documentación Swagger

1. Abre [Swagger Editor](https://editor.swagger.io/)
2. Carga el archivo `football-api.yaml`
3. Explora la documentación interactiva

### 2. Probar con Bruno

1. Instala [Bruno](https://www.usebruno.com/)
2. Abre la carpeta `Proyecto 001` como colección
3. Ejecuta las peticiones (requiere servidor implementado)

### 3. Implementar el Backend

Para usar estos archivos, necesitas implementar un servidor que responda a estos endpoints. Puedes usar:

- **Node.js** con Express
- **Python** con Flask/FastAPI
- **Java** con Spring Boot
- Cualquier framework que soporte REST

## Ejemplo de Uso

### Crear un Equipo

```bash
POST /teams
Content-Type: application/json

{
  "name": "Manchester United",
  "country": "Inglaterra",
  "founded": 1878,
  "stadium": "Old Trafford"
}
```

**Respuesta:**
```json
{
  "id": 3,
  "name": "Manchester United",
  "country": "Inglaterra",
  "founded": 1878,
  "stadium": "Old Trafford"
}
```

### Crear un Jugador

```bash
POST /players
Content-Type: application/json

{
  "name": "Marcus Rashford",
  "position": "Delantero",
  "number": 10,
  "age": 26,
  "teamId": 3
}
```

### Obtener Jugadores de un Equipo

```bash
GET /teams/3/players
```

**Respuesta:**
```json
[
  {
    "id": 15,
    "name": "Marcus Rashford",
    "position": "Delantero",
    "number": 10,
    "age": 26,
    "teamId": 3
  }
]
```

## Conceptos RESTful Aplicados

### Principios REST Implementados

1. **Recursos identificados por URLs**
   - `/teams`, `/players`
   
2. **Métodos HTTP estándar**
   - GET (lectura), POST (creación), PUT (actualización), DELETE (eliminación)
   
3. **Stateless**
   - Cada petición es independiente
   
4. **Formato JSON**
   - Intercambio de datos en JSON
   
5. **Códigos de estado HTTP**
   - 200 (OK), 201 (Created), 204 (No Content), 404 (Not Found), 500 (Error)

### Relación 1:N Implementada

- **Foreign Key**: `teamId` en el modelo `Player`
- **Endpoint especial**: `GET /teams/{id}/players`
- **Cascada**: Al eliminar un equipo, se eliminan sus jugadores

## Tecnologías y Estándares

- **OpenAPI 3.0.0**: Especificación estándar para APIs REST
- **Bruno**: Cliente HTTP moderno para pruebas
- **JSON**: Formato de intercambio de datos
- **HTTP/HTTPS**: Protocolo de comunicación

## Integrantes

- [Nombre del Estudiante 1]
- [Nombre del Estudiante 2]

## Fecha de Entrega

21 de noviembre de 2025

## 📖 Referencias

- [REST API Tutorial](https://restfulapi.net/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [HTTP Status Codes](https://httpstatuses.com/)
- [Bruno Documentation](https://docs.usebruno.com/)

---

**Proyecto desarrollado para la materia de Desarrollo de Aplicaciones Móviles y Web**
