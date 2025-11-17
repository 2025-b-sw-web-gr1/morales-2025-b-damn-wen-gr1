# Examen 001 - Documentación de APIs con Swagger

Este directorio contiene la documentación completa de la API de JSONPlaceholder utilizando el estándar OpenAPI 3.0 y Swagger.

## Contenido

- `swagger.yaml` - Documentación completa de todos los endpoints de la API
- `TEORIA.md` - Fundamentos teóricos sobre documentación de APIs con Swagger
- `README.md` - Este archivo con instrucciones de uso

## Cómo usar este archivo

### Opción 1: Swagger Editor Online

1. Abre [Swagger Editor](https://editor.swagger.io/)
2. Copia todo el contenido del archivo `swagger.yaml`
3. Pégalo en el editor (panel izquierdo)
4. Observa la documentación generada automáticamente en el panel derecho
5. Prueba los endpoints directamente desde la interfaz haciendo clic en "Try it out"

### Opción 2: Visualización local

Si tienes Node.js instalado, puedes ejecutar Swagger UI localmente:

```bash
npm install -g swagger-ui-watcher
swagger-ui-watcher swagger.yaml
```

### Opción 3: Importar en Postman

1. Abre Postman
2. Ve a Import > File
3. Selecciona el archivo `swagger.yaml`
4. Postman generará automáticamente una colección con todos los endpoints

## Estructura de la documentación

La documentación incluye:

### Endpoints documentados

**Posts (6 operaciones)**
- GET /posts - Obtener todos los posts
- GET /posts/{id} - Obtener post por ID
- POST /posts - Crear nuevo post
- PUT /posts/{id} - Actualizar post completo
- PATCH /posts/{id} - Actualizar post parcialmente
- DELETE /posts/{id} - Eliminar post

**Comments (2 operaciones)**
- GET /comments - Obtener todos los comentarios (con filtro opcional por postId)
- POST /comments - Crear nuevo comentario

**Albums (3 operaciones)**
- GET /albums - Obtener todos los álbumes
- GET /albums/{id} - Obtener álbum por ID
- POST /albums - Crear nuevo álbum

**Photos (1 operación)**
- GET /photos - Obtener todas las fotos (con filtro opcional por albumId)

**Todos (3 operaciones)**
- GET /todos - Obtener todas las tareas
- GET /todos/{id} - Obtener tarea por ID
- POST /todos - Crear nueva tarea

**Users (2 operaciones)**
- GET /users - Obtener todos los usuarios
- GET /users/{id} - Obtener usuario por ID

### Componentes incluidos

**Schemas de datos**
- Post, PostCreate, PostPatch
- Comment, CommentCreate
- Album, AlbumCreate
- Photo
- Todo, TodoCreate
- User, Address, Geo, Company

Cada schema incluye:
- Tipos de datos
- Propiedades requeridas
- Ejemplos de valores
- Descripciones detalladas

### Características de la documentación

- Todos los métodos HTTP implementados (GET, POST, PUT, PATCH, DELETE)
- Parámetros de ruta documentados
- Parámetros de consulta (query) documentados
- Request bodies con schemas
- Response bodies con schemas
- Códigos de respuesta HTTP (200, 201, 404)
- Ejemplos para cada campo
- Agrupación por tags (Posts, Comments, Albums, etc.)

## Probar los endpoints

En Swagger UI puedes:

1. Hacer clic en cualquier endpoint para expandirlo
2. Presionar "Try it out"
3. Modificar los parámetros si es necesario
4. Presionar "Execute"
5. Ver la respuesta real de la API

## Validación

El archivo `swagger.yaml` cumple con:
- Especificación OpenAPI 3.0
- Validación de schemas JSON
- Buenas prácticas de documentación de APIs

## Notas importantes

- JSONPlaceholder es una API de prueba que simula operaciones CRUD
- Las operaciones POST, PUT, PATCH y DELETE no persisten datos realmente
- Todos los endpoints retornan respuestas simuladas pero realistas
- La API no requiere autenticación

## Recursos adicionales

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Swagger UI Documentation](https://swagger.io/tools/swagger-ui/)
