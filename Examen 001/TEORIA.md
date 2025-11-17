# Documentación de APIs REST con Swagger

## Introducción teórica

### ¿Por qué es importante documentar una API?

La documentación de APIs es fundamental en el desarrollo de software moderno por las siguientes razones:

**Facilita el entendimiento**
- Permite que desarrolladores externos comprendan cómo consumir la API sin necesidad de revisar el código fuente
- Reduce la curva de aprendizaje para nuevos integrantes del equipo
- Proporciona una referencia rápida sobre endpoints, parámetros y respuestas

**Mejora la colaboración**
- Los equipos de frontend pueden trabajar en paralelo con backend usando la documentación como contrato
- Los equipos de QA pueden diseñar casos de prueba basándose en la especificación
- Los product managers pueden entender las capacidades técnicas sin conocimientos profundos de programación

**Reduce errores**
- Una documentación clara evita malentendidos sobre tipos de datos, formatos y estructuras
- Disminuye el tiempo de depuración al tener ejemplos concretos de uso
- Previene errores de integración al especificar exactamente qué espera y retorna cada endpoint

**Permite testing y validación**
- Herramientas como Swagger UI permiten probar endpoints directamente desde la documentación
- Se pueden generar colecciones de pruebas automáticamente
- Facilita la validación de contratos entre servicios

**Acelera el desarrollo**
- Los desarrolladores pueden generar código cliente automáticamente
- Se pueden crear mocks de APIs para desarrollo paralelo
- Reduce el tiempo de onboarding de nuevos desarrolladores

### ¿Qué es Swagger?

Swagger es un conjunto de herramientas de código abierto construidas alrededor de la especificación OpenAPI que permite diseñar, construir, documentar y consumir APIs REST.

**Historia y evolución**
- Creado originalmente en 2011 por Tony Tam
- En 2015, fue donado a la Linux Foundation y renombrado como OpenAPI Specification (OAS)
- Actualmente es el estándar de facto para documentar APIs REST

**OpenAPI Specification (OAS)**
- Formato estándar independiente del lenguaje para describir APIs REST
- Usa archivos YAML o JSON
- Versión actual: OpenAPI 3.0 (con 3.1 en desarrollo)
- Define estructura, endpoints, parámetros, respuestas y schemas de datos

### Componentes del ecosistema Swagger

**Swagger Editor**
- Editor online para escribir documentación OpenAPI
- Validación en tiempo real de la sintaxis
- Vista previa instantánea de la documentación
- Disponible en: https://editor.swagger.io/

**Swagger UI**
- Genera documentación interactiva automáticamente desde una especificación OpenAPI
- Permite probar endpoints directamente desde el navegador
- Interfaz visual amigable para explorar la API
- Se puede integrar en aplicaciones web

**Swagger Codegen**
- Genera código cliente en múltiples lenguajes
- Genera stubs de servidor basados en la especificación
- Soporta más de 50 lenguajes y frameworks
- Acelera el desarrollo de integraciones

**SwaggerHub**
- Plataforma empresarial para diseño y documentación de APIs
- Permite colaboración en equipo
- Control de versiones de especificaciones
- Integración con herramientas de CI/CD

### Ventajas de usar Swagger

**Para desarrolladores**
- Documentación siempre actualizada con el código
- Testing integrado de endpoints
- Generación automática de código cliente
- Validación de requests y responses

**Para equipos**
- Contrato claro entre frontend y backend
- Facilita el desarrollo en paralelo
- Reduce malentendidos y errores de integración
- Documentación viva que evoluciona con la API

**Para la organización**
- Estándar ampliamente adoptado en la industria
- Compatible con múltiples herramientas y plataformas
- Facilita la integración con terceros
- Mejora la experiencia de desarrolladores externos

### Compatibilidad con lenguajes y frameworks

Swagger es agnóstico del lenguaje y se integra con:

**Backend**
- Node.js (Express, Fastify, NestJS)
- Java (Spring Boot, JAX-RS)
- Python (Flask, Django, FastAPI)
- C# (.NET Core, ASP.NET)
- Go (Gin, Echo)
- Ruby (Rails, Sinatra)
- PHP (Laravel, Symfony)

**Frontend**
- Generación de clientes TypeScript/JavaScript
- Integración con Angular, React, Vue
- SDKs para aplicaciones móviles

## Estructura de un documento OpenAPI

### Sección info

Define metadatos básicos de la API:

```yaml
info:
  title: Nombre de la API
  description: Descripción detallada
  version: 1.0.0
  contact:
    name: Equipo de desarrollo
    email: dev@ejemplo.com
```

### Sección servers

Especifica las URLs base de los servidores:

```yaml
servers:
  - url: https://api.ejemplo.com/v1
    description: Producción
  - url: https://staging.ejemplo.com/v1
    description: Staging
```

### Sección paths

Define todos los endpoints disponibles:

```yaml
paths:
  /usuarios:
    get:
      summary: Obtener usuarios
      responses:
        '200':
          description: Lista de usuarios
```

### Sección components

Define schemas reutilizables:

```yaml
components:
  schemas:
    Usuario:
      type: object
      properties:
        id:
          type: integer
        nombre:
          type: string
```

## Conceptos clave

### Tags

Agrupan endpoints relacionados para mejor organización:

```yaml
paths:
  /posts:
    get:
      tags:
        - Posts
```

### Parámetros

Se pueden definir en diferentes ubicaciones:

**Path parameters**
```yaml
parameters:
  - name: id
    in: path
    required: true
    schema:
      type: integer
```

**Query parameters**
```yaml
parameters:
  - name: filtro
    in: query
    required: false
    schema:
      type: string
```

**Request body**
```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/Usuario'
```

### Responses

Define las respuestas posibles:

```yaml
responses:
  '200':
    description: Exitoso
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Usuario'
  '404':
    description: No encontrado
```

### Schemas

Define la estructura de datos:

```yaml
schemas:
  Usuario:
    type: object
    required:
      - id
      - nombre
    properties:
      id:
        type: integer
        example: 1
      nombre:
        type: string
        example: "Juan Pérez"
```

## Mejores prácticas

### Nomenclatura

- Usar nombres descriptivos para operaciones
- Mantener consistencia en el naming
- Usar verbos HTTP apropiados (GET, POST, PUT, PATCH, DELETE)

### Descripciones

- Incluir descripciones claras y concisas
- Documentar comportamientos especiales
- Explicar códigos de error

### Ejemplos

- Proporcionar ejemplos realistas para cada schema
- Incluir casos de uso comunes
- Mostrar respuestas de error

### Validación

- Definir tipos de datos correctamente
- Especificar campos requeridos vs opcionales
- Incluir formatos (email, uri, date-time)

### Versionado

- Documentar versiones de la API
- Mantener compatibilidad hacia atrás cuando sea posible
- Comunicar cambios breaking

## Integración con desarrollo

### Design First vs Code First

**Design First**
- Se diseña la API en Swagger primero
- Se genera código a partir de la especificación
- Mejor para APIs públicas y contratos entre equipos

**Code First**
- Se escribe el código primero
- Se genera documentación desde anotaciones en el código
- Más común en proyectos ágiles

### Herramientas de generación

**Desde código a documentación**
- Springdoc (Java/Spring Boot)
- NestJS OpenAPI (Node.js)
- FastAPI (Python) - genera automáticamente
- Swashbuckle (C#/.NET)

**Desde documentación a código**
- OpenAPI Generator
- Swagger Codegen
- Herramientas específicas por lenguaje

## Casos de uso

### APIs públicas

- GitHub API
- Stripe API
- Twitter API
- Todas documentadas con OpenAPI/Swagger

### Microservicios

- Contratos entre servicios
- Service discovery
- Validación de integración

### Desarrollo móvil

- Generación de SDKs
- Sincronización cliente-servidor
- Documentación para desarrolladores de apps

## Conclusión

La documentación con Swagger/OpenAPI es una práctica esencial en el desarrollo moderno de APIs. Proporciona un estándar claro, herramientas poderosas y facilita la colaboración entre equipos, mejorando significativamente la calidad y mantenibilidad de las aplicaciones.
