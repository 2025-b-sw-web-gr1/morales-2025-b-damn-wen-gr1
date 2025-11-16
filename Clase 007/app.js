const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar Pug como motor de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Liga Deportiva Universitaria de Quito',
    descripcion: 'Club de fútbol profesional ecuatoriano'
  });
});

app.get('/historia', (req, res) => {
  res.render('historia', {
    titulo: 'Historia de LDU'
  });
});

app.get('/jugadores', (req, res) => {
  const jugadores = [
    { nombre: 'Alexander Domínguez', posicion: 'Arquero', numero: 1 },
    { nombre: 'Luis Amarilla', posicion: 'Delantero', numero: 9 },
    { nombre: 'Lucas Piovi', posicion: 'Defensa', numero: 14 },
    { nombre: 'Fernando Cornejo', posicion: 'Mediocampista', numero: 23 },
    { nombre: 'Michael Estrada', posicion: 'Delantero', numero: 11 }
  ];
  res.render('jugadores', {
    titulo: 'Plantel Actual',
    jugadores: jugadores
  });
});

app.get('/palmares', (req, res) => {
  const titulos = {
    nacionales: [
      { nombre: 'Campeonato Ecuatoriano', cantidad: 16 },
      { nombre: 'Copa Ecuador', cantidad: 1 },
      { nombre: 'Supercopa Ecuador', cantidad: 2 }
    ],
    internacionales: [
      { nombre: 'Copa Libertadores', cantidad: 1, anio: '2008' },
      { nombre: 'Copa Sudamericana', cantidad: 1, anio: '2009' },
      { nombre: 'Recopa Sudamericana', cantidad: 1, anio: '2010' }
    ]
  };
  res.render('palmares', {
    titulo: 'Palmarés',
    titulos: titulos
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
