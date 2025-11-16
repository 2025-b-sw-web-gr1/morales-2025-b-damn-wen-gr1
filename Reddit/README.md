# Reddit Clone - Proyecto Web Responsive

## 📋 Descripción del Proyecto

Réplica funcional de Reddit creada con HTML, CSS (Flexbox y Grid) y JavaScript vanilla. Incluye diseño responsive y funcionalidad de exportación como imagen.

## 🎯 Características Implementadas

### ✅ Diseño Responsive
- **Desktop**: Layout de 2 columnas con sidebar
- **Tablet**: Oculta sidebar, muestra solo feed principal
- **Mobile**: Diseño optimizado para pantallas pequeñas

### ✅ CSS Layouts Utilizados
- **CSS Grid**: Layout principal del contenedor (main feed + sidebar)
- **Flexbox**: Header, posts, navegación, componentes internos

### ✅ Componentes Principales
1. **Header fijo** con logo, búsqueda, notificaciones
2. **Navegación** con tabs (Populares, Tendencias, Nuevos, Top)
3. **Feed de posts** con sistema de votos
4. **Sidebar** con comunidades populares y widgets
5. **Botón flotante** para exportar como imagen

### ✅ Funcionalidad de Exportación
- Botón flotante en esquina inferior derecha
- Usa librería `html2canvas`
- Descarga automática en formato PNG
- Mensaje de confirmación

## 🚀 Cómo Usar

### 1. Abrir el Proyecto
```bash
# Abre index.html en tu navegador
# O usa Live Server en VS Code
```

### 2. Exportar como Imagen
1. Haz clic en el botón de cámara flotante (esquina inferior derecha)
2. Espera unos segundos mientras se genera la imagen
3. La imagen se descargará automáticamente como `reddit-clone-[timestamp].png`

## 📱 Breakpoints Responsive

- **Desktop**: > 1024px (Grid de 2 columnas)
- **Tablet**: 768px - 1024px (1 columna, sin sidebar)
- **Mobile**: < 768px (Optimizado para móvil)

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- JavaScript ES6+
- Font Awesome (iconos)
- html2canvas (exportación de imágenes)

## 📦 Archivos del Proyecto

```
Reddit/
├── index.html          # Estructura principal
├── styles.css          # Estilos y responsive
├── script.js           # Interactividad y exportación
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

- **Reddit Orange**: #FF4500
- **Reddit Blue**: #0079D3
- **Background**: #DAE0E6
- **Cards**: #FFFFFF
- **Text**: #1c1c1c

## 💡 Características Adicionales

- Animaciones en hover
- Sistema de votos interactivo
- Efecto ripple en botones
- Diseño fiel al original de Reddit
- Código limpio y comentado

## 📸 Cómo Funciona la Exportación

La función de exportación usa la librería `html2canvas` que:
1. Captura el DOM de la página
2. Lo convierte en un canvas HTML5
3. Exporta el canvas como imagen PNG
4. Descarga automáticamente el archivo

```javascript
// Ejemplo simplificado
html2canvas(document.body).then(canvas => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'reddit-clone.png';
    link.href = image;
    link.click();
});
```

## 🎓 Conceptos Aprendidos

- ✅ CSS Grid para layouts de 2 columnas
- ✅ Flexbox para componentes flexibles
- ✅ Media queries para responsive design
- ✅ Variables CSS (custom properties)
- ✅ Sticky positioning (header fijo)
- ✅ html2canvas para exportación
- ✅ Event listeners en JavaScript
- ✅ Manipulación del DOM

## 🌟 Mejoras Futuras (Opcionales)

- [ ] Sistema de autenticación
- [ ] Comentarios anidados
- [ ] Modo oscuro
- [ ] Infinite scroll
- [ ] Filtros de ordenamiento
- [ ] Búsqueda funcional

---

**Desarrollado como proyecto académico - EPN 2025**
