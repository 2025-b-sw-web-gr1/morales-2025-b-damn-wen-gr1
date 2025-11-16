# Documentación del Proyecto: Página Web de LDU Quito con Pug

## Información del Proyecto

**Nombre:** Página Web Liga Deportiva Universitaria de Quito  
**Motor de Renderizado:** Pug  
**Framework:** Express.js (Node.js)  
**Autor:** Dennis Morales  
**Carrera:** Ingeniería de Software  
**Fecha:** Noviembre 2025

---

## Por qué elegí Pug como motor de renderizado

Después de revisar las opciones disponibles, decidí usar Pug por varias razones que me parecieron importantes para este proyecto. Primero, la sintaxis de Pug es mucho más limpia y ordenada que HTML tradicional. No tienes que estar cerrando etiquetas todo el tiempo, lo cual hace que el código se vea más organizado y sea más fácil de leer cuando regresas a revisarlo.

Otra cosa que me gustó bastante es que Pug te obliga a mantener una buena indentación. Al principio pensé que sería molesto, pero en realidad te ayuda a visualizar mejor la estructura de tus páginas. Es como cuando escribes código Python, que la indentación es parte del lenguaje mismo.

También consideré que Pug tiene buena popularidad en la comunidad de Node.js, entonces si tengo algún problema o duda, es fácil encontrar soluciones en internet. Además, al estar trabajando con Express que ya venía usando en clases anteriores, la integración fue bastante directa sin tener que aprender un framework completamente nuevo.

---

## Diferencias principales que encontré respecto a EJS

La diferencia más notoria es la sintaxis. Con EJS básicamente escribes HTML normal y le metes JavaScript donde lo necesitas usando esas etiquetas especiales como `<%= %>` o `<% %>`. Es cómodo porque si ya sabes HTML, no tienes que aprender mucho más. Pero con Pug es totalmente diferente, no escribes las etiquetas con corchetes angulares ni nada de eso.

Por ejemplo, en EJS escribirías algo como:

```html
<div class="container">
  <h1><%= titulo %></h1>
  <% if (usuario) { %>
    <p>Bienvenido <%= usuario.nombre %></p>
  <% } %>
</div>
```

Mientras que en Pug sería:

```pug
.container
  h1= titulo
  if usuario
    p Bienvenido #{usuario.nombre}
```

Como puedes ver, Pug es mucho más compacto. No necesitas cerrar las etiquetas porque usa la indentación para saber dónde termina cada elemento. Al principio me costó un poco acostumbrarme, pero después de hacer las primeras páginas le agarré el ritmo.

Otra diferencia importante es cómo manejan las variables. En EJS usas las llaves con porcentaje, pero en Pug simplemente pones el signo igual después de la etiqueta o usas la sintaxis de interpolación con `#{}` dentro del texto. Me pareció más natural después de un rato.

Los condicionales y loops también son diferentes. En EJS tienes que poner todo dentro de esas etiquetas especiales con el símbolo de porcentaje, mientras que en Pug escribes directamente `if`, `each`, `while` sin necesidad de símbolos extras. Se siente más como escribir código normal.

Una cosa que noté es que con Pug tienes que ser mucho más cuidadoso con la indentación. Un espacio de más o de menos y ya tienes un error. En EJS no es tan estricto con eso porque usa las etiquetas de apertura y cierre para delimitar todo.

---

## Ventajas que observé al usar Pug

La primera ventaja clara es que escribes menos código. Esto no es solo por escribir más rápido, sino porque también hay menos lugares donde te puedes equivocar. No tienes que acordarte de cerrar cada etiqueta, lo cual honestamente me ha salvado de varios errores bobos.

El código se ve mucho más limpio y profesional. Cuando abres un archivo Pug, inmediatamente puedes ver la jerarquía de los elementos sin tener que buscar entre un montón de etiquetas de cierre. Es más fácil entender qué está dentro de qué.

Otra ventaja que me gustó es que Pug incluye características útiles como mixins, que son como funciones reutilizables para tus plantillas. Aunque no los usé mucho en este proyecto, puedo ver cómo serían súper útiles en proyectos más grandes donde tienes componentes que se repiten.

La herencia de plantillas funciona muy bien. Hice un archivo layout.pug que tiene la estructura base con el header, footer y todo eso, y luego las demás páginas solo extienden ese layout y agregan su contenido específico. En EJS también se puede hacer esto con includes y partials, pero en Pug me pareció más intuitivo con el sistema de blocks y extends.

Algo que no esperaba pero me gustó es que Pug te ayuda a escribir código más seguro. Por defecto escapa el HTML, entonces si alguien intenta meter código malicioso en los datos, Pug lo convierte en texto plano. Tienes que explícitamente decirle que no escape el HTML si realmente lo necesitas.

---

## Desventajas que encontré

No todo fue perfecto, obviamente. La curva de aprendizaje inicial es un poco más empinada que con EJS. Si ya sabes HTML, con EJS puedes empezar a trabajar casi inmediatamente. Con Pug tuve que dedicar un buen rato a entender la sintaxis y practicar antes de sentirme cómodo.

La indentación estricta puede ser un dolor de cabeza a veces. Tuve varios errores al principio porque mezclaba espacios y tabs sin darme cuenta, o porque no mantenía la indentación consistente. Tu editor de código tiene que estar bien configurado para que no te vuelvas loco con esto.

Otra cosa es que si estás trabajando con diseñadores web o con gente que solo sabe HTML y CSS, va a ser más difícil que colaboren en el proyecto. Con EJS pueden meter mano directamente porque es básicamente HTML, pero con Pug tendrían que aprender la sintaxis primero.

Los mensajes de error a veces no son muy claros. Cuando algo está mal, Pug te dice que hay un error de sintaxis, pero no siempre es obvio exactamente qué está mal o en qué línea específica está el problema. Me tocó revisar línea por línea en varias ocasiones.

También noté que hay menos ejemplos y tutoriales disponibles en español comparado con EJS. La mayoría de la documentación y ejemplos están en inglés, lo cual no es problema para mí, pero podría serlo para otros.

Por último, como Pug compila a HTML antes de enviarlo al navegador, hay un pequeño paso extra de procesamiento. En proyectos pequeños como este no se nota nada, pero en aplicaciones muy grandes podría tener un impacto en el rendimiento, aunque probablemente mínimo.

---

## Conclusión

En general, la experiencia de trabajar con Pug fue bastante positiva. Al principio me costó un poco adaptarme a la sintaxis diferente y a ser tan cuidadoso con la indentación, pero una vez que le agarré el ritmo, la verdad es que disfruté trabajar con él.

Para este proyecto de la página de LDU Quito, Pug funcionó muy bien. Me permitió crear las cuatro páginas (inicio, historia, jugadores y palmarés) de manera eficiente y con código que se ve ordenado y fácil de mantener.

Si tuviera que elegir entre EJS y Pug para un próximo proyecto, probablemente dependería del tipo de proyecto y con quién estaría trabajando. Para proyectos personales o con un equipo de desarrolladores que ya saben Node.js, definitivamente consideraría usar Pug de nuevo. Pero si estuviera trabajando con diseñadores que solo manejan HTML/CSS, probablemente me quedaría con EJS por facilidad de colaboración.

Lo más importante que aprendí es que no hay una opción "mejor" en términos absolutos. Ambos motores tienen sus fortalezas y debilidades, y la elección depende del contexto específico de cada proyecto y las preferencias del equipo.

---

## Reflexión Personal

Este taller me ayudó a entender que hay muchas formas de hacer lo mismo en el desarrollo web, y que cada herramienta tiene su lugar. Pug me pareció una alternativa interesante a EJS, y aunque tiene sus retos, definitivamente es una herramienta poderosa que vale la pena tener en el arsenal.

Lo más valioso fue salir de la zona de confort y probar algo nuevo. Al final, ser un buen desarrollador no es solo dominar una tecnología, sino ser capaz de adaptarse y aprender nuevas herramientas según las necesidades del proyecto.
