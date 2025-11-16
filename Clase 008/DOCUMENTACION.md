# Documentación Técnica - Peticiones HTTP

## Introducción a los métodos HTTP

Los métodos HTTP definen la acción que se desea realizar sobre un recurso. Cada método tiene un propósito específico y un comportamiento esperado.

## Métodos HTTP implementados

### GET

El método GET se utiliza para recuperar información del servidor. No debe modificar el estado del servidor.

Características:
- Idempotente: múltiples peticiones idénticas producen el mismo resultado
- Seguro: no modifica datos en el servidor
- Los parámetros se envían en la URL (query string)
- Puede ser cacheado

Ejemplos en la colección:
- `get-all-posts.bru`: Obtiene la lista completa de posts
- `get-post-by-id.bru`: Obtiene un post específico usando su ID
- `get-comments-by-post.bru`: Filtra comentarios usando parámetros de consulta

### POST

El método POST se utiliza para enviar datos al servidor y crear nuevos recursos.

Características:
- No idempotente: múltiples peticiones pueden crear múltiples recursos
- Los datos se envían en el cuerpo (body) de la petición
- Retorna código 201 Created cuando tiene éxito
- El servidor determina el ID del nuevo recurso

Ejemplos en la colección:
- `create-post.bru`: Crea un nuevo post con título, cuerpo y ID de usuario
- `create-comment.bru`: Crea un comentario asociado a un post
- `create-todo.bru`: Crea una nueva tarea pendiente

### PUT

El método PUT se utiliza para actualizar completamente un recurso existente.

Características:
- Idempotente: múltiples peticiones idénticas producen el mismo resultado
- Reemplaza completamente el recurso
- Requiere enviar todos los campos del recurso
- Si el recurso no existe, puede crearlo

Ejemplo en la colección:
- `update-post-put.bru`: Actualiza todos los campos de un post, incluyendo id, title, body y userId

### PATCH

El método PATCH se utiliza para actualizar parcialmente un recurso existente.

Características:
- Idempotente en la mayoría de implementaciones
- Solo actualiza los campos especificados
- Más eficiente que PUT para actualizaciones pequeñas
- Los demás campos permanecen sin cambios

Ejemplo en la colección:
- `update-post-title.bru`: Actualiza únicamente el título de un post, manteniendo el resto de campos intactos

### DELETE

El método DELETE se utiliza para eliminar un recurso del servidor.

Características:
- Idempotente: eliminar varias veces produce el mismo resultado
- Retorna código 200 OK o 204 No Content
- Puede retornar 404 si el recurso ya no existe

Ejemplo en la colección:
- `delete-post.bru`: Elimina un post específico usando su ID

## Parámetros en las peticiones

### Parámetros de ruta (Path parameters)

Se incluyen directamente en la URL para identificar recursos específicos.

```
/posts/1
```

Aquí el "1" es un parámetro de ruta que identifica el post con ID 1.

### Parámetros de consulta (Query parameters)

Se añaden al final de la URL después del símbolo "?" para filtrar o modificar la respuesta.

```
/comments?postId=1
```

El parámetro "postId=1" filtra los comentarios para mostrar solo los del post 1.

### Parámetros en el cuerpo (Body parameters)

Se envían en el cuerpo de la petición, típicamente en formato JSON para POST, PUT y PATCH.

```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

## Headers HTTP

Los headers proporcionan información adicional sobre la petición o respuesta.

### Content-Type

Indica el tipo de contenido que se está enviando.

```
Content-Type: application/json
```

Este header es obligatorio cuando se envía datos JSON en el body.

### Headers de respuesta comunes

- `Content-Type`: Tipo de contenido de la respuesta
- `Content-Length`: Tamaño de la respuesta en bytes
- `Date`: Fecha y hora de la respuesta
- `Server`: Información del servidor

## Códigos de estado HTTP

### 2xx - Éxito

- **200 OK**: La petición fue exitosa
- **201 Created**: El recurso fue creado exitosamente
- **204 No Content**: La petición fue exitosa pero no hay contenido para devolver

### 4xx - Errores del cliente

- **400 Bad Request**: La petición tiene sintaxis incorrecta
- **401 Unauthorized**: Se requiere autenticación
- **403 Forbidden**: El servidor rechaza la petición
- **404 Not Found**: El recurso no existe
- **422 Unprocessable Entity**: Los datos son incorrectos

### 5xx - Errores del servidor

- **500 Internal Server Error**: Error general del servidor
- **503 Service Unavailable**: El servidor no está disponible temporalmente

## Estructura de archivos .bru

Los archivos .bru de Bruno siguen una estructura específica:

```
meta {
  name: Nombre descriptivo de la petición
  type: http
  seq: Número de secuencia
}

get {
  url: URL completa del endpoint
  body: none
  auth: none
}
```

Para peticiones con body:

```
post {
  url: URL completa del endpoint
  body: json
  auth: none
}

headers {
  Content-Type: application/json
}

body:json {
  {
    "campo": "valor"
  }
}
```

## Mejores prácticas

1. Usar GET solo para recuperar datos, nunca para modificar
2. Usar POST para crear nuevos recursos
3. Usar PUT cuando necesitas actualizar todos los campos
4. Usar PATCH para actualizaciones parciales, ahorrando ancho de banda
5. Usar DELETE solo cuando realmente necesitas eliminar el recurso
6. Siempre verificar los códigos de respuesta HTTP
7. Incluir el header Content-Type cuando envíes datos en el body
8. Validar las respuestas antes de procesar los datos

## Diferencias clave: PUT vs PATCH

### PUT
- Reemplaza el recurso completo
- Debes enviar todos los campos
- Si omites un campo, se eliminará o establecerá a null

### PATCH
- Actualiza solo los campos especificados
- Solo envías los campos que quieres cambiar
- Los demás campos permanecen intactos

Ejemplo práctico:

Post original:
```json
{
  "id": 1,
  "title": "Título original",
  "body": "Contenido original",
  "userId": 1
}
```

Con PUT debes enviar:
```json
{
  "id": 1,
  "title": "Nuevo título",
  "body": "Contenido original",
  "userId": 1
}
```

Con PATCH solo envías:
```json
{
  "title": "Nuevo título"
}
```

## Idempotencia

Una operación es idempotente cuando ejecutarla múltiples veces produce el mismo resultado que ejecutarla una sola vez.

- GET: Idempotente (leer varias veces no cambia nada)
- POST: No idempotente (crear varias veces genera múltiples recursos)
- PUT: Idempotente (actualizar varias veces con los mismos datos produce el mismo estado)
- PATCH: Generalmente idempotente (depende de la implementación)
- DELETE: Idempotente (eliminar varias veces produce el mismo resultado final)

## Testing con Bruno

Al probar cada petición, verifica:

1. El código de estado es el esperado
2. La respuesta contiene los datos correctos
3. Los headers de respuesta son apropiados
4. El tiempo de respuesta es razonable
5. Los datos enviados en POST/PUT/PATCH se reflejan en la respuesta

## Recursos de JSONPlaceholder

La API proporciona estos recursos de prueba:

- Posts: 100 posts disponibles
- Comments: 500 comentarios disponibles
- Albums: 100 álbumes disponibles
- Photos: 5000 fotos disponibles
- Todos: 200 tareas disponibles
- Users: 10 usuarios disponibles

Todos los IDs comienzan en 1 y son secuenciales.
