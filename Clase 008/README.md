# Clase 008 - Peticiones HTTP con Bruno

Este directorio contiene una colección completa de peticiones HTTP para interactuar con la API de JSONPlaceholder utilizando Bruno como cliente HTTP.

## Descripción

La colección incluye peticiones para todos los recursos disponibles en JSONPlaceholder, cubriendo los principales métodos HTTP: GET, POST, PUT, PATCH y DELETE.

## Requisitos

- Bruno instalado (https://www.usebruno.com/)
- Conexión a internet para acceder a la API de JSONPlaceholder

## Estructura de la colección

La colección está organizada por recursos:

### Posts (6 peticiones)
- GET - Obtener todos los posts
- GET - Obtener post por ID
- POST - Crear nuevo post
- PUT - Actualizar post completo
- PATCH - Actualizar título de post
- DELETE - Eliminar post

### Comments (3 peticiones)
- GET - Obtener todos los comentarios
- GET - Obtener comentarios por post
- POST - Crear nuevo comentario

### Albums (3 peticiones)
- GET - Obtener todos los álbumes
- GET - Obtener álbum por ID
- POST - Crear nuevo álbum

### Photos (2 peticiones)
- GET - Obtener todas las fotos
- GET - Obtener fotos por álbum

### Todos (3 peticiones)
- GET - Obtener todas las tareas
- GET - Obtener tarea por ID
- POST - Crear nueva tarea

### Users (2 peticiones)
- GET - Obtener todos los usuarios
- GET - Obtener usuario por ID

## Cómo usar

1. Abre Bruno
2. Selecciona "Open Collection" desde el menú
3. Navega a esta carpeta (Clase 008)
4. Selecciona cualquier petición del panel lateral
5. Presiona "Send Request" o usa Ctrl + Enter
6. Observa la respuesta en el panel inferior

## Códigos de respuesta esperados

- 200 OK - Petición exitosa (GET, PUT, PATCH, DELETE)
- 201 Created - Recurso creado exitosamente (POST)
- 404 Not Found - Recurso no encontrado

## Modificar peticiones

Puedes experimentar modificando:

- IDs en las URLs (ejemplo: /posts/1 a /posts/5)
- Parámetros de consulta (ejemplo: ?postId=1 a ?postId=2)
- Datos en el body de las peticiones POST, PUT y PATCH
- Headers personalizados

## Notas importantes

JSONPlaceholder es una API de prueba que simula operaciones CRUD pero no persiste los cambios. Las peticiones POST, PUT, PATCH y DELETE retornarán respuestas exitosas, pero los datos no se modifican realmente en el servidor.

## Recursos adicionales

- API JSONPlaceholder: https://jsonplaceholder.typicode.com/
- Documentación Bruno: https://docs.usebruno.com/
