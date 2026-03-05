const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tareas = [
  { nombre: "Estudiar Angular" },
  { nombre: "Hacer el proyecto" },
  { nombre: "Subir a GitHub" }
];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {

  const nueva = {
    nombre: req.body.nombre
  };

  tareas.push(nueva);

  res.json(tareas);

});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/tareas');
});